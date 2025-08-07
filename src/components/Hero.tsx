import { Button } from "@/components/ui/button";
import { Play, Star, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/80 via-background-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary-glow font-medium text-sm mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              +5 años formando cantantes
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Descubre tu voz con clases de{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                canto personalizadas
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-foreground/90 mb-8 max-w-3xl">
              Supera tus miedos y crece como cantante. Clases 100% individuales, 
              presenciales, online o a domicilio.
            </p>

            {/* Price Highlight */}
            <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-8 max-w-md mx-auto lg:mx-0">
              <p className="text-yellow-400 font-bold text-lg">
                Desde 35€ la clase individual
              </p>
              <p className="text-foreground/80 text-sm">
                Descuentos disponibles para grupos
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="hero"
                size="lg"
                onClick={() => window.open('https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias.', '_blank')}
                className="text-lg px-8 py-4 shadow-hero group"
              >
                Quiero reservar mi clase
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("#testimonios")}
                className="text-lg px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/50"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver testimonios
              </Button>
            </div>

            {/* Motivational Quote */}
            <div className="text-center lg:text-left">
              <blockquote className="text-lg lg:text-xl text-foreground/90 italic font-medium max-w-2xl">
                "Atrévete a intentarlo. ¡La música es para todos!"
              </blockquote>
              <cite className="text-foreground/80 font-semibold block mt-2">
                - Nico, tu profesor de canto
              </cite>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;