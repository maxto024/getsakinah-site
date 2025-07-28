import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import InsightsSection from '@/components/InsightsSection';
import LearningHubSection from '@/components/LearningHubSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <InsightsSection />
      <LearningHubSection />
      <ScreenshotsSection />
    </main>
  );
}
