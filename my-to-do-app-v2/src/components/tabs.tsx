import React from "react";

interface FilterTabsProps {
  filter: "all" | "completed" | "incomplete";
  setFilter: (f: "all" | "completed" | "incomplete") => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => (
  <div className="d-flex gap-3 align-items-center">
    <button
      className={`btn btn-link text-decoration-none ${
        filter === "incomplete"
          ? "fw-bold text-primary fs-16"
          : "text-dark fs-16"
      }`}
      onClick={() => setFilter("incomplete")}
    >
      incomplete task
    </button>
    <button
      className={`btn btn-link text-decoration-none ${
        filter === "completed"
          ? "fw-bold text-primary fs-16"
          : "text-dark fs-16"
      }`}
      onClick={() => setFilter("completed")}
    >
      complete task
    </button>
  </div>
);

export default FilterTabs;
