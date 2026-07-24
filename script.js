function createHeart() {
    const h = document.createElement('div');
    h.style.position = 'fixed';
    h.style.fontSize = '26px';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.bottom = '-50px';
    h.textContent = '💖';
    h.style.opacity = '0.65';
    document.body.appendChild(h);

    let y = 0;
    const speed = Math.random() * 4 + 5;  

    const timer = setInterval(() => {
        y += speed;
        h.style.transform = `translateY(-${y}px)`;
        if (y > 850) {
            clearInterval(timer);
            h.remove();
        }
    }, 28);
}

function openGift() {
    const msgs = [
        "seni çok seviyorum",
        "sana her zaman destek olacağım",
        "sazen salak gibi davranıyorum bir eşek köle olarak",
        "kalbim seninle olacak her zaman Ecrin 💖",
        "seni herşeyden çok seviyorum",
        "Her ne yaşanırsa yaşansın her zaman yanındayım",
        "Ecrin seni hayatımdaki herşeyden çok seviyorum",
        "sen benim hayatımın devam etme sebebisin",
    ];
    
    const msg = document.createElement('div');
    msg.style.position = 'fixed';
    msg.style.top = '35%';
    msg.style.left = '50%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.background = 'white';
    msg.style.padding = '28px 40px';
    msg.style.border = '5px solid #ff9ec1';
    msg.style.borderRadius = '18px';
    msg.style.fontSize = '1.6rem';
    msg.style.boxShadow = '0 8px 25px #F3A0A9';
    msg.textContent = msgs[Math.floor(Math.random() * msgs.length)];
    document.body.appendChild(msg);

    for (let i = 0; i < 28; i++) {
        setTimeout(createHeart, i * 55);
    }

    setTimeout(() => msg.remove(), 2600);
}


setInterval(() => {
    if (Math.random() > 0.45) createHeart();
}, 750);
function openGift() {
    
  
var sarki = document.getElementById("ozelSarki");
    sarki.play().catch(function(error) {
        console.log("Müzik çalma hatası:", error);
    });
