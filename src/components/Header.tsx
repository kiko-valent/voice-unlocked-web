import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Nico", href: "#sobre-nico" },
    { name: "Clases", href: "#clases" },
    { name: "Alumnos", href: "#alumnos" },
    { name: "Reseñas", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50 shadow-card">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-button">
              <Music className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-xl font-bold text-text-primary">
              Canta con Nico
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="hero"
              onClick={() => scrollToSection("#contacto")}
              className="shadow-button"
            >
              Reservar Clase
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium text-left py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button asChild variant="hero" className="mt-4 w-full">
                <a href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias." target="_blank" rel="noopener noreferrer">
                  Reservar Clase
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;