import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LandingView from './components/LandingView';
import DashboardView from './components/DashboardView';
import CoursesView from './components/CoursesView';
import SubjectSelectionView from './components/SubjectSelectionView';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import { ViewType, Course, Quiz, UserProgress } from './types';
import { COURSES, SUCCESS_STORIES, SCHEDULE_ITEMS, MOCK_QUIZZES } from './data';
import { Play, Sparkles, X, Send, Heart, Star, Award, ShieldAlert } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info' | 'error';
}

export default function App() {
  const [currentView, setView] = useState<ViewType>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Toast System
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Quiz States
  const [currentQuiz, setCurrentQuiz] = useState<Quiz>(MOCK_QUIZZES['law-12']);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [quizTimeSeconds, setQuizTimeSeconds] = useState(2700); // 45 mins
  const [highestScorePercentage, setHighestScorePercentage] = useState(0);
  const [lastScore, setLastScore] = useState<number | null>(null);

  // Live Video Simulation Modal state
  const [showLiveVideoPopup, setShowLiveVideoPopup] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatLogs, setChatLogs] = useState([
    { user: 'ครูโบว์', text: 'สวัสดีค่า มีสรุปมาตรา พรบ. ให้อ่านด้วยไหมคะ?' },
    { user: 'ว่าที่ครูแก้ว', text: 'คีย์เวิร์ดรอบนี้จำง่ายขึ้นเยอะเลยครับ อ.ส้ม' },
    { user: 'ครูแอร์', text: 'ขอบคุณเทคนิคตัดตัวเลือกค่ะ เข้าใจขึ้นเยอะมาก' }
  ]);

  // Handle Login Toggle
  const handleLoginToggle = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setView('landing');
      addToast('ออกจากระบบเรียบร้อยแล้วจ้า ยินดีต้อนรับกลับมาใหม่เสมอนะ 🌿', 'info');
    } else {
      setIsLoggedIn(true);
      setView('dashboard');
      addToast('ยินดีต้อนรับเข้าสู่ระบบ! สวนปัญญาขอต้อนรับครูผู้ช่วยคนใหม่จ้า 🌱', 'success');
    }
  };

  const handleStartTutoring = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      setView('dashboard');
      addToast('ยินดีต้อนรับ! สวนปัญญาปลดล็อคบทติวและชุดข้อสอบเตรียมสอบครูผู้ช่วยให้คุณเรียบร้อย 🌻', 'success');
    } else {
      setView('dashboard');
    }
  };

  const handleStartCourse = (course: Course) => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      addToast(`สมัครเข้าเรียนคอร์ส: ${course.title} สำเร็จแล้วจ้า!`, 'success');
    } else {
      addToast(`เปิดบทเรียน: ${course.title} กำลังพากลับไปเรียนต่อหน้าเดิม`, 'success');
    }
    setView('dashboard');
  };

  const handleStartExam = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
    }
    // Choose law quiz as default
    setCurrentQuiz(MOCK_QUIZZES['law-12']);
    setUserAnswers({});
    setFlaggedQuestions([]);
    setQuizTimeSeconds(1800); // Reset timer to 30 mins
    setView('quiz');
    addToast('เริ่มการทำแบบทดสอบจำลองแล้ว จับเวลา 30 นาที สู้ๆ นะจ๊ะ! ⏱️', 'info');
  };

  // Timer Countdown Effect
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (currentView === 'quiz' && quizTimeSeconds > 0) {
      timerId = setInterval(() => {
        setQuizTimeSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerId);
            handleQuizSubmit(); // Auto submit
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [currentView, quizTimeSeconds]);

  const handleQuizSubmit = () => {
    // Calculate Score
    let calculatedScore = 0;
    currentQuiz.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctChoice) {
        calculatedScore++;
      }
    });

    const percent = (calculatedScore / currentQuiz.questions.length) * 100;
    if (percent > highestScorePercentage) {
      setHighestScorePercentage(percent);
    }

    setLastScore(calculatedScore);
    setView('results');
    addToast(`ส่งกระดาษคำตอบสำเร็จ! คะแนนของคุณคือ ${calculatedScore}/${currentQuiz.questions.length} (${percent.toFixed(0)}%) 📝`, 'success');
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatLogs((prev) => [...prev, { user: 'คุณ (ครูสมศรี)', text: chatMessage }]);
    setChatMessage('');
    // Simulate auto answers from instructor
    setTimeout(() => {
      setChatLogs((prev) => [
        ...prev,
        { user: 'อ.ส้ม (ติวเตอร์)', text: 'ตอบสอดคล้องถูกใจมากเลยจ้า! ค่อยๆ สรุปลงสวนปัญญาของตัวเองนะ' }
      ]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Toast Notification Container */}
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto p-4 rounded-xl border shadow-lg flex gap-3 items-start animate-slideIn ${
              toast.type === 'success'
                ? 'bg-indigo-50 border-indigo-200 text-indigo-900'
                : toast.type === 'error'
                ? 'bg-red-50 border-red-200 text-red-800'
                : 'bg-white border-slate-200 text-slate-600'
            }`}
          >
            <span className="text-lg">
              {toast.type === 'success' ? '✨' : toast.type === 'error' ? '⚠️' : 'ℹ️'}
            </span>
            <p className="text-xs font-semibold leading-relaxed">{toast.message}</p>
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        setView={setView}
        isLoggedIn={isLoggedIn}
        onLoginToggle={handleLoginToggle}
        onSearch={setSearchQuery}
        scorePass={highestScorePercentage >= 60}
      />

      {/* Full-Scale Core Application Frame */}
      <div className="flex-1 flex pt-16">
        {/* Responsive Drawer Sidebar */}
        <Sidebar
          currentView={currentView}
          setView={setView}
          isLoggedIn={isLoggedIn}
          onStartExam={handleStartExam}
        />

        {/* Content View Routing Area */}
        <main className="flex-1 overflow-x-hidden">
          {currentView === 'landing' && (
            <LandingView
              onStartTutoring={handleStartTutoring}
              recommendedCourses={COURSES}
              stories={SUCCESS_STORIES}
            />
          )}

          {currentView === 'dashboard' && (
            <DashboardView
              courses={COURSES}
              schedule={SCHEDULE_ITEMS}
              progress={{
                overallProgressPercentage: 54,
                gardenLevelName: '🌱 ต้นกล้าผู้ช่วย (ระดับ 3)',
                weeklyGrowthPercentage: 15,
                completedExams: {}
              }}
              onStartCourse={handleStartCourse}
              onStartExam={handleStartExam}
              onOpenLiveVideo={() => setShowLiveVideoPopup(true)}
            />
          )}

          {currentView === 'courses' && (
            <CoursesView
              courses={COURSES}
              searchQuery={searchQuery}
              onStartCourse={handleStartCourse}
            />
          )}

          {currentView === 'subjects' && (
            <SubjectSelectionView
              highestScorePercentage={highestScorePercentage}
              onStartExam={handleStartExam}
            />
          )}

          {currentView === 'quiz' && (
            <QuizView
              quiz={currentQuiz}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
              flaggedQuestions={flaggedQuestions}
              setFlaggedQuestions={setFlaggedQuestions}
              onSubmit={handleQuizSubmit}
              timeRemaining={quizTimeSeconds}
              setTimeRemaining={setQuizTimeSeconds}
            />
          )}

          {currentView === 'results' && (
            <ResultsView
              quiz={currentQuiz}
              userAnswers={userAnswers}
              score={lastScore || 0}
              totalQuestionsCount={currentQuiz.questions.length}
              onRestart={handleStartExam}
              onGoToDashboard={() => setView('dashboard')}
            />
          )}
        </main>
      </div>

      {/* Embedded Simulated Interactive Video Lecture Screen Popup */}
      {showLiveVideoPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col md:flex-row relative">
            <button
              onClick={() => setShowLiveVideoPopup(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white font-bold"
            >
              ✕
            </button>

            {/* Video Player Side */}
            <div className="flex-1 bg-black flex flex-col justify-between relative">
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-red-600 text-white rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>กำลังจำลองไลฟ์สด</span>
              </div>

              {/* simulated teacher view */}
              <div className="flex-1 flex flex-col items-center justify-center py-20 bg-indigo-950 relative">
                <img
                  className="w-48 h-48 rounded-full border-4 border-indigo-300 object-cover hover:scale-105 transition-all duration-500"
                  alt="Teacher Instructor"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZcEE1coiUJ6Ojmw4WXjzPAstH03c8PpWQx2iii-2B4bxLrMPtqeADC21bM86X2gV1p7r1wy5PJu1eMQ9nqdnIZsIJBlUTJM9dd2H49GlPbDrdI533dZ_OvQiw6XBrJF7y3mC1GSRZR8iO5EFUc0L1BpMJgJiYW-6HRAMFhf-M1sd5z1iYdyEgCixApVXXYY8MNfF-i760sH5gNZ8K7_iIaa0HGmpF6M-AVLk7ua2ZtVmavgBS18E"
                />
                <h3 className="font-display font-bold text-lg text-indigo-200 mt-4">อ.ส้ม - ผู้บรรยายหลัก</h3>
                <p className="text-xs text-white/75 px-10 text-center max-w-sm mt-1">
                  "พ.ร.บ. การศึกษา 2567 สรุปสาระสำคัญ เน้นมาตราที่เปลี่ยนการศึกษาภาคบังคับและความรับผิดชอบครูจ้า!"
                </p>

                {/* Simulated controls bar */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-lg text-white text-xs">
                  <div className="flex items-center gap-2">
                    <button className="w-3 h-3 rounded-full bg-red-500" />
                    <button className="w-3 h-3 rounded-full bg-yellow-500" />
                    <button className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span>ความคมชัด: 1080p HD</span>
                </div>
              </div>
            </div>

            {/* Chat Side */}
            <div className="w-full md:w-80 bg-slate-50 border-l border-slate-200 flex flex-col justify-between h-[450px] md:h-auto">
              <div className="p-4 border-b border-slate-200 bg-white">
                <h4 className="font-display font-bold text-sm text-indigo-600">แชทคำถามสดประจำห้อง</h4>
                <p className="text-[10px] text-slate-500">ร่วมปรึกษาประเด็นและโต้ตอบกับครูท่านอื่น</p>
              </div>

              {/* Chat Log lists */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[300px] md:max-h-[350px]">
                {chatLogs.map((log, index) => (
                  <div key={index} className="text-xs">
                    <span className="font-bold text-indigo-700 block">{log.user}:</span>
                    <span className="text-slate-700 mt-0.5 block leading-relaxed">{log.text}</span>
                  </div>
                ))}
              </div>

              {/* Message inputs */}
              <form onSubmit={handleSendChatMessage} className="p-4 bg-white border-t border-slate-200 flex gap-2">
                <input
                  type="text"
                  placeholder="พิมพ์ข้อความคุยกับคุณครู..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:bg-white"
                />
                <button
                  type="submit"
                  className="w-8 h-8 rounded bg-indigo-600 text-white flex items-center justify-center shrink-0 hover:bg-indigo-700 transition-all"
                >
                  <Send className="w-3.5 h-3.5 fill-current ml-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Styled High Density Footer */}
      <footer className="bg-white py-10 px-6 border-t border-slate-200 text-center space-y-2">
        <div className="flex justify-center items-center gap-2">
          <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs italic">A+</div>
          <span className="font-display font-bold text-slate-800 text-sm">ครูผู้ช่วย Garden • High Density Edition</span>
        </div>
        <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
          ความรู้คือต้นไม้ที่คุณปลูกในวันนี้ และดอกผลจะแบ่งบานให้ร่มเงาอย่างงดงามแก่ศิษย์ในวันหน้า <br />
          © 2026 Kru Phuchuai Garden. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
