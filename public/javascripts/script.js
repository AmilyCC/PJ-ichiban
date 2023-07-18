const marquee = document.getElementById("marquee");
const homeContainer = document.getElementById("home-container");
const preTestContainer = document.getElementById("pre-test-container");
const questionContainer = document.getElementById("question-container");
const timeLine = document.getElementById("time-line");
const questionNum = document.querySelector("#question img");
const questionContent = document.querySelector("#question p");
const choicesElement = document.getElementById("choices");
const resultContainer = document.getElementById("result-container");
const resultName = document.getElementById("result-name");
const recommendationEle = document.getElementById("recommendation");
const titleEle = document.getElementById("result-title");
const resultImg = document.getElementById("result-img");
const saveButton = document.getElementById("save-image");

// 監聽開始測驗按鈕
document.getElementById("start-button").addEventListener("click", function () {
  controller.preTest();
});

// 開始測驗
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
