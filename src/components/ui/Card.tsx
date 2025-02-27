import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="border-b p-4 font-semibold text-lg">{children}</div>
);

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}
  </div>
);
