function changeImg(imgNumber)	{
    var myImages = ["img/backgrounds/1.jpg", "img/backgrounds/2.jpg", "img/backgrounds/3.jpg", "img/backgrounds/4.jpg", "img/backgrounds/5.jpg", "img/backgrounds/6.jpg"]; 
    var newImgNumber =Math.floor(Math.random()*myImages.length);
    document.getElementById("header").style.backgroundImage = 'url('+myImages[newImgNumber]+')';
}
window.onload=changeImg;