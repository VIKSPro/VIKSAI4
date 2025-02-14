import { lazy, Suspense } from 'react';
import LoadingPage from '../../components/LoadingPage';
import ErrorBoundary from '../../components/ErrorBoundary';
import Hero from './sections/Hero';
import CursorStats from '../../components/CursorStats';

// Lazy load sections
const WhySection = lazy(() => import('../../sections/WhySection'));
const HowToSection = lazy(() => import('../../sections/HowToSection'));
const SuccessSection = lazy(() => import('../../sections/SuccessSection'));
const PortfolioSection = lazy(() => import('../../sections/PortfolioSection'));
const PricingSection = lazy(() => import('../../sections/PricingSection'));
const FaqSection = lazy(() => import('../../sections/FaqSection'));

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="relative">
        <CursorStats />
        <Hero />
        <Suspense fallback={<LoadingPage />}>
          <WhySection />
          <HowToSection />
          <SuccessSection />
          <PortfolioSection />
          <PricingSection />
          <FaqSection />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}