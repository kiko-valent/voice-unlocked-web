import { Music, Phone, Mail, MessageCircle, Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Nico", href: "#sobre-nico" },
    { name: "Clases", href: "#clases" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background-dark text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-xl font-bold">Canta con Nico</div>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed max-w-md">
              Clases de canto personalizadas para descubrir tu voz única. 
              Más de 5 años ayudando a cantantes de todos los niveles a 
              superar sus miedos y alcanzar sus objetivos musicales.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+34611084334" className="hover:text-primary transition-colors">
                  +34 611 08 43 34
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:cantaconnico@gmail.com" className="hover:text-primary transition-colors">
                  cantaconnico@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a 
                  href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navegación</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-foreground/80">Clases individuales</li>
              <li className="text-foreground/80">Clases grupales</li>
              <li className="text-foreground/80">Clases online</li>
              <li className="text-foreground/80">Clases a domicilio</li>
            </ul>

            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-gradient-hero transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-foreground/80 group-hover:text-foreground" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>


      </div>

      {/* WhatsApp Fixed Button */}
      <a
        href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-hero hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;