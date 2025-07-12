import React from "react";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const DatePanel: React.FC = () => {
  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return (
    <div className="d-flex flex-row align-items-start text-start min-w-100">
      <span className="fw-bold text-dark lh-1 me-2 fs-44">{day}</span>
      <span className="d-flex flex-column align-items-start justify-content-start mt-6px">
        <span className="fw-bold text-dark lh-1 fs-16 ls-03em">{month}</span>
        <span className="fw-normal lh-1 fs-16 mt-2px text-color-1">{year}</span>
      </span>
    </div>
  );
};

export default DatePanel;
