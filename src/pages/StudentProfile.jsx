import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function StudentProfile() {
  const getTabClass = ({ isActive }) =>
    `flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
      isActive
        ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
        : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'
    }`;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Student ID Profile Header Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center text-3xl font-extrabold shadow-md shadow-purple-300">
            RP
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Rahul Patel</h2>
              <span className="mt-1 sm:mt-0 inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-bold">
                Semester V
              </span>
            </div>
            <p className="text-sm font-semibold text-purple-700 mt-0.5">BCA - Department of Computer Applications</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-3 text-xs text-gray-500">
              <span><b>Roll No:</b> BCA-2026-45</span>
              <span>•</span>
              <span><b>Enrollment:</b> 2023010488</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold">● Active Student</span>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
          <NavLink to="marks" className={getTabClass}>
            <span>📊</span>
            <span>View Marks</span>
          </NavLink>
          <NavLink to="attendance" className={getTabClass}>
            <span>📅</span>
            <span>View Attendance</span>
          </NavLink>
          <NavLink to="fees" className={getTabClass}>
            <span>💳</span>
            <span>View Fees</span>
          </NavLink>
        </div>
      </div>

      {/* Dynamic Sub-Route Outlet Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default StudentProfile;
