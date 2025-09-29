let audioReady = false;
const audio = document.getElementById('clickSound');
audio.addEventListener('canplaythrough', () => { audioReady = true; });

const birthdaySong = document.getElementById('birthdaySong');
birthdaySong.addEventListener('ended', function() {
    birthdaySong.currentTime = 0;
    birthdaySong.play();
});

let currentPage = 'front';

function playSound() {
    if (!audioReady) return;
    try {
        audio.pause();
        audio.currentTime = 0;
    } catch (e) {}
    audio.play().catch(() => {});
}

function typeEffect(element, text, speed, callback) {
    element.innerHTML = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typing, speed);
        } else {
            if (callback) callback();
        }
    }
    typing();
}

function showFrontTyping() {
    document.getElementById('iconBtn').style.opacity = 0;
    document.getElementById('iconImage').style.opacity = 0;
    const titleText = "🎉 HAPPY BIRTHDAY \n PELANGI KENTSYAI 🎂";
    const subtitleText = "Semoga harimu seceria pelangi dan semanis kue ulang tahun! 🍰🌈";
    const hintText = "👆 Klik Surat Diatas yaa! 👆";
    typeEffect(document.getElementById('typingTitle'), titleText, 35, function() {
        typeEffect(document.getElementById('typingSubtitle'), subtitleText, 25, function() {
            setTimeout(function() {
                document.getElementById('iconBtn').style.opacity = 1;
                document.getElementById('iconImage').style.opacity = 1;
                setTimeout(function() {
                    typeEffect(document.getElementById('typingHint'), hintText, 25);
                }, 300);
            }, 300);
        });
    });
}

function showNextTyping() {
    document.getElementById('typingUcapan').innerHTML = "";
    document.getElementById('typingDoa1').innerHTML = "";
    document.getElementById('typingDoa2').innerHTML = "";
    document.getElementById('typingEmojis').innerHTML = "";
    document.getElementById('fotoPelangiWrap').style.opacity = 0;
    var nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('show');
    nextBtn.style.opacity = 0;

    const ucapan = "Selamat Ulang Tahun, Pelangi! 🎂";
    const doa1 = "Semoga hari ini penuh kebahagiaan dan kejutan indah 🎉✨💖";
    const doa2 = "Selamat ulang tahun yang <strong style='color:#000;'>ke-23</strong>, semoga semakin sukses dan bahagia selalu! 🎁🍰🌟";
    const emojis = "🎊🎈🎁";
    typeEffect(document.getElementById('typingUcapan'), ucapan, 30, function() {
        var fotoWrap = document.getElementById('fotoPelangiWrap');
        fotoWrap.style.opacity = 1;
        setTimeout(function() {
            typeEffect(document.getElementById('typingDoa1'), doa1, 20, function() {
                typeEffect(document.getElementById('typingDoa2'), doa2, 20, function() {
                    typeEffect(document.getElementById('typingEmojis'), emojis, 60, function() {
                        var nextBtn = document.getElementById('nextBtn');
                        nextBtn.classList.add('show');
                        nextBtn.style.opacity = 1;
                    });
                });
            });
        }, 400);
    });
}

