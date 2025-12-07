// Инициализация частиц на фоне
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация частиц
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#a855f7"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#c4b5fd",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Анимация текста при загрузке
    const animatedLines = document.querySelectorAll('.animated-line');
    animatedLines.forEach((line, index) => {
        line.style.animationDelay = `${0.3 + index * 0.7}s`;
    });
    
    // Прокрутка вниз от главного экрана
    document.addEventListener('wheel', handleScroll);
    
    // Инициализация первого экрана
    showHome();
});

// Функции для переключения экранов
function showHome() {
    const homeScreen = document.getElementById('home');
    const pricingScreen = document.getElementById('pricing');
    
    homeScreen.classList.add('active');
    pricingScreen.classList.remove('active');
    
    // Включаем обработчик прокрутки
    document.addEventListener('wheel', handleScroll);
}

function showPricing() {
    const homeScreen = document.getElementById('home');
    const pricingScreen = document.getElementById('pricing');
    
    homeScreen.classList.remove('active');
    pricingScreen.classList.add('active');
    
    // Отключаем обработчик прокрутки на экране с ценами
    document.removeEventListener('wheel', handleScroll);
}

// Обработчик прокрутки для перехода к ценам
function handleScroll(event) {
    // Проверяем, находимся ли мы на главном экране
    if (document.getElementById('home').classList.contains('active')) {
        // Если прокрутка вниз
        if (event.deltaY > 0) {
            showPricing();
        }
    }
}

// Добавляем поддержку свайпов на мобильных устройствах
let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    const touchEndY = event.changedTouches[0].screenY;
    const deltaY = touchStartY - touchEndY;
    
    // Если свайп вверх (прокрутка вниз) и мы на главном экране
    if (deltaY > 50 && document.getElementById('home').classList.contains('active')) {
        showPricing();
    }
    
    // Если свайп вниз (прокрутка вверх) и мы на экране с ценами
    if (deltaY < -50 && document.getElementById('pricing').classList.contains('active')) {
        showHome();
    }
}, false);
