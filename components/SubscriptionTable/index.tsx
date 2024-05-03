import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import React from 'react';

type SubscriptionData = {
  name: string;
  subscriptionKey: string;
  created: string; // Assuming the date is a string, you might want to use a Date object or a specific format
  // Add any other properties related to operations if needed
};

type SubscriptionTableProps = {
  data: SubscriptionData[];
};

const SubscriptionTable: React.FC<SubscriptionTableProps> = ({ data }) => {
  return (
    <table className="min-w-full leading-normal text-black">
      <thead>
        <tr className={`${FontSpaceMono.className}`}>
          <th className="px-5 py-3 border-b-2  text-left text-sm opacity-75 font-bold uppercase tracking-wider">
            Name
          </th>
          <th className="px-5 py-3 border-b-2  text-left text-sm opacity-75 font-bold uppercase tracking-wider">
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
        {data.map((item, index) => (
          <tr key={index} className='opacity-60 font-medium'>
            <td className="p-5 border-b border-gray-200 bg-white text-base">
              {item.name}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
              {item.subscriptionKey}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
              {item.created}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-base">
              <button className="text-blue-600 hover:text-blue-900"><IconEdit /></button>
              <button className="text-red-600 hover:text-red-900 ml-4"><IconTrash /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionTable;