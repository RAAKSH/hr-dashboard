import React, { lazy, useEffect, useState } from "react";
import { CompanySwitcher } from "./CompanySwitch/index";
import { Tab } from "../Tab";
import { useDispatch } from "react-redux";
import { setCompanyId } from "../../redux/slice/companySlice";

const EmployeeList = lazy(() => import("./EmployeeList/index"));
const LeavesSummary = lazy(() => import("./Leaves/index"));
const Announcements = lazy(() => import("./Announcement/index"));

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [selectedCompanyId, setSelectedCompanyId] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "employees" | "leaves" | "announcements"
  >("employees");

  console.log("asdasdasd", selectedCompanyId);

  useEffect(() => {
    dispatch(setCompanyId(Number(selectedCompanyId)));
  }, [selectedCompanyId]);

  return (
    <div className="mx-auto px-4 py-6 space-y-6">
      <div className="flex">
        <CompanySwitcher setSelectedCompanyId={setSelectedCompanyId} />
      </div>

      <main className="space-y-8">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>

      <main className="space-y-8">
        {activeTab === "employees" && <EmployeeList />}
        {activeTab === "leaves" && <LeavesSummary />}
        {activeTab === "announcements" && <Announcements />}
      </main>
    </div>
  );
};