function showSurpriseTyping() {
    document.getElementById('typingSurpriseUcapan').innerHTML = "";
    document.getElementById('typingSurpriseDoa1').innerHTML = "";
    document.getElementById('typingSurpriseDoa2').innerHTML = "";
    document.getElementById('typingSurpriseEmojis').innerHTML = "";
    document.getElementById('fotoSurpriseWrap').style.opacity = 0;
    var nextBtnSurprise = document.getElementById('nextBtnSurprise');
    if (nextBtnSurprise) {
        nextBtnSurprise.classList.remove('show');
        nextBtnSurprise.style.opacity = 0;
    }
    document.querySelector('#surprise h2').classList.add('surprise-title-anim');
    document.getElementById('fotoSurpriseWrap').classList.add('surprise-foto-anim');
    document.querySelector('#surprise .ucapan-box').classList.add('surprise-box-anim');
    document.getElementById('typingSurpriseUcapan').classList.add('surprise-typing-anim');
    document.getElementById('typingSurpriseDoa1').classList.add('surprise-typing-anim');
    document.getElementById('typingSurpriseDoa2').classList.add('surprise-typing-anim');
    document.getElementById('typingSurpriseEmojis').classList.add('surprise-typing-anim');
    document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
        img.classList.add('butterfly-dance');
    });
    const ucapan = "Haaaiiiii Pelangi! 🎁";
    const doa1 = "Hai Pelangi, selamat ulang tahun ya! Semoga di hari ini dan seterusnya, segala urusan dilancarkan dan rezeki selalu mengalir dengan mudah. 💙";
    const doa2 = "Oh iya, selamat juga ya atas wisudanya! 🎓 Semoga Pelangi sukses dalam mencari pekerjaan, dan kalau benar mau membangun usaha, semoga usahanya lancar dan berkembang ya. Jangan lupa ajak-ajak juga nanti, hehe. 😄";
    const emojis = "💙🎉🦋";
    typeEffect(document.getElementById('typingSurpriseUcapan'), ucapan, 30, function() {
        var fotoWrap = document.getElementById('fotoSurpriseWrap');
        fotoWrap.style.opacity = 1;
        setTimeout(function() {
            typeEffect(document.getElementById('typingSurpriseDoa1'), doa1, 20, function() {
                typeEffect(document.getElementById('typingSurpriseDoa2'), doa2, 20, function() {
                    typeEffect(document.getElementById('typingSurpriseEmojis'), emojis, 60, function() {
                        var nextBtnSurprise = document.getElementById('nextBtnSurprise');
                        if (nextBtnSurprise) {
                            nextBtnSurprise.classList.add('show');
                            nextBtnSurprise.style.opacity = 1;
                        }
                    });
                });
            });
        }, 400);
    });
}

function showSurprise2Typing() {
    document.getElementById('typingSurprise2Ucapan').innerHTML = "";
    document.getElementById('typingSurprise2Doa1').innerHTML = "";
    document.getElementById('typingSurprise2Doa2').innerHTML = "";
    document.getElementById('typingSurprise2Emojis').innerHTML = "";
    document.getElementById('fotoSurprise2Wrap').style.opacity = 0;
    var nextBtnSurprise2 = document.getElementById('nextBtnSurprise2');
    if (nextBtnSurprise2) {
        nextBtnSurprise2.classList.remove('show');
        nextBtnSurprise2.style.opacity = 0;
    }
    document.querySelector('#surprise2 h2').classList.add('surprise-title-anim');
    document.getElementById('fotoSurprise2Wrap').classList.add('surprise-foto-anim');
    document.querySelector('#surprise2 .ucapan-box').classList.add('surprise-box-anim');
    document.getElementById('typingSurprise2Ucapan').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise2Doa1').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise2Doa2').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise2Emojis').classList.add('surprise-typing-anim');
    document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
        img.classList.add('butterfly-dance');
    });
    const ucapan = "Kejutan Manis Buat Si Cantik Pelangi! 💖";
    const doa1 = "Maaf ya, Pelangi, belum bisa kasih berlian untuk sekarang. Semoga Pelangi tetap suka sama kadonya ini yaa dan juga kado pagi hari nanti. Pokoknya, Pelangi harus selalu bahagia, jangan sedih apalagi cemberut, nanti cantiknya hilang, hihi. Cieee, umur 23 sekarang, wkwk! 🥳 Semoga di umur yang baru ini, semua keinginan dan harapan Pelangi bisa terwujud. Aaamiiin 🤲✨";
    const doa2 = "Maaf juga ya kalau di website ini banyak foto Pelangi terus, soalnya rasanya jadi lebih berwarna dan hidup kalau ada foto Pelangi di dalamnya. 🌈💖 Semoga hari-hari Pelangi ke depan penuh kebahagiaan, rezeki yang lancar, dan selalu mendapatkan kemudahan dalam setiap langkah yang Pelangi ambil. 🌈💖";
    const emojis = "🌈💖🦋";
    typeEffect(document.getElementById('typingSurprise2Ucapan'), ucapan, 30, function() {
        var fotoWrap = document.getElementById('fotoSurprise2Wrap');
        fotoWrap.style.opacity = 1;
        setTimeout(function() {
            typeEffect(document.getElementById('typingSurprise2Doa1'), doa1, 20, function() {
                typeEffect(document.getElementById('typingSurprise2Doa2'), doa2, 20, function() {
                    typeEffect(document.getElementById('typingSurprise2Emojis'), emojis, 60, function() {
                        var nextBtnSurprise2 = document.getElementById('nextBtnSurprise2');
                        if (nextBtnSurprise2) {
                            nextBtnSurprise2.classList.add('show');
                            nextBtnSurprise2.style.opacity = 1;
                        }
                    });
                });
            });
        }, 400);
    });
}

