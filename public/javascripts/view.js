
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
  getResult: function () {
    var result = model.results.find(function (result) {
      if ( model.myScores  >= result.minScore &&  model.myScores  <= result.maxScore) {
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
  },
  updateOGTags: function (image) {
    var ogImageTag = document.querySelector('meta[property="og:image"]');
    ogImageTag.content = image;
  },
  displayResult: function () {
    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, true);

    // document.getElementById("result").textContent = "勞累分數：" + score;
    resultName.textContent = `${model.info.name} 的吉戰力：`;
    var result = this.getResult(model.myScores);
    var recommendation = result.recommendation;
    var img = result.img;
    recommendationEle.textContent = recommendation;
    resultImg.setAttribute("src", img);
    this.updateOGTags(img);
  },
  submitForm: function () {
    // 获取需要提交的数据
    var formData = {
      myScores: model.myScores, // 用户的选择
      info: model.info // 用户的其他信息
    };

    // 发送 POST 请求给后端服务器
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Response not OK');
      }
      return response.json();
    })  
    .then(data => {
      console.log(data+"done!");
    })
    .catch(error => {
      console.error(error);
    });
  }
};