import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSubmissionStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setSubmissionStatus('success');
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactar. Te responderé lo antes posible.",
        });
        form.current?.reset();
        setTimeout(() => setSubmissionStatus('idle'), 5000);
    }, (error) => {
        console.log(error.text);
        setSubmissionStatus('error');
        toast({
          title: "Error al enviar",
          description: "Ha ocurrido un problema. Por favor, inténtalo de nuevo más tarde.",
          variant: "destructive",
        });
        setTimeout(() => setSubmissionStatus('idle'), 5000);
    });
  };

  return (
    <section id="contacto" className="py-20 bg-background-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            ¿Listo para{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              comenzar?
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Contáctame para reservar tu primera clase o resolver cualquier duda que tengas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Información de contacto
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Estoy aquí para ayudarte a dar el primer paso hacia descubrir tu voz. 
                No importa tu nivel actual, juntos encontraremos el camino perfecto para ti.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary group-hover:text-green-600">
                    WhatsApp
                  </div>
                  <div className="text-text-secondary">
                    Respuesta inmediata - Método preferido
                  </div>
                </div>
              </a>

              <a
                href="tel:+34611084334"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary group-hover:text-primary">
                    +34 611 08 43 34
                  </div>
                  <div className="text-text-secondary">
                    Llamada directa
                  </div>
                </div>
              </a>

              <a
                href="mailto:cantaconnico@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary group-hover:text-primary">
                    cantaconnico@gmail.com
                  </div>
                  <div className="text-text-secondary">
                    Correo electrónico
                  </div>
                </div>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-text-primary">Ubicación</div>
                  <div className="text-text-secondary">Mahón, Menorca</div>
                  <div className="text-sm text-text-muted">Clases presenciales y online</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-text-primary">Horarios</div>
                  <div className="text-text-secondary">Lun - Sáb: 9:00 - 21:00</div>
                  <div className="text-sm text-text-muted">Horarios flexibles disponibles</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Envíame un mensaje
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-text-primary">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-text-primary">
                    Teléfono (Opcional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2"
                    placeholder="+34 612 345 678"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-text-primary">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-text-primary">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="mt-2 min-h-[120px]"
                  placeholder="Cuéntame sobre tu experiencia musical, objetivos o cualquier pregunta que tengas..."
                />
              </div>

              <Button type="submit" variant="hero" className="w-full flex items-center justify-center" disabled={submissionStatus === 'sending'}>
                {submissionStatus === 'idle' && <><Send className="w-5 h-5 mr-2" /><span>Enviar mensaje</span></>}
                {submissionStatus === 'sending' && <><Loader2 className="w-5 h-5 mr-2 animate-spin" /><span>Enviando...</span></>}
                {submissionStatus === 'success' && <><CheckCircle className="w-5 h-5 mr-2" /><span>¡Mensaje enviado!</span></>}
                {submissionStatus === 'error' && <><XCircle className="w-5 h-5 mr-2" /><span>Error al enviar</span></>}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-text-muted">
              * Campos obligatorios. Te responderé en menos de 24 horas.
            </div>
          </div>
        </div>

        <div className="mt-16 text-center p-8 bg-gradient-hero rounded-xl text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            ¿Prefieres empezar ahora mismo?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Reserva tu primera clase de muestra gratuita por WhatsApp
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