import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle2, Info, Sparkles } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-espresso text-parchment p-4 rounded-2xl shadow-craft-lift border border-espresso-soft flex items-start space-x-3">
        <div className="p-2 rounded-xl bg-sage-600/20 text-sage-300 flex-shrink-0 mt-0.5">
          {toast.type === 'info' ? (
            <Info className="w-4 h-4 text-sage-300" />
          ) : toast.type === 'terracotta' ? (
            <Sparkles className="w-4 h-4 text-honey-400" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-sage-300" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="text-xs font-semibold text-white tracking-wide">
            {toast.title}
          </h5>
          {toast.subtitle && (
            <p className="text-[11px] text-espresso-subtle mt-0.5 leading-relaxed">
              {toast.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

