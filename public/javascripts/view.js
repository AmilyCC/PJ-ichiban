
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
    this.toggleContainer(marquee, true);
    this.toggleContainer(homeContainer, true);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, false);
    controller.clearData();
  },

  displayPreTest: function () {
    document.querySelector('.top_icon_03').style.top = '9%'
    document.querySelector('.top_icon_05').style.top = '10%'
    document.querySelector('.top_icon_14').style.top = '80%'
    this.toggleContainer(marquee, false);
    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, true);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, false);
  },
  displayQuestion: function () {
    timeLine.style.width = `${(model.currentQuestion+1)*10+1}%`
    questionNum.src = model.questions[model.currentQuestion].img;
    questionContent.innerHTML =
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
    this.toggleContainer(marquee, false);
    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, true);
    this.toggleContainer(resultContainer, false);
  },
  getResult: function () {
    var result = model.results.find(function (result) {
      if ( model.myScores  >= result.minScore &&  model.myScores  <= result.maxScore) {
        return  {
          title: result.title,
          recommendation: result.recommendation,
          page_img: result.page_img,
          save_img: result.save_img
        };
      }
    });
    return result
      ? {
          title: result.title,
          recommendation: result.recommendation,
          page_img: result.page_img,
          save_img: result.save_img
        }
      : {
          title: "",
          recommendation: "",
          page_img: "",
          save_img: ""
        };
  },
  updateOGTags: function (image) {
    var ogImageTag = document.querySelector('meta[property="og:image"]');
    ogImageTag.content = image;
  },
  saveImg: function (img) {
    // 綁定保存圖片按鈕的點擊事件
    saveButton.addEventListener("click", function () {
      // 建立虛擬連結（用於下載圖片）
      var link = document.createElement("a");
      link.href = img;
      link.download = "gi-image.png";
      link.target = "_blank";
      link.click();
      link.remove();
    });
  },
  displayResult: function () {
    this.toggleContainer(marquee, false);
    this.toggleContainer(homeContainer, false);
    this.toggleContainer(preTestContainer, false);
    this.toggleContainer(questionContainer, false);
    this.toggleContainer(resultContainer, true);

    resultName.innerHTML = `<span>${model.info.name}</span>，你是個`;
    var result = this.getResult(model.myScores);
    var title = result.title;
    var recommendation = result.recommendation;
    var pageImg = result.page_img;
    var saveImg = result.save_img;
    titleEle.textContent = title;
    recommendationEle.innerHTML = recommendation;
    resultImg.setAttribute("src", pageImg);
    this.updateOGTags(saveImg);
    this.saveImg('..' + saveImg);
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
