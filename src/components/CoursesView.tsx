import { useState } from 'react';
import { BookOpen, Star, Play, Timer, Check, Search, Lock, ShieldAlert, Award } from 'lucide-react';
import { Course } from '../types';

interface CoursesViewProps {
  courses: Course[];
  searchQuery: string;
  onStartCourse: (course: Course) => void;
}

export default function CoursesView({ courses, searchQuery, onStartCourse }: CoursesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCourseDetails, setActiveCourseDetails] = useState<Course | null>(null);

  const categories = [
    { key: 'All', label: 'ทั้งหมด' },
    { key: 'Ethics', label: 'จรรยาบรรณวิชาชีพ' },
    { key: 'Law', label: 'กฎหมายการศึกษา' },
    { key: 'Competencies', label: 'สมรรถนะครู' }
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getChapters = (courseId: string) => {
    switch (courseId) {
      case 'course-1':
        return [
          { title: 'บทนำ: ขอบข่ายวิชาชีพและกฎระเบียบใหม่ 2567', duration: '45 นาที', done: true },
          { title: 'มาตรฐานวิชาชีพครู 3 ด้าน 15 ข้อเชิงลึก', duration: '1 ชั่วโมง 20 นาที', done: true },
          { title: 'จรรยาบรรณ 5 ด้าน 9 ข้อต่อศิษย์และสังคม', duration: '1 ชั่วโมง 45 นาที', done: false },
          { title: 'วิเคราะห์แนวข้อสอบภาคปฏิบัติและกรณีศึกษา', duration: '50 นาที', done: false }
        ];
      case 'course-4':
        return [
          { title: 'บทนำ: พัฒนาการ พรบ. การศึกษาแห่งชาติ', duration: '30 นาที', done: true },
          { title: 'เจาะลึกพรบ. การศึกษาแห่งชาติ ฉบับที่ 1-4', duration: '2 ชั่วโมง 15 นาที', done: true },
          { title: 'เปรียบเทียบคีย์เวิร์ดสำเนียงออกข้อสอบบ่อย', duration: '1 ชั่วโมง 10 นาที', done: true },
          { title: 'สรุปการประกันคุณภาพการศึกษาและแนวทางใหม่', duration: '45 นาที', done: true }
        ];
      default:
        return [
          { title: 'บทที่ 1: แนะนำวิชาเบื้องต้นและการเตรียมตัว', duration: '30 นาที', done: false },
          { title: 'บทที่ 2: เจาะประเด็นหลักและจุดสำคัญ', duration: '1 ชั่วโมง 15 นาที', done: false },
          { title: 'บทที่ 3: ตะลุยโจทย์แนวจำลองและทำข้อสอบย้อนหลัง', duration: '45 นาที', done: false }
        ];
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-7xl mx-auto">
      {/* Header and Search Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-sans font-bold text-lg text-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>คลังคอร์สเรียนวิชาชีพครู</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            รวมคอร์สติวเตรียมตัวครบถ้วน ครอบคลุมเกณฑ์สอบภาค ก และ ภาค ข ใหม่ล่าสุด
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 pb-1 border-b border-slate-200">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`font-sans font-bold text-xs px-4 py-2 rounded transition-all ${
              selectedCategory === cat.key
                ? 'bg-indigo-600 text-white border border-indigo-600 shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-indigo-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const hasStarted = course.progress > 0;
            const isCompleted = course.progress === 100;

            return (
              <div
                key={course.id}
                onClick={() => setActiveCourseDetails(course)}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="h-40 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      alt={course.title}
                      src={course.imageUrl}
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/95 border border-slate-200 rounded text-[9px] font-bold text-indigo-700">
                      {course.category === 'Ethics'
                        ? 'จรรยาบรรณวิชาชีพ'
                        : course.category === 'Law'
                        ? 'กฎหมายการศึกษา'
                        : 'สมรรถนะครู'}
                    </div>

                    {isCompleted && (
                      <div className="absolute bottom-3 right-3 bg-emerald-500 text-white rounded-full p-1 shadow-md">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <span>{course.instructor}</span>
                      <div className="flex items-center gap-1 font-bold text-amber-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{course.rating || '4.8'}</span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-sm text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 font-sans text-xs leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    {/* Progress slider if started */}
                    {hasStarted && (
                      <div className="pt-1.5 space-y-1">
                        <div className="flex justify-between text-[9px] font-bold text-indigo-700">
                          <span>เรียนไปแล้ว {course.progress}%</span>
                          <span>{isCompleted ? 'สำเร็จแล้ว!' : 'ติวค้างไว้'}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full rounded transition-all"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom details */}
                <div className="p-4 pt-0 border-t border-slate-100 mt-4 flex justify-between items-center bg-white">
                  <div className="flex items-center gap-1 text-slate-400 text-[10px] font-medium">
                    <Timer className="w-3.5 h-3.5" />
                    <span>{course.durationHours} ชั่วโมง</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartCourse(course);
                    }}
                    className={`font-sans font-bold text-[10px] px-3.5 py-1.5 rounded transition-all ${
                      isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        : hasStarted
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {isCompleted ? 'ทบทวนวิชา' : hasStarted ? 'ติวต่อเลย ➔' : 'เริ่มเข้าคอร์ส'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-slate-200 space-y-2 shadow-sm">
          <span className="text-4xl">🔍</span>
          <h3 className="font-sans font-bold text-sm text-slate-800">ไม่พบคอร์สเรียนที่ตรงกับการค้นหาของคุณ</h3>
          <p className="text-xs text-slate-400">ลองเปลี่ยนหมวดหมู่หรือคำค้นหาของคุณอีกครั้ง</p>
        </div>
      )}

      {/* Course Detail Modal */}
      {activeCourseDetails && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 p-6 shadow-2xl relative animate-scaleIn">
            {/* Header info */}
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  {activeCourseDetails.category === 'Ethics'
                    ? 'จรรยาบรรณวิชาชีพ'
                    : activeCourseDetails.category === 'Law'
                    ? 'กฎหมายการศึกษา'
                    : 'สมรรถนะครู'}
                </span>
                <h2 className="font-display font-bold text-base text-slate-800 mt-2">
                  {activeCourseDetails.title}
                </h2>
                <p className="text-[10px] text-slate-400 mt-0.5">{activeCourseDetails.instructor}</p>
              </div>
              <button
                onClick={() => setActiveCourseDetails(null)}
                className="w-8 h-8 rounded bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-xs text-slate-500 transition-all"
              >
                ✕
              </button>
            </div>

            {/* Banner info */}
            <div className="grid md:grid-cols-5 gap-4 mb-5">
              <img
                className="md:col-span-2 w-full h-24 rounded object-cover"
                alt="Course banner"
                src={activeCourseDetails.imageUrl}
              />
              <div className="md:col-span-3 space-y-2 flex flex-col justify-between">
                <p className="text-xs text-slate-500 leading-relaxed">
                  {activeCourseDetails.description}
                </p>
                <div className="flex flex-wrap gap-3 text-[10px] text-slate-400 font-bold">
                  <span>
                    ⏱️ {activeCourseDetails.durationHours} ชั่วโมงเรียน
                  </span>
                  <span className="text-amber-500">
                    ⭐ {activeCourseDetails.rating || '4.8'} (คะแนนรีวิว)
                  </span>
                </div>
              </div>
            </div>

            {/* Chapters / Curriculum */}
            <div className="space-y-3">
              <h4 className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider">โครงสร้างหลักสูตร (Curriculum)</h4>
              <div className="space-y-2">
                {getChapters(activeCourseDetails.id).map((chap, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-slate-50 p-3 rounded border border-slate-100 hover:border-indigo-200 transition-all"
                  >
                    <div className="flex items-start gap-2.5 min-w-0">
                      <div
                        className={`w-6 h-6 rounded shrink-0 flex items-center justify-center text-[10px] font-bold ${
                          chap.done ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {chap.done ? '✓' : idx + 1}
                      </div>
                      <div className="min-w-0">
                        <p className={`font-sans font-semibold text-xs truncate ${chap.done ? 'text-slate-400 line-through font-normal' : 'text-slate-800'}`}>
                          {chap.title}
                        </p>
                        <span className="text-[9px] text-slate-400 block">{chap.duration}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onStartCourse(activeCourseDetails);
                        setActiveCourseDetails(null);
                      }}
                      className="bg-slate-200 hover:bg-indigo-600 hover:text-white text-[9px] font-bold px-2.5 py-1 rounded transition-all text-slate-600 shrink-0"
                    >
                      {chap.done ? 'ติวซ้ำ' : 'เข้าบทเรียน'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onStartCourse(activeCourseDetails);
                  setActiveCourseDetails(null);
                }}
                className="flex-1 bg-indigo-600 text-white py-2.5 rounded font-bold text-xs text-center block hover:bg-indigo-700 transition-all shadow-sm"
              >
                {activeCourseDetails.progress > 0 ? 'ติวคอร์สนี้ต่อเลย' : 'เริ่มต้นการติวทันที'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
