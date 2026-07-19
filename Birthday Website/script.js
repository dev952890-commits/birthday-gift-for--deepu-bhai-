// ============================
// Typing Animation
// ============================

const text =
"Happy Birthday Deepika (DEEPU BHAI) ❤️🎂 Wishing you endless happiness, success and lots of smiles!";

let i = 0;

function typing() {

    if (i < text.length) {

        document.querySelector(".typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 70);

    }

}

typing();


// ============================
// Start Celebration
// ============================

const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

    document.getElementById("cake").scrollIntoView({

        behavior: "smooth"

    });

    celebration();

}


// ============================
// Confetti
// ============================

function celebration(){

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

}


// ============================
// Fireworks
// ============================

setInterval(()=>{

confetti({

particleCount:8,

angle:60,

spread:80,

origin:{x:0}

});

confetti({

particleCount:8,

angle:120,

spread:80,

origin:{x:1}

});

},2500);


// ============================
// Candle Blow
// ============================

const blow=document.getElementById("blow");

blow.onclick=()=>{

document.querySelector(".flame").style.display="none";

celebration();

alert("🎉 Yay!! Candle Blown 🎂");

}


// ============================
// Open Letter
// ============================

const openLetter=document.getElementById("openLetter");

openLetter.onclick=()=>{

const box=document.querySelector(".letter-box");

if(box.style.display==="block"){

box.style.display="none";

openLetter.innerHTML="💌 Open My Letter";

}

else{

box.style.display="block";

openLetter.innerHTML="❤️ Close Letter";

celebration();

}

}


// ============================
// Gift Surprise
// ============================

const gift=document.querySelector(".gift-box");

gift.onclick=()=>{

gift.innerHTML="❤️🎂🎉";

gift.style.transform="scale(1.4)";

celebration();

setTimeout(()=>{

alert("🎁 Surprise!\n\nHappy Birthday DEEPU BHAI ❤️\n\nMay all your dreams come true! 🌸");

},400);

}


// ============================
// Auto Music
// ============================

const music=document.getElementById("music");

window.addEventListener("click",()=>{

music.play();

},{once:true});


// ============================
// Floating Hearts
// ============================

function heart(){

const h=document.createElement("div");

h.innerHTML="❤️";

h.style.position="fixed";

h.style.left=Math.random()*100+"vw";

h.style.bottom="-50px";

h.style.fontSize=(20+Math.random()*30)+"px";

h.style.zIndex="999";

document.body.appendChild(h);

let pos=0;

const move=setInterval(()=>{

pos+=2;

h.style.bottom=pos+"px";

h.style.opacity=1-pos/700;

if(pos>700){

clearInterval(move);

h.remove();

}

},20);

}

setInterval(heart,500);


// ============================
// Balloons
// ============================

function balloon(){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.bottom="-80px";

b.style.left=Math.random()*100+"vw";

b.style.fontSize=(35+Math.random()*20)+"px";

document.body.appendChild(b);

let y=0;

const fly=setInterval(()=>{

y+=3;

b.style.bottom=y+"px";

if(y>900){

clearInterval(fly);

b.remove();

}

},20);

}

setInterval(balloon,1500);


// ============================
// Sparkles
// ============================

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize="22px";

document.body.appendChild(s);

setTimeout(()=>{

s.remove();

},1500);

}

setInterval(sparkle,350);


// ============================
// Countdown (Optional)
// ============================

console.log("Happy Birthday Deepika ❤️");


// ============================
// End Celebration
// ============================

setTimeout(()=>{

celebration();

},5000);