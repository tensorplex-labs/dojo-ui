import { FontSpaceMono } from '@/utils/typography';

const TaskListHeader: React.FC = () => {
  return (
    <h1 className={`mb-11 ${FontSpaceMono.className} mt-9 text-center text-4xl font-bold tracking-tight text-black`}>
      TASK LIST
    </h1>
  );
};

export default TaskListHeader;
