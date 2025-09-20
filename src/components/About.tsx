import React from 'react'
import { Award, Star, Clock, Users, Scissors, Shield } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Profissionais Certificados',
      description: 'Equipe qualificada e em constante atualização com as últimas tendências do mercado',
    },
    {
      icon: Star,
      title: 'Produtos Premium',
      description: 'Utilizamos apenas produtos das melhores marcas internacionais para garantir qualidade',
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Respeitamos seu tempo e horário agendado, garantindo atendimento no horário marcado',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e merece um atendimento exclusivo e consultoria especializada',
    },
    {
      icon: Scissors,
      title: 'Técnicas Modernas',
      description: 'Combinamos tradição clássica com as mais modernas técnicas de corte e barbas',
    },
    {
      icon: Shield,
      title: 'Satisfação Garantida',
      description: 'Nossa prioridade é sua satisfação total com nossos serviços e atendimento',
    },
  ]

  return (
    <section id="sobre" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
                Nossa História
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Tradição familiar desde 2009
              </p>
            </div>

            <div className="space-y-6 mb-8 text-lg leading-relaxed text-foreground">
              <p>
                Há mais de uma década, nossa barbearia tem sido sinônimo de <strong>qualidade e tradição</strong>. 
                Combinamos técnicas clássicas com tendências modernas para oferecer sempre o melhor 
                atendimento aos nossos clientes.
              </p>
              <p>
                Nossa equipe é formada por profissionais experientes e apaixonados pela arte de 
                cortar cabelo, sempre atualizados com as últimas tendências e técnicas do mercado internacional.
              </p>
              <p>
                Acreditamos que cada cliente merece uma experiência única e personalizada, por isso 
                investimos continuamente em capacitação, produtos premium e um ambiente acolhedor.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2 font-playfair">15+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2 font-playfair">5000+</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-right">
            <div className="relative">
              <div className="aspect-square bg-gradient-accent rounded-3xl p-8 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-6 gap-4 h-full">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className="bg-accent-foreground rounded-full opacity-30" />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative text-center text-accent-foreground">
                  <Scissors className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-playfair">Nossa Barbearia</h3>
                  <p className="text-accent-foreground/80 mt-2">Tradição & Modernidade</p>
                </div>
              </div>
              
              {/* Decoration */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-primary text-center mb-12 font-playfair">
            Nossos Diferenciais
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.title}
                  className="card-premium text-center hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-primary mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4 font-playfair">
              Pronto para uma Nova Experiência?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Venha conhecer nossa barbearia e descobrir por que somos referência em cuidados masculinos.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Agendar Meu Horário
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About