function showSurprise3Typing() {
    document.getElementById('typingSurprise3Ucapan').innerHTML = "";
    document.getElementById('typingSurprise3Doa1').innerHTML = "";
    document.getElementById('typingSurprise3Doa2').innerHTML = "";
    document.getElementById('typingSurprise3Emojis').innerHTML = "";
    document.getElementById('fotoSurprise3Wrap').style.opacity = 0;
    var nextBtnSurprise3 = document.getElementById('nextBtnSurprise3');
    if (nextBtnSurprise3) {
        nextBtnSurprise3.classList.remove('show');
        nextBtnSurprise3.style.opacity = 0;
    }
    document.querySelector('#surprise3 h2').classList.add('surprise-title-anim');
    document.getElementById('fotoSurprise3Wrap').classList.add('surprise-foto-anim');
    document.querySelector('#surprise3 .ucapan-box').classList.add('surprise-box-anim');
    document.getElementById('typingSurprise3Ucapan').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise3Doa1').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise3Doa2').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise3Emojis').classList.add('surprise-typing-anim');
    document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
        img.classList.add('butterfly-dance');
    });
    const ucapan = "Hari Special Pelangi! 🎉";
    const doa1 = "Semoga di hari spesial ini, Pelangi suka dengan website yang saya buat khusus untuk Pelangi. Jangan lupa untuk selalu tersenyum dan tetap percaya diri, yaa!";
    const doa2 = "Semoga hari-hari Pelangi ke depan selalu penuh kebahagiaan. Semoga selalu ketemu orang-orang asik yang bikin Pelangi happy terus, punya vibes positif yang bikin hari-hari Pelangi cerah, dan berada di lingkungan yang seru serta suportif. Kalau Pelangi bahagia, saya juga ikut bahagia. 🌈😊 BTW, saya cuma mau bilang... foto Pelangi di sini cantik banget, hihi";
    const emojis = "🎂🌈💐";
    typeEffect(document.getElementById('typingSurprise3Ucapan'), ucapan, 30, function() {
        var fotoWrap = document.getElementById('fotoSurprise3Wrap');
        fotoWrap.style.opacity = 1;
        setTimeout(function() {
            typeEffect(document.getElementById('typingSurprise3Doa1'), doa1, 20, function() {
                typeEffect(document.getElementById('typingSurprise3Doa2'), doa2, 20, function() {
                    typeEffect(document.getElementById('typingSurprise3Emojis'), emojis, 60, function() {
                        var nextBtnSurprise3 = document.getElementById('nextBtnSurprise3');
                        if (nextBtnSurprise3) {
                            nextBtnSurprise3.classList.add('show');
                            nextBtnSurprise3.style.opacity = 1;
                        }
                    });
                });
            });
        }, 400);
    });
}

        function showSurprise4Typing() {
    document.getElementById('typingSurprise4Ucapan').innerHTML = "";
    document.getElementById('typingSurprise4Doa1').innerHTML = "";
    document.getElementById('typingSurprise4Doa2').innerHTML = "";
    document.getElementById('typingSurprise4Emojis').innerHTML = "";
    document.getElementById('fotoSurprise4Wrap').style.opacity = 0;
    var nextBtnSurprise4 = document.getElementById('nextBtnSurprise4');
    if (nextBtnSurprise4) {
        nextBtnSurprise4.classList.remove('show');
        nextBtnSurprise4.style.opacity = 0;
    }
    document.querySelector('#surprise4 h2').classList.add('surprise-title-anim');
    document.getElementById('fotoSurprise4Wrap').classList.add('surprise-foto-anim');
    document.querySelector('#surprise4 .ucapan-box').classList.add('surprise-box-anim');
    document.getElementById('typingSurprise4Ucapan').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise4Doa1').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise4Doa2').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise4Emojis').classList.add('surprise-typing-anim');
    document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
        img.classList.add('butterfly-dance');
    });
    // Isi ucapan
    const ucapan = "Specially Made for Pelangi 💌";
    const doa1 = "Di hari ulang tahun Pelangi ini, saya juga ingin mengucapkan terima kasih yang sebesar-besarnya, karena Pelangi sudah membuat saya belajar untuk lebih terbuka, berpikir lebih maju, dan tidak lagi berusaha menjadi seseorang yang hanya ingin menyenangkan semua orang (people pleaser).";
    const doa2 = "Semenjak saya bertemu Pelangi, banyak hal yang membuat saya kagum, mulai dari kesederhanaannya, pengertiannya, kepeduliannya, hingga nasihat Pelangi yang mengingatkan saya untuk tidak selalu bersikap terlalu fancy dalam segala hal. Terima kasih juga sudah menjadi tempat curhat yang baik, selalu mendengarkan keluh kesah saya, dan terus memberikan semangat. 🤍 Semoga di usia yang baru, hidup Pelangi makin seru, makin happy, dan penuh cerita indah yang bikin tersenyum tiap hari. 🤲✨";
    const emojis = "🌟🌈🎉";
    typeEffect(document.getElementById('typingSurprise4Ucapan'), ucapan, 30, function() {
        var fotoWrap = document.getElementById('fotoSurprise4Wrap');
        fotoWrap.style.opacity = 1;
        setTimeout(function() {
            typeEffect(document.getElementById('typingSurprise4Doa1'), doa1, 20, function() {
                typeEffect(document.getElementById('typingSurprise4Doa2'), doa2, 20, function() {
                    typeEffect(document.getElementById('typingSurprise4Emojis'), emojis, 60, function() {
                        var nextBtnSurprise4 = document.getElementById('nextBtnSurprise4');
                        if (nextBtnSurprise4) {
                            nextBtnSurprise4.classList.add('show');
                            nextBtnSurprise4.style.opacity = 1;
                        }
                    });
                });
            });
        }, 400);
    });
}

function showSurprise5Typing() {
    document.getElementById('typingSurprise5Ucapan').innerHTML = "";
    document.getElementById('typingSurprise5Doa1').innerHTML = "";
    document.getElementById('typingSurprise5Doa2').innerHTML = "";
    document.getElementById('typingSurprise5Emojis').innerHTML = "";
    document.getElementById('fotoSurprise5Wrap').style.opacity = 0;
    var nextBtnSurprise5 = document.getElementById('nextBtnSurprise5');
    if (nextBtnSurprise5) {
        nextBtnSurprise5.classList.remove('show');
        nextBtnSurprise5.style.opacity = 0;
    }
    document.querySelector('#surprise5 h2').classList.add('surprise-title-anim');
    document.getElementById('fotoSurprise5Wrap').classList.add('surprise-foto-anim');
    document.querySelector('#surprise5 .ucapan-box').classList.add('surprise-box-anim');
    document.getElementById('typingSurprise5Ucapan').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise5Doa1').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise5Doa2').classList.add('surprise-typing-anim');
    document.getElementById('typingSurprise5Emojis').classList.add('surprise-typing-anim');
    document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
        img.classList.add('butterfly-dance');
    });
    // Isi ucapan
    const ucapan = "Last From Ur Secret Admirer! 🎇";
    const doa1 = "Makasih ya, Pelangi, udah mau baca sampai selesai. Semoga besok pagi Pelangi suka sama kadonya, walaupun mungkin nggak seberapa. 😅 Oh iya, besok masuk kan ya? Wkwk. Semoga masuk yaa, soalnya nggak sabar banget pengen ngasih kadonya ke Pelangi. Terus, boleh dong kasih review tentang websitenya hihi. Semoga Pelangi juga suka sama websitenya. 💐";
    const doa2 = "Semoga setiap langkah yang Pelangi ambil selalu dipenuhi keberanian dan keikhlasan. Semoga Pelangi diberikan kekuatan untuk menghadapi segala tantangan, dan selalu diberikan kemudahan dalam setiap urusan. Semoga Pelangi selalu dikelilingi oleh orang-orang yang tulus, yang mendukung dan mendoakan kebaikan untuk Pelangi, baik dalam suka maupun duka. Semoga setiap langkah Pelangi selalu diberkahi dan dipenuhi cinta dari orang-orang terdekat. Terima kasih sudah menjadi inspirasi! 🌈";
    const emojis = "💖🌈🎆";
    typeEffect(document.getElementById('typingSurprise5Ucapan'), ucapan, 30, function() {
        var fotoWrap = document.getElementById('fotoSurprise5Wrap');
        fotoWrap.style.opacity = 1;
        setTimeout(function() {
            typeEffect(document.getElementById('typingSurprise5Doa1'), doa1, 20, function() {
                typeEffect(document.getElementById('typingSurprise5Doa2'), doa2, 20, function() {
                    typeEffect(document.getElementById('typingSurprise5Emojis'), emojis, 60, function() {
                        var nextBtnSurprise5 = document.getElementById('nextBtnSurprise5');
                        if (nextBtnSurprise5) {
                            nextBtnSurprise5.classList.add('show');
                            nextBtnSurprise5.style.opacity = 1;
                        }
                    });
                });
            });
        }, 400);
    });
}

