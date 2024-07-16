import MainFooter from '@/components/Common/Footer/MainFooter';
import NavigationBar from '@/components/Common/NavigationBar';
import { ReactNode } from 'react';

interface LandingPageLayoutProps {
  children: ReactNode;
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => (
  <div className="min-h-screen bg-primaryBG-bg text-black">
    <div className="border-b-2 border-black bg-ecru-white text-white">
      <NavigationBar openModal={() => {}} isHomePage />
    </div>
    <main className="mx-auto">{children}</main>
    <MainFooter />
  </div>
);

export default LandingPageLayout;
