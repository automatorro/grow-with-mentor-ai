
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp } from 'lucide-react';

interface ProgressOverviewProps {
  completedPhases: number;
  totalPhases: number;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({ 
  completedPhases, 
  totalPhases 
}) => {
  const overallProgress = (completedPhases / totalPhases) * 100;

  return (
    <Card className="mb-8 bg-sky-50 border-sky-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-growth-teal-500" />
          Your Progress
        </CardTitle>
        <CardDescription>
          You've completed {completedPhases} out of {totalPhases} phases
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>
      </CardContent>
    </Card>
  );
};
