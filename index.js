document.addEventListener("keypress", function (event) {
    let imgnum1 = Math.floor(Math.random() * 6) + 1;
    let randomimg1 = "images/dice" + imgnum1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomimg1);

    var imgnum2 = Math.floor(Math.random() * 6) + 1;
    var randomimg2 = "images/dice" + imgnum2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomimg2);

    if (imgnum1 > imgnum2) {
        document.querySelector("h1").innerHTML = "🎈 Player 1 win";
    }
    else if (imgnum1 < imgnum2) {
        document.querySelector("h1").innerHTML = "Player 2 win 🎈";
    }
    else {
        document.querySelector("h1").innerHTML = "It's a Draw";
    }
})