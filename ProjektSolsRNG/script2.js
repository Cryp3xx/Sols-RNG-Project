var odds = 0;

function Roll() {
    odds = Math.floor(Math.random() * 10001)
    document.body.classList.add("pulse");
    document.getElementById("buttonroll").style.visibility = "hidden";

    setTimeout(function() {
        document.getElementById("buttonroll").style.visibility = "visible";
        document.body.classList.remove("pulse");
    }, 1700);

    if (odds >= 1 && odds <= 5000) {
        document.getElementById("result").innerHTML = "Common (1 in 2)";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("star").src = "graystar.png";
        document.getElementById("star2").src = "";
    } else if (odds >= 5001 && odds <= 7500) {
        document.getElementById("result").innerHTML = "Uncommon (1 in 4)";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("star").src = "greenstar.png";
        document.getElementById("star2").src = "";
    } else if (odds >= 7501 && odds <= 8500) {
        document.getElementById("result").innerHTML = "Rare (1 in 10)";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("star").src = "bluestar.png";
        document.getElementById("star2").src = "";
    } else if (odds >= 8501 && odds <= 9000) {
        document.getElementById("result").innerHTML = "Epic (1 in 20)";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("star").src = "purplestar.png";
        document.getElementById("star2").src = "";
    } else if (odds >= 9001 && odds <= 9400) {
        document.getElementById("result").innerHTML = "Legendary (1 in 25)";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("star").src = "legendary.jpg";
        document.getElementById("star2").src = "";
    } else if (odds >= 9401 && odds <= 9650) {
        document.getElementById("result").innerHTML = "Starscourge (1 in 40)";
        document.getElementById("result2").innerHTML = "";
        document.getElementById("star").src = "";
        document.getElementById("star2").src = "starscourge.png";
    } else if (odds >= 9651 && odds <= 9800) {
        document.getElementById("result2").innerHTML = "Chromatic (1 in 80)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "chromatic.jpg";
        document.getElementById("star").src = "";
    } else if (odds >= 9801 && odds <= 9900) {
        document.getElementById("result2").innerHTML = "Abyssal Hunter (1 in 100)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "abyssalhunter.gif";
        document.getElementById("star").src = "";
    } else if (odds >= 9901 && odds <= 9950) {
        document.getElementById("result2").innerHTML = "Gargantua (1 in 200)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "gargantua.webp";
        document.getElementById("star").src = "";
    } else if (odds >= 9951 && odds <= 9975) {
        document.getElementById("result2").innerHTML = "Petr Bozo (1 in 400)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "petrsigma.jpg";
        document.getElementById("star").src = "";
    } else if (odds >= 9976 && odds <= 9990) {
        document.getElementById("result2").innerHTML = "Honza Grass (1 in 666.66)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "honzaonhiswaytostartrevoluce.jpg";
        document.getElementById("star").src = "";
    } else if (odds >= 9991 && odds <= 9995) {
        document.getElementById("result2").innerHTML = "Adam Quaver (1 in 2000)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "crypex.png";
        document.getElementById("star").src = "";
    } else if (odds >= 9996 && odds <= 9999) {
        document.getElementById("result2").innerHTML = "BEZDÍK (1 in 2500)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "bezdik.png";
        document.getElementById("star").src = "";
    } else if (odds === 10000) {
        document.getElementById("result2").innerHTML = "Kristian, The Missing Child (1 in 10000)";
        document.getElementById("result").innerHTML = "";
        document.getElementById("star2").src = "kristiannotfound.jpg";
        document.getElementById("star").src = "";
    }
}