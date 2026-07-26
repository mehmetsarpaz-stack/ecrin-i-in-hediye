setInterval(() => {
    if (Math.random() > 0.45) createHeart();
}, 750);


function createHeart() {
    const h = document.createElement('div');
    h.style.position = 'fixed';
    h.style.fontSize = '26px';
    h.style.left = Math.random() * 100 + 'vw';
    h.style.bottom = '-50px';
    h.textContent = '💖';
    h.style.opacity = '0.75';
    h.style.zIndex = '9999'; 
    h.style.pointerEvents = 'none';
    document.body.appendChild(h);

    let y = 0;
    const speed = Math.random() * 4 + 5;  

    const timer = setInterval(() => {
        y += speed;
        h.style.transform = `translateY(-${y}px)`;
        if (y > 1000) { 
            clearInterval(timer);
            h.remove();
        }
    }, 28);
}


function openGift() {
    var sarki = document.getElementById("ozelSarki");
    if (sarki) {
        sarki.play().catch(function(error) {
            console.log("Müzik çalma hatası:", error);
        });
    }

    const msgs = [
        "seni çok seviyorum",
        "sana her zaman destek olacağım",
        "bazen salak gibi davranıyorum bir eşek köle olarak",
        "kalbim seninle olacak her zaman Ecrin 💖",
        "seni herşeyden çok seviyorum",
        "Her ne yaşanırsa yaşansın her zaman yanındayım",
        "Ecrin seni hayatımdaki herşeyden çok seviyorum",
        "sen benim hayatımın devam etme sebebisin",
    ];
    

    const msg = document.createElement('div');
    msg.style.position = 'fixed';
    
   
    const rastgeleTop = Math.floor(Math.random() * 50) + 15;
    const rastgeleLeft = Math.floor(Math.random() * 50) + 15;
    
    msg.style.top = rastgeleTop + '%';
    msg.style.left = rastgeleLeft + '%';
    msg.style.transform = 'translate(-50%, -50%)';
    msg.style.background = '#ffffff';
    msg.style.padding = '35px 45px';
    msg.style.border = '5px solid #ff9ec1';
    msg.style.borderRadius = '24px';
    msg.style.fontSize = '1.8rem';
    msg.style.fontWeight = 'bold';
    msg.style.color = '#333333';
    msg.style.textAlign = 'center';
    msg.style.boxShadow = '0 15px 40px rgba(243, 160, 169, 0.6)';
    msg.style.zIndex = '10000';
    msg.style.width = '85%';
    msg.style.maxWidth = '450px';

  
    msg.innerHTML = `<div>${msgs[Math.floor(Math.random() * msgs.length)]}</div>`;
    
    document.body.appendChild(msg);

    for (let i = 0; i < 35; i++) {
        setTimeout(createHeart, i * 45);
    }
}
