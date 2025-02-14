import { useEffect, Suspense, lazy, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import LoadingPage from './components/LoadingPage';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Particles from './components/Particles';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

// Lazy load components with proper error boundaries
const WhySection = lazy(() => import('./components/WhySection').catch(() => ({ default: () => null })));
const HowToSection = lazy(() => import('./components/HowToSection').catch(() => ({ default: () => null })));
const SuccessSection = lazy(() => import('./components/SuccessSection').catch(() => ({ default: () => null })));
const PortfolioSection = lazy(() => import('./components/PortfolioSection').catch(() => ({ default: () => null })));
const PricingSection = lazy(() => import('./components/PricingSection').catch(() => ({ default: () => null })));
const FaqSection = lazy(() => import('./components/FaqSection').catch(() => ({ default: () => null })));
const NotFound = lazy(() => import('./components/NotFound').catch(() => ({ default: () => null })));

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy').catch(() => ({ default: () => null })));
const TermsOfService = lazy(() => import('./components/legal/TermsOfService').catch(() => ({ default: () => null })));
const CookiePolicy = lazy(() => import('./components/legal/CookiePolicy').catch(() => ({ default: () => null })));

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useCallback((path: string) => {
    try {
      window.history.pushState({}, '', path);
      setPathname(path);
      updateMetaTags(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }, []);

  const updateMetaTags = useCallback((path: string) => {
    try {
      let title = 'VIKS AI - Professional AI Avatars for Video Marketing';
      let description = 'Create engaging video content with ultra-realistic AI avatars. Perfect for businesses, startups, and marketers looking to scale their video production.';

      switch (path) {
        case '/404':
          title = '404 - Page Not Found | VIKS AI';
          description = 'The page you are looking for could not be found.';
          break;
        case '/privacy':
          title = 'Privacy Policy | VIKS AI';
          description = 'Learn about how VIKS AI protects your privacy and handles your data.';
          break;
        case '/terms':
          title = 'Terms of Service | VIKS AI';
          description = 'Read our terms of service and usage guidelines.';
          break;
        case '/cookies':
          title = 'Cookie Policy | VIKS AI';
          description = 'Understand how VIKS AI uses cookies to improve your experience.';
          break;
      }

      document.title = title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    } catch (error) {
      console.error('Error updating meta tags:', error);
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    if (pathname !== '/') {
      window.history.pushState({}, '', '/');
      setPathname('/');
      updateMetaTags('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, updateMetaTags]);

  useEffect(() => {
    const handlePopState = () => {
      try {
        const newPath = window.location.pathname;
        setPathname(newPath);
        updateMetaTags(newPath);
      } catch (error) {
        console.error('PopState error:', error);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [updateMetaTags]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      try {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a');
        
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        if (!href) return;

        if (href.startsWith('#')) {
          e.preventDefault();
          scrollToSection(href);
        } else if (anchor.href && anchor.href.startsWith(window.location.origin)) {
          e.preventDefault();
          const newPath = anchor.href.slice(window.location.origin.length);
          navigate(newPath);
        }
      } catch (error) {
        console.error('Click handler error:', error);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, scrollToSection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  const renderContent = () => {
    try {
      switch (pathname) {
        case '/':
          return (
            <ErrorBoundary>
              <Hero />
              <Suspense fallback={<LoadingPage />}>
                <WhySection />
                <HowToSection />
                <SuccessSection />
                <PortfolioSection />
                <PricingSection />
                <FaqSection />
              </Suspense>
            </ErrorBoundary>
          );
        case '/privacy':
          return (
            <Suspense fallback={<LoadingPage />}>
              <ErrorBoundary>
                <div className="min-h-screen">
                  <PrivacyPolicy />
                </div>
              </ErrorBoundary>
            </Suspense>
          );
        case '/terms':
          return (
            <Suspense fallback={<LoadingPage />}>
              <ErrorBoundary>
                <div className="min-h-screen">
                  <TermsOfService />
                </div>
              </ErrorBoundary>
            </Suspense>
          );
        case '/cookies':
          return (
            <Suspense fallback={<LoadingPage />}>
              <ErrorBoundary>
                <div className="min-h-screen">
                  <CookiePolicy />
                </div>
              </ErrorBoundary>
            </Suspense>
          );
        default:
          if (!pathname.includes('.') && pathname !== '/') {
            return (
              <Suspense fallback={<LoadingPage />}>
                <ErrorBoundary>
                  <NotFound />
                </ErrorBoundary>
              </Suspense>
            );
          }
          return null;
      }
    } catch (error) {
      console.error('Render error:', error);
      return <ErrorBoundary />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative scroll-smooth">
        <Particles />
        <Navbar hidden={pathname === '/404'} onNavigate={scrollToSection} />
        <main>
          {renderContent()}
        </main>
        <Footer onNavigate={scrollToSection} />
      </div>
    </ErrorBoundary>
  );
}