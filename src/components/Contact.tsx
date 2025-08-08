import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-background-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
            Ponte en <span className="bg-gradient-hero bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            ¿Listo para empezar tu viaje musical o tienes alguna pregunta? Aquí tienes cómo encontrarme.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 justify-items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                {/* Teléfono */}
                <a href="tel:+34611084334" className="block p-6 bg-card rounded-xl hover:bg-card/80 transition-colors">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-primary mb-3" />
                    <div className="font-semibold text-text-primary text-lg">Teléfono</div>
                    <div className="text-text-secondary">+34 611 084 334</div>
                  </div>
                </a>

                {/* Ubicación */}
                <div className="p-6 bg-card rounded-xl">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-primary mb-3" />
                    <div className="font-semibold text-text-primary text-lg">Ubicación</div>
                    <div className="text-text-secondary">Mahón, Menorca</div>
                    <div className="text-sm text-text-muted mt-1">Clases presenciales y online</div>
                  </div>
                </div>

                {/* Horarios */}
                <div className="p-6 bg-card rounded-xl">
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <div className="font-semibold text-text-primary text-lg">Horarios</div>
                    <div className="text-text-secondary">Lun - Sáb: 9:00 - 21:00</div>
                    <div className="text-sm text-text-muted mt-1">Horarios flexibles disponibles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-hero rounded-xl text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            ¿Prefieres empezar ahora mismo?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Reserva tu primera clase por WhatsApp
          </p>
          <Button asChild variant="secondary" className="mt-6 bg-background/80 hover:bg-background text-foreground">
            <a href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias." target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              Reservar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;