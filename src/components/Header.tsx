import React, { useState, useEffect } from 'react'
import { Menu, X, Scissors } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-elegant border-b border-border'
          : 'bg-background/80 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-accent rounded-full">
              <Scissors className="w-6 h-6 text-accent-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary font-playfair">
              BarberShop Elite
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Serviços', id: 'servicos' },
              { label: 'Sobre', id: 'sobre' },
              { label: 'Galeria', id: 'galeria' },
              { label: 'Contato', id: 'contato' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent font-medium transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contato')}
            className="hidden md:block btn-primary text-sm px-6 py-3"
          >
            Agendar Horário
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Galeria', id: 'galeria' },
                { label: 'Contato', id: 'contato' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-accent font-medium transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary w-full text-center mt-4"
              >
                Agendar Horário
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header