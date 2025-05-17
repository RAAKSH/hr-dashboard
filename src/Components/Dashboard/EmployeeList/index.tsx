import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchEmployees } from "../../../redux/slice/employeeSlice";

//Employee List Component
 const EmployeeList = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.employees);
  const [visibleCount, setVisibleCount] = useState(10);
  let employeeData = [];

  const selectedCompanyId = useSelector(
    (state: RootState) => state.company.selectedCompanyId
  );

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
      setVisibleCount((prev) => prev + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    selectedCompanyId && dispatch(fetchEmployees(selectedCompanyId));
  }, [dispatch, selectedCompanyId]);

  if (loading) return <div>Loading...</div>;

  if (Array.isArray(data) && data?.length > 0) {
    employeeData = data?.slice(0, visibleCount);
  }

  return (
    <div className="mb-4 text-gray-700">
      <h2 className="text-3xl font-serif mb-4 font-bold">Employee List</h2>

   
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">NAME</th>
              <th className="px-4 py-2 text-left border">DESIGNATION</th>
              <th className="px-4 py-2 text-left border">DEPARTMENT</th>
              <th className="px-4 py-2 text-left border">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(employeeData) &&
              employeeData?.map((employee: any) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    {employee.firstName.toUpperCase() +
                      "  " +
                      employee.lastName.toUpperCase()}
                  </td>

                  <td className="px-4 py-2 border">
                    {employee.designation.toUpperCase()}
                  </td>
                  <td className="px-4 py-2 border">
                    {employee.department.toUpperCase()}
                  </td>
                  <td className="px-4 py-2 border">
                    {employee.status ? "ACTIVE" : "ON-LEAVE"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
     
      {visibleCount >= employeeData?.length && (
        <p className="font-bold text-2xl flex justify-center">
          All Data Loaded
        </p>
      )}
    </div>
  );
};

export default EmployeeList;