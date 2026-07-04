import { Quiz, Question } from '../types';
import { Trophy, HelpCircle, Check, X, RotateCcw, Home, Sparkles, AlertCircle, Award } from 'lucide-react';

interface ResultsViewProps {
  quiz: Quiz;
  userAnswers: { [questionId: number]: string };
  score: number;
  totalQuestionsCount: number;
  onRestart: () => void;
  onGoToDashboard: () => void;
}

export default function ResultsView({
  quiz,
  userAnswers,
  score,
  totalQuestionsCount,
  onRestart,
  onGoToDashboard
}: ResultsViewProps) {
  const percentage = (score / totalQuestionsCount) * 100;
  const isPassed = percentage >= 60;

  // Render score badge based on performance
  const getBadgeContent = () => {
    if (percentage >= 90) {
      return {
        title: '🌱 ยอดเยี่ยมระดับปรมาจารย์ครู!',
        desc: 'คะแนนสูงส่งเป็นแบบอย่างที่ดีเยี่ยม ปลดล็อควิชาเอกและฟีเจอร์ระดับสูงสุดเรียบร้อยจ้า 🎉',
        color: 'text-emerald-800 bg-emerald-50 border-emerald-200'
      };
    } else if (percentage >= 80) {
      return {
        title: '🌟 ผ่านเกณฑ์ระดับดีเลิศ!',
        desc: 'ปลดล็อคข้อสอบวิชาเอกภาค ข เรียบร้อย! เข้าไปทดลองตะลุยโจทย์ปฐมวัยและการศึกษาได้เลยนะ',
        color: 'text-indigo-800 bg-indigo-50 border-indigo-200'
      };
    } else if (isPassed) {
      return {
        title: '👍 ผ่านเกณฑ์ประเมินขั้นพื้นฐาน!',
        desc: 'คุณทำคะแนนผ่านร้อยละ 60 สอบผ่านแล้วจ้า! ลองฝึกซ้ำอีกรอบเพื่อทำสถิติเกียรติยศ 80%+ กันเถอะ',
        color: 'text-amber-800 bg-amber-50 border-amber-200'
      };
    } else {
      return {
        title: '🍂 ยังไม่ผ่านเกณฑ์ทดสอบ (ต่ำกว่า 60%)',
        desc: 'อย่าพึ่งท้อใจไปนะจ๊ะ! ค่อยๆ ย้อนกลับไปศึกษาเฉลยเฉียบขาดด้านล่าง เพื่อทำความเข้าใจประเด็นที่พลาดไป แล้วลองทำซ้ำอีกครั้งนะ🌱',
        color: 'text-red-800 bg-red-50 border-red-200'
      };
    }
  };

  const badge = getBadgeContent();

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Score Summary Card */}
      <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm text-center space-y-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span>ประมวลผลกระดาษคำตอบของคุณสำเร็จ</span>
        </div>

        <div className="relative w-36 h-36 mx-auto">
          {/* Circular progress background */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="60"
              className="stroke-slate-100"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="72"
              cy="72"
              r="60"
              className={`transition-all duration-1000 ${
                isPassed ? 'stroke-indigo-600' : 'stroke-red-500'
              }`}
              strokeWidth="10"
              strokeDasharray={2 * Math.PI * 60}
              strokeDashoffset={2 * Math.PI * 60 * (1 - percentage / 100)}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-slate-800">
              {score}/{totalQuestionsCount}
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
              คะแนน ({percentage.toFixed(0)}%)
            </span>
          </div>
        </div>

        <div className={`p-5 rounded-lg border max-w-lg mx-auto text-center space-y-1.5 ${badge.color}`}>
          <h3 className="font-sans font-bold text-sm">{badge.title}</h3>
          <p className="text-[11px] leading-relaxed opacity-90">{badge.desc}</p>
        </div>

        {/* Action button controls */}
        <div className="flex flex-wrap gap-3 justify-center pt-1">
          <button
            onClick={onGoToDashboard}
            className="bg-indigo-600 text-white font-sans font-bold text-xs px-6 py-2.5 rounded flex items-center gap-1.5 hover:bg-indigo-700 transition-all shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>กลับไปหน้าแดชบอร์ด</span>
          </button>
          <button
            onClick={onRestart}
            className="border border-slate-300 bg-white text-slate-700 font-sans font-bold text-xs px-6 py-2.5 rounded flex items-center gap-1.5 hover:bg-slate-50 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>ทำข้อสอบใหม่อีกครั้ง</span>
          </button>
        </div>
      </div>

      {/* Answer Keys Breakdown list */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b border-slate-200 pb-3">
          <h3 className="font-sans font-bold text-sm text-slate-800">เฉลยคำตอบพร้อมบทวิเคราะห์แบบละเอียด</h3>
          <span className="text-[11px] text-slate-400 font-medium">เกณฑ์สอบผ่าน: ร้อยละ 60 ขึ้นไป</span>
        </div>

        <div className="space-y-4">
          {quiz.questions.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice === q.correctChoice;

            return (
              <div
                key={q.id}
                className={`p-5 rounded-xl border bg-white transition-all shadow-sm ${
                  isCorrect ? 'border-emerald-200' : 'border-red-100'
                }`}
              >
                {/* Header state icon */}
                <div className="flex justify-between items-start gap-4 mb-3">
                  <span className="font-sans font-bold text-[10px] text-slate-400">
                    ข้อที่ {idx + 1} • {q.category}
                  </span>
                  {isCorrect ? (
                    <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      <Check className="w-3 h-3 stroke-[3]" />
                      <span>ตอบถูกต้อง</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">
                      <X className="w-3 h-3 stroke-[3]" />
                      <span>ตอบผิด</span>
                    </span>
                  )}
                </div>

                {/* Question */}
                <p className="font-sans font-bold text-xs md:text-sm text-slate-800 leading-relaxed mb-3">
                  {q.text}
                </p>

                {/* Choices breakdown */}
                <div className="grid md:grid-cols-2 gap-2 mb-3">
                  {q.choices.map((choice) => {
                    const isUserSelected = userChoice === choice.key;
                    const isCorrectKey = choice.key === q.correctChoice;

                    let borderClass = 'border-slate-100 bg-slate-50 text-slate-600';
                    if (isCorrectKey) {
                      borderClass = 'border-emerald-300 bg-emerald-50/50 text-emerald-900 font-semibold';
                    } else if (isUserSelected && !isCorrect) {
                      borderClass = 'border-red-200 bg-red-50/30 text-red-950';
                    }

                    return (
                      <div
                        key={choice.key}
                        className={`p-3 rounded-lg border text-xs flex items-center gap-2.5 ${borderClass}`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[9px] shrink-0 ${
                            isCorrectKey
                              ? 'bg-emerald-600 text-white'
                              : isUserSelected && !isCorrect
                              ? 'bg-red-500 text-white'
                              : 'bg-white border text-slate-400'
                          }`}
                        >
                          {choice.key}
                        </div>
                        <span className="leading-relaxed">{choice.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Explanation block */}
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-indigo-700 font-bold text-[10px]">
                    <span>💡 สรุปใจความคำอธิบายเฉลย:</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-0.5">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
