import useDisableMinerByWorker from '@/hooks/useDisableMinerByWorker';
import { usePartnerList } from '@/hooks/usePartnerList';
import useUpdateWorkerPartner from '@/hooks/useUpdateWorkerPartner';
import { getFirstFourLastFour, getFirstSixLastSix } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCheck, IconEdit, IconTrash, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
type SubscriptionData = {
  id: string;
  subscriptionKey: string;
  createdAt: string; // Changed from 'created' to 'createdAt'
  name: string;
};

type SubscriptionTableProps = {
  // data: SubscriptionData[];
  // handleUpdate: () => void;
};



const SubscriptionTable: React.FC<SubscriptionTableProps> = () => {
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [editableData, setEditableData] = useState<SubscriptionData | null>(null);
  const [partnersData, setPartnersData] = useState(); // Assuming you have a state [partners, setPartners
  const [refetchTrigger, setRefetchTrigger] = useState(false); // Could be a timestamp or a simple counter
  const { updateWorkerPartner } = useUpdateWorkerPartner();
  const { disableMinerByWorker } = useDisableMinerByWorker();
  const { partners, isLoading } = usePartnerList(refetchTrigger);

  const handleEdit = (item: SubscriptionData) => {
    setEditRowId(item.id);
    setEditableData({ ...item });
    editableData?.subscriptionKey &&
    updateWorkerPartner(item.subscriptionKey, editableData!.subscriptionKey, editableData!.name)
    setRefetchTrigger((prev) => !prev);
  };
  const handleCancel = () => {
    setEditRowId(null);
    setEditableData(null);
  };

  const handleSave = async () => {
    await updateWorkerPartner(editableData!.subscriptionKey, editableData!.subscriptionKey, editableData!.name);
    setEditRowId(null);
    setRefetchTrigger((prev) => !prev);
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
    await disableMinerByWorker(item.subscriptionKey, true);
    setRefetchTrigger((prev) => !prev);
  };
  return (
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
      {partners.map((item) => (
          <tr key={item.id} className='opacity-60 font-medium'>
            <td className='px-5 py-3'>
              {editRowId === item.id ? (
                <input
                className='block w-full p-2'
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
                  className='block w-full p-2'
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
  );
};

export default SubscriptionTable;