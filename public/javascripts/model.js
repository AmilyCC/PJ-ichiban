// Model
var model = {
  currentQuestion: 0,
  info: [],
  answers: [],
  myScores: 0,
  questions: [
    {
      img:"../static/image/p3/p3_q1.png",
      question: "大家忙著趕急件，你有方法能<span>少50%工時</span>，你會選擇…",
      choices: ["自己早弄完早回家", "與大家分享"],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q2.png",
      question: "來了個麻煩的案子，雖然<span>有空但不想接</span>，你會選擇…",
      choices: ["開始裝忙", "自願接下案子"],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q3.png",
      question: "工作出包，但除了自己外<span>還沒人發現</span>，你會選擇…",
      choices: ["趕緊拉替死鬼下水", "立即與主管回報狀況"],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q4.png",
      question: "發現同事<span>上班在休息</span>，你心裡會覺得…",
      choices: ["趕快跟主管說，我還在忙他憑甚麼", "人總要喘口氣，他平常可能太累了"],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q5.png",
      question: "對待<span>看不順眼的同事</span>，你會採取什麼態度?",
      choices: ["挺好的，與我無關", "感到沮喪、悶悶不樂"],
      scores: [0, 1] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q6.png",
      question: "看到<span>競爭關係的同事</span>受到表揚，你心裡會覺得…",
      choices: ["挺好的，與我無關", "感到沮喪、悶悶不樂"],
      scores: [0, 1] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q7.png",
      question: "與<span>精英同事</span>一起工作，你心裡會覺得…",
      choices: ["太好了，有人罩我～", "不知道能不能跟上他的腳步..."],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q8.png",
      question: "當大家都在忙著趕提案，老闆<span>剛好出差回來</span>，你會選擇…",
      choices: ["放下手邊工作，先向老闆打招呼", "等工作告一段落再去打招呼"],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q9.png",
      question: "在茶水間偶然聽到有人在<span>談論A同事的八卦</span>，你會選擇…",
      choices: ["去告訴A同事", "聽聽就好不在意"],
      scores: [1, 0] // 配分方式
    },
    {
      img:"../static/image/p3/p3_q10.png",
      question: "發現同事的<span>工作出錯</span>，你會選擇…",
      choices: ["私訊同事確認內容", "在群組裡確認內容"],
      scores: [0, 1] // 配分方式
    }
    // 更多問題...
  ],
  results: [
    {
      minScore: 0,
      maxScore: 2,
      recommendation: "摳尼吉娃",
      img: "https://i.imgur.com/OxT9HGM.png"
    },
    {
      minScore: 3,
      maxScore: 4,
      recommendation: "超愛炭吉",
      img: "https://i.imgur.com/AOMKu5F.png"
    },
    {
      minScore: 5,
      maxScore: 7,
      recommendation: "溜之大吉",
      img: "https://i.imgur.com/NRhQcpu.png"
    },
    {
      minScore: 8,
      maxScore: 9,
      recommendation: "吉度邪惡",
      img: "https://i.imgur.com/852o789.png"
    },
    {
      minScore: 10,
      maxScore: Infinity,
      recommendation: "林北五吉",
      img: "https://i.imgur.com/oTJ5fhQ.png"
    }
    // 更多結果...
  ],
  setInfo: function (info) {
    localStorage.setItem("info", JSON.stringify(info));
  },
  setMyScores: function (scores) {
    localStorage.setItem("myScores", JSON.stringify(scores));
  }
};
