// KF Panda Search
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;

  name = name.toLowerCase();
  // If statement - Test the Input
  if (name === "po" || name === "dragon warrior") {
    document.getElementById("char-name").innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, i am the Dragon warrior";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "tiger") {
    document.getElementById("char-name").innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML =
      "No, I mean you don't belong in the Jade Palace. You're a disgrace to kung fu, and if you have any respect for who we are and what we do, you will be gone by morning.";
    document.getElementById("char-img").src = "img/tigress.png";
    console.log("Yes tigress is a KF panda character");
  } else if (name === "mantis") {
    document.getElementById("char-name").innerHTML = "Mantis";
    document.getElementById("char-quote").innerHTML =
      "You know, guys, I never expected to die like this. I thought I'd meet a nice girl, settle down, and then she'd eat my head.";
    document.getElementById("char-img").src = "img/mantis.png";
    console.log("Yes manitis is a KF panda character");
  } else if (name === "monkey") {
    document.getElementById("char-name").innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML =
      "At the first sign of trouble, I'll give you a signal. Ka-ka! Kee-kee!";
    document.getElementById("char-img").src = "img/monkey.png";
    console.log("Yes Monkey is a KF panda character");
  } else if (name === "tai-lung" || name === "tai lung") {
    document.getElementById("char-name").innerHTML = "Tai-lung";
    document.getElementById("char-quote").innerHTML =
      "I'm glad Shifu sent you. I was beginning to think I'd been forgotten. ...";
    document.getElementById("char-img").src = "img/tai-lung.png";
    console.log("Yes tai-lung is a KF panda character");
  } else if (name === "shen" || name === "peacock") {
    document.getElementById("char-name").innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      " You want to see? It's a gift. It's your parting gift... in that it will part you. Part of you here, part of you there, and part of you way over there, staining the wall!";
    document.getElementById("char-img").src = "img/shen.png";
    console.log("Yes shen is a KF panda character");
  } else if (name === "shifu") {
    document.getElementById("char-name").innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    document.getElementById("char-img").src = "img/shifu.png";
    console.log("Yes shifu is a KF panda character");
  } else if (name === "kai") {
    document.getElementById("char-name").innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "By the time I am done with them, Oogway, there will be no one left who will even remember your name.";
    document.getElementById("char-img").src = "img/kai.png";
    console.log("Yes shifu is a KF panda character");
  } else {
    console.log("?");
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}

document.getElementById("theme-btn").addEventListener("click", btnClicked);

function btnClick() {
  let theme = document.getElementById("theme-in").value;
  if (theme === "dark") {
    document.getElementById("btn").style.background = "gray";
    document.getElementById("theme-btn").style.background = "gray";
    document.getElementById("title").style.color = "gray";
    document.getElementById("body").style.backgroud = "gray";
    document.getElementById("html").style.background =
      "url(img/thumb-350-1281328.webp) no-repeat";
    document.getElementById("div").style.background = "gray";
    document.getElementById("html").style.backgroundsize = "cover";
  } else if (theme === "light") {
    document.getElementById("btn").style.background = "";
    document.getElementById("theme-btn").style.background = "";
    document.getElementById("title").style.color = "";
    document.getElementById("html").style.background =
      "url(img/kungfupandabackground.jpg) no-repeat";
    document.getElementById("body").style.backgroud = "";
    document.getElementById("div").style.background = "";
    document.getElementById("html").style.backgroundsize = "";
  }
}
