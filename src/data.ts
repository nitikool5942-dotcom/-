import { Course, Quiz, SuccessStory, ScheduleItem } from './types';

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'มาตรฐานวิชาชีพครู 2567',
    instructor: 'ครูพี่นก - ผู้เชี่ยวชาญด้านจริยธรรม',
    category: 'Ethics',
    progress: 75,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCcAQN5UoSykTWZ2dGNmsTt1vIHSik2II9bhU7Dd7SlnrFpEsQj1Niq7kkrCTK19gbcmuL_TUREqEtrIvAg2DERy1fmTERzWymMlFuOTe2alxlj1lPNJ_I26Q1WJc5GFNlT61hkHp9JZ7XrUATcaveZ6kBohP2FefA1swDmLNX0eJOL9Void4eUznN2hH00oXoZdkx7vq-0L7JzqroyqRkkdOPjZDff0za9ieAPZUwtJtyodwIedk',
    rating: 4.9,
    durationHours: 12,
    price: 990,
    description: 'เจาะลึกมาตรฐานวิชาชีพครูฉบับปรับปรุงใหม่ล่าสุด 2567 เพื่อพิชิตข้อสอบภาค ก และ จรรยาบรรณวิชาชีพ'
  },
  {
    id: 'course-2',
    title: 'คุณธรรมและจริยธรรมวิชาชีพ',
    instructor: 'อาจารย์มานะ เก่งสอน',
    category: 'Ethics',
    progress: 32,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACUDIXV9jiEBxmTmFiImJlPHuS7gfl-8H0AXTGGCKahEHQz1Ep7caK-YcTROjtmFADPWqKqkjlKkqSkMHpEC8HpCO5UdTl9aa_0tZM1_tZLp2AZ-sTkqz29aP2XnGhNFAReIFN37XgIBfe8caJxzTCDBXP5OIobELcIRcziPUwEgIsyyowzkojGxvTR7fCjzLThgxr9yzBsbxVrBSvXyU_KS794lQEEn-YeQxajAzqTdTBSjji6OM',
    rating: 4.8,
    durationHours: 10,
    price: 890,
    description: 'เรียนรู้หลักคุณธรรมและจริยธรรมที่จำเป็นสำหรับวิชาชีพครู พร้อมวิเคราะห์แนวข้อสอบจากสถานการณ์จำลอง'
  },
  {
    id: 'course-3',
    title: 'วินัยและการรักษาวินัยครู',
    instructor: 'ดร. ใจดี สุขสันต์',
    category: 'Ethics',
    progress: 0,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjHCeWdT8XrQieC8eVEd3MtewRLGzHkFtnSy6iiw-LatJSlouYybQWyov9aQDitO-rZepSgyAR2wCLnMExDyncl5dwc0merF2hFD5By060V4KzS_Fd-vA-f38hM5uFi0jaj1RwO_g0exMM8VPzk_9eKRr6fUmPUV8XknhHfbjNSQkx-wy7N1EE3feouHFfGaGD8rHpvSo18nHx03o41wjK2X96F5v7eTVGeZJyil47Dh3uUjQQil8',
    rating: 4.7,
    durationHours: 6,
    price: 590,
    description: 'สรุปประเด็นกฎระเบียบวินัยข้าราชการครู ข้อห้าม ข้อปฏิบัติ และกรณีศึกษาโทษทางวินัยต่างๆ ที่มักออกสอบ'
  },
  {
    id: 'course-4',
    title: 'พรบ. การศึกษาแห่งชาติ (ครบทุกฉบับ)',
    instructor: 'ครูเมย์ - ติวเตอร์กฎหมาย',
    category: 'Law',
    progress: 100,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgNQutcEUpyIwadIPBlfFDHTteuabl8v5JxAnX-d36ZMwVgIBufmhp88n12pZQbNl-GeLXwPJu11fVyNdk2y20P5Kr9oCQEdz2ztDZaSe6Q4CGLGmzHdqB3t9URY5bI-h1z379HfJUAhGPH1FaAgO78jXdH7khisjEejzJNnYdXv1oNn2eWyYDnkciWoSGu8ShhbLlimh6g-5OyJsXbEUsN29_OU9mDzwO6uM5aRuqPGsy3Htv2Y',
    rating: 5.0,
    durationHours: 15,
    price: 1200,
    description: 'รวบรวมและวิเคราะห์ พรบ. การศึกษาแห่งชาติ ครบถ้วนทุกฉบับ พร้อมจุดเน้นและคำสำคัญที่ออกสอบบ่อยที่สุด'
  },
  {
    id: 'course-5',
    title: 'กฎหมายคุ้มครองเด็กและสตรี',
    instructor: 'ทีมงานครูผู้ช่วย Garden',
    category: 'Law',
    progress: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcgNQutcEUpyIwadIPBlfFDHTteuabl8v5JxAnX-d36ZMwVgIBufmhp88n12pZQbNl-GeLXwPJu11fVyNdk2y20P5Kr9oCQEdz2ztDZaSe6Q4CGLGmzHdqB3t9URY5bI-h1z379HfJUAhGPH1FaAgO78jXdH7khisjEejzJNnYdXv1oNn2eWyYDnkciWoSGu8ShhbLlimh6g-5OyJsXbEUsN29_OU9mDzwO6uM5aRuqPGsy3Htv2Y',
    rating: 4.6,
    durationHours: 8,
    price: 690,
    description: 'เจาะลึกกฎหมายที่เกี่ยวข้องกับสิทธิและการคุ้มครองเด็กและเยาวชน รวมถึงบทบาทของสถานศึกษาและครูผู้ดูแล'
  },
  {
    id: 'course-6',
    title: 'การออกแบบการเรียนรู้สมัยใหม่',
    instructor: 'ครูบอล - นวัตกรรมศึกษา',
    category: 'Competencies',
    progress: 55,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZq9hmB5EbvhONo58AaRdWM4WQkFX8qky6SzIyaMRyxWuvMjG-l9VoxTK8Dq2Y9kcDEEGA8Iu7gYpmmpBqVBiwuo87WA3CLynEIwxSsqEjiGSfJ-gzBVrdcexKI7x5bfYuJ64Ez1Sh3LkG2nqdmD3fsTdarwb8v2a16V35UnzwWne6jQxub2IDZ6alSej2QalS_Vcc9nKyJkkFtwt2L0FcNDzsyAqSNiPten_7TPHN_QZDIOJVqdE',
    rating: 4.9,
    durationHours: 14,
    price: 1100,
    description: 'เรียนรู้แนวคิด Active Learning, การใช้สื่อเทคโนโลยีสร้างสรรค์ และการวัดประเมินผลตามสภาพจริง'
  },
  {
    id: 'course-7',
    title: 'การพัฒนาหลักสูตรและการสอน',
    instructor: 'อาจารย์สุรีย์ แสงทอง',
    category: 'Competencies',
    progress: 8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq46v_kF9GG8fE3Xu9fkzl9ne1FUCVTaQkCYcqFtPKiejNsDtWNej_cc7PcEEZPLaH4_to9MfHK2tsoi1cUEiaix4Cc7XzQ3WuLJh5AYLL7StksCV3AiL9yz1odLXH9TXbucfl-RsdsvlgXowindAUQSZ4Gngk2teha093vPdK54YqDuylSxYKqbZ4RXpxjqePd4GI9DZC0m3kRk2eLKX9nl-T_kmsU1TQ905oILPHAJ5FUyM3o-E',
    rating: 4.5,
    durationHours: 12,
    price: 950,
    description: 'ทำความเข้าใจองค์ประกอบของหลักสูตร ขั้นตอนการพัฒนา และเทคนิคการเขียนแผนการจัดการเรียนรู้'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    quote: 'จากที่เคยท้อใจกับการอ่านหนังสือเองคนเดียว พอมาเจอ Garden ทำให้การติวสนุกและเห็นภาพชัดเจนขึ้นมาก จนสอบติดลำดับที่ 1 ได้สำเร็จค่ะ',
    author: 'ครูพิมมี่',
    role: 'ครูผู้ช่วย สพป. เขต 1',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRV8A9js6Go2Kxi5QVHKuxreY7XwjMJVh9C9YRcWs7YLh3PFIjc6YglQKSUAOwV_hmBhC7i7u_iGapO-H-9AZ1cQae64db_qu6GW2wUxO39Mix1hBWRQiKB_fDErmx31x9lPts709GTKtNevyj8HJ6rnxudpufUQ9AN8fqLowv026qh07ptk79V7HjkYtvO2Ej_Q9Zkv9Mb6s0dlb33Fyxj9Je4gmWsfNdlSYCfHBvKWnekLXC8XY'
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    day: '21',
    month: 'พ.ย.',
    title: 'ติวเข้มภาษาอังกฤษ',
    time: '19:00 - 21:00 • อ.ส้ม',
    instructor: 'อ.ส้ม',
    opacity: false
  },
  {
    day: '22',
    month: 'พ.ย.',
    title: 'กฎหมายเบื้องต้น',
    time: '18:00 - 20:00 • อ.เก่ง',
    instructor: 'อ.เก่ง',
    opacity: true
  },
  {
    day: '24',
    month: 'พ.ย.',
    title: 'วิชาเอกปฐมวัย',
    time: '09:00 - 12:00 • อ.ฝน',
    instructor: 'อ.ฝน',
    opacity: true
  }
];

