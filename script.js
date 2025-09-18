// Navegação responsiva e funcionalidades gerais
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle menu mobile
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Adiciona animação ao body para prevenir scroll
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Fechar menu ao clicar em link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Scroll suave para seções
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Destacar link ativo na navegação
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Header com fundo dinâmico no scroll
    function updateHeader() {
        if (window.scrollY > 100) {
            header.style.background = 'hsl(var(--background) / 0.98)';
            header.style.backdropFilter = 'blur(20px)';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.background = 'hsl(var(--background) / 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = 'none';
        }
    }

    // Event listener para scroll otimizado
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveLink();
                updateHeader();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Animações de entrada com Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Adiciona classe de animação baseada no tipo de elemento
                if (element.classList.contains('service-card')) {
                    element.classList.add('animate-fade-in-up');
                } else if (element.classList.contains('gallery-item')) {
                    element.classList.add('animate-scale-in');
                } else if (element.classList.contains('contact-card')) {
                    element.classList.add('animate-fade-in-left');
                } else if (element.classList.contains('feature-item')) {
                    element.classList.add('animate-fade-in-right');
                } else {
                    element.classList.add('animate-fade-in-up');
                }
                
                // Para de observar o elemento após a animação
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll(
        '.service-card, .gallery-item, .contact-card, .feature-item, .about-image, .contact-form'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contador animado nas estatísticas
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + (target === 100 ? '%' : '+');
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + (target === 100 ? '%' : '+');
                }
            }, 20);
        });
    }

    // Observar seção hero para iniciar contadores
    const heroSection = document.querySelector('.hero-stats');
    if (heroSection) {
        const heroObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        heroObserver.observe(heroSection);
    }

    // Efeitos hover nos cards de serviços
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Galeria com efeito lightbox simples
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Adicionar efeito de zoom/destaque
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '10';
            this.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                this.style.zIndex = '';
            }, 300);
        });
    });

    // Formulário de contato com validação
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            
            // Validação básica
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'hsl(var(--destructive))';
                    input.style.boxShadow = '0 0 0 3px hsl(var(--destructive) / 0.1)';
                } else {
                    input.style.borderColor = 'hsl(var(--border))';
                    input.style.boxShadow = 'none';
                }
            });
            
            if (!isValid) {
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Animação de envio
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitButton.disabled = true;
            submitButton.style.background = 'hsl(var(--muted-foreground))';
            
            // Simular envio do formulário
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
                submitButton.style.background = 'hsl(142 76% 36%)';
                
                showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    this.reset();
                }, 3000);
            }, 2000);
        });
        
        // Limpar erros de validação ao digitar
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = 'hsl(var(--border))';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Botões CTA principais
    const ctaButtons = document.querySelectorAll('.cta-primary, .service-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Rolar para seção de contato
            const contactSection = document.querySelector('#contato');
            if (contactSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = contactSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Focar no primeiro campo do formulário após rolar
                setTimeout(() => {
                    const firstInput = contactForm?.querySelector('input');
                    if (firstInput) {
                        firstInput.focus();
                    }
                }, 600);
            }
        });
    });

    // Botão de vídeo/demonstração
    const videoButton = document.querySelector('.cta-secondary');
    if (videoButton) {
        videoButton.addEventListener('click', function(e) {
            e.preventDefault();
            // Rolar para galeria
            const gallerySection = document.querySelector('#galeria');
            if (gallerySection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = gallerySection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Efeito parallax sutil no hero
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Sistema de notificação
    function showNotification(message, type = 'info') {
        // Remove notificação existente
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Estilos da notificação
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'hsl(142 76% 36%)' : type === 'error' ? 'hsl(var(--destructive))' : 'hsl(var(--primary))'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            word-wrap: break-word;
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.75rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: auto;
            opacity: 0.8;
            transition: opacity 0.2s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Fechar ao clicar no X
        notification.querySelector('.notification-close').addEventListener('click', function() {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto fechar após 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Links de redes sociais
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.querySelector('i').classList.contains('fa-whatsapp') ? 'whatsapp' : 
                            this.querySelector('i').classList.contains('fa-instagram') ? 'instagram' : 'facebook';
            
            showNotification(`Redirecionando para o ${platform}...`, 'info');
            
            // Aqui você adicionaria os links reais das redes sociais
            // window.open('https://wa.me/5511999999999', '_blank');
        });
    });

    // Inicialização de animações CSS personalizadas
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            font-family: 'Inter', sans-serif;
        }
        
        .notification-close:hover {
            opacity: 1 !important;
        }
        
        /* Melhorias de performance para animações */
        .service-card,
        .gallery-item,
        .contact-card,
        .feature-item {
            will-change: transform, opacity;
        }
        
        /* Smooth scroll para navegadores que não suportam */
        html {
            scroll-behavior: smooth;
        }
    `;
    document.head.appendChild(style);

    console.log('🔥 BarberShop Elite - Website carregado com sucesso!');
});