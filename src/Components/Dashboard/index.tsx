import React from "react";
import { CompanySwitcher } from "./CompanySwitch/index";
import { EmployeeList } from "./EmployeeList";

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
     
      <div className="flex" >
        <CompanySwitcher />
      </div>

      <main className="space-y-8">
        <EmployeeList />
      </main>
    </div>
  );
};
