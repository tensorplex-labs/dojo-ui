import { FontManrope } from '@/utils/typography';

const HeadingTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="flex w-full max-w-[1200px] flex-col  md:px-4 md:py-2 lg:px-4 lg:py-2">
      <p className={`text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>{title}</p>
      <p className=" mb-4 flex self-start font-semibold opacity-60">{subTitle}</p>
    </div>
  );
};

export default HeadingTitle;
