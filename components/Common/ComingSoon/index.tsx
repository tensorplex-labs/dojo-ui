import Layout from '@/layout';

type Props = {
  type?: 'Coming Soon' | 'Not Found';
  mainTitle?: string;
  mainSubTitle?: string;
  subtitle1?: string;
  subtitle2?: string;
};

function ComingSoon({ mainTitle = 'Coming Soon', mainSubTitle = 'Stay tuned for more resources =)' }: Props) {
  return (
    <Layout showFooter={false}>
      <div className=" m-auto mb-8 flex h-full max-w-screen-xl flex-col items-center justify-center">
        <div className="mb-10 flex h-[22.5vh] w-full flex-col justify-center text-center">
          <h1 className="font-spacemono pb-4 text-2xl font-bold leading-tight md:text-4xl">{mainTitle}</h1>
          <p className="font-manrope text-md font-medium md:text-xl">{mainSubTitle}</p>
        </div>
      </div>
    </Layout>
  );
}

export default ComingSoon;
