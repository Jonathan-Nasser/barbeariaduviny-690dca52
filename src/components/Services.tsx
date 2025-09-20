import React from 'react'
import { Scissors, UserCheck, Sparkles, Crown, Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'premium',
      icon: Scissors,
      title: 'Corte Premium',
      description: 'Corte personalizado com técnicas modernas e acabamento impecável',
      features: ['Consulta de estilo', 'Lavagem completa', 'Finalização'],
      price: 45,
      isPremium: true,
    },
    {
      id: 'barba',
      icon: UserCheck,
      title: 'Barba Completa',
      description: 'Aparar, modelar e cuidados especiais para sua barba',
      features: ['Modelagem', 'Navalha tradicional', 'Hidratação'],
      price: 30,
    },
    {
      id: 'tratamento',
      icon: Sparkles,
      title: 'Tratamento Capilar',
      description: 'Cuidados especiais para manter seus cabelos saudáveis',
      features: ['Análise capilar', 'Massagem relaxante', 'Produtos premium'],
      price: 50,
    },
    {
      id: 'executivo',
      icon: Crown,
      title: 'Pacote Executivo',
      description: 'A experiência completa para o homem de negócios',
      features: ['Corte + Barba', 'Tratamento VIP', 'Bebida cortesia'],
      price: 99,
      originalPrice: 125,
      isPopular: true,
      highlight: true,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cuidados especializados para o homem moderno com técnicas tradicionais e tendências contemporâneas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                className={`
                  card-premium group cursor-pointer
                  ${service.highlight ? 'bg-gradient-primary text-primary-foreground' : ''}
                  ${service.isPremium ? 'border-accent/30 border-2' : ''}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.isPopular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    Mais Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6">
                  <div className={`
                    w-20 h-20 rounded-full flex items-center justify-center mx-auto
                    ${service.highlight 
                      ? 'bg-primary-foreground/20 backdrop-blur-sm' 
                      : 'bg-gradient-accent'
                    }
                  `}>
                    <IconComponent 
                      className={`w-8 h-8 ${
                        service.highlight ? 'text-primary-foreground' : 'text-accent-foreground'
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    service.highlight ? 'text-primary-foreground' : 'text-primary'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 leading-relaxed ${
                    service.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6 text-left">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className={`w-4 h-4 ${
                          service.highlight ? 'text-primary-foreground' : 'text-accent'
                        }`} />
                        <span className={`text-sm ${
                          service.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className={`text-3xl font-bold ${
                    service.highlight ? 'text-primary-foreground' : 'text-accent'
                  }`}>
                    {service.originalPrice && (
                      <span className="text-lg line-through opacity-60 mr-2">
                        R$ {service.originalPrice}
                      </span>
                    )}
                    R$ {service.price}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`
                    w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1
                    ${service.highlight 
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }
                  `}
                >
                  {service.isPopular ? 'Agendar Agora' : 'Agendar'}
                </button>
              </div>
            )
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato conosco para um atendimento personalizado.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Consultar Outros Serviços
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services