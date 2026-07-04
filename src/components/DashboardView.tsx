import React from 'react';
import { motion } from 'motion/react';
import { Play, Calendar, Trophy, HelpCircle, BookOpen, Clock, Activity, Video, CheckCircle } from 'lucide-react';
import { Course, ScheduleItem, UserProgress } from '../types';

interface DashboardViewProps {
  courses: Course[];
  schedule: ScheduleItem[];
  progress: UserProgress;
  onStartCourse: (course: Course) => void;
  onStartExam: () => void;
  onOpenLiveVideo: () => void;
}

export default function DashboardView({
  courses,
  schedule,
  progress,
  onStartCourse,
  onStartExam,
  onOpenLiveVideo
}: DashboardViewProps) {
  // Get active ethics course
  const activeEthicsCourse = courses.find(c => c.category === 'Ethics' && c.progress > 0 && c.progress < 100) || courses[0];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4 text-center md:text-left flex-1 w-full">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold">
              <span>✨ สวนการเรียนรู้วันนี้กำลังงอกงามอย่างยอดเยี่ยม!</span>
            </div>
            <h1 className="font-display font-bold text-2xl text-slate-900 leading-tight">
              สวนความรู้ของคุณ <br />
              <span className="text-indigo-600 text-lg font-bold">ระดับ 3: 🌱 ต้นกล้าผู้ช่วย</span>
            </h1>
            <p className="text-xs text-slate-500">
              อีก 120 คะแนนเพื่อขยับเลเวลขึ้นเป็น <strong className="text-indigo-600">"ร่มไม้แห่งปัญญา"</strong> สำเร็จภารกิจทำข้อสอบวันนี้เลย!
            </p>

            {/* Growth bar */}
            <div className="space-y-1 pt-1.5">
              <div className="flex justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                <span>ความก้าวหน้าต้นกล้า</span>
                <span>380 / 500 คะแนน (76%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded">
                <div className="bg-indigo-600 h-full rounded transition-all duration-1000" style={{ width: '76%' }}></div>
              </div>
            </div>
          </div>

          <div className="w-28 h-28 shrink-0 bg-indigo-50 rounded-lg flex items-center justify-center p-3">
            <span className="text-5xl animate-bounce">🌱</span>
          </div>
        </div>

        {/* Weekly Growth Streak Badge */}
        <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-5 flex flex-col justify-between border border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[80px]"></div>
          <div>
            <h3 className="font-display font-bold text-sm text-indigo-300 mb-1">การเติบโตรายสัปดาห์</h3>
            <p className="text-[11px] text-slate-400 leading-relaxed">สะสมพลังความรู้ต่อเนื่อง ติวกันวันละนิดดีกว่าโหมอ่านคืนสุดท้ายนะ!</p>
          </div>

          <div className="my-3">
            <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
              <div className="text-center">
                <span className="text-xl block">🔥</span>
                <span className="text-[11px] font-bold text-indigo-200">สตรีค 5 วัน</span>
              </div>
              <div className="h-6 w-px bg-white/10"></div>
              <div className="text-center">
                <span className="text-xl block">📈</span>
                <span className="text-[11px] font-bold text-indigo-200">+15% สถิติดีขึ้น</span>
              </div>
            </div>
          </div>

          {/* Mon-Sun Streak boxes */}
          <div className="flex justify-between gap-1">
            {['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.', 'อา.'].map((day, idx) => {
              const isDone = idx < 5; // Mon-Fri active
              return (
                <div key={day} className="flex flex-col items-center gap-1 flex-1">
                  <div
                    className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${
                      isDone ? 'bg-indigo-600 text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {isDone ? '✓' : ''}
                  </div>
                  <span className="text-[9px] text-slate-400 font-medium">{day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Grid: Left Courses & Stats, Right Live calendar */}
      <div className="grid lg:grid-cols-12 gap-6">
        {/* Left Col (Col 8) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Course Progress Detail card */}
          <div>
            <h2 className="font-sans font-bold text-sm text-slate-500 uppercase tracking-wider mb-3">คอร์สเรียนล่าสุดของคุณ</h2>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-5 items-center">
              <img
                className="w-full md:w-36 h-24 rounded object-cover shrink-0"
                alt={activeEthicsCourse.title}
                src={activeEthicsCourse.imageUrl}
              />
              <div className="flex-1 space-y-3 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      {activeEthicsCourse.category === 'Ethics' ? 'จรรยาบรรณและวิชาชีพ' : 'กฎหมายการศึกษา'}
                    </span>
                    <h3 className="font-display font-bold text-sm text-slate-800 mt-1.5 leading-snug">
                      {activeEthicsCourse.title}
                    </h3>
                  </div>
                  <span className="font-display font-bold text-lg text-indigo-600">{activeEthicsCourse.progress}%</span>
                </div>
                
                <div className="w-full bg-slate-100 h-2 rounded">
                  <div className="bg-indigo-600 h-full rounded transition-all duration-500" style={{ width: `${activeEthicsCourse.progress}%` }}></div>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-[11px] text-slate-400">{activeEthicsCourse.instructor}</span>
                  <button
                    onClick={() => onStartCourse(activeEthicsCourse)}
                    className="bg-indigo-600 text-white text-[11px] font-bold px-4 py-1.5 rounded hover:bg-indigo-700 transition-all shadow-sm"
                  >
                    ติวต่อเลย ➔
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div>
            <h2 className="font-sans font-bold text-sm text-slate-500 uppercase tracking-wider mb-3">สถิติสะสมของคุณ</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-sm">
                  ⏱️
                </div>
                <div className="text-lg font-bold text-slate-800">18.5 ชั่วโมง</div>
                <p className="text-[11px] text-slate-400">เวลาเข้าติวสะสมทั้งหมด</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
                <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-sm">
                  🎯
                </div>
                <div className="text-lg font-bold text-slate-800">82.4%</div>
                <p className="text-[11px] text-slate-400">คะแนนสอบประเมินเฉลี่ย</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-1.5 col-span-2 md:col-span-1">
                <div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-sm">
                  📝
                </div>
                <div className="text-lg font-bold text-slate-800">3 ชุดข้อสอบ</div>
                <p className="text-[11px] text-slate-400">แบบฝึกหัดที่ทดลองทำเสร็จ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Video and Live Schedule (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Live Seminar Teaser Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
            <h3 className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <Video className="w-4 h-4 text-indigo-600" />
              <span>สัมมนาวิดีโอติวสด</span>
            </h3>
            
            <div className="relative rounded-lg overflow-hidden group cursor-pointer" onClick={onOpenLiveVideo}>
              <img
                className="w-full h-36 object-cover group-hover:scale-105 transition-all duration-300"
                alt="Live Stream Cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcgNQutcEUpyIwadIPBlfFDHTteuabl8v5JxAnX-d36ZMwVgIBufmhp88n12pZQbNl-GeLXwPJu11fVyNdk2y20P5Kr9oCQEdz2ztDZaSe6Q4CGLGmzHdqB3t9URY5bI-h1z379HfJUAhGPH1FaAgO78jXdH7khisjEejzJNnYdXv1oNn2eWyYDnkciWoSGu8ShhbLlimh6g-5OyJsXbEUsN29_OU9mDzwO6uM5aRuqPGsy3Htv2Y"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all group-hover:bg-black/30">
                <div className="w-10 h-10 rounded bg-indigo-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-indigo-600/95 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                คลิกเพื่อเล่นสัมมนาติวสรุป
              </div>
            </div>

            <div className="space-y-0.5">
              <h4 className="font-sans font-bold text-xs text-slate-800">ติวโค้งสุดท้ายภาค ก: พรบ. การศึกษา 2567</h4>
              <p className="text-[10px] text-slate-400">อัปเดตสรุปใจความย่อยง่ายเพื่อคว้าคะแนนเต็ม</p>
            </div>
          </div>

          {/* Interactive Weekly live schedule */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <h3 className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>ตารางติวประจำสัปดาห์</span>
            </h3>

            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-3 items-center p-2.5 rounded border transition-all ${
                    index === 0
                      ? 'bg-indigo-50/50 border-indigo-200 border-2'
                      : 'bg-slate-50 border-slate-100 opacity-90'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded flex flex-col items-center justify-center font-bold text-[10px] shrink-0 ${
                      index === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    <span>{item.day}</span>
                    <span className="text-[8px] uppercase tracking-wider">{item.month}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-sans font-bold text-xs truncate ${index === 0 ? 'text-indigo-950' : 'text-slate-800'}`}>
                      {item.title}
                    </p>
                    <p className="text-[9px] text-slate-400 mt-0.5">{item.time}</p>
                  </div>
                  {index === 0 && (
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
