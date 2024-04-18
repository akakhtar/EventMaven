import React from "react";

const BudgetCard: React.FC<{
  title: string;
  value: string;
  percentage?: number;
}> = ({ title, value, percentage }) => {
  return (
    <div className="p-4 bg-white rounded shadow flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>{value}</p>
      </div>
      {percentage !== undefined && (
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-percentage-200">
          <span className="text-percentage-500 font-semibold text-lg">
            {percentage}%
          </span>
        </div>
      )}
    </div>
  );
};

export default BudgetCard;
