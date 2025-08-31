// 1.ランダムにおみくじ画像のパスを返す処理
function getRandomImage(){
    const number = Math.floor(Math.random() * 7);
    const imagePath = `./images/omikuji-${number.toString()}.png`;
    //別な書き方
    //const imagePath = "./images/omikuji-" + number.toString() + ".png";
    return imagePath;}

// 2.ボタンを押したらスロットが回転する処理
function playOmikuji(){
    const timer = window.setInterval(function(){
        document.querySelector("#js-result").setAttribute("src",getRandomImage());
    }, 100);
    
    // 3.数秒後にスロットが止まる処理
    setTimeout(function(){
        document.querySelector("#js-result").setAttribute("src","./images/omikuji-8.png")
        clearInterval(timer);
    }, 3000);
}

document.querySelector("#js-button").addEventListener("click", playOmikuji);



