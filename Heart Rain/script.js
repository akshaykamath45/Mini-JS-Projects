function createHeart(){
    const heart=document.createElement('div');
    heart.classList.add('heart');
   
    heart.style.left=Math.random()*100+"vw";

    heart.innerText="❤️";
    document.body.appendChild(heart);

    heart.style.animationDuration=Math.random()*2+3+"s";

    setTimeout(() => {
        heart.remove();
    },5000);
}
setInterval(createHeart,600);