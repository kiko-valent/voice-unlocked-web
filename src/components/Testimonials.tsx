import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante principiante",
      rating: 5,
      text: "Nunca pensé que podría cantar en público. Nico me ayudó a superar mis miedos y ahora disfruto cantando. Su paciencia y método personalizado han sido clave en mi progreso.",
      highlight: "Superé mis miedos y ahora disfruto cantando"
    },
    {
      name: "Carlos Mendoza",
      role: "Cantante aficionado",
      rating: 5,
      text: "Las clases con Nico han transformado completamente mi técnica vocal. Su experiencia y dedicación se notan desde la primera clase. Recomiendo 100% sus clases.",
      highlight: "Transformó completamente mi técnica vocal"
    },
    {
      name: "Ana Rodríguez",
      role: "Madre de alumno",
      rating: 5,
      text: "Mi hijo adolescente era muy tímido, pero Nico logró que se sintiera cómodo y confiado. Las clases online son perfectas para nosotros. ¡Excelente profesor!",
      highlight: "Logró que mi hijo se sintiera cómodo y confiado"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Lo que dicen{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              mis alumnos
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Testimonios reales de personas que han descubierto su voz conmigo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background-soft rounded-xl p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border border-border/50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-white text-white"
                  />
                ))}
              </div>

              {/* Highlight Quote */}
              <blockquote className="text-lg font-semibold text-primary mb-4 leading-relaxed">
                "{testimonial.highlight}"
              </blockquote>

              {/* Full Testimonial */}
              <p className="text-text-secondary mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold text-text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-text-muted">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <div className="text-sm text-text-muted">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60+</div>
              <div className="text-sm text-text-muted">Alumnos satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-text-muted">Recomendación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-text-muted">Años experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;