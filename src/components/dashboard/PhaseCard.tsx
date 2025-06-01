
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lock, ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'completed' | 'active' | 'locked';
  isPremium: boolean;
  path: string;
}

interface PhaseCardProps {
  phase: Phase;
  isPremiumUser: boolean;
  onPhaseClick: (phase: Phase) => void;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({ 
  phase, 
  isPremiumUser, 
  onPhaseClick 
}) => {
  const Icon = phase.icon;
  const isLocked = phase.status === 'locked';
  const isActive = phase.status === 'active';
  const isCompleted = phase.status === 'completed';
  const needsPremium = phase.isPremium && !isPremiumUser;

  return (
    <Card 
      className={`
        ${isCompleted ? 'bg-sky-50 border-sky-200' : ''}
        ${isActive ? 'bg-sky-100 border-sky-300 ring-2 ring-sky-500 ring-offset-2' : ''}
        ${isLocked ? 'bg-professional-grey-50 border-professional-grey-200 opacity-60' : ''}
        ${!isLocked && !needsPremium ? 'cursor-pointer hover:shadow-lg' : 'cursor-not-allowed'}
        transition-all duration-200 rounded-xl p-6 shadow-sm hover:shadow-md
      `}
      onClick={() => !isLocked && !needsPremium && onPhaseClick(phase)}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            <div className={`
              w-12 h-12 rounded-lg flex items-center justify-center
              ${isCompleted ? 'bg-sky-200' : 
                isActive ? 'bg-sky-200' : 
                'bg-professional-grey-100'}
            `}>
              {isCompleted ? (
                <CheckCircle className="h-6 w-6 text-sky-600" />
              ) : isLocked ? (
                <Lock className="h-6 w-6 text-professional-grey-400" />
              ) : (
                <Icon className={`h-6 w-6 ${
                  isActive ? 'text-sky-600' : 'text-professional-grey-600'
                }`} />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className={`text-lg font-semibold ${
                  isLocked ? 'text-professional-grey-400' : 'text-professional-grey-900'
                }`}>
                  Phase {phase.id}: {phase.title}
                </h3>
                {phase.isPremium && (
                  <span className="text-xs bg-sky-100 text-sky-800 px-2 py-1 rounded">
                    Premium
                  </span>
                )}
              </div>
              <p className={`${
                isLocked ? 'text-professional-grey-400' : 'text-professional-grey-600'
              }`}>
                {phase.description}
              </p>
              
              {needsPremium && (
                <div className="mt-3 p-3 bg-sky-50 rounded-lg">
                  <p className="text-sm text-sky-700 mb-2">
                    Upgrade to Premium to unlock this phase
                  </p>
                  <Button size="sm" className="btn-growth">
                    Upgrade Now
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {isActive && !needsPremium && (
            <Button className="btn-growth ml-4">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
