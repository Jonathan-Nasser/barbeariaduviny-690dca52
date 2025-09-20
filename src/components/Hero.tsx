import React, { useEffect, useState } from 'react'
import { Calendar, Play, Instagram, Facebook, MessageCircle } from 'lucide-react'

const Hero = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    quality: 0,
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 15, clients: 5000, quality: 100 }
      const duration = 2000
      const steps = 60

      Object.keys(targets).forEach((key) => {
        const target = targets[key as keyof typeof targets]
        const increment = target / steps
        let current = 0

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setCounters((prev) => ({ ...prev, [key]: target }))
            clearInterval(timer)
          } else {
            setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
          }
        }, duration / steps)
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    const heroSection = document.getElementById('hero-stats')
    if (heroSection) observer.observe(heroSection)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.3\"/></svg>')] bg-repeat" style={{ backgroundSize: '40px 40px' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block font-playfair">Estilo Moderno</span>
            <span className="block text-gradient font-playfair">Tradição Clássica</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            A arte de cortar cabelo elevada ao mais alto nível. Experimente o melhor em cuidados masculinos com nossa equipe especializada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary flex items-center justify-center gap-3 group"
            >
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Agendar Horário
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="btn-secondary flex items-center justify-center gap-3 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Conheça Nosso Trabalho
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            {[
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Facebook, href: '#', label: 'Facebook' },
              { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full backdrop-blur-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div id="hero-stats" className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {[
            { value: counters.experience, label: 'Anos de Experiência', suffix: '+' },
            { value: counters.clients, label: 'Clientes Satisfeitos', suffix: '+' },
            { value: counters.quality, label: 'Qualidade Garantida', suffix: '%' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-playfair">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm uppercase tracking-wider text-primary-foreground/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero