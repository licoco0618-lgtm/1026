/**
 * 智光商工 115學年度第一學期 物理科第一次段考 全真試題與詳解資料庫
 * 試卷資訊：智光商工日間部 115學年度第一學期第一次段考 物理 試卷
 * 班級：資訊、機械、資處、電子科 一年仁班
 * 卷面成績：90 分（選擇 74 分 + 填充 16 分）
 */

const EXAM_DATA = {
  meta: {
    school: "智光商工日間部",
    semester: "115 學年度 第一學期 第一次段考",
    subject: "物理",
    classes: "資處、電子、資訊、機械科 一年級",
    studentScore: {
      choice: 74,
      fill: 16,
      total: 90,
      studentName: "李英慈",
      studentClass: "一年仁班",
      studentSeat: "3"
    },
    totalQuestions: 46, // 40選擇 + 6大題填充
    fullScore: 100
  },
  
  // 錯題清單（原卷被扣分題目）
  wrongQuestions: ["q4", "q16", "q18", "fill2", "fill6_2"],

  // 核心單元列表
  units: [
    { id: "all", name: "全部題目", count: 46 },
    { id: "wrong", name: "⚠️ 卷面扣分點 (5)", count: 5 },
    { id: "choice", name: "選擇題 (40)", count: 40 },
    { id: "fill", name: "填充題 (6)", count: 6 },
    { id: "unit-si", name: "度量與SI單位制", count: 12 },
    { id: "unit-kinematics", name: "運動學與等速度", count: 8 },
    { id: "unit-newton", name: "牛頓運動定律與力", count: 14 },
    { id: "unit-modern", name: "近代物理與宇宙學", count: 12 }
  ],

  // 選擇題 1~40
  questions: [
    {
      id: "q1",
      num: 1,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "近代物理學研究的對象有時小於原子或分子尺寸，用來描述微觀世界的物理現象。下列哪個學說屬於近代物理學？",
      options: [
        { label: "A", text: "力學" },
        { label: "B", text: "電磁學" },
        { label: "C", text: "光學" },
        { label: "D", text: "相對論" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 28.2, w: 90, h: 3.3 },
      concept: "古典物理學與近代物理學的分野",
      explanation: "20 世紀初之前建立的物理學稱為「古典物理學」，包括牛頓力學、熱力學、馬克士威電磁學與幾何/波動光學。20 世紀初發展出的「相對論」與「量子力學」專門用來解釋高速或微觀尺度（小於原子分子尺寸）之現象，稱為「近代物理學」。",
      trap: "很多同學會誤選電磁學或光學，但傳統電磁學與波動光學在 19 世紀末就已成熟，屬於古典物理範疇。"
    },
    {
      id: "q2",
      num: 2,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "下列哪個敘述，不是公制單位系統的特點？",
      options: [
        { label: "A", text: "科技研發成果易於表示" },
        { label: "B", text: "準確表達實驗測量結果" },
        { label: "C", text: "科學研究結論順利流通" },
        { label: "D", text: "符合世界各國風俗民情" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 31.5, w: 90, h: 3.2 },
      concept: "公制系統（SI制）建立的目的與特徵",
      explanation: "公制系統是為了消除世界各地傳統度量衡紊亂（如英制、台制、市制等地域風俗慣用單位）而制定的國際統一科學標準。公制具備十進位、定義精確、利於國際科研與貿易流通等優點，並非為了「順應迎合各國固有風俗民情」。",
      trap: "題目問的是「不是」公制特點。符合各國傳統民情的反而會導致單位不統一（例如美國仍常用英哩、華氏度）。"
    },
    {
      id: "q3",
      num: 3,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "國際單位制（SI制）中，溫度的單位為何？",
      options: [
        { label: "A", text: "℃" },
        { label: "B", text: "℉" },
        { label: "C", text: "K" },
        { label: "D", text: "°K" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 34.7, w: 90, h: 2.8 },
      concept: "國際單位制（SI）的七個基本單位",
      explanation: "國際單位制（SI）中溫度的基本單位是「克耳文」（Kelvin），其符號為大寫字母「K」。",
      trap: "注意克耳文符號為「K」，絕不能寫成「°K」或「℃」。攝氏（℃）是常見導出溫標，非 SI 基本單位。"
    },
    {
      id: "q4",
      num: 4,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "自北極經巴黎到赤道子午線長度的一千萬分之一，此敘述是下列何者最初期的定義？",
      options: [
        { label: "A", text: "公斤" },
        { label: "B", text: "公尺" },
        { label: "C", text: "秒" },
        { label: "D", text: "天文單位" }
      ],
      answer: "B",
      studentAnswer: "C",
      isStudentCorrect: false, // 卷面扣分點！
      hotspot: { x: 5, y: 37.5, w: 90, h: 2.8 },
      concept: "長度基本單位「公尺」的歷史由來",
      explanation: "1791 年法國科學院最初將「1 公尺」定義為：通過巴黎的子午線，由北極點沿地表到達赤道距離（即地球四分之一圓周）的一千萬分之一（1 / 10,000,000）。",
      trap: "【原卷扣分陷阱】卷面上學生初答寫了 C（秒），老師圈出正確答案 B。很多同學看到「一千萬分之一」容易誤聯想成時間單位的分割，請牢記這是公尺（meter）的原始地球測量定義。"
    },
    {
      id: "q5",
      num: 5,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "牛頓提出「萬有引力」的理論，驗證了哪位科學家的學說？",
      options: [
        { label: "A", text: "克卜勒" },
        { label: "B", text: "伽利略" },
        { label: "C", text: "虎克" },
        { label: "D", text: "惠更斯" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 40.3, w: 90, h: 2.8 },
      concept: "萬有引力定律與克卜勒行星運動定律之關聯",
      explanation: "克卜勒歸納觀測數據提出了行星運動三大定律（軌道定律、等面積定律、週期定律），但未能解釋背後原因。牛頓發表萬有引力定律（F = G M m / r²），成功以萬有引力在數學上精確推導出克卜勒三大定律，完成天文物理的大一統。",
      trap: "伽利略提出的是慣性與自由落體實驗；虎克提出了彈簧彈力定律；惠更斯則是提出光的波動說。"
    },
    {
      id: "q6",
      num: 6,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列哪一個學說是牛頓所提出來的？",
      options: [
        { label: "A", text: "布丁原子模型" },
        { label: "B", text: "慣性定律" },
        { label: "C", text: "黑體輻射" },
        { label: "D", text: "相對論" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 43.1, w: 90, h: 2.8 },
      concept: "牛頓三大運動定律與物理學史",
      explanation: "牛頓三大運動定律第一定律即為「慣性定律」（物體不受外力或合力為零時，靜者恆靜，動者恆作等速度直線運動）。(A)布丁模型由湯姆森提出；(C)黑體輻射量子假說由普朗克提出；(D)相對論由愛因斯坦提出。",
      trap: "雖然伽利略最早提出慣性實驗概念，但將其體系化確立為運動基本第一定律的正是牛頓。"
    },
    {
      id: "q7",
      num: 7,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "近代物理發展的兩大基石為相對論及何者？",
      options: [
        { label: "A", text: "量子力學" },
        { label: "B", text: "牛頓三大運動定律" },
        { label: "C", text: "電磁學" },
        { label: "D", text: "克卜勒行星定律" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 45.9, w: 90, h: 2.8 },
      concept: "20世紀近代物理兩大支柱",
      explanation: "近代物理學的兩大核心支柱是「愛因斯坦的相對論」（描述極大、極高速宏觀時空）與「量子力學」（描述極小、微觀原子分子尺度）。",
      trap: "牛頓定律、古典電磁學與克卜勒定律皆屬於 19 世紀以前的古典物理學範疇。"
    },
    {
      id: "q8",
      num: 8,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "提出相對論的科學家是？",
      options: [
        { label: "A", text: "普朗克" },
        { label: "B", text: "牛頓" },
        { label: "C", text: "愛因斯坦" },
        { label: "D", text: "伽利略" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 48.7, w: 90, h: 2.8 },
      concept: "相對論創立者",
      explanation: "阿爾伯特・愛因斯坦（Albert Einstein）於 1905 年發表狹義相對論，隨後於 1915 年發表廣義相對論，徹底革新了人類對時間、空間與重力的認知。",
      trap: "普朗克是提出能量量子化的量子論之父，牛頓是古典力學集大成者。"
    },
    {
      id: "q9",
      num: 9,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "下列何者是電流的單位？",
      options: [
        { label: "A", text: "庫侖" },
        { label: "B", text: "伏特" },
        { label: "C", text: "安培" },
        { label: "D", text: "歐姆" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 51.5, w: 90, h: 2.8 },
      concept: "電學物理量與 SI 單位",
      explanation: "電流（I）的 SI 基本單位是「安培」（Ampere，簡稱 A）。庫侖（C）是電量單位；伏特（V）是電壓（電位差）單位；歐姆（Ω）是電阻單位。",
      trap: "常有學生搞混庫侖與安培：1 安培 = 1 庫侖 / 秒（I = Q / t）。"
    },
    {
      id: "q10",
      num: 10,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "地球的圓周長約為多少公尺？",
      options: [
        { label: "A", text: "三億" },
        { label: "B", text: "一億" },
        { label: "C", text: "四千萬" },
        { label: "D", text: "一千萬" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 54.3, w: 90, h: 2.8 },
      concept: "地球圓周長與公尺歷史定義之關係",
      explanation: "公尺最初定義為北極經巴黎到赤道長度的一千萬分之一，此長度代表地球圓周的 1/4（四分之一圓周為 1,000 萬公尺 = 10,000 公里）。因此地球整個圓周約為 4 × 1,000 萬 = 4,000 萬公尺（約 40,000 公里 = 4 × 10^7 m）。",
      trap: "一千萬公尺是「赤道到北極點的弧長」，整個圓周要乘上 4，得出四千萬公尺。"
    },
    {
      id: "q11",
      num: 11,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "「光年」是哪一個物理量的單位？",
      options: [
        { label: "A", text: "長度" },
        { label: "B", text: "質量" },
        { label: "C", text: "時間" },
        { label: "D", text: "體積" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 57.1, w: 90, h: 2.8 },
      concept: "天文常用單位「光年」",
      explanation: "「光年」（light-year）是指光在真空中前進一年所行經的「距離（長度）」，約等於 9.46 × 10^15 公尺。其本質為長度單位，不是時間單位。",
      trap: "名字中有「年」，極易誤認為時間單位，是段考必考高頻陷阱題。"
    },
    {
      id: "q12",
      num: 12,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "目前國際單位制的基本單位量有多少個？",
      options: [
        { label: "A", text: "4" },
        { label: "B", text: "5" },
        { label: "C", text: "6" },
        { label: "D", text: "7" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 59.9, w: 90, h: 2.8 },
      concept: "國際單位制（SI）的七個基本物理量",
      explanation: "目前 SI 制共規定了 7 個基本物理量與基本單位：長度(m)、質量(kg)、時間(s)、電流(A)、熱力學溫度(K)、物質的量(mol)、發光強度(cd)。其餘所有物理量皆由此七者衍生導出。",
      trap: "口訣記憶：「長質時電溫物光」共 7 個。"
    },
    {
      id: "q13",
      num: 13,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "長度的基本單位量為何？",
      options: [
        { label: "A", text: "公分" },
        { label: "B", text: "公尺" },
        { label: "C", text: "公里" },
        { label: "D", text: "毫米" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 62.7, w: 90, h: 2.8 },
      concept: "長度的 SI 基本單位",
      explanation: "國際單位制（SI）規定長度的基本單位是「公尺」（meter，符號為 m）。公分(cm)、公里(km)、毫米(mm)皆為帶有十進位前綴詞的衍生單位。",
      trap: "注意公分(cm)是 CGS 制的基本長度單位，而在現代標準 SI 制中是公尺(m)。"
    },
    {
      id: "q14",
      num: 14,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "下列何者不是長度單位？",
      options: [
        { label: "A", text: "光年" },
        { label: "B", text: "天文單位" },
        { label: "C", text: "角秒" },
        { label: "D", text: "埃" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 65.5, w: 90, h: 2.8 },
      concept: "常見長度單位與角度單位區分",
      explanation: "「角秒」（arcsecond，符號 ''）是平面角度單位（1度 = 60角分 = 3600角秒）。(A)光年(約9.46×10^15 m)、(B)天文單位AU(日地平均距離約1.5×10^11 m)、(D)埃Å(10^-10 m)皆為長度單位。",
      trap: "注意「角秒」是角度，而「秒差距」（parsec, pc）才是天文長度單位（以日地距離張開 1 角秒對應之距離，約 3.26 光年）。"
    },
    {
      id: "q15",
      num: 15,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "若光在真空中一秒鐘可以前進 a 公尺，則下列何者可用來表達光年的定義？",
      options: [
        { label: "A", text: "24×365×a" },
        { label: "B", text: "86400×365×a" },
        { label: "C", text: "60×365×a" },
        { label: "D", text: "86400×24×a" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 68.3, w: 90, h: 3.5 },
      concept: "光年計算：光速 × 一年的總秒數",
      explanation: "距離 = 速率 × 時間。光速每秒 a 公尺。一年有 365 天，一天有 24 小時 = 24 × 60 × 60 = 86400 秒。因此一年的總秒數為 86400 × 365 秒。光前進一年之總長度即為 86400 × 365 × a 公尺。",
      trap: "常見粗心算錯一天的秒數（86400秒），選項 A 漏掉了每小時 3600 秒的乘數。"
    },
    {
      id: "q16",
      num: 16,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "組成原子核的粒子為何？",
      options: [
        { label: "A", text: "帶正電的質子與帶正電的中子" },
        { label: "B", text: "帶正電的質子與不帶電的中子" },
        { label: "C", text: "不帶電的質子與帶正電的中子" },
        { label: "D", text: "不帶電的質子與不帶電的中子" }
      ],
      answer: "B",
      studentAnswer: "D",
      isStudentCorrect: false, // 卷面扣分點！
      hotspot: { x: 5, y: 71.8, w: 90, h: 3.8 },
      concept: "原子核的組成粒子與電性",
      explanation: "原子核位於原子中心，由「質子」與「中子」結合而成。其中質子帶基本正電荷（+1e），中子不帶電（電中性）。",
      trap: "【原卷扣分陷阱】卷面上原先被記了錯（學生原選 D 或未注意中子電性），老師在左側以紅筆批改註記正確答案 B。請牢記：質子必帶正電，中子不帶電！"
    },
    {
      id: "q17",
      num: 17,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "一奈米為多少公尺？",
      options: [
        { label: "A", text: "10^-9" },
        { label: "B", text: "10^-8" },
        { label: "C", text: "10^-10" },
        { label: "D", text: "10^-7" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 75.6, w: 90, h: 2.8 },
      concept: "SI 詞頭（Prefix）：nano 奈米",
      explanation: "國際單位制前綴中，微（micro, μ）為 10^-6，奈（nano, n）為 10^-9，皮（pico, p）為 10^-12。因此 1 nm = 10^-9 m。",
      trap: "10^-10 m 為「埃」（Ångström, Å），千萬不要將 10^-9 與 10^-10 混淆。"
    },
    {
      id: "q18",
      num: 18,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "任何物體的溫度都不可能無限制地降低，必有一個最低的極限，此最低溫度為？",
      options: [
        { label: "A", text: "0 K" },
        { label: "B", text: "273.15 K" },
        { label: "C", text: "273.15 ℃" },
        { label: "D", text: "0 ℉" }
      ],
      answer: "A",
      studentAnswer: "B",
      isStudentCorrect: false, // 卷面扣分點！
      hotspot: { x: 5, y: 78.4, w: 90, h: 2.8 },
      concept: "熱力學絕對零度（Absolute Zero）",
      explanation: "理論上粒子熱運動能量達到理論最低限度的溫度稱為「絕對零度」，其數值為 0 K（相當於攝氏 -273.15 ℃）。物體之熱力學溫度不可能低於 0 K。",
      trap: "【原卷扣分陷阱】學生卷面上填了 B（273.15 K），老師在題號左側以紅筆改為 A。273.15 K 是水的冰點（0 ℃），絕對零度是「0 K」或「-273.15 ℃」，同學常因死記 273.15 而忽略符號與單位。"
    },
    {
      id: "q19",
      num: 19,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "將一顆球垂直向上拋出，當球到達最高點時，物體的狀態為何？",
      options: [
        { label: "A", text: "速度不為零，加速度為零" },
        { label: "B", text: "速度為零，加速度不為零" },
        { label: "C", text: "速度與加速度都是零" },
        { label: "D", text: "速度與加速度都不為零" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 81.2, w: 90, h: 3.8 },
      concept: "鉛直上拋最高點的瞬時狀態分析",
      explanation: "鉛直上拋運動中，球在最高點轉折的瞬間「瞬時速度 v = 0」；但由於球仍受到地球向下的重力（W = mg）持續作用，依據牛頓第二定律 F = ma，加速度始終維持向下 g = 9.8 m/s² 不為零。",
      trap: "極多學生誤以為「速度為零時加速度也一定是零」（誤選 C）。若加速度也是零，球就會永遠停滯在空中！"
    },
    {
      id: "q20",
      num: 20,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "某人在十樓窗口把A物向上拋出，把B物向前拋出，把C物向下拋出，則三物離手後，不計空氣阻力，何者加速度較大？",
      options: [
        { label: "A", text: "A" },
        { label: "B", text: "B" },
        { label: "C", text: "C" },
        { label: "D", text: "三者相同" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 85.0, w: 90, h: 3.8 },
      concept: "重力加速度與初速度無關性",
      explanation: "只要物體脫離手後（飛行空中時），在不計空氣阻力的理想狀況下，物體所受的唯一外力均為向下的重力 mg。依據 F = ma 可得 a = g（約 9.8 m/s² 向下），不論初速度向上、水平拋出或向下拋出，三者離手後的加速度完全相同。",
      trap: "常有學生直覺認為「向下拋用力推」加速度比較大，請注意「離手後」就不再受手施力，只受重力。"
    },
    {
      id: "q21",
      num: 21,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "下列有關等速度運動的敘述，何者錯誤？",
      options: [
        { label: "A", text: "任何時刻瞬時速度均相等" },
        { label: "B", text: "可作圓周運動" },
        { label: "C", text: "其運動為直線運動" },
        { label: "D", text: "其瞬時速度等於平均速度" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 88.8, w: 90, h: 3.4 },
      concept: "「等速度運動」的嚴格定義",
      explanation: "速度是「向量」，同時包含大小（速率）與方向。等速度運動要求速度的「大小不變且方向恆定不變」，因此其軌跡必定為直線運動，且任意時刻的瞬時速度必等於全程平均速度。而圓周運動的方向每時每刻都在改變，必定存在向心加速度，屬於加速度運動，絕不能作圓周運動。",
      trap: "切勿混淆「等速率圓周運動」與「等速度運動」！等速率圓周運動速率雖然相等，但速度方向一直改變，不是等速度運動。"
    },
    {
      id: "q22",
      num: 22,
      type: "choice",
      page: "front",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "一名傘兵在 t=0 時，從停留於空中不動的直升機跳下，落下劃開降落傘。下表為該名傘兵鉛直下落的速率與時間關係，推測降落傘可能在什麼時候張開的？\n時間 t (秒): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9\n速率 (m/s): 0 | 9.3 | 19.4 | 28.5 | 21.6 | 15.2 | 11.7 | 9.3 | 9.3 | 9.3",
      options: [
        { label: "A", text: "2秒到3秒間" },
        { label: "B", text: "3秒到4秒間" },
        { label: "C", text: "4秒到5秒間" },
        { label: "D", text: "5秒到6秒間" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 92.2, w: 90, h: 5.8 },
      concept: "下落運動與空氣阻力（終端速率）數據分析",
      explanation: "觀察表中數據：\n・t = 0 到 3 秒時，下落速率隨時間持續增加（0 → 9.3 → 19.4 → 28.5 m/s），處於向下加速自由下落階段。\n・t = 3 秒（28.5 m/s）到 4 秒（21.6 m/s）時，下落速率突然出現首次大幅劇減，代表受到降落傘巨大阻力產生向上的淨加速度減速。\n因此，降落傘必定是在「3 秒到 4 秒間」張開的。",
      trap: "有同學會看到後面 7~9 秒維持 9.3 m/s，那是降落傘張開減速後達到的「終端速率」，並不是剛張開的時間點。"
    },

    // 背面題目 (23~40)
    {
      id: "q23",
      num: 23,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "下列物理量，何者為向量？",
      options: [
        { label: "A", text: "質量" },
        { label: "B", text: "密度" },
        { label: "C", text: "加速度" },
        { label: "D", text: "溫度" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 8.8, w: 90, h: 3.0 },
      concept: "純量（標量）與向量（矢量）的分野",
      explanation: "物理量依是否有方向分為：\n1. 純量（Scalar）：只有大小沒有方向，如質量、密度、溫度、路徑長、時間、功、能量。\n2. 向量（Vector）：同時具備大小與方向，如加速度、速度、位移、力、動量。因此加速度是向量。",
      trap: "注意「溫度」雖然有正負號（如 -10℃），但正負代表高低數值，並不是空間中的方向，依然是純量。"
    },
    {
      id: "q24",
      num: 24,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列敘述何者正確？",
      options: [
        { label: "A", text: "只要大小相等，方向相反的兩力，都是互為一對作用力與反作用力" },
        { label: "B", text: "磁力可能不遵守作用力與反作用力定律" },
        { label: "C", text: "對外力作用而言，作用力與反作用力可以抵消" },
        { label: "D", text: "噴射機的飛行原理是藉空氣之反作用力" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 11.8, w: 90, h: 3.8 },
      concept: "牛頓第三運動定律與反作用力推進原理",
      explanation: "噴射機與火箭推進皆基於牛頓第三運動定律（作用力與反作用力）及動量守恆：噴射引擎向後強力高速噴出大量高溫燃氣（施力於氣體），被噴出的氣體便對噴射機施予大小相等、方向向前的反作用力，推動飛機前進。\n(A)作用力反作用力必須作用於「不同物體」，且性質相同；(B)磁力、電力、重力皆嚴格遵守牛三；(C)作用力與反作用力分別施於兩個不同物體，絕不能相互抵消。",
      trap: "選項 C 是高頻死記陷阱，兩力平衡才能抵消（作用於同一受力體），作用反作用力在不同物體上不能抵消。"
    },
    {
      id: "q25",
      num: 25,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列有關牛頓第一運動定律何者正確？",
      options: [
        { label: "A", text: "物體的加速度與質量成反比" },
        { label: "B", text: "作用力與反作用力大小相等，方向相反" },
        { label: "C", text: "當物體發生形變時，一定受到外力作用" },
        { label: "D", text: "物體不受外力作用時，靜者恆靜，動者恆作等速直線運動" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 15.6, w: 90, h: 3.8 },
      concept: "牛頓第一運動定律（慣性定律）內容",
      explanation: "牛頓第一運動定律指出：物體不受外力作用或所受合外力為零時，原本靜止的物體將維持靜止，原本運動的物體將維持等速度直線運動。\n(A)是牛頓第二運動定律 (a = F/m)；(B)是牛頓第三運動定律。",
      trap: "務必能清晰分辨第一（慣性）、第二（F=ma）、第三（作用力反作用力）之定義文字。"
    },
    {
      id: "q26",
      num: 26,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列何者是接觸力？",
      options: [
        { label: "A", text: "磁力" },
        { label: "B", text: "重力" },
        { label: "C", text: "靜電力" },
        { label: "D", text: "空氣阻力" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 19.4, w: 90, h: 2.8 },
      concept: "接觸力與超距力（非接觸力）分類",
      explanation: "力的形式依是否需要物體表面接觸分為：\n1. 超距力（非接觸力）：重力、靜電力、磁力，可在真空或有距離之間透過「場」傳遞。\n2. 接觸力：必須有物理接觸才能產生，例如摩擦力、彈力、正向力、空氣阻力（物體撞擊空氣分子所生之阻力）。因此空氣阻力為接觸力。",
      trap: "空氣雖然肉眼看不見，但物體在空氣中運動時會與空氣分子發生微觀物理碰撞，因此空氣阻力是接觸力。"
    },
    {
      id: "q27",
      num: 27,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列有關重力的敘述，何者不正確？",
      options: [
        { label: "A", text: "同一物體在高山上的重量比平地大" },
        { label: "B", text: "同一物體在南極的重量比赤道大" },
        { label: "C", text: "物體在空中自由落下時重量為零" },
        { label: "D", text: "同一物體在地球的重量比月球大" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 22.2, w: 90, h: 3.5 },
      concept: "萬有引力公式與重量在地球各處之變化",
      explanation: "物體所受重力（重量）W = G M m / r²。高山離地心距離 r 較大，所受重力反而變小，因此高山上的重量比平地小，故 (A) 敘述錯誤。\n補充：地球非正球體，兩極半徑較赤道小且無自轉離心力減重，因此南極重力大於赤道；月球質量較小，表面重力約僅為地球的 1/6。",
      trap: "注意題目問的是「不正確」的選項。在空中自由落下時磅秤讀數（視重）為零，呈現失重狀態。"
    },
    {
      id: "q28",
      num: 28,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "一孩童坐在等速度運行的公車上，向上直拋一球，球將落在何處？",
      options: [
        { label: "A", text: "其前方" },
        { label: "B", text: "其後方" },
        { label: "C", text: "正落於其手中" },
        { label: "D", text: "不一定" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 25.7, w: 90, h: 2.8 },
      concept: "水平方向慣性速度獨立性",
      explanation: "孩童與公車一同作等速度直線運動。當球向上拋出的瞬間，球在水平方向上已經具有與公車完全相同的水平速度。在空中飛行時，水平方向不受外力作用（維持等速運動），因此球與孩童在水平方向始終前進相同距離，球垂直上下後剛好正落回手中。",
      trap: "若公車「加速」，球會落在後方；若公車「減速」，球會落在前方；題幹強調「等速度運行」，必定落回手中。"
    },
    {
      id: "q29",
      num: 29,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列有關力與運動的敘述，何者正確？",
      options: [
        { label: "A", text: "物體受力時，速率一定改變" },
        { label: "B", text: "物體速度改變時，一定受到力的作用" },
        { label: "C", text: "物體所受的合力方向與速度同向" },
        { label: "D", text: "物體的瞬時速度為0時，所受的合力也是0" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 28.5, w: 90, h: 3.5 },
      concept: "力的本質：改變運動狀態（速度）的原因",
      explanation: "依牛頓第二運動定律 F_net = m a，速度改變代表存在加速度 (a ≠ 0)，因此物體必受到合外力作用，(B) 正確。\n(A)等速率圓周運動受向心力，但速率不變（只有方向改變）；(C)合力方向決定的是「加速度」方向，不一定與速度同向（如減速時兩者反向）；(D)鉛直上拋最高點速度為0，但合力仍是重力 mg ≠ 0。",
      trap: "牢記：力不是維持運動的原因，力是「改變運動狀態（速度大小或方向）」的原因。"
    },
    {
      id: "q30",
      num: 30,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "把一物體由地面移至高空中時，物體的質量與重量如何變化？",
      options: [
        { label: "A", text: "質量不變，重量漸減" },
        { label: "B", text: "質量漸減，重量不變" },
        { label: "C", text: "質量與重量均不變" },
        { label: "D", text: "質量與重量均漸減" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 32.0, w: 90, h: 3.2 },
      concept: "質量（物理量內在屬性）與重量（引力受力）之差別",
      explanation: "・質量（m）：物體內含物質的多寡，屬於物體本身的固有屬性，不隨物體所在位置改變而改變（質量不變）。\n・重量（W = mg）：物體所受的萬有引力大小。移至高空時離地心半徑增大，重力加速度 g 變小，故重量漸減。",
      trap: "日常口語常混用質量與重量（如體重秤量出公斤），但在物理學上質量單位是 kg，重量是力，單位是 N 或 kgw。"
    },
    {
      id: "q31",
      num: 31,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "倘若摩托車與砂石車正面相撞，則下列何者正確？",
      options: [
        { label: "A", text: "兩車受力大小相同，加速度大小相同" },
        { label: "B", text: "兩車受力大小相同，但摩托車的加速度大小較大" },
        { label: "C", text: "摩托車受力大小較大，加速度大小較大" },
        { label: "D", text: "摩托車受力大小較小，加速度大小也較小" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 35.2, w: 90, h: 3.8 },
      concept: "作用力與反作用力結合牛頓第二定律",
      explanation: "碰撞瞬間兩車之間的交互作用力互為「作用力與反作用力」，依牛頓第三定律，砂石車撞摩托車的力 = 摩托車撞砂石車的力，兩車受力「大小必相等」。\n但依牛頓第二定律 a = F / m，摩托車質量 m 遠小於砂石車，因此在受到相同力 F 衝擊下，摩托車產生的加速度（減速衝擊變化率）遠大於砂石車。",
      trap: "生活直覺常誤認為「誰撞壞得慘，誰受力就比較大」，受力是一樣大的，損害慘烈是因為加速度 a 巨大！"
    },
    {
      id: "q32",
      num: 32,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "下列有關摩擦力的敘述，何者錯誤？",
      options: [
        { label: "A", text: "摩擦力與兩接觸面間的正壓力有關" },
        { label: "B", text: "摩擦力與接觸面間濕潤程度有關" },
        { label: "C", text: "摩擦力與接觸面光滑程度有關" },
        { label: "D", text: "摩擦力與兩物體間的接觸面積大小有關" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 39.0, w: 90, h: 3.5 },
      concept: "庫侖摩擦定律與影響摩擦力的因素",
      explanation: "由摩擦力公式 f = μ N（μ 為接觸面摩擦係數，N 為垂直正壓力）可知：\n1. 摩擦力與垂直接觸面之正壓力 N 成正比；\n2. 摩擦係數 μ 取決於接觸面性質（粗糙/光滑程度、材質、是否有水分或潤滑油濕潤）。\n3. 在一般固體接觸條件下，摩擦力與外觀「接觸面積大小無關」（面積增大時，微觀接觸點的壓強相應減小，總阻力不變）。因此 (D) 敘述錯誤。",
      trap: "題幹問「何者錯誤」。初學者往往直觀以為接觸面積越大摩擦力越大，請牢記庫侖摩擦定律中無面積項。"
    },
    {
      id: "q33",
      num: 33,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "任何兩物體間皆有一種相互吸引的力，此種力稱為？",
      options: [
        { label: "A", text: "萬有引力" },
        { label: "B", text: "磁力" },
        { label: "C", text: "熱力" },
        { label: "D", text: "靜電力" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 42.5, w: 90, h: 2.8 },
      concept: "萬有引力（Gravitation）定義",
      explanation: "牛頓提出宇宙間任何具有質量的物體之間，都存在著相互吸引的力，此力稱為「萬有引力」（重力），其大小與兩物體質量乘積成正比，與兩者距離平方成反比。",
      trap: "靜電力有吸引力也有排斥力，且需要帶電荷；萬有引力則是「任何具質量的物體」且「只有吸引力」。"
    },
    {
      id: "q34",
      num: 34,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "現在科學界普遍認為宇宙處於高溫高密度的狀態下且是在大爆炸後形成的，此為何種理論的主要內容？",
      options: [
        { label: "A", text: "萬有引力" },
        { label: "B", text: "自由落體" },
        { label: "C", text: "慣性" },
        { label: "D", text: "大霹靂" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 45.3, w: 90, h: 3.2 },
      concept: "宇宙起源的大霹靂模型（Big Bang Theory）",
      explanation: "「大霹靂理論」（Big Bang）是當前描述宇宙演化的主流科學模型。理論認為宇宙起源於約 138 億年前一個具有極高溫度與密度的奇異點，隨後發生急遽膨脹冷卻，逐漸形成原子、恆星與星系。",
      trap: "名詞辨析題，大爆炸在台灣物理課本標準譯名常稱為「大霹靂理論」。"
    },
    {
      id: "q35",
      num: 35,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "如右圖，球由左邊下滑，若不計任何阻力，則球到達右邊斜坡的高度大小為？",
      options: [
        { label: "A", text: "甲＞乙＞丙" },
        { label: "B", text: "甲＜乙＜丙" },
        { label: "C", text: "甲＝乙＝丙" },
        { label: "D", text: "甲＜乙＝丙" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 48.5, w: 90, h: 3.8 },
      concept: "伽利略斜面理想實驗與力學能守恆",
      explanation: "本題為物理史上著名的「伽利略雙斜面理想實驗」。在不計任何摩擦與空氣阻力下，物體在下滑與上升過程中遵守「力學能守恆」（重力位能與動能互相轉換）。球自高度 h 釋放後，動能為零；當球在右邊斜坡（甲、乙、丙不同傾角）上升到瞬時速度為零的最高點時，其重力位能必定回復到與出發點相同，因此垂直高度必為 甲 = 乙 = 丙。",
      trap: "傾角越平緩（如丙），沿斜坡滾動的「斜邊路徑長」越長，但「垂直上升高度」三者完全相同！千萬別混淆路徑與垂直高度。"
    },
    {
      id: "q36",
      num: 36,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "小智觀察下列現象，哪一個不是作用力與反作用力的概念運用？",
      options: [
        { label: "A", text: "青蛙向後蹬" },
        { label: "B", text: "火箭升空" },
        { label: "C", text: "用力投球" },
        { label: "D", text: "用槳划船，使船前進" }
      ],
      answer: "C",
      studentAnswer: "C",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 52.3, w: 90, h: 3.2 },
      concept: "作用力與反作用力（推進運動）之日常應用",
      explanation: "(A)青蛙腳向後蹬水/地，水/地給青蛙向前的反作用力向前躍進；\n(B)火箭向下噴射高壓氣體，氣體反作用力推動火箭向上飛；\n(D)划槳向後推水，水對槳施加向前的反作用力推船前進。\n三者都是藉由向後推動介質以獲取前進「反作用力」的典型推進範例。(C)用力投球是手施力使球加速飛出，是外力改變球的運動狀態，並非靠反作用力使人移動的推進設計。",
      trap: "注意題幹要求選出「不是」作用力與反作用力之推進應用的項目。"
    },
    {
      id: "q37",
      num: 37,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "有關靜電力和磁力的敘述，下列何者正確？",
      options: [
        { label: "A", text: "前者僅有排斥力" },
        { label: "B", text: "後者僅有吸引力" },
        { label: "C", text: "兩力僅有排斥力" },
        { label: "D", text: "兩力有吸引力及排斥力" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 55.5, w: 90, h: 3.2 },
      concept: "電磁力的基本性質：引力與斥力",
      explanation: "・靜電力：同性電荷相斥（正正、負負），異性電荷相吸（正負），兼具吸引力與排斥力。\n・磁力：同名磁極相斥（N-N、S-S），異名磁極相吸（N-S），兼具吸引力與排斥力。\n因此靜電力與磁力兩者皆擁有吸引力與排斥力。",
      trap: "宇宙四種基本作用力中，只有「萬有引力」僅有吸引力沒有排斥力；電磁力則兩種力皆有。"
    },
    {
      id: "q38",
      num: 38,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "下列哪一種原子在最低與次低能階躍遷時，輻射電磁波振動週期的 9,192,631,770 倍所經歷的時間為 1 秒？",
      options: [
        { label: "A", text: "銫－133" },
        { label: "B", text: "氡－86" },
        { label: "C", text: "氫－40" },
        { label: "D", text: "釙－210" }
      ],
      answer: "A",
      studentAnswer: "A",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 58.7, w: 90, h: 3.5 },
      concept: "國際單位制時間「秒」的現代精確原子鐘定義",
      explanation: "1967 年國際度量衡大會將時間的基本單位「秒」（second, s）嚴格定義為：銫-133（Cesium-133, Cs-133）原子基態的兩個超精細能階躍遷所對應輻射電磁波週期的 9,192,631,770 倍之持續時間。",
      trap: "銫-133 原子鐘是全球標準時間 UTC 的基準，常考代表同位素是 133。"
    },
    {
      id: "q39",
      num: 39,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-newton",
      categoryName: "牛頓運動定律與力",
      question: "臺北101大樓為世界排名前列的高樓之一，某人從地面坐高速電梯加速上升最後停在89樓的觀景臺，這段時間此人的重量變化為何？",
      options: [
        { label: "A", text: "只有增加" },
        { label: "B", text: "只有減少" },
        { label: "C", text: "先減少後增加" },
        { label: "D", text: "先增加後減少" }
      ],
      answer: "D",
      studentAnswer: "D",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 62.2, w: 90, h: 3.5 },
      concept: "電梯運動中的超重與失重（視重變化）",
      explanation: "磅秤讀數或人體感受的重量為支撐正向力 N（視重）：\n1. 【啟動加速上升】：電梯由靜止向上加速，加速度 a 向上。依牛頓第二定律 N - mg = ma ⇒ N = m(g + a) > mg，此時視重增加（超重現象）。\n2. 【中間等速上升】：a = 0，N = mg，視重等於實際重力。\n3. 【接近89樓減速上升】：即將停止時向上運動速度變慢，加速度 a 向下。依 mg - N = ma ⇒ N = m(g - a) < mg，此時視重減小（失重現象）。\n因此全程感受到的重量變化為「先增加後減少」。",
      trap: "常有學生只想到「人在往上升高度變高所以重力一直減少」，但電梯升降的主要影響是垂直運動加速度帶來的超重與失重效應！"
    },
    {
      id: "q40",
      num: 40,
      type: "choice",
      page: "back",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "有關位移與路徑長的說明，下列敘述何者是正確的？",
      options: [
        { label: "A", text: "只要物體的運動軌跡是直線，則位移大小與路徑長的大小相同" },
        { label: "B", text: "路徑長就是物體實際運動的總距離" },
        { label: "C", text: "位移具大小，但不具有方向性" },
        { label: "D", text: "路徑長具大小，且具有方向性" }
      ],
      answer: "B",
      studentAnswer: "B",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 65.7, w: 90, h: 3.5 },
      concept: "位移（向量）與路徑長（純量）之比較",
      explanation: "・路徑長（Distance）：物體實際運動軌跡的總長度，為純量（只有大小、沒有方向，必大於或等於零），(B) 正確。\n・位移（Displacement）：由起點指向終點的有向線段，為向量（兼具大小與方向），(C) 錯誤。\n・(A)錯誤原因：若直線運動中有「轉向或折返」，例如向前走 5 公尺再向後走 3 公尺，路徑長為 8 公尺，但位移大小僅為 2 公尺，兩者不相等（只有單向不折返直線運動才相等）。",
      trap: "直線運動只要有「回頭折返」，路徑長就一定大於位移大小，千萬不能忽略折返的可能性。"
    }
  ],

  // 填充題（共 10 格，每格 2 分，卷面得分 16 分）
  fillQuestions: [
    {
      id: "fill1",
      num: "填 1",
      type: "fill",
      page: "back",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "用來維持原子核穩定的作用力為 ________。",
      answer: "核力（或 強核力 / 強作用力）",
      studentAnswer: "核力",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 72.8, w: 90, h: 2.8 },
      concept: "自然界四種基本交互作用：強核力",
      explanation: "原子核中帶正電的質子之間存在極為強大的庫侖靜電排斥力。原子核之所以能緊密結合不潰散，是由於核子（質子與中子）之間存在著強度遠大於電磁力的「強核力」（又稱核力，Strong Nuclear Force），在極短距離內提供強大吸引力維持原子核穩定。",
      trap: "重力在原子核尺度微弱到可以忽略，能抗衡靜電斥力的唯有強核力。"
    },
    {
      id: "fill2",
      num: "填 2",
      type: "fill",
      page: "back",
      score: 2,
      category: "unit-modern",
      categoryName: "近代物理與宇宙學",
      question: "原子核由質子與中子所構成，我們統稱這兩種粒子為 ________。",
      answer: "核子（Nucleon）",
      studentAnswer: "強核",
      isStudentCorrect: false, // 卷面扣分點！
      hotspot: { x: 5, y: 75.6, w: 90, h: 2.8 },
      concept: "原子核物理專有名詞：核子",
      explanation: "構成原子核的質子與中子，在核物理中被共同統稱為「核子」（Nucleon）。",
      trap: "【原卷扣分陷阱】卷面上學生寫了「強核」，被老師以紅筆打大叉扣 2 分！正確的物理統稱名詞必須寫「核子」，同學常因為剛學到強核力而筆誤寫成強核。"
    },
    {
      id: "fill3",
      num: "填 3",
      type: "fill",
      page: "back",
      score: 8, // 4格，每格2分
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "國際單位系統（簡稱 SI 制）所規定的七個基本量為 (1)______、(2)______、(3)______、(4)______、物質量、電流強度及發光強度。",
      blanks: [
        { label: "第1格", answer: "長度", student: "長度", correct: true },
        { label: "第2格", answer: "質量", student: "質量", correct: true },
        { label: "第3格", answer: "時間", student: "時間", correct: true },
        { label: "第4格", answer: "溫度（或 熱力學溫度）", student: "溫度", correct: true }
      ],
      answer: "長度、質量、時間、溫度",
      studentAnswer: "長度、質量、時間、溫度",
      isStudentCorrect: true, // 4格全對拿滿8分
      hotspot: { x: 5, y: 78.4, w: 90, h: 3.5 },
      concept: "SI 制七大基本物理量",
      explanation: "SI 制所定義的七大獨立基本物理量為：長度(m)、質量(kg)、時間(s)、熱力學溫度(K)、物質的量(mol)、電流(A)、發光強度(cd)。學生此題四格全對，順利拿下 8 分。",
      trap: "注意物理「量」與「單位」的分別：題目問的是基本量（長度、質量、時間、溫度），不可填成公尺、公斤、秒。"
    },
    {
      id: "fill4",
      num: "填 4",
      type: "fill",
      page: "back",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "太陽和地球之間的平均距離約為一億五千萬公里，而光速為 3×10^8 公尺/秒，則地球所接受到的太陽光大約是 ______ 秒前太陽所發出的。",
      answer: "500",
      studentAnswer: "500",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 81.9, w: 90, h: 3.2 },
      concept: "光傳播時間計算：t = 距離 / 光速",
      explanation: "計算步驟：\n1. 單位換算：1 億 5 千萬公里 = 1.5 × 10^8 km = 1.5 × 10^11 公尺。\n2. 光速 c = 3 × 10^8 公尺/秒。\n3. 所需時間 t = (1.5 × 10^11) / (3 × 10^8) = 0.5 × 10^3 = 500 秒（約合 8 分 20 秒）。\n學生精確計算得出 500，順利得分！",
      trap: "公里（km）一定要先乘 10^3 換算成公尺（m），否則次方差 3 個數量級。"
    },
    {
      id: "fill5",
      num: "填 5",
      type: "fill",
      page: "back",
      score: 2,
      category: "unit-si",
      categoryName: "度量與SI單位制",
      question: "122 °F 等於 ______ ℃。",
      answer: "50",
      studentAnswer: "50",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 85.1, w: 90, h: 2.8 },
      concept: "華氏與攝氏溫標換算公式",
      explanation: "換算公式：C = (F - 32) × 5 / 9。\n將 F = 122 代入：\nC = (122 - 32) × 5 / 9 = 90 × 5 / 9 = 50 ℃。\n學生計算正確，順利拿分！",
      trap: "公式是先減 32 再乘 5/9，千萬別記反成 F = C × 5/9 + 32。"
    },
    {
      id: "fill6_1",
      num: "填 6(1)",
      type: "fill",
      page: "back",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "小劉去爬山，沿原山路上下一趟，若上山平均速率 4 km/hr，下山平均速率 6 km/hr，則：\n(1) 全程平均速度是 ______ km/hr。",
      answer: "0",
      studentAnswer: "0",
      isStudentCorrect: true,
      hotspot: { x: 5, y: 88.0, w: 90, h: 3.5 },
      concept: "平均速度的本質：位移為零",
      explanation: "平均速度 = 總位移 / 總時間。\n因為沿原山路「上下一趟」，終點回到起點，總位移量 Δx = 0。\n因此全程平均速度必定為 0 km/hr。學生概念清晰，此格正確得分。",
      trap: "平均速度與平均速率名稱僅一字之差，但速度看的是「位移」，只要折返原點位移就是 0。"
    },
    {
      id: "fill6_2",
      num: "填 6(2)",
      type: "fill",
      page: "back",
      score: 2,
      category: "unit-kinematics",
      categoryName: "運動學與等速度",
      question: "小劉去爬山，沿原山路上下一趟，若上山平均速率 4 km/hr，下山平均速率 6 km/hr，則：\n(2) 全程平均速率是 ______ km/hr。",
      answer: "4.8",
      studentAnswer: "48",
      isStudentCorrect: false, // 卷面扣分點！
      hotspot: { x: 5, y: 91.5, w: 90, h: 3.8 },
      concept: "往返運動的平均速率（調和平均數）",
      explanation: "平均速率 = 總路徑長 / 總時間。\n【完整推導】：\n設單程山路長度為 S 公里。\n・上山時間 t1 = S / 4\n・下山時間 t2 = S / 6\n・總時間 T = S/4 + S/6 = 5S / 12\n・總路徑長 = S + S = 2S\n・全程平均速率 = 2S / (5S / 12) = 24 / 5 = 4.8 km/hr。\n【速解公式】：v_avg = 2 v1 v2 / (v1 + v2) = 2 × 4 × 6 / (4 + 6) = 48 / 10 = 4.8 km/hr。",
      trap: "【原卷扣分陷阱】卷面上學生填寫了「48」，老師以紅筆打大叉扣分！同學在計算 48 / 10 時粗心漏掉了小數點「.」，或者直接寫成了 48，痛失 2 分！這是全班最容易粗心的致命失分點。"
    }
  ],

  // 段考考點精華卡片（複習專區）
  cheatSheet: [
    {
      title: "SI 國際單位制七大基本量",
      icon: "📐",
      content: [
        { label: "長度 (Length)", value: "公尺 (meter, m)", note: "早期定義為子午線長之一千萬分之一" },
        { label: "質量 (Mass)", value: "公斤 (kilogram, kg)", note: "現以普朗克常數 h 精確定義" },
        { label: "時間 (Time)", value: "秒 (second, s)", note: "銫-133 原子週期 9,192,631,770 倍" },
        { label: "電流 (Current)", value: "安培 (Ampere, A)", note: "以基本電荷量 e 定義" },
        { label: "溫度 (Temp)", value: "克耳文 (Kelvin, K)", note: "絕對零度為 0 K (-273.15 ℃)" },
        { label: "物質量 (Amount)", value: "莫耳 (mole, mol)", note: "亞佛加厥常數 6.022×10^23" },
        { label: "發光強度 (Lumin)", value: "燭光 (candela, cd)", note: "單色輻射頻率 540×10^12 Hz" }
      ]
    },
    {
      title: "牛頓三大運動定律與核心判斷",
      icon: "🍎",
      content: [
        { label: "第一定律 (慣性定律)", value: "合力為零時：靜者恆靜，動者恆作等速度直線運動", note: "公車等速丟球必落回手中；方向改變即非等速度" },
        { label: "第二定律 (運動定律)", value: "F = ma (合外力 = 質量 × 加速度)", note: "合力方向必定等於加速度方向；加速度與質量成反比" },
        { label: "第三定律 (作用反作用)", value: "大小相等、方向相反、作用在不同物體上", note: "不可抵消！噴射機推氣體、青蛙蹬水、碰撞受力相同" }
      ]
    },
    {
      title: "超重與失重（101 電梯視重變化）",
      icon: "🛗",
      content: [
        { label: "加速上升 (啟動時)", value: "視重 N = m(g + a) > mg (超重)", note: "加速度向上，磅秤讀數增加，人感覺變沉" },
        { label: "等速上升 (中段)", value: "視重 N = mg (正常重量)", note: "加速度 a = 0，無超重與失重" },
        { label: "減速上升 (接近頂樓)", value: "視重 N = m(g - a) < mg (失重)", note: "加速度向下，磅秤讀數減少，人感覺飄起" },
        { label: "自由落體 (鋼索斷裂)", value: "視重 N = 0 (完全失重)", note: "物體在空中自由下落時重量/視重為零" }
      ]
    },
    {
      title: "等速率往返運動公式速解",
      icon: "⏱️",
      content: [
        { label: "全程平均速度", value: "0 km/hr", note: "因返回原點，總位移 Δx = 0" },
        { label: "全程平均速率公式", value: "v_avg = 2 v1 v2 / (v1 + v2)", note: "調和平均數，不可直接算術平均 (4+6)/2=5 是錯誤的！" },
        { label: "經典數值實例", value: "上山 4，下山 6 ⇒ 2×4×6/(4+6) = 4.8", note: "易錯陷阱：48 漏掉小數點！" }
      ]
    }
  ]
};

// 導出全局變數供 app.js 使用
window.EXAM_DATA = EXAM_DATA;
