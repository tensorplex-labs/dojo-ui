import React, { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import LabelledInput from '@/components/LabelledInput';
import SubscriptionTable from '@/components/SubscriptionTable';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { useCreateSubscriptionKey } from '@/hooks/useCreateSubscriptionKey';
import { usePartnerList } from '@/hooks/usePartnerList';
import { getFirstSixLastSix } from '@/utils/math_helpers';
import { IconCheck, IconEdit, IconLoader, IconTrash, IconX } from '@tabler/icons-react';
import useUpdateWorkerPartner from '@/hooks/useUpdateWorkerPartner';
import useDisableMinerByWorker from '@/hooks/useDisableMinerByWorker';
import { useSubmit } from '@/providers/submitContext';

type SubscriptionModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
type SubscriptionData = {
  id: string;
  subscriptionKey: string;
  createdAt: string; // Changed from 'created' to 'createdAt'
  name: string;
};


const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isModalVisible, 
  setIsModalVisible
}) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [refetchTrigger, setRefetchTrigger] = useState(0); // Trigger for refetch
  const { createSubscriptionKey, response, error } = useCreateSubscriptionKey();
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [editableData, setEditableData] = useState<SubscriptionData | null>(null);
  const { updateWorkerPartner } = useUpdateWorkerPartner();
  const { disableMinerByWorker } = useDisableMinerByWorker();
  const { partners } = usePartnerList(refetchTrigger);
  const [errorMsg, setErrorMsg] = useState('');
  const { isSubscriptionModalLoading, setIsSubscriptionModalLoading } = useSubmit();
  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
    setErrorMsg("");
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
    setErrorMsg("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSubscriptionModalLoading(true)
    if(inputValue1 && inputValue2){
      await createSubscriptionKey({ name: inputValue1, minerSubscriptionKey: inputValue2 });
      setIsSubscriptionModalLoading(false)
      setInputValue1("");
      setInputValue2("");
      setRefetchTrigger((prev) => prev+1);
        if(response?.success){
          setErrorMsg("");
        } else {
          console.log("this is working", error)
        }
      } else {
        setErrorMsg(!inputValue1 ? "Name field is empty" : "Subscription Key is Required");
        setIsSubscriptionModalLoading(false)
      }
  };
  const {triggerTaskPageReload, setTriggerTaskPageReload} = useSubmit();

  useEffect(()=>{
    setTriggerTaskPageReload(true);
  },[refetchTrigger])  
  
  const handleEdit = (item: SubscriptionData) => {
    setIsSubscriptionModalLoading(true)
    setEditRowId(item.id);
    setEditableData({ ...item });
    editableData?.subscriptionKey &&
    updateWorkerPartner(item.subscriptionKey, editableData!.subscriptionKey, editableData!.name)
    setRefetchTrigger((prev) => prev + 1);
    setIsSubscriptionModalLoading(false)
  };
  const handleCancel = () => {
    setEditRowId(null);
    setEditableData(null);
  };

  const handleSave = async () => {
    setIsSubscriptionModalLoading(true)
    await updateWorkerPartner(editableData!.subscriptionKey, editableData!.subscriptionKey, editableData!.name);
    setEditRowId(null);
    setRefetchTrigger((prev) => prev + 1);
    setIsSubscriptionModalLoading(false)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof SubscriptionData) => {
    setEditableData(prev => ({ ...prev!, [field]: e.target.value }));
  };
  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const handleDelete = async (item: SubscriptionData) => {
    setIsSubscriptionModalLoading(true)
    await disableMinerByWorker(item.subscriptionKey, true);
    setRefetchTrigger((prev) => prev + 1);
    setIsSubscriptionModalLoading(false)
  };

  useEffect(() => {
    setIsSubscriptionModalLoading(false);
  }, [partners]);

  useEffect(() => {
    setIsSubscriptionModalLoading(true);
  }, [!partners]);
  return (
    <Modal
      showModal={isModalVisible}
      setShowModal={setIsModalVisible}
      title="SUBSCRIPTION KEYS"
      btnText="Close"
    >
      <div className='bg-[#DBF5E9] w-full px-[22px] py-[15px] text-black'>
        <div>
          <h1 className={`${FontSpaceMono.className} font-bold text-base`}>ENTER SUBSCRIPTION KEY</h1>
          <h2 className={`${FontManrope.className} font-medium text-base opacity-60`}>Obtain subscription key from miners</h2>
        </div>
        <div className={` flex-row`}>
          <div className="flex flex-row justify-between">
            <div className="flex mr-2">
              <LabelledInput
                id="name"
                label="Name"
                type="text"
                placeholder="Name"
                value={inputValue1}
                onChange={handleInputChange1}
              />
            </div>
            <div className="flex-1 ml-2">
              <LabelledInput
                id="subscriptionKey"
                label="SUBSCRIPTION KEY"
                type="text"
                placeholder="Enter Subscription Key Here"
                value={inputValue2}
                onChange={handleInputChange2}
              />
              {error && <p className={` text-red-500 ${FontManrope.className} text-sm font-bold`}>{error}</p>}
              {errorMsg && <p className={` text-red-500 ${FontManrope.className} text-sm font-bold`}>{errorMsg}</p>}

              {/* <p className=' text-red-500'>Invalid Subscription Key Please Retry</p> */}
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className=" px-[18px] py-[10px] text-base h-auto bg-[#00B6A6] font-spacemono text-white border-2 border-black uppercase cursor-pointer hover:shadow-brut-sm font-bold hover:bg-opacity-80 active:border-b-2"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      {/* <SubscriptionTable/> */}
      <table className="w-full leading-normal text-black table-fixed">
      <thead>
        <tr className={`${FontSpaceMono.className}`}>
          <th className="px-5 py-3 border-b-2  text-left text-sm opacity-75 font-bold uppercase tracking-wider">
            Name
          </th>
          <th className="px-5 py-3 border-b-2  text-left text-sm opacity-75 font-bold uppercase tracking-wider w-1/2">
            Subscription Key
          </th>
          <th className="px-5 py-3 border-b-2 text-left text-sm opacity-75 font-bold uppercase tracking-wider">
            Created
          </th>
          <th className="px-5 py-3 border-b-2 text-left text-sm opacity-75 font-bold uppercase tracking-wider">
            Operations
          </th>
        </tr>
      </thead>
      <tbody className={`${FontManrope.className} text-opacity-60`}>
        {isSubscriptionModalLoading && (
          <tr>
            <td colSpan={4} className="text-center py-5">
              <div className='flex justify-center'><span className='animate-spin '><IconLoader /></span>Loading...</div>
            </td>
          </tr>
        )}
        {!isSubscriptionModalLoading && partners.map((item) => (
          <tr key={item.id} className='opacity-60 font-medium'>
            <td className='px-5 py-3'>
              {editRowId === item.id ? (
                <input
                className='block w-full p-2 border-black border-2'
                  type="text"
                  value={editableData?.name}
                  onChange={(e) => handleChange(e, 'name')}
                />
              ) : (
                item.name
              )}
            </td>
            <td className='px-5 py-3'>
              {editRowId === item.id ? (
                <input
                  className='block w-full p-2 border-black border-2'
                  type="text"
                  value={editableData?.subscriptionKey}
                  onChange={(e) => handleChange(e, 'subscriptionKey')}
                />
              ) : (
                getFirstSixLastSix(item.subscriptionKey)
              )}
            </td>
            <td className='px-5 py-3'>{formatDate(item.createdAt)}</td>
            <td className='px-5 py-3'>
             <div className='flex w-full h-full justify-start items-center'>
             {editRowId === item.id ? (
                <>
                  <button onClick={handleSave}><IconCheck /></button>
                  <button  className="ml-4" onClick={handleCancel}><IconX /></button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(item)}><IconEdit /></button>
                  <button className="ml-4" onClick={()=>handleDelete(item)}><IconTrash /></button>
                </>
              )}
             </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </Modal>
  );
};

export default SubscriptionModal;