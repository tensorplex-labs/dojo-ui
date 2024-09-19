import NavigationBar from '@/components/Common/NavigationBar';
import { FontManrope, FontSpaceMono } from '@/utils/typography';

const DashboardHeader = ({ setShowUserCard }: { setShowUserCard: (show: boolean) => void }) => (
  <div className="h-auto border-b-2 border-black bg-background-accent">
    <NavigationBar openModal={() => setShowUserCard(true)} />
    <h1
      className={`${FontSpaceMono.className} my-2 mt-5 text-center text-4xl font-bold tracking-wide text-font-primary`}
    >
      Dashboard
    </h1>
    <p
      className={`${FontManrope.className} min-w-[300px] max-w-sm mx-auto my-2 mt-5 text-center text-sm tracking-wide text-font-primary`}
    >
      Checkout some awesome data here, and maybe a short introduction of what this section is about
    </p>
  </div>
);

export default DashboardHeader;
