import LabelledInput from '@/components/Common/LabelledInput';
import Modal from '@/components/Common/Modal';
import { ErrorModal } from '@/components/QuestionPageComponents';
import { useCreateSubscriptionKey } from '@/hooks/useCreateSubscriptionKey';
import useDisableMinerByWorker from '@/hooks/useDisableMinerByWorker';
import { usePartnerList } from '@/hooks/usePartnerList';
import useUpdateWorkerPartner from '@/hooks/useUpdateWorkerPartner';
import { useSubmit } from '@/providers/submitContext';
import { SubscriptionData, SubscriptionModalProps } from '@/types/CommonTypes';
import { getFirstAndLastCharacters } from '@/utils/math_helpers';
import { FontManrope, FontSpaceMono } from '@/utils/typography';
import { IconCheck, IconEdit, IconLoader, IconTrash, IconX } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

// New import for the mobile edit modal
import MobileSubscriptionEditModal from '@/components/Common/Modal/MobileSubscriptionEditModal';

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isModalVisible, setIsModalVisible }) => {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  const { createSubscriptionKey, response, error } = useCreateSubscriptionKey();
  const [editRowId, setEditRowId] = useState<string | null>(null);
  const [editableData, setEditableData] = useState<SubscriptionData | null>(null);
  const { updateWorkerPartner, response: resUpdateWorker, error: resUpdateError } = useUpdateWorkerPartner();
  const { disableMinerByWorker, response: resMinerDisable, error: resMinerDisableError } = useDisableMinerByWorker();
  const { partners } = usePartnerList(refetchTrigger);
  const [errorMsg, setErrorMsg] = useState('');
  const { isSubscriptionModalLoading, setIsSubscriptionModalLoading, setPartnerCount } = useSubmit();
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [modalHeaderTitle, setModalHeaderTitle] = useState('');

  // New state for mobile edit modal
  const [isMobileEditModalVisible, setIsMobileEditModalVisible] = useState(false);

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
        setModalHeaderTitle('Success');
        setModalMsg(response.body || 'Subscription Key Created Successfully');
      } else {
        setModalHeaderTitle('Error');
        setModalMsg(response?.error || 'An error occurred');
      }
    } else {
      setErrorMsg(!inputValue1 ? 'Name field is empty' : 'Subscription Key is Required');
      setIsSubscriptionModalLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      setIsFeedbackModalOpen(true);
      setModalHeaderTitle('Error');
      setModalMsg(error);
    }
    if (response) {
      setIsFeedbackModalOpen(true);
      setModalHeaderTitle('Success');
      setModalMsg(response.body);
    }
  }, [response, error]);

  const handleEdit = (item: SubscriptionData) => {
    setIsSubscriptionModalLoading(true);
    setEditableData({ ...item });
    if (window.innerWidth < 640) {
      // Adjust this breakpoint as needed
      setIsMobileEditModalVisible(true);
    } else {
      setEditRowId(item.id);
    }
    setRefetchTrigger((prev) => prev + 1);
  };

  const handleCancel = () => {
    setEditRowId(null);
    setEditableData(null);
    setIsMobileEditModalVisible(false);
  };

  const handleSave = async () => {
    setIsSubscriptionModalLoading(true);
    const response = await updateWorkerPartner(
      editableData!.subscriptionKey,
      editableData!.subscriptionKey,
      editableData!.name
    );

    if (response?.success) {
      setIsFeedbackModalOpen(true);
      setModalHeaderTitle('Success');
      setModalMsg('Subscription Key Updated Successfully');
    } else {
      setIsFeedbackModalOpen(true);
      setModalHeaderTitle('Error');
      setModalMsg(response?.error || "Couldn't update Subscription Key. Please try again");
    }
    setEditRowId(null);
    setEditableData(null);
    setIsMobileEditModalVisible(false);
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
    const response = await disableMinerByWorker(item.subscriptionKey, true);
    if (response?.success) {
      setIsFeedbackModalOpen(true);
      setModalHeaderTitle('Success');
      setModalMsg(response.body.message || 'Subscription Key has been removed Successfully');
    } else {
      setIsFeedbackModalOpen(true);
      setModalHeaderTitle('Error');
      setModalMsg(response?.error || 'An error occurred');
    }
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

  const modalCloseHandler = () => {
    setIsFeedbackModalOpen(false);
    setModalMsg('');
    setModalHeaderTitle('');
  };

  return (
    <>
      {isFeedbackModalOpen && (
        <div className="error-modal">
          <ErrorModal
            open={isFeedbackModalOpen}
            onClose={modalCloseHandler}
            errorMessage={modalMsg}
            headerTitle={modalHeaderTitle}
          />
        </div>
      )}
      <Modal showModal={isModalVisible} setShowModal={setIsModalVisible} title="SUBSCRIPTION KEYS" btnText="Close">
        <div className="w-full bg-secondary p-4 text-black sm:p-6">
          <div className="pb-4 sm:pb-6">
            <h1 className={`${FontSpaceMono.className} text-sm font-bold sm:text-base`}>ENTER SUBSCRIPTION KEY</h1>
            <h2 className={`${FontManrope.className} text-sm font-medium opacity-60 sm:text-base`}>
              Obtain subscription key from miners
            </h2>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-1/2">
                <LabelledInput
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Name"
                  value={inputValue1}
                  onChange={handleInputChange1}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <LabelledInput
                  id="subscriptionKey"
                  label="SUBSCRIPTION KEY"
                  type="text"
                  placeholder="Enter Subscription Key Here"
                  value={inputValue2}
                  onChange={handleInputChange2}
                />
              </div>
            </div>
            {errorMsg && (
              <p className={`text-red-500 ${FontManrope.className} text-xs font-bold sm:text-sm`}>{errorMsg}</p>
            )}
            <div className="flex justify-end">
              <button
                className="font-spacemono h-auto w-full cursor-pointer border-2 border-black bg-primary px-3 py-2 text-xs font-bold uppercase text-white hover:bg-primary/80 hover:shadow-brut-sm active:border-b-2 sm:w-auto sm:px-4 sm:py-3 sm:text-sm md:px-6 md:text-base"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="max-h-[50vh] overflow-y-auto">
            <table className="w-full table-auto leading-normal text-black">
              <thead className="sticky top-0 bg-white">
                <tr className={`${FontSpaceMono.className}`}>
                  <th className="border-b-2 p-2 text-left text-xs font-bold uppercase tracking-wider opacity-75 sm:px-5 sm:py-3 sm:text-sm">
                    Name
                  </th>
                  <th className="border-b-2 p-2 text-left text-xs font-bold uppercase tracking-wider opacity-75 sm:px-5 sm:py-3 sm:text-sm">
                    Subscription Key
                  </th>
                  <th className="border-b-2 p-2 text-left text-xs font-bold uppercase tracking-wider opacity-75 sm:px-5 sm:py-3 sm:text-sm">
                    Created
                  </th>
                  <th className="border-b-2 p-2 text-right text-xs font-bold uppercase tracking-wider opacity-75 sm:px-5 sm:py-3 sm:text-sm">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody className={`${FontManrope.className} text-opacity-60`}>
                {!isSubscriptionModalLoading ? (
                  partners.length === 0 ? (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <tr key={i}>
                          <td colSpan={4} className="p-2 text-center sm:px-5 sm:py-3">
                            {i === 2 && (
                              <div
                                className={`${FontManrope.className} text-base font-bold text-black opacity-60 sm:text-lg`}
                              >
                                No Data Available
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    partners.map((item) => (
                      <tr key={item.id} className="font-medium opacity-60">
                        <td className="p-2 sm:px-5 sm:py-3">
                          {editRowId === item.id ? (
                            <input
                              className="block w-full border-2 border-black p-1 text-xs sm:p-2 sm:text-sm"
                              type="text"
                              value={editableData?.name}
                              onChange={(e) => handleChange(e, 'name')}
                            />
                          ) : (
                            item.name
                          )}
                        </td>
                        <td className="p-2 sm:px-5 sm:py-3">
                          {editRowId === item.id ? (
                            <input
                              className="block w-full border-2 border-black p-1 text-xs sm:p-2 sm:text-sm"
                              type="text"
                              value={editableData?.subscriptionKey}
                              onChange={(e) => handleChange(e, 'subscriptionKey')}
                            />
                          ) : (
                            getFirstAndLastCharacters(item.subscriptionKey, 10)
                          )}
                        </td>
                        <td className="p-2 sm:px-5 sm:py-3">{formatDate(item.createdAt)}</td>
                        <td className="p-2 sm:px-5 sm:py-3">
                          <div className="flex size-full items-center justify-end">
                            {editRowId === item.id ? (
                              <>
                                <button onClick={handleSave}>
                                  <IconCheck size={16} />
                                </button>
                                <button className="ml-2 sm:ml-4" onClick={handleCancel}>
                                  <IconX size={16} />
                                </button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => handleEdit(item)}>
                                  <IconEdit size={16} />
                                </button>
                                <button className="ml-2 sm:ml-4" onClick={() => handleDelete(item)}>
                                  <IconTrash size={16} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )
                ) : (
                  <tr>
                    <td colSpan={4} className="py-3 text-center sm:py-5">
                      <div className="flex items-center justify-center">
                        <span className="mr-2 animate-spin">
                          <IconLoader size={16} />
                        </span>
                        <span className="text-xs sm:text-sm">Loading...</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Modal>

      {/* Mobile Subscription Edit Modal */}
      <MobileSubscriptionEditModal
        isVisible={isMobileEditModalVisible}
        onClose={() => setIsMobileEditModalVisible(false)}
        onSave={handleSave}
        editableData={editableData}
        handleChange={handleChange}
      />
    </>
  );
};

export default SubscriptionModal;
