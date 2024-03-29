
// Controller
var controller = {
  clearData: function () {
    // 清空輸入內容
    model.currentQuestion = 0;
    model.info = [];
    model.answers = [];
    model.myScores = 0;
    document.querySelector('.main').classList.remove("result-main");
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    localStorage.removeItem("info");
    localStorage.removeItem("myScores");
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
    model.answers[model.currentQuestion] = model.questions[model.currentQuestion].scores[choice];
    model.myScores += model.questions[model.currentQuestion].scores[choice];
    model.currentQuestion++;

    if (model.currentQuestion >= model.questions.length) {
      view.getResult();
      view.submitForm();
      model.setMyScores(model.myScores);
      view.displayResult();
    } else {
      view.displayQuestion();
    }
  },

  restart: function () {
    swal({
      title: "確定要重新測驗嗎？", 
      icon: "warning",
      closeOnClickOutside: true,
      buttons:{
        confirm: {
          text: "重新測驗",
          value: true,
          visible: true
        },
        cancel: {
          text: "留在此頁",
          value: false,
          visible: true
        }
      } 
    })
    .then((value)=>{
      if (value) {
        this.clearData();
        view.displayHome();
      } else {
        
      }

    })
  },

  collection: function () {
    view.displaycollection();
  }
};
