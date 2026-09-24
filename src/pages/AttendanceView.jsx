import React from 'react';

function AttendanceView() {
  const records = [
    { subject: 'Web Development in React', attended: 28, total: 30, pct: '93%' },
    { subject: 'Database Management Systems', attended: 22, total: 24, pct: '91%' },
    { subject: 'Python Data Science', attended: 18, total: 20, pct: '90%' },
  ];

  return (
    <div className="fade-in space-y-4">
      {/* Attendance Summary Banner Card */}
      <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-md flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-emerald-100 font-semibold">Attendance Status</p>
          <h3 className="text-2xl font-bold mt-1">Total Attendance: 92%</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Status: <span className="bg-white/25 px-2 py-0.5 rounded-full font-bold text-white">Eligible for Exams</span>
          </p>
        </div>
        <div className="text-right">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl font-extrabold shadow-inner">
            92%
          </div>
        </div>
      </div>

      {/* Progress Bar Card */}
      <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
        <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
          <span>Overall Presence</span>
          <span className="text-emerald-600 font-bold">68 / 74 Lectures</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full" style={{ width: '92%' }}></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">Minimum required attendance: 75% (Criteria Met)</p>
      </div>

      {/* Subject-Wise Attendance Cards */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide px-1">Subject Presence Details</p>
        {records.map((rec, idx) => (
          <div key={idx} className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center hover:border-emerald-300 transition">
            <div>
              <p className="font-semibold text-gray-800 text-sm">{rec.subject}</p>
              <p className="text-xs text-gray-500">{rec.attended} of {rec.total} sessions</p>
            </div>
            <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 text-xs px-2.5 py-1 rounded-full">
              {rec.pct}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceView;
