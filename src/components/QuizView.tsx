import React, { useState, useEffect } from 'react';
import { Quiz, Question } from '../types';
import { Timer, ArrowLeft, ArrowRight, Flag, HelpCircle, Check, Sparkles, AlertTriangle } from 'lucide-react';

interface QuizViewProps {
  quiz: Quiz;
  userAnswers: { [questionId: number]: string };
  setUserAnswers: React.Dispatch<React.SetStateAction<{ [questionId: number]: string }>>;
  flaggedQuestions: number[];
  setFlaggedQuestions: React.Dispatch<React.SetStateAction<number[]>>;
  onSubmit: () => void;
  timeRemaining: number;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuizView({
  quiz,
  userAnswers,
  setUserAnswers,
  flaggedQuestions,
  setFlaggedQuestions,
  onSubmit,
  timeRemaining,
  setTimeRemaining
}: QuizViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];

  // Format time remaining
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectChoice = (choiceKey: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: choiceKey
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) => {
      if (prev.includes(currentQuestion.id)) {
        return prev.filter((id) => id !== currentQuestion.id);
      } else {
        return [...prev, currentQuestion.id];
      }
    });
  };

  const handleNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSubmitConfirm(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Stress-relieving wisdom tips
  const getWisdomTip = (qCategory: string) => {
    switch (qCategory) {
      case 'กฎหมายการศึกษา':
        return '🌱 พึงระลึกไว้ว่า: เจตนารมณ์หลักของกฎหมายการศึกษาคือ สิทธิการพัฒนาศักยภาพผู้เรียนอย่างทั่วถึงและเท่าเทียม';
      case 'จรรยาบรรณและวิชาชีพ':
        return '🌸 ดอกไม้ปัญญาเตือนใจ: จรรยาบรรณต่อวิชาชีพคือหัวใจที่ขับเคลื่อนภาพลักษณ์และความไว้วางใจจากสังคม';
      case 'วิชาชีพครู':
        return '🏡 มุมสงบสวนปัญญา: ระบบ PA มีขึ้นเพื่อให้เกิดผลลัพธ์การเรียนรู้กับผู้เรียนจริง ไม่ใช่เพียงเพื่อปริมาณเอกสาร';
      default:
        return '🍵 จิบน้ำชาอุ่นๆ: ค่อยๆ อ่านรายละเอียดโจทย์ตัดตัวเลือกที่ขัดแย้งหลักคุณธรรมออกก่อนเสมอ';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header timeline / status */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">
            {quiz.category === 'Law' ? 'หมวดกฎหมายและการศึกษา' : 'หมวดความรู้และความเหมาะสมวิชาชีพ'}
          </span>
          <h2 className="font-sans font-bold text-base text-slate-800 mt-2">
            {quiz.title}
          </h2>
        </div>

        {/* Real-time High Fidelity Timer */}
        <div className="flex items-center gap-3 bg-indigo-50/50 px-4 py-2 rounded-lg border border-indigo-100 shrink-0">
          <Timer className="w-4 h-4 text-indigo-600 animate-pulse" />
          <div className="text-right">
            <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider">Time Remaining</p>
            <p className="font-mono font-bold text-lg text-slate-800 leading-none">
              {formatTime(timeRemaining)}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Questions, Right Answer Sheet */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Left Section - Col 8 */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm relative space-y-5">
            {/* Question Indicator & Flag */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded uppercase">
                  ข้อ {currentIndex + 1} จาก {quiz.questions.length}
                </span>
                <span className="text-[11px] text-slate-400">แบบเลือกตอบ • 1 คะแนน</span>
              </div>

              <button
                onClick={handleToggleFlag}
                className={`flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded transition-all border ${
                  flaggedQuestions.includes(currentQuestion.id)
                    ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                    : 'bg-white text-slate-400 border-slate-200 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedQuestions.includes(currentQuestion.id) ? 'ปักหมุดทบทวนแล้ว' : 'ปักหมุดไว้ทบทวน'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-base md:text-lg text-slate-800 leading-relaxed">
                {currentQuestion.text}
              </h3>
            </div>

            {/* Choices list */}
            <div className="grid gap-2.5 pt-1">
              {currentQuestion.choices.map((choice) => {
                const isSelected = userAnswers[currentQuestion.id] === choice.key;
                return (
                  <button
                    key={choice.key}
                    onClick={() => handleSelectChoice(choice.key)}
                    className={`w-full text-left p-4 rounded-lg border flex items-start gap-4 transition-all duration-200 ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/30'
                        : 'border-slate-100 bg-slate-50 hover:border-indigo-200 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full mt-0.5 flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'bg-indigo-600 text-white' : 'border border-slate-300 text-slate-400 bg-white'
                      }`}
                    >
                      {choice.key}
                    </div>
                    <span className={`text-xs md:text-sm leading-relaxed ${isSelected ? 'font-bold text-indigo-950' : 'text-slate-700'}`}>
                      {choice.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stress relieving Wisdom Tip banner */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 flex gap-2.5 items-start mt-4">
              <span className="text-base leading-none">🍵</span>
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                {getWisdomTip(currentQuestion.category)}
              </p>
            </div>
          </div>

          {/* Navigation Action controls */}
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`font-sans font-bold text-xs px-4 py-2 rounded border transition-all ${
                currentIndex === 0
                  ? 'opacity-40 bg-slate-100 text-slate-400 border-transparent cursor-not-allowed'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>ข้อก่อนหน้า</span>
              </div>
            </button>

            <button
              onClick={handleNext}
              className="bg-indigo-600 text-white font-sans font-bold text-xs px-5 py-2 rounded flex items-center gap-1.5 hover:bg-indigo-700 transition-all shadow-sm"
            >
              <span>{currentIndex === quiz.questions.length - 1 ? 'ส่งกระดาษคำตอบ' : 'ข้อถัดไป'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Section - Col 4 (Answer Sheet Grid) */}
        <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-5 sticky top-24">
          <div>
            <h4 className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider">กระดาษคำตอบ</h4>
            <p className="text-[10px] text-slate-400 mt-0.5">คลิกหมายเลขเพื่อข้ามข้อได้อย่างอิสระ</p>
          </div>

          {/* Grid list of squared indicators (High Density Style) */}
          <div className="grid grid-cols-5 gap-2">
            {quiz.questions.map((q, idx) => {
              const isAnswered = !!userAnswers[q.id];
              const isFlagged = flaggedQuestions.includes(q.id);
              const isCurrent = idx === currentIndex;

              let cellStyle = 'bg-slate-50 border-slate-200 text-slate-400';
              if (isCurrent) {
                cellStyle = 'bg-indigo-50 border-indigo-200 text-indigo-700 ring-2 ring-indigo-500 ring-offset-1 font-bold';
              } else if (isFlagged) {
                cellStyle = 'bg-yellow-50 border-yellow-200 text-yellow-700 relative font-bold';
              } else if (isAnswered) {
                cellStyle = 'bg-indigo-600 border-indigo-600 text-white font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`aspect-square flex flex-col items-center justify-center text-xs font-bold rounded border transition-all ${cellStyle}`}
                >
                  <span>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  {isFlagged && !isCurrent && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-3">
            <div className="bg-slate-50 p-3 rounded border border-slate-100">
              <p className="text-[9px] font-bold text-slate-400 uppercase mb-2">Summary</p>
              <div className="flex justify-between text-[11px] mb-1 text-slate-600">
                <span>Answered:</span>
                <span className="font-bold text-slate-800">{Object.keys(userAnswers).length}/{quiz.questions.length}</span>
              </div>
              <div className="flex justify-between text-[11px] mb-1 text-slate-600">
                <span>Flagged:</span>
                <span className="font-bold text-yellow-600">{flaggedQuestions.length}</span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>Remaining:</span>
                <span className="font-bold text-slate-800">{quiz.questions.length - Object.keys(userAnswers).length}</span>
              </div>
            </div>

            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="w-full py-3 bg-red-50 text-red-600 border border-red-100 rounded text-xs font-bold tracking-wider hover:bg-red-100 transition-all uppercase"
            >
              Finish & Submit
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Submit Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-sm w-full border border-slate-200 p-6 shadow-2xl relative text-center space-y-5 animate-scaleIn">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 border border-amber-200 rounded-full flex items-center justify-center text-2xl mx-auto">
              ⚠️
            </div>

            <div className="space-y-1">
              <h3 className="font-sans font-bold text-base text-slate-800">ยืนยันการส่งข้อสอบ?</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                ทำข้อสอบเสร็จแล้ว {Object.keys(userAnswers).length} จากทั้งหมด {quiz.questions.length} ข้อ <br />
                เมื่อส่งแล้วระบบจะวิเคราะห์ผลคะแนนทันทีโดยไม่สามารถแก้ไขคำตอบได้อีก
              </p>
            </div>

            {Object.keys(userAnswers).length < quiz.questions.length && (
              <div className="bg-amber-50 text-amber-800 border border-amber-200 text-[10px] p-3 rounded flex gap-2 items-start text-left">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <p className="leading-normal">
                  คุณยังมีข้อที่ไม่ได้ทำอีก {quiz.questions.length - Object.keys(userAnswers).length} ข้อ ยืนยันที่จะข้ามและส่งข้อสอบหรือไม่?
                </p>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 bg-slate-100 text-slate-600 py-2 rounded font-sans font-bold text-xs hover:bg-slate-200 transition-all"
              >
                กลับไปทบทวน
              </button>
              <button
                onClick={() => {
                  setShowSubmitConfirm(false);
                  onSubmit();
                }}
                className="flex-1 bg-indigo-600 text-white py-2 rounded font-sans font-bold text-xs hover:bg-indigo-700 transition-all"
              >
                ยืนยันส่งข้อสอบ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
