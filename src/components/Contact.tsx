import React, { useState } from 'react'
import { MapPin, Phone, Clock, MessageCircle, Send, Check, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua dos Barbeiros, 123\nCentro - São Paulo, SP',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 9999-9999',
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 9h às 19h\nSábado: 9h às 17h',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '(11) 9999-9999',
    },
  ]

  const services = [
    { value: '', label: 'Escolha um serviço' },
    { value: 'corte', label: 'Corte Premium' },
    { value: 'barba', label: 'Barba Completa' },
    { value: 'tratamento', label: 'Tratamento Capilar' },
    { value: 'executivo', label: 'Pacote Executivo' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.service

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            Agende Seu Horário
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Entre em contato conosco e garanta seu atendimento com os melhores profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-primary mb-8 font-playfair">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div
                    key={info.title}
                    className="card-premium hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-accent rounded-full flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 card-premium">
              <h4 className="font-bold text-primary mb-4">Nossa Localização</h4>
              <div className="aspect-video bg-gradient-accent rounded-2xl flex items-center justify-center">
                <div className="text-center text-accent-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Mapa Interativo</p>
                  <p className="text-sm opacity-80">Clique para abrir no Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-primary mb-8 font-playfair">
              Formulário de Contato
            </h3>
            
            <form onSubmit={handleSubmit} className="card-premium">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Serviço Desejado *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                  placeholder="Conte-nos mais detalhes sobre o que você gostaria..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`
                  w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300
                  ${isFormValid && !isSubmitting
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90 transform hover:-translate-y-1'
                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }
                `}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    Mensagem Enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
                  <Check className="w-5 h-5" />
                  <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800">
                  <AlertCircle className="w-5 h-5" />
                  <span>Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4 font-playfair">
              Precisa Falar Conosco Urgentemente?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato direto pelo WhatsApp para um atendimento mais rápido.
            </p>
            <button
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact