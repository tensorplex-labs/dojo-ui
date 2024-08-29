import {
  HeroCardSection,
  HowToGetStartedSection,
  KeyMessageSlides,
  LandingPageLayout,
  RoadMapSection,
} from '@/components/HomePageComponents';

const Index = () => {
  return (
    <LandingPageLayout>
      <HeroCardSection />
      <KeyMessageSlides />
      <HowToGetStartedSection />
      <RoadMapSection />
    </LandingPageLayout>
  );
};

export default Index;
