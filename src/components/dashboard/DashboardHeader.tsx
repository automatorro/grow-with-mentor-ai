
import React from 'react';

interface DashboardHeaderProps {
  userName: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-professional-grey-900 mb-2">
        Welcome back, {userName}!
      </h1>
      <p className="text-lg text-professional-grey-600">
        Continue your professional development journey
      </p>
    </div>
  );
};
