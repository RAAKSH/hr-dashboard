import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";


export const CompanySwitcher = ({ setSelectedCompanyId }: { setSelectedCompanyId: (id: number) => void }) => {
  // const dispatch = useDispatch();
  const selectedCompanyId = useSelector((state: RootState) => state.company.selectedCompanyId);


  return (
    <div className="flex items-center space-x-4 text-gray-700">
      <label htmlFor="company" className="font-bold text-xl">Select Company:</label>
      <select
        id="company"
        value={selectedCompanyId}
        onChange={(e) => setSelectedCompanyId(Number(e.target.value))}
        className="rounded-md border-1 p-2 border-black shadow-2xl sm:text-lg"
      >
        <option value={1}>Company 1</option>
        <option value={2}>Company 2</option>
      </select>
    </div>
   
  
    );
  };