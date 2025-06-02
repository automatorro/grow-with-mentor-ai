
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';

interface SubscriptionStatusProps {
  isPremium: boolean;
}

export const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ isPremium }) => {
  return (
    <Card className="mb-8 bg-card border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isPremium ? 'bg-primary' : 'bg-blue-500'
            }`}>
              {isPremium ? (
                <Star className="h-5 w-5 text-white" />
              ) : (
                <Clock className="h-5 w-5 text-white" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">
                {isPremium ? 'Premium Member' : 'Free Member'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {isPremium 
                  ? 'Enjoy unlimited access to all features' 
                  : 'Upgrade to unlock personalized learning paths'}
              </p>
            </div>
          </div>
          {!isPremium && (
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Upgrade to Premium
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
