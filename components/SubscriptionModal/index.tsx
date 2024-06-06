import LabelledInput from '@/components/LabelledInput';
import Modal from '@/components/Modal';
import { useCreateSubscriptionKey } from '@/hooks/useCreateSubscriptionKey';
import useDisableMinerByWorker from '@/hooks/useDisableMinerByWorker';
import { usePartnerList } from '@/hooks/usePartnerList';
import useUpdateWorkerPartner from '@/hooks/useUpdateWorkerPartner';
import { useSubmit } from '@/providers/submitContext';
import { getFirstSixLastSix } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCheck, IconEdit, IconLoader, IconTrash, IconX } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

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

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isModalVisible, setIsModalVisible }) => {
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
  const { isSubscriptionModalLoading, setIsSubscriptionModalLoading, setPartnerCount } = useSubmit();
  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(e.target.value);
    setErrorMsg('');
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(e.target.value);
    setErrorMsg('');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSubscriptionModalLoading(true);
    if (inputValue1 && inputValue2) {
      await createSubscriptionKey({ name: inputValue1, minerSubscriptionKey: inputValue2 });
      setIsSubscriptionModalLoading(false);
      setInputValue1('');
      setInputValue2('');
      setRefetchTrigger((prev) => prev + 1);
      if (response?.success) {
        setErrorMsg('');
      } else {
        console.log('this is working', error);
      }
    } else {
      setErrorMsg(!inputValue1 ? 'Name field is empty' : 'Subscription Key is Required');
      setIsSubscriptionModalLoading(false);
    }
  };
  const { triggerTaskPageReload, setTriggerTaskPageReload } = useSubmit();

  useEffect(() => {
    setTriggerTaskPageReload((prev) => !prev);
  }, [refetchTrigger]);

  const handleEdit = (item: SubscriptionData) => {
    setIsSubscriptionModalLoading(true);
    setEditRowId(item.id);
    setEditableData({ ...item });
    editableData?.subscriptionKey &&
      updateWorkerPartner(item.subscriptionKey, editableData!.subscriptionKey, editableData!.name);
    setRefetchTrigger((prev) => prev + 1);
    setIsSubscriptionModalLoading(false);
  };
  const handleCancel = () => {
    setEditRowId(null);
    setEditableData(null);
  };

  const handleSave = async () => {
    setIsSubscriptionModalLoading(true);
    await updateWorkerPartner(editableData!.subscriptionKey, editableData!.subscriptionKey, editableData!.name);
    setEditRowId(null);
    setRefetchTrigger((prev) => prev + 1);
    setIsSubscriptionModalLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof SubscriptionData) => {
    setEditableData((prev) => ({ ...prev!, [field]: e.target.value }));
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
    setIsSubscriptionModalLoading(true);
    await disableMinerByWorker(item.subscriptionKey, true);
    setRefetchTrigger((prev) => prev + 1);
    setIsSubscriptionModalLoading(false);
  };

  useEffect(() => {
    setIsSubscriptionModalLoading(false);
    setPartnerCount(partners.length);
  }, [partners, setPartnerCount]);

  useEffect(() => {
    setIsSubscriptionModalLoading(true);
  }, [!partners]);
  return (
    <Modal showModal={isModalVisible} setShowModal={setIsModalVisible} title="SUBSCRIPTION KEYS" btnText="Close">
      <div className="w-full bg-[#DBF5E9] px-[22px] py-[15px] text-black">
        <div>
          <h1 className={`${FontSpaceMono.className} text-base font-bold`}>ENTER SUBSCRIPTION KEY</h1>
          <h2 className={`${FontManrope.className} text-base font-medium opacity-60`}>
            Obtain subscription key from miners
          </h2>
        </div>
        <div className={` flex-row`}>
          <div className="flex flex-row justify-between">
            <div className="mr-2 flex">
              <LabelledInput
                id="name"
                label="Name"
                type="text"
                placeholder="Name"
                value={inputValue1}
                onChange={handleInputChange1}
              />
            </div>
            <div className="ml-2 flex-1">
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
              className=" font-spacemono h-auto cursor-pointer border-2 border-black bg-[#00B6A6] px-[18px] py-[10px] text-base font-bold uppercase text-white hover:bg-opacity-80 hover:shadow-brut-sm active:border-b-2"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      {/* <SubscriptionTable/> */}
      <table className="w-full table-fixed leading-normal text-black">
        <thead>
          <tr className={`${FontSpaceMono.className}`}>
            <th className="border-b-2 px-5 py-3  text-left text-sm font-bold uppercase tracking-wider opacity-75">
              Name
            </th>
            <th className="w-1/2 border-b-2 px-5  py-3 text-left text-sm font-bold uppercase tracking-wider opacity-75">
              Subscription Key
            </th>
            <th className="border-b-2 px-5 py-3 text-left text-sm font-bold uppercase tracking-wider opacity-75">
              Created
            </th>
            <th className="border-b-2 px-5 py-3 text-left text-sm font-bold uppercase tracking-wider opacity-75">
              Operations
            </th>
          </tr>
        </thead>
        <tbody className={`${FontManrope.className} text-opacity-60`}>
          {isSubscriptionModalLoading && (
            <tr>
              <td colSpan={4} className="py-5 text-center">
                <div className="flex justify-center">
                  <span className="animate-spin ">
                    <IconLoader />
                  </span>
                  Loading...
                </div>
              </td>
            </tr>
          )}
          {!isSubscriptionModalLoading &&
            partners.map((item) => (
              <tr key={item.id} className="font-medium opacity-60">
                <td className="px-5 py-3">
                  {editRowId === item.id ? (
                    <input
                      className="block w-full border-2 border-black p-2"
                      type="text"
                      value={editableData?.name}
                      onChange={(e) => handleChange(e, 'name')}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="px-5 py-3">
                  {editRowId === item.id ? (
                    <input
                      className="block w-full border-2 border-black p-2"
                      type="text"
                      value={editableData?.subscriptionKey}
                      onChange={(e) => handleChange(e, 'subscriptionKey')}
                    />
                  ) : (
                    getFirstSixLastSix(item.subscriptionKey)
                  )}
                </td>
                <td className="px-5 py-3">{formatDate(item.createdAt)}</td>
                <td className="px-5 py-3">
                  <div className="flex size-full items-center justify-start">
                    {editRowId === item.id ? (
                      <>
                        <button onClick={handleSave}>
                          <IconCheck />
                        </button>
                        <button className="ml-4" onClick={handleCancel}>
                          <IconX />
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(item)}>
                          <IconEdit />
                        </button>
                        <button className="ml-4" onClick={() => handleDelete(item)}>
                          <IconTrash />
                        </button>
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
