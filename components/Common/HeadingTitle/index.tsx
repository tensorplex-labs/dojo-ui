import { FontManrope } from '@/utils/typography';

const HeadingTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="mx-auto flex w-[1200px] flex-col px-4">
      <p className={`text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>{title}</p>
      <p className=" mb-4 flex self-start font-semibold opacity-60">{subTitle}</p>
    </div>
  );
};

export default HeadingTitle;
