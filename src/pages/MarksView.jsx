import React from 'react';

function MarksView() {
  const subjects = [
    { name: 'Web Development in React', code: 'BCA-501', marks: 92, grade: 'A+' },
    { name: 'Database Management Systems', code: 'BCA-502', marks: 85, grade: 'A' },
    { name: 'Python Data Science', code: 'BCA-503', marks: 87, grade: 'A' },
  ];

  return (
    <div className="fade-in space-y-4">
      {/* Overall Score Highlight Card */}
      <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-blue-100 font-semibold">Semester V Performance</p>
          <h3 className="text-2xl font-bold mt-1">Academic Score: 88%</h3>
          <p className="text-sm text-blue-100 mt-0.5">Overall Grade: <span className="font-bold text-yellow-300">Grade A</span></p>
        </div>
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-3xl font-extrabold shadow-inner">
          88%
        </div>
      </div>

      {/* Subject Breakdown Cards */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide px-1">Course-Wise Marks</p>
        {subjects.map((sub, idx) => (
          <div key={idx} className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center hover:border-indigo-300 transition">
            <div>
              <p className="font-semibold text-gray-800 text-sm">{sub.name}</p>
              <p className="text-xs text-gray-500">{sub.code}</p>
            </div>
            <div className="text-right">
              <span className="font-bold text-indigo-700 text-sm">{sub.marks}/100</span>
              <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded-full font-bold">
                {sub.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarksView;
