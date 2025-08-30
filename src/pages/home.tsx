import { useEffect } from 'react';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ScreenshotsSection } from '@/components/screenshots-section';
import { DownloadSection } from '@/components/download-section';
import { Footer } from '@/components/footer';
import { Logo } from '@/components/camera-logo';
import { useLanguage } from '@/hooks/use-language';
import { Globe } from 'lucide-react';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Set page title and meta description
    document.title = 'Show Timekeeper - Track Your Movie & TV Show Viewing Time';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Take control of your viewing time with Show Timekeeper. Track movies and TV shows, monitor viewing habits, and make informed entertainment decisions.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Take control of your viewing time with Show Timekeeper. Track movies and TV shows, monitor viewing habits, and make informed entertainment decisions.';
      document.head.appendChild(meta);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen gradient-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <span className="text-xl font-bold text-foreground">Show Timekeeper</span>
            </div>

            {/* Language Toggle and Download */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="px-3 py-1 text-sm border border-border rounded-md hover:bg-secondary transition-colors"
                data-testid="button-language-toggle"
              >
                <Globe className="w-4 h-4 mr-1 inline" />
                <span>{language.toUpperCase()}</span>
              </button>
              <a 
                href="#download" 
                className="download-btn text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium"
                data-testid="button-nav-download"
              >
                {t('downloadNow')}
              </a>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      
      {/* Analytics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('analyticsTitle').split(' ').slice(0, -4).join(' ')}{' '}
                <span className="gradient-text">{t('analyticsTitle').split(' ').slice(-4, -1).join(' ')}</span>{' '}
                {t('analyticsTitle').split(' ').slice(-1)}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t('analyticsSubtitle')}
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13H10v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('timeTracking')}</h3>
                    <p className="text-sm text-muted-foreground">{t('timeTrackingDesc')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('genreAnalysis')}</h3>
                    <p className="text-sm text-muted-foreground">{t('genreAnalysisDesc')}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 3V1h2v2h6V1h2v2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4zm14 18V9H3v12h18zm-2-5v-2h2v2h-2zm-6 0v-2h2v2h-2zm-6 0v-2h2v2h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('achievementSystem')}</h3>
                    <p className="text-sm text-muted-foreground">{t('achievementSystemDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6 text-center">Sample Analytics</h3>
              
              {/* Mock Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">430</div>
                  <div className="text-sm text-muted-foreground">{t('totalHours')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">47</div>
                  <div className="text-sm text-muted-foreground">{t('showsTracked')}</div>
                </div>
              </div>

              {/* Mock Genre Breakdown */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{t('animation')}</span>
                    <span className="text-purple-400">207h 19m</span>
                  </div>
                  <div className="stats-bar">
                    <div className="h-full bg-purple-500 w-5/6"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{t('sciFiFantasy')}</span>
                    <span className="text-blue-400">191h 22m</span>
                  </div>
                  <div className="stats-bar">
                    <div className="h-full bg-blue-500 w-4/5"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{t('actionAdventure')}</span>
                    <span className="text-green-400">166h 40m</span>
                  </div>
                  <div className="stats-bar">
                    <div className="h-full bg-green-500 w-3/4"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{t('drama')}</span>
                    <span className="text-yellow-400">127h 53m</span>
                  </div>
                  <div className="stats-bar">
                    <div className="h-full bg-yellow-500 w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadSection />
      <Footer />
    </div>
  );
}