window.onload = function() {
    currentPage = 'front';
    showFrontTyping();
    document.querySelectorAll('img[alt="Kupu-Kupu"]').forEach(function(img) {
        img.classList.remove('butterfly-fadein', 'butterfly-flyin', 'butterfly-dance');
        void img.offsetWidth;
        img.classList.add('butterfly-fadein');
    });
};

function showNext() {
    playSound();
    currentPage = 'next';
    var front = document.getElementById('front');
    front.classList.add('page-fadeout');
    setTimeout(function() {
        front.style.display = 'none';
        front.classList.remove('page-fadeout');
        var next = document.getElementById('next');
        next.style.display = 'block';
        next.classList.add('page-fadein');
        setTimeout(function() {
            next.classList.remove('page-fadein');
        }, 900);
        document.getElementById('backBtn').classList.add('show');
        document.querySelectorAll('img[alt="Kupu-Kupu"]').forEach(function(img) {
            img.classList.remove('butterfly-fadein', 'butterfly-flyin', 'butterfly-dance');
            void img.offsetWidth;
            img.classList.add('butterfly-flyin');
        });
        var butterfly = document.getElementById('butterfly');
        butterfly.classList.remove('butterfly-top');
        butterfly.classList.add('butterfly-bottom-left');
        document.body.style.backgroundImage = "url('Background-2.jpg')";
        showNextTyping();
    }, 700);
}

function showFront() {
    currentPage = 'front';
    playSound();
    var next = document.getElementById('next');
    next.classList.add('page-fadeout');
    setTimeout(function() {
        next.style.display = 'none';
        next.classList.remove('page-fadeout');
        var front = document.getElementById('front');
        front.style.display = 'flex';
        front.classList.add('page-fadein');
        setTimeout(function() {
            front.classList.remove('page-fadein');
        }, 900);
        document.getElementById('backBtn').classList.remove('show');
        document.querySelectorAll('img[alt="Kupu-Kupu"]').forEach(function(img) {
            img.classList.remove('butterfly-fadein', 'butterfly-flyin', 'butterfly-dance');
            void img.offsetWidth;
            img.classList.add('butterfly-fadein');
        });
        var butterfly = document.getElementById('butterfly');
        butterfly.classList.remove('butterfly-bottom-left');
        butterfly.classList.add('butterfly-top');
        document.body.style.backgroundImage = "url('Background.png')";
        document.getElementById('typingTitle').innerHTML = "";
        document.getElementById('typingSubtitle').innerHTML = "";
        document.getElementById('typingHint').innerHTML = "";
        showFrontTyping();
    }, 700);
}

function showSurprise() {
    currentPage = 'surprise';
    var next = document.getElementById('next');
    next.classList.add('page-fadeout');
    setTimeout(function() {
        next.style.display = 'none';
        next.classList.remove('page-fadeout');
        var surprise = document.getElementById('surprise');
        surprise.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-3.jpg')";
        showSurpriseTyping();
        document.getElementById('backBtn').classList.add('show');
    }, 700);
}

function showSurprise2() {
    currentPage = 'surprise2';
    var surprise = document.getElementById('surprise');
    surprise.classList.add('page-fadeout');
    setTimeout(function() {
        surprise.style.display = 'none';
        surprise.classList.remove('page-fadeout');
        var surprise2 = document.getElementById('surprise2');
        surprise2.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-4.jpg')";
        showSurprise2Typing();
        document.getElementById('backBtn').classList.add('show');
    }, 700);
}

function showSurprise3() {
    currentPage = 'surprise3';
    var surprise2 = document.getElementById('surprise2');
    surprise2.classList.add('page-fadeout');
    setTimeout(function() {
        surprise2.style.display = 'none';
        surprise2.classList.remove('page-fadeout');
        var surprise3 = document.getElementById('surprise3');
        surprise3.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-5.jpeg')";
        document.body.classList.add('surprise3-bg-anim');
        surprise3.classList.add('surprise3-fadein');
        showSurprise3Typing();
        document.getElementById('backBtn').classList.add('show');
        setTimeout(function() {
            surprise3.classList.remove('surprise3-fadein');
            document.body.classList.remove('surprise3-bg-anim');
        }, 1200);
    }, 700);
}

function showSurprise4() {
    currentPage = 'surprise4';
    var surprise3 = document.getElementById('surprise3');
    surprise3.classList.add('page-fadeout');
    setTimeout(function() {
        surprise3.style.display = 'none';
        surprise3.classList.remove('page-fadeout');
        var surprise4 = document.getElementById('surprise4');
        surprise4.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-6.jpg')";
        showSurprise4Typing();
        document.getElementById('backBtn').classList.add('show');
    }, 700);
}

function showSurprise5() {
    currentPage = 'surprise5';
    var surprise4 = document.getElementById('surprise4');
    surprise4.classList.add('page-fadeout');
    setTimeout(function() {
        surprise4.style.display = 'none';
        surprise4.classList.remove('page-fadeout');
        var surprise5 = document.getElementById('surprise5');
        surprise5.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-7.png')";
        showSurprise5Typing();
        document.getElementById('backBtn').classList.add('show');
    }, 700);
}

function nextAction() {
    playSound();
    var nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('show');
    nextBtn.style.opacity = 0;
    showSurprise();
}

function nextSurpriseAction() {
    playSound();
    var nextBtnSurprise = document.getElementById('nextBtnSurprise');
    if (nextBtnSurprise) {
        nextBtnSurprise.classList.remove('show');
        nextBtnSurprise.style.opacity = 0;
    }
    showSurprise2();
}

function nextSurprise2Action() {
    playSound();
    var nextBtnSurprise2 = document.getElementById('nextBtnSurprise2');
    if (nextBtnSurprise2) {
        nextBtnSurprise2.classList.remove('show');
        nextBtnSurprise2.style.opacity = 0;
    }
    showSurprise3();
}

function nextSurprise3Action() {
    playSound();
    var nextBtnSurprise3 = document.getElementById('nextBtnSurprise3');
    if (nextBtnSurprise3) {
        nextBtnSurprise3.classList.remove('show');
        nextBtnSurprise3.style.opacity = 0;
    }
    showSurprise4();
}

function nextSurprise4Action() {
    playSound();
    var nextBtnSurprise4 = document.getElementById('nextBtnSurprise4');
    if (nextBtnSurprise4) {
        nextBtnSurprise4.classList.remove('show');
        nextBtnSurprise4.style.opacity = 0;
    }
    showSurprise5();
}

function nextSurprise5Action() {
    playSound();
    var nextBtnSurprise5 = document.getElementById('nextBtnSurprise5');
    if (nextBtnSurprise5) {
        nextBtnSurprise5.classList.remove('show');
        nextBtnSurprise5.style.opacity = 0;
    }
    showReviewPopup();
}

