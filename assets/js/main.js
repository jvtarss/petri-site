document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('.material-icons');
      if (navLinks.classList.contains('active')) {
        icon.textContent = 'close';
      } else {
        icon.textContent = 'menu';
      }
    });
  }

  // Scroll Animations (Fade-in)
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // Counter Animation for Indicators
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const currentText = counter.innerText.replace('+', '');
        const count = currentText === '0' ? 0 : +currentText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = '+' + Math.ceil(count + inc);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = '+' + target;
        }
      };
      updateCount();
    });
  };

  const indicatorsSection = document.querySelector('.indicators');
  if (indicatorsSection) {
    const indicatorObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        indicatorObserver.unobserve(indicatorsSection);
      }
    }, { threshold: 0.5 });
    indicatorObserver.observe(indicatorsSection);
  }

  // Moments Gallery Data & Logic
  // EDIT HERE to add new moments
  const momentsData = [
    {
      date: '2023-09-15',
      title: 'Fundação da Petri Júnior',
      subtitle: 'Câmpus Gurupi',
      desc: 'Marco inicial da nossa empresa júnior, unindo estudantes em prol da biotecnologia.',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800'
    },
    {
      date: '2024-03-10',
      title: 'Primeiro Diagnóstico',
      subtitle: 'Consultoria de Alimentos',
      desc: 'Visita técnica realizada em estabelecimento local para adequação sanitária.',
      img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=800'
    },
    {
      date: '2024-11-02',
      title: 'Equipe Petri Júnior no ETEJ',
      subtitle: 'Primeiro ETEJ (2024)',
      desc: 'Registro da Equipe da Petri Júnior (Gestão 2024-25) no nosso primeiro Encontro Tocantinense de Empresas Juniores.',
      img: 'assets/img/momentos/foto-petri-etej.jpg'
    },
    {
      date: '2024-11-03',
      title: 'EJs de Gurupi no ETEJ',
      subtitle: 'Integração MEJ Regional',
      desc: 'Encontro das Equipes das Empresas Juniores de Gurupi: CAP Engenharia (IFTO), ATAC (UFT) e Petri Junior (UFT).',
      img: 'assets/img/momentos/foto-to-junior.jpg'
    },
    {
      date: '2025-02-15',
      title: 'Planejamento 2025',
      subtitle: 'Gestão Petri',
      desc: 'Definição de metas e novos horizontes para o crescimento da EJ no Cerrado.',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800'
    }
  ];

  const renderMoments = () => {
    const container = document.getElementById('moments-container');
    if (!container) return;

    // Sort by date descending (newest first)
    const sortedMoments = momentsData.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = sortedMoments.map(moment => `
      <div class="moment-card fade-in">
        <img src="${moment.img}" alt="${moment.title}" class="moment-img">
        <div class="moment-info">
          <div class="moment-date">${new Date(moment.date).toLocaleDateString('pt-BR')}</div>
          <h4 style="color: var(--primary); margin: 5px 0;">${moment.title}</h4>
          <p style="font-weight: bold; font-size: 0.85rem; margin-bottom: 8px;">${moment.subtitle}</p>
          <p class="moment-desc">${moment.desc}</p>
        </div>
      </div>
    `).join('');

    // Observe newly created cards for fade-in animation
    container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  };

  renderMoments();

  // WhatsApp Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const company = document.getElementById('company').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;
      
      const subject = `Solicitação de orçamento - Site Petri Júnior`;
      const body = `Nome: ${name}
Empresa: ${company}
E-mail: ${email}
Telefone: ${phone}
Serviço: ${service}
Mensagem: ${message}`;

      const mailtoUrl = `mailto:petrijr.ebb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    });
  }
  
  // Highlight active link in nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
});
