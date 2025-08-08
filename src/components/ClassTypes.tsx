import { User, Users, Home, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClassTypes = () => {
  const classTypes = [
    {
      icon: User,
      title: "Individual",
      price: "35€/hora",
      description: "Atención 100% personalizada. Adaptado a tu nivel, estilo y objetivos específicos.",
      features: [
        "Clase totalmente personalizada",
        "Progreso a tu ritmo",
        "Técnica vocal específica",
        "Repertorio a tu elección"
      ],
      popular: true,
    },
    {
      icon: Users,
      title: "Grupal",
      price: "Descuento a convenir",
      description: "Aprende junto a otros cantantes. Perfecto para familias, amigos o parejas.",
      features: [
        "Ambiente social y divertido",
        "Precio reducido por persona",
        "Armonías y duetos",
        "Motivación grupal"
      ],
      popular: false,
    },
    {
      icon: Home,
      title: "A domicilio",
      price: "Consulta suplemento",
      description: "Comodidad total en tu hogar. Nico se desplaza con todo el material necesario.",
      features: [
        "En la comodidad de tu casa",
        "Sin desplazamientos",
        "Horarios flexibles",
        "Material incluido"
      ],
      popular: false,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="clases" className="py-20 bg-background-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Modalidades de{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Clase
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Encuentra la modalidad que mejor se adapte a tu estilo de vida y objetivos musicales
          </p>
        </div>

        {/* Class Types Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {classTypes.map((classType, index) => {
            const IconComponent = classType.icon;
            return (
              <div
                key={index}
                className={`relative bg-card rounded-xl p-8 shadow-card border transition-all duration-300 hover:-translate-y-2 hover:shadow-hero ${
                  classType.popular
                    ? "border-primary/30 ring-2 ring-primary/10"
                    : "border-border/50"
                }`}
              >
                {/* Popular Badge */}
                {classType.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-hero text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-button">
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title and Price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {classType.title}
                  </h3>
                  <div className="flex items-baseline text-text-primary mb-4">
                    <Euro className="w-5 h-5 mr-2" />
                    <span className="text-3xl font-bold tracking-tight">
                      {classType.price}
                    </span>
                  </div>
                  <p className="text-text-primary mb-8 h-24">
                    {classType.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-text-secondary/80 text-left mb-8">
                  {classType.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-4 h-4 bg-gradient-hero rounded-full mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button asChild variant={classType.popular ? "hero" : "outline"} className="w-full">
                  <a href="https://wa.me/34611084334?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20vuestros%20servicios.%20Gracias." target="_blank" rel="noopener noreferrer">
                    Reservar Clase
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-background-accent rounded-xl border border-primary/10">
          <p className="text-text-secondary">
            
            <strong>Política flexible:</strong> Cancela o reprograma con 24h de antelación.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClassTypes;