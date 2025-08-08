import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cuánto duran las clases?",
      answer: "Las clases individuales tienen una duración de 60 minutos. Este tiempo permite trabajar adecuadamente la técnica vocal, repertorio y hacer un seguimiento personalizado de tu progreso."
    },
    {
      question: "¿Se puede empezar sin experiencia?",
      answer: "¡Por supuesto! Mi método está especialmente diseñado para principiantes. Comenzamos desde lo básico: respiración, postura y técnica vocal fundamental. No necesitas conocimientos previos de música."
    },
    {
      question: "¿Qué estilos musicales se enseñan?",
      answer: "Trabajamos con todos los estilos: pop, rock, jazz, teatro musical, clásico, folk, y cualquier género que te interese. Adaptamos el repertorio a tus gustos y objetivos musicales."
    },
    {
      question: "¿Se pueden hacer clases en grupo?",
      answer: "Sí, ofrezco clases grupales con descuentos especiales. Son ideales para familias, amigos o parejas que quieren aprender juntos. El grupo máximo recomendado es de 3-4 personas para mantener la calidad de la enseñanza."
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer: "Puedes cancelar o reprogramar tu clase con 24 horas de antelación sin costo adicional. Si cancelas con menos tiempo, se cobrará el 50% de la clase. En caso de emergencia, siempre encontramos una solución flexible."
    },
    {
      question: "¿Se pueden grabar las clases?",
      answer: "Sí, puedes grabar las clases para repasar en casa. De hecho, es muy recomendable para practicar los ejercicios y revisar las correcciones técnicas. Esto acelera mucho tu progreso."
    },
    {
      question: "¿Qué pasa si no puedo asistir regularmente?",
      answer: "Entiendo que la vida puede ser impredecible. Ofrezco máxima flexibilidad de horarios y no exijo compromiso de permanencia mínima. Puedes tomar clases cuando tu agenda lo permita."
    },
    {
      question: "¿Cómo reservo mi primera clase?",
      answer: "Es muy simple: contacta conmigo por WhatsApp, teléfono o completa el formulario de contacto. Programamos una primera clase donde conoces mi método y evaluamos tus objetivos."
    },
    {
      question: "¿Ayudas con el miedo escénico?",
      answer: "Absolutamente. Uno de mis enfoques principales es ayudar a superar el miedo a cantar frente a otros. Al ser clases 1 a 1, creamos un ambiente seguro donde puedes ganar confianza gradualmente sin presión."
    },
    {
      question: "¿Qué necesito para las clases online?",
      answer: "Solo necesitas una conexión estable a internet, auriculares de buena calidad y un espacio tranquilo. Te guío en la configuración técnica para obtener la mejor calidad de audio durante las clases virtuales."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Preguntas{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Resuelve todas tus dudas sobre las clases de canto y mi metodología
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border/50 px-6 shadow-card hover:shadow-hero transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-text-primary hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12 p-6 bg-background-accent rounded-xl border border-primary/10 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-text-secondary mb-4">
            Estoy aquí para resolver cualquier duda que tengas sobre las clases de canto.
          </p>
          <a 
            href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-glow font-semibold"
          >
            Contáctame por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;