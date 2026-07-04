import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, ArrowRight, Play, Heart, Award, Sparkles, MessageCircle, Star, ShieldCheck, ChevronRight, Check, Timer } from 'lucide-react';
import { Course, SuccessStory } from '../types';

interface LandingViewProps {
  onStartTutoring: () => void;
  recommendedCourses: Course[];
  stories: SuccessStory[];
}

export default function LandingView({ onStartTutoring, recommendedCourses, stories }: LandingViewProps) {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-slate-200/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-bold"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>เปิดรับสมัครวิชาเอกภาค ข รุ่นใหม่แล้ววันนี้!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight"
            >
              ปลูกความฝัน <br />
              ปั้น <span className="text-indigo-600 italic">"ว่าที่ครู"</span> <br />
              ในสวนแห่งปัญญา
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-slate-500 text-sm md:text-base leading-relaxed max-w-xl"
            >
              เตรียมความพร้อมสอบครูผู้ช่วยด้วยระบบการเรียนที่ผ่อนคลายแต่เข้มข้น ครอบคลุมทุกรายวิชาภาค ก และ ภาค ข พร้อมคลังข้อสอบวิเคราะห์รายบุคคลย้อนหลังกว่า 10 ปี
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <button
                onClick={onStartTutoring}
                className="bg-indigo-600 text-white font-sans font-bold px-6 py-3 rounded text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all duration-200 shadow-sm"
              >
                <span>เริ่มติวฟรีวันนี้</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onStartTutoring}
                className="border border-slate-300 text-slate-700 bg-white font-sans font-bold px-6 py-3 rounded text-sm hover:bg-slate-50 transition-all duration-200"
              >
                ทำความรู้จักเรา
              </button>
            </motion.div>
          </div>

          {/* Hero Right Image Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative p-2.5 bg-white rounded-xl shadow-md border border-slate-200"
            >
              <img
                className="w-full h-[320px] rounded object-cover"
                alt="Teacher Illustration"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr_NysljZ6dTWtICyezgBYVS1ISGKXfV9N7ngtq0EPRXz_b6ikGqW6GV1MYwb0XTUjwS22dFRaxYNeWo8aUDhOfoi1bw4Tp5CcWFSlWm7te5Q5lxqbQIvmJChSjjvwzP7I74ibCwvwjhK6EXmMnKhcPcKgjtMjtM8s3ZlMMC03zikq8-1Kz5UvFml0IYpPSW2w8hkC9S3HfwfbLUDoPXv_ULdeNTHOPYN_Qy8CrESeNF1Pr354Wgc"
              />
            </motion.div>

            {/* Embedded Badge overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 p-4 bg-indigo-50 border border-indigo-100 rounded-lg shadow-md flex items-center gap-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-10 h-10 rounded bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                🏆
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xs">การันตีความสำเร็จ</p>
                <p className="text-[10px] text-slate-500">จากรุ่นพี่สอบผ่านกว่า 8,500 คน</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Courses Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-10">
            <div>
              <h2 className="font-display font-bold text-xl text-slate-950 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                <span>คอร์สเรียนแนะนำ</span>
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                คัดสรรเนื้อหาที่ออกสอบบ่อยที่สุด โดยทีมติวเตอร์และอาจารย์ผู้เชี่ยวชาญมืออาชีพ
              </p>
            </div>
            <button
              onClick={onStartTutoring}
              className="text-indigo-600 font-sans font-bold flex items-center gap-1 hover:underline text-xs"
            >
              <span>ดูทั้งหมด</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recommendedCourses.slice(0, 3).map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-slate-50 rounded-lg overflow-hidden border border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      alt={course.title}
                      src={course.imageUrl}
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/95 border border-slate-200 rounded text-[9px] font-bold text-indigo-700">
                      {course.category === 'Ethics' ? 'จรรยาบรรณวิชาชีพ' : course.category === 'Law' ? 'กฎหมายการศึกษา' : 'สมรรถนะครู'}
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-display font-bold text-sm text-slate-800 group-hover:text-indigo-600 transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-[10px] text-slate-400">{course.instructor}</p>
                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-100 mt-4 flex justify-between items-center bg-slate-50">
                  <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                    <Timer className="w-3.5 h-3.5" />
                    <span>{course.durationHours} ชั่วโมง</span>
                  </div>
                  <span className="font-display font-bold text-sm text-indigo-600">฿{course.price.toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Layout - Mock Exams & Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-display font-extrabold text-2xl text-slate-900">
              คลังข้อสอบจำลองเสมือนจริง
            </h2>
            <p className="text-slate-500 text-xs max-w-lg mx-auto">
              วัดระดับความพร้อมของคุณด้วยแบบทดสอบที่อัปเดตตามเกณฑ์ประเมินปีล่าสุด พร้อมรายงานประเมินจุดอ่อนจุดแข็งรายบุคคลทันทีหลังสอบเสร็จ
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 max-w-5xl mx-auto">
            {/* Simulation Exam Main Feature (Bento Big) */}
            <div className="md:col-span-7 bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-[100px] pointer-events-none transition-all duration-300 group-hover:scale-110"></div>
              
              <div className="space-y-4 relative z-10 w-full">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded flex items-center justify-center font-bold text-lg">
                  ⏱️
                </div>
                <h3 className="font-display font-bold text-lg text-slate-800 leading-tight">
                  ชุดข้อสอบจำลอง (Simulation) <br />
                  สอบภาค ก ทั่วไป
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  จับเวลาทดสอบจำลองบรรยากาศห้องสอบจริงด้วยชุดคำถามที่ผ่านการคัดสรรสถิติมาร้อยละ 90 ของประเด็นออกบ่อยที่สุด
                </p>
              </div>

              <button
                onClick={onStartTutoring}
                className="mt-6 w-full bg-indigo-600 text-white py-2.5 rounded font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-indigo-700 transition-all"
              >
                <span>เริ่มทำข้อสอบ</span>
                <Play className="w-3.5 h-3.5 text-white fill-current" />
              </button>
            </div>

            {/* Bento Right Small elements */}
            <div className="md:col-span-5 flex flex-col gap-4">
              {/* Card 1: Stats */}
              <div
                onClick={onStartTutoring}
                className="bg-amber-50/50 rounded-lg p-4 border border-amber-100 flex items-center gap-3 hover:bg-amber-100/40 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-sm shadow-sm border border-amber-200">
                  📚
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-amber-800">คลังสถิติข้อสอบย้อนหลัง 5 ปี</h4>
                  <p className="text-[10px] text-amber-600/90 leading-tight">รวบรวมประเด็นและสถิติตัวเลือกที่ออกบ่อย</p>
                </div>
              </div>

              {/* Card 2: Analysis */}
              <div
                onClick={onStartTutoring}
                className="bg-indigo-50/40 rounded-lg p-4 border border-indigo-100/50 flex items-center gap-3 hover:bg-indigo-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-sm shadow-sm border border-indigo-200">
                  🎯
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-indigo-800">ระบบวิเคราะห์จุดอ่อนอัตโนมัติ</h4>
                  <p className="text-[10px] text-indigo-600/90 leading-tight">ประมวลผลคะแนนรายหมวด เพื่อวางแผนการติว</p>
                </div>
              </div>

              {/* Card 3: Community / Leaderboard */}
              <div
                onClick={onStartTutoring}
                className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-sm shadow-sm">
                  👥
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-800">ตารางอันดับผู้เข้าสอบ (Leaderboard)</h4>
                  <p className="text-[10px] text-slate-400 leading-tight">เปรียบเทียบคะแนนกับเพื่อนว่าที่ครูทั่วประเทศ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 space-y-1">
            <h2 className="font-display font-extrabold text-xl text-slate-800">
              เรื่องราวแห่งความสำเร็จ
            </h2>
            <p className="text-slate-400 font-sans text-xs">
              ส่งต่อแรงบันดาลใจและกำลังใจจากรุ่นพี่ที่ทำความฝันสอบติดบรรจุข้าราชการครูสำเร็จ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            {/* Story Image Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-50 blur-2xl opacity-40 -z-10 rounded-full"></div>
              <div className="relative bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
                <img
                  className="w-full h-[280px] object-cover rounded"
                  alt="Young Teacher holding flowers"
                  src={stories[0].imageUrl}
                />
                <div className="absolute -bottom-4 -right-4 p-4 bg-indigo-900 text-white rounded-lg max-w-xs shadow-md">
                  <span className="text-2xl font-serif text-indigo-300 block leading-none h-4">“</span>
                  <p className="font-sans text-[11px] italic leading-relaxed text-slate-200">
                    "{stories[0].quote}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="font-bold text-xs text-white">{stories[0].author}</p>
                    <p className="text-[9px] text-slate-300">{stories[0].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Key Metrics */}
            <div className="space-y-4 lg:pl-6">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-base">
                  📈
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-800">สอบติดบรรจุสำเร็จกว่า 85%</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                    ของผู้เรียนที่สะสมชั่วโมงการเรียนครบถ้วน และสอบประเมินผ่านเกณฑ์ในระบบ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-10 h-10 bg-amber-50 text-amber-700 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-base">
                  💬
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-slate-800">กลุ่มคอมมูนิตี้ให้คำแนะนำติวฟรี</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                    กลุ่มไลน์และเฟซบุ๊กปิดสำหรับแลกเปลี่ยนสรุป มาตรากฎหมายจำยาก และส่งความคืบหน้าให้กันสม่ำเสมอ
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onStartTutoring}
                  className="bg-indigo-600 text-white px-5 py-2.5 rounded font-sans font-bold text-xs flex items-center gap-1.5 hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>อ่านรีวิวจากผู้เรียนจริงทั้งหมด</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="relative bg-slate-900 rounded-xl overflow-hidden p-8 md:p-12 text-center text-white border border-slate-800 shadow-lg">
          {/* Subtle patterns */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-600 opacity-10 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-slate-800 opacity-20 rounded-full blur-xl"></div>

          <div className="relative z-10 space-y-4">
            <h2 className="font-display font-bold text-xl md:text-2xl text-white">
              พร้อมที่จะเริ่มก้าวเติบโตไปด้วยกันหรือยัง?
            </h2>
            <p className="text-slate-400 font-sans text-xs max-w-lg mx-auto leading-relaxed">
              ลงทะเบียนเข้าใช้งานวันนี้เพื่อรับฟรี: สิทธิ์ทดลองวิเคราะห์จุดอ่อน, ไฟล์สรุป พรบ. การศึกษา 2567 และสิทธิ์เข้าสอบประเมิน 1 ครั้ง!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={onStartTutoring}
                className="bg-indigo-600 text-white font-sans font-bold px-6 py-3 rounded text-xs hover:bg-indigo-700 transition-all shadow-sm"
              >
                สมัครสมาชิกทดลองฟรี
              </button>
              <button
                onClick={onStartTutoring}
                className="border border-slate-700 text-slate-300 bg-transparent font-sans font-bold px-6 py-3 rounded text-xs hover:bg-slate-800 hover:text-white transition-all"
              >
                ปรึกษาแผนการเรียน
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
