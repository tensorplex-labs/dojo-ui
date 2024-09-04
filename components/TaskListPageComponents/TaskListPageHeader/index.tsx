import useFeature from '@/hooks/useFeature';
import { FontSpaceMono } from '@/utils/typography';

const TaskListHeader: React.FC = () => {
  const { exp } = useFeature({ kw: 'demo' });
  return (
    <h1 className={`mb-11 ${FontSpaceMono.className} mt-9 text-center text-4xl font-bold tracking-tight text-black`}>
      {exp && 'DEMO '}TASK LIST
    </h1>
  );
};

export default TaskListHeader;
