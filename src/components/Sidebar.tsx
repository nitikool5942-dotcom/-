import { ViewType } from '../types';
import { LayoutDashboard, BookOpen, GraduationCap, Trophy, HelpCircle } from 'lucide-react';

interface SidebarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  isLoggedIn: boolean;
  onStartExam: () => void;
}

export default function Sidebar({ currentView, setView, isLoggedIn, onStartExam }: SidebarProps) {
  if (!isLoggedIn) return null;

  const sidebarItems = [
    { label: 'แดชบอร์ด', view: 'dashboard' as ViewType, icon: LayoutDashboard },
    { label: 'คอร์สเรียน', view: 'courses' as ViewType, icon: BookOpen },
    { label: 'วิชาเอก (ภาค ข)', view: 'subjects' as ViewType, icon: GraduationCap },
  ];

  return (
    <aside className="hidden md:flex flex-col py-6 h-[calc(100vh-4rem)] w-64 bg-white border-r border-slate-200 shadow-sm sticky top-16 shrink-0 select-none z-10">
      {/* Profile Header */}
      <div className="px-6 mb-6 flex flex-col gap-2.5">
        <div className="w-14 h-14 rounded-lg overflow-hidden border border-slate-200 shadow-sm transition-transform hover:scale-105 duration-300">
          <img
            className="w-full h-full object-cover"
            alt="Teacher Assistant Profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZcEE1coiUJ6Ojmw4WXjzPAstH03c8PpWQx2iii-2B4bxLrMPtqeADC21bM86X2gV1p7r1wy5PJu1eMQ9nqdnIZsIJBlUTJM9dd2H49GlPbDrdI533dZ_OvQiw6XBrJF7y3mC1GSRZR8iO5EFUc0L1BpMJgJiYW-6HRAMFhf-M1sd5z1iYdyEgCixApVXXYY8MNfF-i760sH5gNZ8K7_iIaa0HGmpF6M-AVLk7ua2ZtVmavgBS18E"
          />
        </div>
        <div>
          <h2 className="font-sans font-bold text-sm text-slate-800">สวัสดีจ้า ครูสมศรี</h2>
          <p className="text-[11px] text-slate-400">มาเริ่มติวกันเถอะ!</p>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1 px-3">
        {sidebarItems.map((item) => {
          const isActive = currentView === item.view;
          const Icon = item.icon;
          return (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded font-sans text-xs font-bold transition-all duration-200 ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 border-l-2 border-indigo-600 font-bold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}

        {/* Static decorative menu items */}
        <div className="pt-3 border-t border-slate-100 mt-3 px-4">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">สวนความสำเร็จ</span>
        </div>
        <button
          onClick={() => setView('dashboard')}
          className="w-full flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded text-xs font-bold transition-all"
        >
          <Trophy className="w-4 h-4 text-slate-400" />
          <span>เหรียญรางวัลของคุณ</span>
        </button>
      </nav>

      {/* Start Quiz Action */}
      <div className="px-4 mt-auto">
        <button
          onClick={onStartExam}
          className="w-full bg-indigo-600 text-white font-sans font-bold text-xs py-3.5 rounded hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center block shadow-sm"
        >
          เริ่มทำข้อสอบวันนี้ 📝
        </button>
      </div>
    </aside>
  );
}
