import { useState } from 'react';
import { Lock, Unlock, GraduationCap, Award, Check, Sparkles, BookOpen, AlertCircle } from 'lucide-react';

interface SubjectSelectionViewProps {
  highestScorePercentage: number;
  onStartExam: () => void;
}

export default function SubjectSelectionView({
  highestScorePercentage,
  onStartExam
}: SubjectSelectionViewProps) {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const subjects = [
    {
      id: 'thai',
      title: 'วิชาเอกภาษาไทย',
      icon: '📝',
      desc: 'หลักภาษาไทย วรรณคดี การอ่านจับใจความ และทักษะการสอนภาษาไทย',
      unlocked: true,
      questionsCount: 240,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
    },
    {
      id: 'math',
      title: 'วิชาเอกคณิตศาสตร์',
      icon: '📐',
      desc: 'พีชคณิต เรขาคณิต สถิติ และทักษะกระบวนการคิดคำนวณเชิงลึก',
      unlocked: true,
      questionsCount: 180,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
    },
    {
      id: 'general-knowledge',
      title: 'วิชาเอกความรู้ทั่วไป (สังคม & ข่าวสาร)',
      icon: '🌍',
      desc: 'ข้อมูลเหตุการณ์ปัจจุบัน นโยบายรัฐบาล และประวัติศาสตร์ไทยสถิติสำคัญ',
      unlocked: highestScorePercentage >= 80,
      questionsCount: 300,
      color: 'bg-amber-50 text-amber-700 border-amber-100'
    },
    {
      id: 'early-childhood',
      title: 'วิชาเอกปฐมวัย (Premium 🔒)',
      icon: '🧸',
      desc: 'จิตวิทยาเด็กปฐมวัย พัฒนาการ 4 ด้าน และหลักสูตรการศึกษาปฐมวัยฉบับใหม่',
      unlocked: highestScorePercentage >= 90,
      questionsCount: 420,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
    }
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header banner */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 flex-1 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>สวนปลดล็อควิชาเอกภาค ข</span>
          </span>
          <h1 className="font-sans font-bold text-lg text-slate-800 leading-tight">
            คลังข้อสอบตามรายวิชาเอก
          </h1>
          <p className="text-xs text-slate-400">
            ฝึกฝนทักษะเฉพาะทางวิชาเอกเพื่อคะแนนที่สมบูรณ์แบบในการสอบภาค ข ระดับพรีเมียมจะปลดล็อคเมื่อคุณสอบภาค ก ทะลุเกณฑ์!
          </p>
        </div>
        <div className="bg-slate-50 px-5 py-3.5 rounded-lg border border-slate-200 text-center shrink-0">
          <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">คะแนนภาค ก สูงสุดของคุณ</span>
          <span className="text-2xl font-bold text-indigo-600">
            {highestScorePercentage > 0 ? `${highestScorePercentage.toFixed(0)}%` : 'ยังไม่ระบุ'}
          </span>
          <p className="text-[9px] text-indigo-600 font-bold mt-1">
            {highestScorePercentage >= 80 ? '🎉 สิทธิ์ใช้งานพรีเมียมปลดล็อคแล้ว!' : 'ต้องทำคะแนนให้ได้ 80% เพื่อปลดล็อคเพิ่มเติม'}
          </p>
        </div>
      </div>

      {/* Grid of subjects */}
      <div className="grid md:grid-cols-2 gap-6">
        {subjects.map((subj) => {
          return (
            <div
              key={subj.id}
              onClick={() => setActiveSubject(subj.id)}
              className={`p-6 rounded-xl border flex flex-col justify-between transition-all duration-200 relative overflow-hidden cursor-pointer ${
                subj.unlocked
                  ? 'bg-white border-slate-200 hover:border-indigo-500 hover:shadow-sm'
                  : 'bg-slate-50 border-dashed border-slate-200'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-xl shadow-inner">
                    {subj.icon}
                  </div>
                  {subj.unlocked ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      <Unlock className="w-3 h-3" />
                      <span>เปิดอยู่</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                      <Lock className="w-3 h-3" />
                      <span>ล็อคอยู่</span>
                    </span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-sans font-bold text-sm text-slate-800">{subj.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{subj.desc}</p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-[11px] text-slate-400 font-medium">คลังข้อสอบสะสม: {subj.questionsCount} ข้อ</span>
                {subj.unlocked ? (
                  <button className="bg-indigo-600 text-white text-[11px] font-bold px-4 py-1.5 rounded hover:bg-indigo-700 transition-all shadow-sm">
                    เข้าสู่บททดสอบ
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartExam();
                    }}
                    className="bg-red-50 text-red-700 text-[10px] font-bold px-3 py-1.5 rounded hover:bg-red-100 transition-all flex items-center gap-1 border border-red-100"
                  >
                    <Lock className="w-3 h-3" />
                    <span>ติวภาค ก ปลดล็อค</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Subject detail dialog */}
      {activeSubject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-sm w-full border border-slate-200 p-6 shadow-2xl relative animate-scaleIn">
            <button
              onClick={() => setActiveSubject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xs text-slate-500 transition-all"
            >
              ✕
            </button>

            {(() => {
              const subj = subjects.find((s) => s.id === activeSubject);
              if (!subj) return null;

              return (
                <div className="space-y-5 text-center">
                  <span className="text-5xl block">{subj.icon}</span>
                  <div className="space-y-1">
                    <h2 className="font-sans font-bold text-base text-slate-800">{subj.title}</h2>
                    <p className="text-xs text-slate-400 leading-relaxed">{subj.desc}</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded border border-slate-150 space-y-1.5 text-left text-xs">
                    <p className="text-slate-800 font-bold">เงื่อนไขการเปิดใช้งาน:</p>
                    {subj.id === 'thai' || subj.id === 'math' ? (
                      <p className="text-emerald-700 font-bold">✓ ปลดล็อคฟรีสำหรับผู้ใช้เริ่มต้นทุกคน</p>
                    ) : subj.id === 'general-knowledge' ? (
                      <div className="space-y-2 mt-2">
                        <p className={`font-bold ${subj.unlocked ? 'text-emerald-700' : 'text-red-600'}`}>
                          {subj.unlocked ? '✓ ปลดล็อคสำเร็จ' : '• ต้องได้คะแนนสอบรวม 80% ขึ้นไปจากแบบฝึกหัด 10 ข้อ'}
                        </p>
                        <div className="w-full bg-slate-200 h-2 rounded overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full rounded transition-all"
                            style={{ width: `${Math.min(100, (highestScorePercentage / 80) * 100)}%` }}
                          ></div>
                        </div>
                        <p className="text-[10px] text-slate-400 text-right font-bold">
                          ปัจจุบันได้: {highestScorePercentage.toFixed(1)}% / 80%
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 mt-2">
                        <p className={`font-bold ${subj.unlocked ? 'text-emerald-700' : 'text-red-600'}`}>
                          {subj.unlocked ? '✓ ปลดล็อคสำเร็จ' : '• ต้องได้คะแนนสอบรวม 90% ขึ้นไปจากแบบฝึกหัด 10 ข้อ'}
                        </p>
                        <div className="w-full bg-slate-200 h-2 rounded overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full rounded transition-all"
                            style={{ width: `${Math.min(100, (highestScorePercentage / 90) * 100)}%` }}
                          ></div>
                        </div>
                        <p className="text-[10px] text-slate-400 text-right font-bold">
                          ปัจจุบันได้: {highestScorePercentage.toFixed(1)}% / 90%
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setActiveSubject(null)}
                      className="flex-1 bg-slate-100 text-slate-600 py-2 rounded font-sans font-bold text-xs"
                    >
                      กลับไปหน้าหลัก
                    </button>
                    {subj.unlocked ? (
                      <button
                        onClick={() => {
                          onStartExam();
                          setActiveSubject(null);
                        }}
                        className="flex-1 bg-indigo-600 text-white py-2 rounded font-sans font-bold text-xs hover:bg-indigo-700 transition-all"
                      >
                        เริ่มทดสอบทันที
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          onStartExam();
                          setActiveSubject(null);
                        }}
                        className="flex-1 bg-amber-600 text-white py-2 rounded font-sans font-bold text-xs hover:bg-amber-700 transition-all"
                      >
                        ไปทำข้อสอบปลดล็อค
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
