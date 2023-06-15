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