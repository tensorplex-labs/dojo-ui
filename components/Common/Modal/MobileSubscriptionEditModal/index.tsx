import LabelledInput from '@/components/Common/LabelledInput';
import { SubscriptionData } from '@/types/CommonTypes';
import { FontManrope } from '@/utils/typography';
import { IconCheck, IconX } from '@tabler/icons-react';
import React from 'react';

interface MobileSubscriptionEditModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSave: () => void;
  editableData: SubscriptionData | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, field: keyof SubscriptionData) => void;
}

const MobileSubscriptionEditModal: React.FC<MobileSubscriptionEditModalProps> = ({
  isVisible,
  onClose,
  onSave,
  editableData,
  handleChange,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 text-black">
      <div className="animate-slide-up w-full rounded-t-2xl bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className={`${FontManrope.className} text-lg font-bold`}>Edit Subscription</h2>
          <button onClick={onClose} className="text-gray-500">
            <IconX size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <LabelledInput
            id="name"
            label="Name"
            type="text"
            value={editableData?.name || ''}
            onChange={(e) => handleChange(e, 'name')}
          />
          <LabelledInput
            id="subscriptionKey"
            label="Subscription Key"
            type="text"
            value={editableData?.subscriptionKey || ''}
            onChange={(e) => handleChange(e, 'subscriptionKey')}
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onSave}
            className={`${FontManrope.className} flex items-center border-2 border-black bg-primary px-6 py-2 text-white hover:shadow-brut-sm`}
          >
            <IconCheck size={20} className="mr-2" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSubscriptionEditModal;
