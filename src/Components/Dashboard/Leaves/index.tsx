import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchLeaves } from "../../../redux/slice/leaveSlice";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

//Leave Summary Component

const Leave = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.leaves);
  const COLORS = ["#8884d8", "#82ca9d"]; // Color Mapping for Data
  const dataMap = [
    { name: "Used", value: data?.used },
    { name: "Available", value: data?.available },
  ]; // Mapping data for the labels

  const selectedCompanyId = useSelector(
    (state: RootState) => state.company.selectedCompanyId
  );

  useEffect(() => {
    selectedCompanyId && dispatch(fetchLeaves(selectedCompanyId));
  }, [dispatch, selectedCompanyId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="mb-4 text-gray-700">
      <h2 className="text-3xl font-serif mb-4 font-bold">
        Leaves Balance Summary
      </h2>
      <div className="flex flex-col items-center">
        <PieChart width={300} height={350}>
          <Pie
            data={dataMap}
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
            dataKey="value"
          >
            {dataMap.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Leave;
