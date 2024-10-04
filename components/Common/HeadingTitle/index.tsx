import { FontManrope } from '@/utils/typography';

const HeadingTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="flex w-full justify-center px-4">
      <div className="flex w-full max-w-[1075px] flex-col md:py-2 lg:py-2">
        <p className={`text-start ${FontManrope.className} gap-2 text-2xl font-bold`}>{title}</p>
        <p className=" mb-4 flex self-start font-semibold opacity-60">{subTitle}</p>
      </div>
    </div>
  );
};

export default HeadingTitle;
