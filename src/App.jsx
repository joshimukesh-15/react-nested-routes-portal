import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StudentProfile from './pages/StudentProfile.jsx';
import MarksView from './pages/MarksView.jsx';
import AttendanceView from './pages/AttendanceView.jsx';
import FeesView from './pages/FeesView.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen py-10 px-4">
        {/* Top Header Banner */}
        <header className="max-w-2xl mx-auto mb-6 text-center">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-bold mb-2">
            Unit 4: Nested Routes in React Router
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            E-Learning Student Portal
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Dynamic nested sub-navigation powered by React Router v6
          </p>
        </header>

        {/* Nested Routes Container */}
        <Routes>
          <Route path="/" element={<StudentProfile />}>
            <Route index element={<Navigate to="marks" replace />} />
            <Route path="marks" element={<MarksView />} />
            <Route path="attendance" element={<AttendanceView />} />
            <Route path="fees" element={<FeesView />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
