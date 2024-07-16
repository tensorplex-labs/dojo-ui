import { taskStatus } from '@/hooks/useGetTasks';
import { ButtonState } from '@/types/CommonTypes';
import { Row } from '@tanstack/react-table';

export const generateBtnState = (row: Row<any>): ButtonState => {
  if (new Date(row.original.expireAt).getTime() < Date.now() || row.original.status === taskStatus.EXPIRED)
    return { disabled: true, text: 'Expired' };

  if (row.original.isCompletedByWorker) return { disabled: true, text: 'Completed' };

  if (row.original.maxResults === row.original.numResults || row.original.status == taskStatus.COMPLETED)
    return { disabled: true, text: 'Filled' };

  return { disabled: false, text: 'Start' };
};
