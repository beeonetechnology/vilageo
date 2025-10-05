import { useEffect, useState } from "react";
import { Plane, Sparkles } from "lucide-react";

interface LoadingAnimationProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export const LoadingAnimation = ({ isLoading, onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete?.(), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary to-primary-glow z-50 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto animate-pulse-glow backdrop-blur-sm">
            <Plane className="w-12 h-12 text-white animate-bounce" />
          </div>
          <div className="absolute -top-2 -right-2 animate-spin">
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold font-poppins mb-4 animate-fade-up">
          Wanderlust
        </h1>
        
        <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Preparing your journey...
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-white to-yellow-300 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-white/70 mt-3">{Math.round(progress)}%</p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float" />
          <div className="absolute top-40 right-32 w-12 h-12 bg-white/10 rounded-full animate-float-delayed" />
          <div className="absolute bottom-32 left-32 w-20 h-20 bg-white/5 rounded-full animate-float-slow" />
          <div className="absolute bottom-20 right-20 w-8 h-8 bg-yellow-300/30 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

// Simple skeleton loader for components
export const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="bg-muted rounded-2xl h-64 mb-4 skeleton" />
    <div className="space-y-3">
      <div className="bg-muted rounded h-4 w-3/4 skeleton" />
      <div className="bg-muted rounded h-4 w-1/2 skeleton" />
      <div className="bg-muted rounded h-8 w-24 skeleton" />
    </div>
  </div>
);

export const SkeletonLoader = ({ count = 3 }: { count?: number }) => (
  <div className="grid md:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
);