import Datatable from '@/components/Common/DataTable';
import { Pagination } from '@/components/Common/Pagination';
import { TaskTableProps } from '@/types/TaskListTypes';
import { FC } from 'react';

const TaskTable: FC<TaskTableProps> = ({ tasks, columnDef, pagination, loading, handlePageChange }) => (
  <>
    <div className="mb-[19px]">
      <h1 className="text-[22px] font-bold text-black">SHOWING {tasks.length} RECORDS</h1>
    </div>
    <Datatable data={tasks} columnDef={columnDef} pageSize={pagination?.pageSize || 10} isLoading={loading} />
    <div className="mt-3"></div>
    <Pagination totalPages={pagination?.totalPages || 1} handlePageChange={handlePageChange} />
  </>
);

export default TaskTable;
