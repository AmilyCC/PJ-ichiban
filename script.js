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
    sessionStorage.setItem("info", JSON.stringify(info));
  },
  setMyScores: function (scores) {
    sessionStorage.setItem("myScores", JSON.stringify(scores));
  }
};

// View
var view = {
  toggleContainer: function (container, shouldShow) {
    if (shouldShow) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  },
  displayHome: function () {
    this.toggleContainer(homeContainer, true);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, false);
    controller.clearData();
  },

  displayPreTest: function () {
    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, true);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, false);
  },
  displayQuestion: function () {
    questionNum.textContent = `問題 ${model.currentQuestion + 1}:`;
    questionContent.textContent =
      model.questions[model.currentQuestion].question;
    choicesElement.innerHTML = "";

    model.questions[model.currentQuestion].choices.map(function (
      choice,
      index
    ) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      li.className = "ans";
      button.textContent = choice;
      button.className = "ans-btn";
      button.setAttribute("data-choice-index", index);
      button.addEventListener("click", function () {
        controller.answerQuestion(index);
      });
      li.appendChild(button);
      choicesElement.appendChild(li);
    });

    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, true);
    this.toggleContainer(resultContainer, false);
  },

  displayResult: function () {
    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, true);

    var score = 0;

    model.answers.forEach(function (answer, index) {
      score += model.questions[index].scores[answer];
    });
    // 將結果存入 model.myScores
    model.myScores = score;
    model.setMyScores(score);
    // document.getElementById("result").textContent = "勞累分數：" + score;
    resultName.textContent = `${model.info.name} 的吉戰力：`;
    var result = this.getResult(model.myScores);
    var recommendation = result.recommendation;
    var img = result.img;
    recommendationEle.textContent = recommendation;
    resultImg.setAttribute("src", img);
  },
  getResult: function (score) {
    var result = model.results.find(function (result) {
      if (score >= result.minScore && score <= result.maxScore) {
        return result.recommendation;
      }
    });
    return result
      ? {
          recommendation: result.recommendation,
          img: result.img
        }
      : {
          recommendation: "",
          img: ""
        };
  }
};

// Controller
var controller = {
  clearData: function () {
    // 清空輸入內容
    model.currentQuestion = 0;
    model.info = [];
    model.answers = [];
    model.myScores = 0;
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    sessionStorage.removeItem("info");
    sessionStorage.removeItem("myScores");
  },
  handleFormData: function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    model.info = {
      name: name,
      gender: gender,
      age: age,
      phone: phone,
      email: email
    };
    model.setInfo(model.info);
    this.startTest();
  },
  preTest: function () {
    view.displayPreTest();
  },
  startTest: function () {
    view.displayQuestion();
  },

  answerQuestion: function (choice) {
    model.answers[model.currentQuestion] = choice;
    model.currentQuestion++;

    if (model.currentQuestion >= model.questions.length) {
      view.displayResult();
    } else {
      view.displayQuestion();
    }
  },

  restart: function () {
    this.clearData();
    view.displayHome();
  }
};

const homeContainer = document.getElementById("home-container");
const preTestContainer = document.getElementById("pre-test-container");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const resultName = document.getElementById("result-name");
const recommendationEle = document.getElementById("recommendation");
const resultImg = document.getElementById("result-img");
const choicesElement = document.getElementById("choices");
const questionNum = document.querySelector("#question span");
const questionContent = document.querySelector("#question p");

// 監聽開始測驗按鈕
document.getElementById("start-button").addEventListener("click", function () {
  controller.preTest();
});

// 表單內容
document
  .getElementById("pre-test-form")
  .addEventListener("submit", function (e) {
    controller.handleFormData(e);
  });

// 監聽重新測驗按鈕
document
  .getElementById("restart-button")
  .addEventListener("click", function () {
    controller.restart();
  });
// 啟動測驗，顯示首頁
view.displayHome();