function showReviewPopup() {
    if (document.getElementById('reviewPopup')) return;

    const popup = document.createElement('div');
    popup.id = 'reviewPopup';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100vw';
    popup.style.height = '100vh';
    popup.style.background = 'rgba(0,0,0,0.35)';
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.zIndex = '9999';

    popup.innerHTML = `
        <div style="
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 4px 24px #ff69b4a0;
            padding: 32px 24px 24px 24px;
            max-width: 340px;
            width: 90vw;
            text-align: center;
            position: relative;
        ">
            <h2 style="font-family:'Pacifico',cursive;color:#ff69b4;margin-bottom:18px;">Tulis Pesan</h2>
            <textarea id="reviewText" rows="5" style="width:95%;border-radius:12px;border:2px solid #ff69b4;padding:10px;font-size:1em;resize:none;" placeholder="Tulis review atau pesan di sini..."></textarea>
            <br>
            <button id="sendReviewBtn" style="margin-top:18px;background:#ff69b4;color:#fff;border:none;border-radius:12px;padding:10px 28px;font-size:1.1em;font-family:'Fredoka One',cursive;cursor:pointer;">Kirim Pesan</button>
        </div>
    `;

    document.body.appendChild(popup);

    setTimeout(() => {
        document.getElementById('reviewText').focus();
    }, 200);

    document.getElementById('sendReviewBtn').onclick = function() {
        const isi = document.getElementById('reviewText').value.trim();
        if (!isi) {
            showEmptyPopup();
        } else {
            showSentPopup(isi);
        }
    };

    document.addEventListener('keydown', escHandler);

    function escHandler(e) {
        // Jika sentPopup sudah muncul, jangan munculkan popup kosong
        if (document.getElementById('sentPopup')) return;
        if (e.key === "Escape") {
            showEmptyPopup();
        }
    }

    function showEmptyPopup() {
        if (document.getElementById('emptyPopup')) return;
        const empty = document.createElement('div');
        empty.id = 'emptyPopup';
        empty.style.position = 'fixed';
        empty.style.top = '0';
        empty.style.left = '0';
        empty.style.width = '100vw';
        empty.style.height = '100vh';
        empty.style.background = 'rgba(0,0,0,0.35)';
        empty.style.display = 'flex';
        empty.style.alignItems = 'center';
        empty.style.justifyContent = 'center';
        empty.style.zIndex = '10000';
        empty.innerHTML = `
            <div style="
                background: #fff;
                border-radius: 18px;
                box-shadow: 0 4px 24px #ff69b4a0;
                padding: 28px 24px 18px 24px;
                max-width: 300px;
                width: 90vw;
                text-align: center;
            ">
                <div style="font-size:1.2em;color:#ff69b4;margin-bottom:14px;">Jangan Dikosongkan yaa</div>
                <button id="okEmptyBtn" style="background:#ff69b4;color:#fff;border:none;border-radius:12px;padding:8px 22px;font-size:1em;font-family:'Fredoka One',cursive;cursor:pointer;">Oke</button>
            </div>
        `;
        document.body.appendChild(empty);
        document.getElementById('okEmptyBtn').onclick = function() {
            document.body.removeChild(empty);
            document.getElementById('reviewText').focus();
        };
    }

    function showSentPopup(isi) {
        if (document.getElementById('sentPopup')) return;
        document.body.removeChild(popup);
        const sent = document.createElement('div');
        sent.id = 'sentPopup';
        sent.style.position = 'fixed';
        sent.style.top = '0';
        sent.style.left = '0';
        sent.style.width = '100vw';
        sent.style.height = '100vh';
        sent.style.background = 'rgba(0,0,0,0.35)';
        sent.style.display = 'flex';
        sent.style.alignItems = 'center';
        sent.style.justifyContent = 'center';
        sent.style.zIndex = '10001';
        sent.innerHTML = `
            <div style="
                background: #fff;
                border-radius: 18px;
                box-shadow: 0 4px 24px #ff69b4a0;
                padding: 28px 24px 18px 24px;
                max-width: 300px;
                width: 90vw;
                text-align: center;
            ">
                <div style="font-size:1.2em;color:#ff69b4;margin-bottom:14px;">Dikirimnya ke WA saya yaa</div>
                <button id="okSentBtn" style="background:#ff69b4;color:#fff;border:none;border-radius:12px;padding:8px 22px;font-size:1em;font-family:'Fredoka One',cursive;cursor:pointer;">Oke</button>
            </div>
        `;
        document.body.appendChild(sent);
        document.getElementById('okSentBtn').onclick = function() {
            document.body.removeChild(sent);
            window.location.href = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Makasih ya udah inget ulang tahun aku, di hari spesial ini " + isi);
        };
    }

    popup.ontransitionend = function() {
        document.removeEventListener('keydown', escHandler);
    };
}

