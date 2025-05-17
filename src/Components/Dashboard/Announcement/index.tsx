import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { fetchAnnouncementData } from "../../../redux/slice/annoucementSlice";


// Announcement Component
const Announcements = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: RootState) => state.announcement
  );
  const [visibleCount, setVisibleCount] = useState(10);
  let annnouncementData = [];

  const selectedCompanyId = useSelector(
    (state: RootState) => state.company.selectedCompanyId
  );
  //to handle infinite scroll
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
    selectedCompanyId && dispatch(fetchAnnouncementData(selectedCompanyId));
  }, [dispatch, selectedCompanyId]);

  if (loading) return <div>Loading...</div>;

  if (Array.isArray(data) && data?.length > 0) {
    annnouncementData = data?.slice(0, visibleCount);
  }

  console.log("sadasd", annnouncementData);

  return (
    <div className="mb-4 text-gray-700">
      <h2 className="text-3xl font-serif mb-4 font-bold">Employee List</h2>

      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left border">AUTHOR</th>
            <th className="px-4 py-2 text-left border">ANNOUNCEMENT</th>
            <th className="px-4 py-2 text-left border">DATE</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(annnouncementData) &&
            annnouncementData?.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">
                  {item.author.toUpperCase()}
                </td>

                <td className="px-4 py-2 border">{item.message}</td>
                <td className="px-4 py-2 border">{item.timestamp}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {visibleCount >= annnouncementData?.length && (
        <p className="font-bold text-2xl flex justify-center">
          All Data Loaded
        </p>
      )}
    </div>
  );
};

export default Announcements;