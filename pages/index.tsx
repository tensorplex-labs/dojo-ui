// import useIntersectionObserver from '@/components/track';
import { HeroCardSection, KeyMessageSlides, LandingPageLayout, RoadMapSection } from '@/components/HomePageComponents';
import GetStartedSection from '@/components/HomePageComponents/GetStartedSection';
import { minerStepsData, steps } from '@/data';

const Index = () => {
  return (
    <LandingPageLayout>
      {/* Hero Card Section */}
      <HeroCardSection />
      <KeyMessageSlides />
      <GetStartedSection steps={steps} minerSteps={minerStepsData} />
      <RoadMapSection />
    </LandingPageLayout>
  );
};

export default Index;
