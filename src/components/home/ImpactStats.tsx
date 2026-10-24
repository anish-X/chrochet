import React from 'react';
import { Clock, Users, ShieldCheck, MapPin } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      value: '4,200+',
      label: 'Hours Hand-Hooked',
      subtext: 'Every single minute recorded on maker tags'
    },
    {
      icon: Users,
      value: '48+',
      label: 'Independent Creators',
      subtext: 'Across Kathmandu, Bhaktapur, Lalitpur & Pokhara'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Zero Machine Stitches',
      subtext: 'Physically impossible for factory looms'
    },
    {
      icon: MapPin,
      value: '7',
      label: 'Provinces Delivered',
      subtext: 'Doorstep courier dispatch nationwide'
    }
  ];

  return (
    <section className="py-16 bg-espresso text-parchment border-b border-espresso-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-espresso-soft">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} space-y-2`}>
                <div className="flex items-center space-x-2 text-honey-400">
                  <Icon className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-300">Metric</span>
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-stone-200">
                  {stat.label}
                </div>
                <p className="text-[11px] text-stone-300 font-light leading-relaxed">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

