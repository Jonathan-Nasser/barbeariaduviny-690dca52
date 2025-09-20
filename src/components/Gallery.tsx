import React, { useState } from 'react'
import { Eye, Scissors, Users, Star } from 'lucide-react'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const galleryItems = [
    {
      id: 1,
      category: 'cortes',
      title: 'Corte Moderno',
      description: 'Fade moderno com acabamento impecável',
      icon: Scissors,
    },
    {
      id: 2,
      category: 'barbas',
      title: 'Barba Clássica',
      description: 'Modelagem tradicional com navalha',
      icon: Users,
    },
    {
      id: 3,
      category: 'cortes',
      title: 'Fade Profissional',
      description: 'Degradê perfeito para executivos',
      icon: Scissors,
    },
    {
      id: 4,
      category: 'barbas',
      title: 'Estilo Executivo',
      description: 'Barba e bigode para homens de negócios',
      icon: Users,
    },
    {
      id: 5,
      category: 'cortes',
      title: 'Corte Degradê',
      description: 'Técnica avançada de degradê',
      icon: Scissors,
    },
    {
      id: 6,
      category: 'barbas',
      title: 'Barba Moderna',
      description: 'Estilo contemporâneo com produtos premium',
      icon: Users,
    },
  ]

  const filters = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'barbas', label: 'Barbas' },
  ]

  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="galeria" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Confira alguns dos nossos melhores cortes e veja a qualidade do nosso trabalho
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeFilter === filter.id
                  ? 'bg-accent text-accent-foreground shadow-gold'
                  : 'bg-card text-foreground hover:bg-accent/10 border border-border'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.id}
                className="group card-premium hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-square mb-6 bg-gradient-accent rounded-2xl overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 gap-2 h-full p-4">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="bg-accent-foreground rounded-sm opacity-30" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-accent-foreground">
                    <IconComponent className="w-16 h-16 mb-4" />
                    <span className="text-lg font-semibold">{item.title}</span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Eye className="w-12 h-12 mx-auto mb-4 transform group-hover:scale-110 transition-transform" />
                      <p className="text-lg font-semibold">Ver Detalhes</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-24 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-primary text-center mb-12 font-playfair">
            O Que Nossos Clientes Dizem
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos Silva',
                role: 'Empresário',
                comment: 'Melhor barbearia da cidade! Atendimento impecável e resultado sempre perfeito.',
                rating: 5,
              },
              {
                name: 'Roberto Santos',
                role: 'Advogado',
                comment: 'Profissionais extremamente qualificados. Meu corte fica exatamente como eu quero.',
                rating: 5,
              },
              {
                name: 'Marco Oliveira',
                role: 'Médico',
                comment: 'Ambiente agradável e serviços de primeira qualidade. Recomendo a todos!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="card-premium text-center"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-accent rounded-3xl p-12 text-accent-foreground">
            <h3 className="text-3xl font-bold mb-4 font-playfair">
              Quer Fazer Parte da Nossa Galeria?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Agende seu horário e descubra por que nossos clientes sempre voltam satisfeitos.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Agendar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery