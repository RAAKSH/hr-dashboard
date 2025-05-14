import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchEmployees } from "../../../redux/slice/employeeSlice";

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.employees);

  const selectedCompanyId = useSelector(
    (state: RootState) => state.company.selectedCompanyId
  );

  useEffect(() => {
    selectedCompanyId && dispatch(fetchEmployees(selectedCompanyId));
  }, [dispatch, selectedCompanyId]);

  if (loading) return <div>Loading...</div>;


  console.log("asdasdasdasdasdasd",data);
  

  return (
    <div className="mb-4 text-gray-700">
      <h2 className="text-2xl font-serif">Employee List</h2>
      <ul>
        {data.map((employee: any) => (
          <li key={employee.id}>
            {employee.firstName} {employee.lastName} - {employee.department} (
            {employee.status})
          </li>
        ))}
      </ul>
    </div>
  );
};
