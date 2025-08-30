import { useLanguage } from '@/hooks/use-language';
import { Film, Tv, BarChart3, Sparkles, Globe, Smartphone } from 'lucide-react';

export function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Film,
      title: t('movieLibraryTitle'),
      description: t('movieLibraryDesc'),
      gradient: 'from-primary to-accent',
    },
    {
      icon: Tv,
      title: t('tvShowProgressTitle'),
      description: t('tvShowProgressDesc'),
      gradient: 'from-accent to-primary',
    },
    {
      icon: BarChart3,
      title: t('timeInsightsTitle'),
      description: t('timeInsightsDesc'),
      gradient: 'from-primary to-accent',
    },
    {
      icon: Sparkles,
      title: t('aiInsightsTitle'),
      description: t('aiInsightsDesc'),
      gradient: 'from-accent to-primary',
    },
    {
      icon: Globe,
      title: t('bilingualSupportTitle'),
      description: t('bilingualSupportDesc'),
      gradient: 'from-primary to-accent',
    },
    {
      icon: Smartphone,
      title: t('crossPlatformTitle'),
      description: t('crossPlatformDesc'),
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('onBoardingTitle2').split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gradient-text">{t('onBoardingTitle2').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('onBoardingTitleSubTitle2')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card rounded-2xl p-6"
              data-testid={`card-feature-${index}`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
