const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.glass-orb').forEach((orb, i) => {
        const speed = 0.5 + (i * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    const scrollProgress = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-progress').style.width = scrollProgress + '%';
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

const cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    cursorTrail.push(trail);
    
    if (cursorTrail.length > trailLength) {
        const oldTrail = cursorTrail.shift();
        oldTrail.remove();
    }
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

setInterval(createParticle, 300);

window.addEventListener('load', () => {
    const title = document.querySelector('.glitch');
    const text = title.textContent;
    title.textContent = '';
    title.style.opacity = '1';
    
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 150);
});

document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.animationDelay = (index * 0.1) + 's';
});
