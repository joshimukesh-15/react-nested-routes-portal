import React from 'react';

function FeesView() {
  const transactions = [
    { desc: 'Semester V Tuition Fee', date: '10 Aug 2026', amount: '₹28,500', status: 'Paid', receipt: 'REC-2026-88' },
    { desc: 'Laboratory & Library Fund', date: '10 Aug 2026', amount: '₹4,500', status: 'Paid', receipt: 'REC-2026-89' },
    { desc: 'Examination Fee (Dec 2026)', date: '01 Sep 2026', amount: '₹2,000', status: 'Paid', receipt: 'REC-2026-94' }
  ];

  return (
    <div className="fade-in space-y-4">
      {/* Fees Status Banner */}
      <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl shadow-md flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-purple-200 font-semibold">Account Clearance</p>
          <h3 className="text-2xl font-bold mt-1">Status: All Clear</h3>
          <p className="text-xs text-purple-100 mt-1">Pending Balance: <span className="font-bold text-green-300">₹0.00</span></p>
        </div>
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl font-extrabold shadow-inner">
          ✓
        </div>
      </div>

      {/* Transaction History Cards */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide px-1">Recent Receipts</p>
        {transactions.map((tx, idx) => (
          <div key={idx} className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm flex justify-between items-center hover:border-purple-300 transition">
            <div>
              <p className="font-semibold text-gray-800 text-sm">{tx.desc}</p>
              <p className="text-xs text-gray-500">Date: {tx.date} • {tx.receipt}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-purple-800 text-sm">{tx.amount}</p>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full font-semibold">
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeesView;
