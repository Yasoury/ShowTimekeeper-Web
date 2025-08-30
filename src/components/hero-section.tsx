import { Logo } from './camera-logo';
import { useLanguage } from '@/hooks/use-language';
import { Download, Star } from 'lucide-react';

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-${isRTL ? 'right' : 'left'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('onBoardingTitle').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="gradient-text">{t('onBoardingTitle').split(' ').slice(-1)}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('onBoardingTitleSubTitle')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-${isRTL ? 'end' : 'start'} mb-8`}>
              <a 
                href="https://apps.apple.com/us/app/show-timekeeper/id6446911407"
                className="download-btn flex items-center justify-center px-6 py-3 rounded-xl text-primary-foreground font-medium group"
                data-testid="button-download-ios"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                  <div className="text-xs opacity-80">{t('downloadOnThe')}</div>
                  <div className="text-sm font-semibold">{t('appStore')}</div>
                </div>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.bhaar.timetracker&hl=en"
                className="download-btn flex items-center justify-center px-6 py-3 rounded-xl text-primary-foreground font-medium group"
                data-testid="button-download-android"
              >
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className={`text-${isRTL ? 'right' : 'left'}`}>
                  <div className="text-xs opacity-80">{t('getItOn')}</div>
                  <div className="text-sm font-semibold">{t('googlePlay')}</div>
                </div>
              </a>
            </div>

            <div className={`flex items-center justify-center lg:justify-${isRTL ? 'end' : 'start'} space-x-6 text-sm text-muted-foreground ${isRTL ? 'space-x-reverse' : ''}`}>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" />
                <span>{t('rating')}</span>
              </div>
              <div className="flex items-center">
                <Download className="w-4 h-4 text-primary mr-1" />
                <span>{t('downloads')}</span>
              </div>
            </div>
          </div>

          {/* Hero Screenshots */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 animate-float">
              {/* Movie tracking mockup */}
              <div className="bg-card rounded-2xl p-4 border border-border shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-muted-foreground">{t('movies')}</h3>
                  <span className="text-accent text-sm font-medium">{t('tvShows')}</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded"></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Breaking Bad</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
                        <span>8.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">Naruto</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" />
                        <span>8.4</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats mockup */}
              <div className="bg-card rounded-2xl p-4 border border-border shadow-xl mt-8">
                <h3 className="text-sm font-medium mb-3">Your Watching Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{t('movies')}</span>
                      <span>19 hours</span>
                    </div>
                    <div className="stats-bar">
                      <div className="h-full bg-primary w-2/3"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>{t('tvShows')}</span>
                      <span>411 hours</span>
                    </div>
                    <div className="stats-bar">
                      <div className="h-full bg-accent w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