export const MOCK_QUIZZES: { [id: string]: Quiz } = {
  'law-12': {
    id: 'law-12',
    title: 'แบบฝึกหัดชุดที่ 12: กฎหมายการศึกษา',
    category: 'Law',
    durationMinutes: 45,
    questions: [
      {
        id: 1,
        text: 'ตาม พ.ร.บ. การศึกษาแห่งชาติ พ.ศ. 2542 "การศึกษาขั้นพื้นฐาน" หมายถึงการศึกษาก่อนระดับใด?',
        choices: [
          { key: 'ก', text: 'ก่อนระดับอุดมศึกษา' },
          { key: 'ข', text: 'ก่อนระดับอาชีวศึกษา' },
          { key: 'ค', text: 'ก่อนระดับปริญญาตรี' },
          { key: 'ง', text: 'ระดับมัธยมศึกษาตอนปลาย' }
        ],
        correctChoice: 'ก',
        explanation: 'ตามมาตรา 4 พ.ร.บ. การศึกษาแห่งชาติ พ.ศ. 2542 ระบุว่า "การศึกษาขั้นพื้นฐาน" หมายความว่า การศึกษาก่อนระดับอุดมศึกษา',
        category: 'กฎหมายการศึกษา'
      },
      {
        id: 2,
        text: 'การจัดการศึกษาในปัจจุบันต้องยึดหลักการใดเป็นสำคัญที่สุด?',
        choices: [
          { key: 'ก', text: 'ผู้เรียนทุกคนมีความสามารถเรียนรู้และพัฒนาตนเองได้ และถือว่าผู้เรียนมีความสำคัญที่สุด' },
          { key: 'ข', text: 'จัดตามงบประมาณที่ได้รับการจัดสรรจากส่วนกลาง' },
          { key: 'ค', text: 'ยึดความต้องการของตลาดแรงงานเป็นเกณฑ์สูงสุด' },
          { key: 'ง', text: 'การจัดหลักสูตรตามที่สถานศึกษาเห็นสมควร' }
        ],
        correctChoice: 'ก',
        explanation: 'มาตรา 22 การจัดการศึกษาต้องยึดหลักว่าผู้เรียนทุกคนมีความสามารถเรียนรู้และพัฒนาตนเองได้ และถือว่าผู้เรียนมีความสำคัญที่สุด กระบวนการจัดการศึกษาต้องส่งเสริมให้ผู้เรียนสามารถพัฒนาตามธรรมชาติและเต็มตามศักยภาพ',
        category: 'กฎหมายการศึกษา'
      },
      {
        id: 3,
        text: 'ระบบการจัดการศึกษามีกี่รูปแบบ อะไรบ้าง?',
        choices: [
          { key: 'ก', text: '2 รูปแบบ คือ ในระบบ และ นอกระบบ' },
          { key: 'ข', text: '3 รูปแบบ คือ ในระบบ นอกระบบ และตามอัธยาศัย' },
          { key: 'ค', text: '4 รูปแบบ คือ ในระบบ นอกระบบ ตามอัธยาศัย และตลอดชีวิต' },
          { key: 'ง', text: '2 รูปแบบ คือ การศึกษาขั้นพื้นฐาน และการศึกษาอุดมศึกษา' }
        ],
        correctChoice: 'ข',
        explanation: 'มาตรา 15 การจัดการศึกษามีสามรูปแบบ คือ การศึกษาในระบบ การศึกษานอกระบบ และการศึกษาตามอัธยาศัย',
        category: 'กฎหมายการศึกษา'
      },
      {
        id: 4,
        text: 'พระราชบัญญัติการศึกษาแห่งชาติ พ.ศ. 2542 ให้ความหมายของ "การศึกษา" ไว้ว่าอย่างไร?',
        choices: [
          { key: 'ก', text: 'กระบวนการเรียนรู้เพื่อความเจริญงอกงามของบุคคลและสังคม' },
          { key: 'ข', text: 'การถ่ายทอดความรู้ การฝึกอบรม การสืบสานทางวัฒนธรรม' },
          { key: 'ค', text: 'การเรียนรู้ตลอดชีวิตเพื่อยกระดับคุณภาพชีวิตของประชาชน' },
          { key: 'ง', text: 'สิทธิและโอกาสที่เท่าเทียมกันในการรับการศึกษาขั้นพื้นฐาน' }
        ],
        correctChoice: 'ก',
        explanation: 'ตามมาตรา 4 "การศึกษา" หมายความว่า กระบวนการเรียนรู้เพื่อความเจริญงอกงามของบุคคลและสังคม โดยการถ่ายทอดความรู้ การฝึกอบรม การสืบสนทางวัฒนธรรม การสร้างสรรค์จรรโลงความก้าวหน้าทางวิชาการ การสร้างองค์ความรู้อันเกิดจากการจัดสภาพแวดล้อม สังคมการเรียนรู้และปัจจัยเกื้อหนุนให้บุคคลเรียนรู้อย่างต่อเนื่องตลอดชีวิต',
        category: 'กฎหมายการศึกษา'
      },
      {
        id: 5,
        text: 'การศึกษาภาคบังคับตามพระราชบัญญัติการศึกษาภาคบังคับ พ.ศ. 2545 มีจำนวนกี่ปี?',
        choices: [
          { key: 'ก', text: '6 ปี' },
          { key: 'ข', text: '9 ปี' },
          { key: 'ค', text: '12 ปี' },
          { key: 'ง', text: '15 ปี' }
        ],
        correctChoice: 'ข',
        explanation: 'มาตรา 17 ของ พ.ร.บ. การศึกษาแห่งชาติ และ พ.ร.บ. การศึกษาภาคบังคับ พ.ศ. 2545 กำหนดให้การศึกษาภาคบังคับมีจำนวนเก้าปี',
        category: 'กฎหมายการศึกษา'
      },
      {
        id: 6,
        text: 'บอร์ดกระทรวงศึกษาธิการ หรือคณะกรรมการการศึกษาขั้นพื้นฐาน (กพฐ.) มีบทบาทหน้าที่หลักด้านใด?',
        choices: [
          { key: 'ก', text: 'กำหนดนโยบาย แผนพัฒนา และมาตรฐานการศึกษาขั้นพื้นฐาน' },
          { key: 'ข', text: 'จัดสรรงบประมาณเงินเดือนและสวัสดิการข้าราชการครู' },
          { key: 'ค', text: 'พิจารณาโทษทางวินัยของบุคลากรทางการศึกษาทั้งหมด' },
          { key: 'ง', text: 'ออกแบบสถาปัตยกรรมอาคารเรียนทั่วประเทศ' }
        ],
        correctChoice: 'ก',
        explanation: 'กพฐ. มีหน้าที่เสนอโยบาย แผนพัฒนา มาตรฐาน และหลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน',
        category: 'โครงสร้างกระทรวง'
      },
      {
        id: 7,
        text: 'ตาม พ.ร.บ. ระเบียบบริหารราชการกระทรวงศึกษาธิการ ใครเป็นผู้บังคับบัญชาสูงสุดของข้าราชการในกระทรวง?',
        choices: [
          { key: 'ก', text: 'ปลัดกระทรวงศึกษาธิการ' },
          { key: 'ข', text: 'รัฐมนตรีว่าการกระทรวงศึกษาธิการ' },
          { key: 'ค', text: 'เลขาธิการ กพฐ.' },
          { key: 'ง', text: 'ประธานกรรมการคุรุสภา' }
        ],
        correctChoice: 'ข',
        explanation: 'รัฐมนตรีว่าการกระทรวงศึกษาธิการเป็นผู้บังคับบัญชาสูงสุดในส่วนราชการกระทรวงศึกษาธิการ',
        category: 'โครงสร้างกระทรวง'
      },
      {
        id: 8,
        text: 'ใบอนุญาตประกอบวิชาชีพควบคุมของครูมีอายุกี่ปี และต้องดำเนินการต่ออายุล่วงหน้าก่อนหมดอายุกี่วัน?',
        choices: [
          { key: 'ก', text: 'อายุ 5 ปี, ต่ออายุล่วงหน้าไม่น้อยกว่า 180 วัน' },
          { key: 'ข', text: 'อายุ 3 ปี, ต่ออายุล่วงหน้าไม่น้อยกว่า 90 วัน' },
          { key: 'ค', text: 'อายุ 5 ปี, ต่ออายุล่วงหน้าไม่น้อยกว่า 90 วัน' },
          { key: 'ง', text: 'อายุ 3 ปี, ต่ออายุล่วงหน้าไม่น้อยกว่า 180 วัน' }
        ],
        correctChoice: 'ก',
        explanation: 'ใบอนุญาตประกอบวิชาชีพครูมีอายุ 5 ปี และต้องยื่นคำขอต่ออายุใบอนุญาตประกอบวิชาชีพควบคุมก่อนหมดอายุไม่น้อยกว่า 180 วัน',
        category: 'จรรยาบรรณและวิชาชีพ'
      },
      {
        id: 9,
        text: 'ข้อใดไม่ใช่ "จรรยาบรรณต่อผู้รับบริการ" ของครู?',
        choices: [
          { key: 'ก', text: 'รัก เมตตา เอาใจใส่ช่วยเหลือเกื้อกูลผู้รับบริการอย่างสม่ำเสมอ' },
          { key: 'ข', text: 'ส่งเสริมให้เกิดการเรียนรู้ ทักษะ และนิสัยที่ถูกต้องดีงาม' },
          { key: 'ค', text: 'ประพฤติตนเป็นแบบอย่างที่ดี ทั้งทางกาย วาจา และจิตใจ' },
          { key: 'ง', text: 'จัดหาทุนการศึกษาและสนับสนุนอาชีพให้กับผู้เรียนทุกคนเท่ากัน' }
        ],
        correctChoice: 'ง',
        explanation: 'การประพฤติตนเป็นแบบอย่างที่ดีเป็นจรรยาบรรณต่อตนเอง ส่วนรัก เมตตา เอาใจใส่ และส่งเสริมให้เกิดการเรียนรู้เป็นจรรยาบรรณต่อผู้รับบริการ สำหรับข้อ ง ไม่ได้ถูกกำหนดไว้ในจรรยาบรรณวิชาชีพ',
        category: 'จรรยาบรรณและวิชาชีพ'
      },
      {
        id: 10,
        text: 'โทษทางวินัยของข้าราชการครูและบุคลากรทางการศึกษาตาม พ.ร.บ.ระเบียบข้าราชการครูฯ มีกี่สถาน?',
        choices: [
          { key: 'ก', text: '3 สถาน คือ ภาคทัณฑ์ ตัดเงินเดือน ไล่ออก' },
          { key: 'ข', text: '4 สถาน คือ ภาคทัณฑ์ ภาคเสลด ลดขั้นเงินเดือน ปลดออก' },
          { key: 'ค', text: '5 สถาน คือ ภาคทัณฑ์ ทัณฑ์บน ตัดเงินเดือน ปลดออก ไล่ออก' },
          { key: 'ง', text: '5 สถาน คือ ภาคทัณฑ์ ตัดเงินเดือน ลดเงินเดือน ปลดออก ไล่ออก' }
        ],
        correctChoice: 'ง',
        explanation: 'โทษทางวินัยข้าราชการครูมี 5 สถาน คือ 1. ภาคทัณฑ์ 2. ตัดเงินเดือน 3. ลดเงินเดือน 4. ปลดออก 5. ไล่ออก',
        category: 'จรรยาบรรณและวิชาชีพ'
      }
    ]
  },
  'general-aptitude': {
    id: 'general-aptitude',
    title: 'แบบฝึกหัดชุดที่ 1: ความถนัดทั่วไป (General Aptitude)',
    category: 'Analysis',
    durationMinutes: 60,
    questions: [
      {
        id: 1,
        text: 'ข้อใดคือหลักเกณฑ์การประเมินวิทยฐานะข้าราชการครูและบุคลากรทางการศึกษาตาม ว14/2566?',
        choices: [
          { key: 'ก', text: 'การประเมินโดยเน้นผลสัมฤทธิ์ทางการเรียนของผู้เรียนเป็นหลัก' },
          { key: 'ข', text: 'การประเมินจากผลการปฏิบัติงานตามข้อตกลงในการพัฒนางาน (PA)' },
          { key: 'ค', text: 'การประเมินจากการทดสอบความรู้ทางวิชาการประจำปี' },
          { key: 'ง', text: 'การประเมินจากแฟ้มสะสมงานและเอกสารประกอบการสอน' }
        ],
        correctChoice: 'ข',
        explanation: 'หลักเกณฑ์ ว14/2566 เน้นประเมินผ่านข้อตกลงในการพัฒนางาน (Performance Agreement หรือ PA) ร่วมกับผลลัพธ์การเรียนรู้ของผู้เรียนที่เกิดจากการจัดการเรียนรู้ของครูจริง',
        category: 'วิชาชีพครู'
      },
      {
        id: 2,
        text: 'ถ้า "แดงรักสุนัข และสุนัขเกลียดแมว" ข้อใดต่อไปนี้เป็นความจริงสมเหตุสมผลสูงสุด?',
        choices: [
          { key: 'ก', text: 'แดงเกลียดแมวด้วย' },
          { key: 'ข', text: 'แดงรักสัตว์ที่เกลียดแมว' },
          { key: 'ค', text: 'สุนัขรักแดง' },
          { key: 'ง', text: 'ไม่สามารถสรุปได้ว่าแดงเกลียดหรือรักแมว' }
        ],
        correctChoice: 'ง',
        explanation: 'ข้อมูลเพียงพอบอกว่า แดงรักสุนัข และสุนัขเกลียดแมว แต่ไม่มีเงื่อนไขใดระบุถึงความสัมพันธ์ระหว่างแดงกับแมว จึงไม่สามารถสรุปข้อมูลของแดงต่อแมวได้',
        category: 'ตรรกศาสตร์'
      },
      {
        id: 3,
        text: 'Complete the sentence: "The newly hired teacher _______ extremely well in her presentation yesterday."',
        choices: [
          { key: 'ก', text: 'performing' },
          { key: 'ข', text: 'performed' },
          { key: 'ค', text: 'performs' },
          { key: 'ง', text: 'will perform' }
        ],
        correctChoice: 'ข',
        explanation: 'คำว่า "yesterday" บ่งบอกอดีต (Past Simple Tense) ดังนั้นคำกริยาที่ใช้ต้องเป็นกริยาช่องที่ 2 ซึ่งก็คือ performed',
        category: 'ภาษาอังกฤษ'
      }
    ]
  }
};
