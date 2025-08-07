import { User, Heart, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: User,
      title: "100% Individual y personalizada",
      description: "Cada clase está diseñada específicamente para ti. Sin prisas, sin comparaciones, a tu ritmo.",
    },
    {
      icon: Heart,
      title: "Método sin presión, sin importar experiencia",
      description: "Enfoque especial en superar el miedo a cantar. Ambiente seguro y de confianza.",
    },
    {
      icon: MapPin,
      title: "Clases online, presenciales y a domicilio",
      description: "Máxima flexibilidad: elige cómo y dónde quieres aprender. Adaptación total a tu estilo de vida.",
    },
  ];

  return (
    <section id="por-que-elegirnos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Canta con Nico?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más que clases de canto, es un viaje personal hacia descubrir tu voz única
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;