function goBack() {
    playSound();
    if (currentPage === 'surprise5') {
        var surprise5 = document.getElementById('surprise5');
        surprise5.style.display = 'none';
        var surprise4 = document.getElementById('surprise4');
        surprise4.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-6.jpg')";
        document.getElementById('backBtn').classList.add('show');
        showSurprise4Typing();
        var nextBtnSurprise4 = document.getElementById('nextBtnSurprise4');
        nextBtnSurprise4.classList.add('show');
        nextBtnSurprise4.style.opacity = 1;
        currentPage = 'surprise4';
        document.querySelector('#surprise5 h2').classList.remove('surprise-title-anim');
        document.getElementById('fotoSurprise5Wrap').classList.remove('surprise-foto-anim');
        document.querySelector('#surprise5 .ucapan-box').classList.remove('surprise-box-anim');
        document.getElementById('typingSurprise5Ucapan').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise5Doa1').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise5Doa2').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise5Emojis').classList.remove('surprise-typing-anim');
        document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
            img.classList.remove('butterfly-dance');
        });
    } else if (currentPage === 'surprise4') {
        var surprise4 = document.getElementById('surprise4');
        surprise4.style.display = 'none';
        var surprise3 = document.getElementById('surprise3');
        surprise3.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-5.jpeg')";
        document.getElementById('backBtn').classList.add('show');
        showSurprise3Typing();
        var nextBtnSurprise3 = document.getElementById('nextBtnSurprise3');
        nextBtnSurprise3.classList.add('show');
        nextBtnSurprise3.style.opacity = 1;
        currentPage = 'surprise3';
        document.querySelector('#surprise4 h2').classList.remove('surprise-title-anim');
        document.getElementById('fotoSurprise4Wrap').classList.remove('surprise-foto-anim');
        document.querySelector('#surprise4 .ucapan-box').classList.remove('surprise-box-anim');
        document.getElementById('typingSurprise4Ucapan').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise4Doa1').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise4Doa2').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise4Emojis').classList.remove('surprise-typing-anim');
        document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
            img.classList.remove('butterfly-dance');
        });
    } else if (currentPage === 'surprise3') {
        var surprise3 = document.getElementById('surprise3');
        surprise3.style.display = 'none';
        var surprise2 = document.getElementById('surprise2');
        surprise2.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-4.jpg')";
        document.getElementById('backBtn').classList.add('show');
        showSurprise2Typing();
        var nextBtnSurprise2 = document.getElementById('nextBtnSurprise2');
        nextBtnSurprise2.classList.add('show');
        nextBtnSurprise2.style.opacity = 1;
        currentPage = 'surprise2';
        document.querySelector('#surprise3 h2').classList.remove('surprise-title-anim');
        document.getElementById('fotoSurprise3Wrap').classList.remove('surprise-foto-anim');
        document.querySelector('#surprise3 .ucapan-box').classList.remove('surprise-box-anim');
        document.getElementById('typingSurprise3Ucapan').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise3Doa1').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise3Doa2').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise3Emojis').classList.remove('surprise-typing-anim');
        document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
            img.classList.remove('butterfly-dance');
        });
    } else if (currentPage === 'surprise2') {
        var surprise2 = document.getElementById('surprise2');
        surprise2.style.display = 'none';
        var surprise = document.getElementById('surprise');
        surprise.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-3.jpg')";
        document.getElementById('backBtn').classList.add('show');
        showSurpriseTyping();
        var nextBtnSurprise = document.getElementById('nextBtnSurprise');
        nextBtnSurprise.classList.add('show');
        nextBtnSurprise.style.opacity = 1;
        currentPage = 'surprise';
        document.querySelector('#surprise2 h2').classList.remove('surprise-title-anim');
        document.getElementById('fotoSurprise2Wrap').classList.remove('surprise-foto-anim');
        document.querySelector('#surprise2 .ucapan-box').classList.remove('surprise-box-anim');
        document.getElementById('typingSurprise2Ucapan').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise2Doa1').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise2Doa2').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurprise2Emojis').classList.remove('surprise-typing-anim');
        document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
            img.classList.remove('butterfly-dance');
        });
    } else if (currentPage === 'surprise') {
        var surprise = document.getElementById('surprise');
        surprise.style.display = 'none';
        var next = document.getElementById('next');
        next.style.display = 'block';
        document.body.style.backgroundImage = "url('Background-2.jpg')";
        document.getElementById('backBtn').classList.add('show');
        showNextTyping();
        var nextBtn = document.getElementById('nextBtn');
        nextBtn.classList.add('show');
        nextBtn.style.opacity = 1;
        currentPage = 'next';
        document.querySelector('#surprise h2').classList.remove('surprise-title-anim');
        document.getElementById('fotoSurpriseWrap').classList.remove('surprise-foto-anim');
        document.querySelector('#surprise .ucapan-box').classList.remove('surprise-box-anim');
        document.getElementById('typingSurpriseUcapan').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurpriseDoa1').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurpriseDoa2').classList.remove('surprise-typing-anim');
        document.getElementById('typingSurpriseEmojis').classList.remove('surprise-typing-anim');
        document.querySelectorAll('.butterfly-top, .butterfly-top-right, .butterfly-bottom-right, .butterfly-bottom-left').forEach(function(img){
            img.classList.remove('butterfly-dance');
        });
    } else if (currentPage === 'next') {
        var next = document.getElementById('next');
        next.style.display = 'none';
        showFront();
        currentPage = 'front';
    }
}