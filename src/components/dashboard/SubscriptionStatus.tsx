
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';

interface SubscriptionStatusProps {
  isPremium: boolean;
}

export const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ isPremium }) => {
  return (
    <Card className={`mb-8 ${isPremium ? 'border-growth-teal-200 bg-sky-50' : 'border-sky-200 bg-sky-50'}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isPremium ? 'bg-growth-teal-500' : 'bg-sky-500'
            }`}>
              {isPremium ? (
                <Star className="h-5 w-5 text-white" />
              ) : (
                <Clock className="h-5 w-5 text-white" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-professional-grey-900">
                {isPremium ? 'Premium Member' : 'Free Member'}
              </h3>
              <p className="text-sm text-professional-grey-600">
                {isPremium 
                  ? 'Enjoy unlimited access to all features' 
                  : 'Upgrade to unlock personalized learning paths'}
              </p>
            </div>
          </div>
          {!isPremium && (
            <Button className="btn-growth">
              Upgrade to Premium
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
