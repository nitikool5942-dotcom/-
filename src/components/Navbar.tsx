import React, { useState } from 'react';
import { ViewType } from '../types';
import { Search, LogIn, LogOut, Menu, X, Timer, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  isLoggedIn: boolean;
  onLoginToggle: () => void;
  onSearch: (query: string) => void;
  scorePass: boolean;
}

export default function Navbar({
  currentView,
  setView,
  isLoggedIn,
  onLoginToggle,
  onSearch,
  scorePass
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const navItems = [
    { label: 'หน้าหลัก', view: 'landing' as ViewType },
    ...(isLoggedIn ? [{ label: 'แดชบอร์ด', view: 'dashboard' as ViewType }] : []),
    { label: 'คอร์สเรียน', view: 'courses' as ViewType },
    ...(isLoggedIn ? [{ label: 'เลือกวิชาเอก (ภาค ข)', view: 'subjects' as ViewType }] : [])
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 h-16 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('landing')}>
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-sm">
            <span>🌱</span>
          </div>
          <div>
            <span className="font-display font-extrabold text-slate-900 text-base md:text-lg tracking-tight block leading-none">
              ครูผู้ช่วย Garden
            </span>
            <span className="text-[9px] text-slate-400 font-quicksand font-bold tracking-wider uppercase block mt-1">
              Kru Phuchuai Garden
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 h-full">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => {
                  setView(item.view);
                  setMobileMenuOpen(false);
                }}
                className={`font-sans text-xs font-bold transition-all duration-200 h-full flex items-center px-1 border-b-2 ${
                  isActive ? 'text-indigo-600 border-indigo-600' : 'text-slate-500 border-transparent hover:text-indigo-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Quick Search */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 border border-slate-200 focus-within:border-indigo-500 transition-all">
            <Search className="text-slate-400 w-3.5 h-3.5 mr-2" />
            <input
              type="text"
              placeholder="ค้นหาบทเรียน..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-transparent border-none text-xs font-sans text-slate-800 focus:outline-none w-36 xl:w-48"
            />
          </div>

          {/* Login/Logout Button */}
          <button
            onClick={onLoginToggle}
            className={`font-sans font-bold px-4 py-2 rounded text-xs border transition-all duration-300 ${
              isLoggedIn
                ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                : 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 shadow-sm'
            }`}
          >
            {isLoggedIn ? (
              <div className="flex items-center gap-1.5">
                <LogOut className="w-3.5 h-3.5" />
                <span>ออกจากระบบ</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <LogIn className="w-3.5 h-3.5" />
                <span>เข้าสู่ระบบ</span>
              </div>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 md:hidden text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-md animate-fadeIn">
          {/* Mobile Search */}
          <div className="flex items-center bg-slate-100 rounded px-4 py-2.5 border border-slate-200">
            <Search className="text-slate-400 w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="ค้นหาบทเรียน..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-transparent border-none text-sm font-sans text-slate-800 focus:outline-none w-full"
            />
          </div>

          {/* Nav Items */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => {
                    setView(item.view);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-2.5 rounded font-sans text-xs font-bold transition-all ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
