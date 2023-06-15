// Model
var model = {
  currentQuestion: 0,
  info: [],
  answers: [],
  myScores: 0,
  questions: [
    {
      question: "你最喜歡的充電模式",
      choices: ["爆睡一波", "爆吃一波"],
      scores: [0, 1] // 配分方式
    },
    {
      question: "理由你通常",
      choices: ["說真實的", "說場面話"],
      scores: [1, 0] // 配分方式
    },
    {
      question: "下班要做什麼？",
      choices: ["只想耍廢", "聚餐還是要的"],
      scores: [1, 0] // 配分方式
    },
    {
      question: "遇到鳥事你傾向？",
      choices: ["自己消化就好", "跟朋友埋怨"],
      scores: [0, 1] // 配分方式
    },
    {
      question: "你比較討厭？",
      choices: ["被甩鍋", "忙到不行"],
      scores: [0, 1] // 配分方式
    },
    {
      question: "你最喜歡的充電模式",
      choices: ["爆睡一波", "爆吃一波"],
      scores: [0, 1] // 配分方式
    },
    {
      question: "理由你通常",
      choices: ["說真實的", "說場面話"],
      scores: [1, 0] // 配分方式
    },
    {
      question: "下班要做什麼？",
      choices: ["只想耍廢", "聚餐還是要的"],
      scores: [1, 0] // 配分方式
    },
    {
      question: "遇到鳥事你傾向？",
      choices: ["自己消化就好", "跟朋友埋怨"],
      scores: [0, 1] // 配分方式
    },
    {
      question: "你比較討厭？",
      choices: ["被甩鍋", "忙到不行"],
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
