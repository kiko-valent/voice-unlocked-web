import { Award, Users, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import nicoPortrait from "@/assets/nicoperfil.jpeg";

const AboutNico = () => {
  const achievements = [
    {
      icon: GraduationCap,
      value: "+10 años",
      label: "de estudios en canto",
    },
    {
      icon: Award,
      value: "+5 años",
      label: "de experiencia docente",
    },
    {
      icon: Users,
      value: "+60",
      label: "alumnos satisfechos",
    },
    {
      icon: Star,
      value: "Diploma",
      label: "Fundación Julio Bocca",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre-nico" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Conoce a{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Nico
              </span>
            </h2>
            
            <div className="space-y-6 text-text-secondary">
              <p className="text-lg leading-relaxed">
                Soy graduado en <strong>Intérprete de Teatro Musical</strong> por la prestigiosa 
                <strong> Fundación Julio Bocca</strong>, con más de 10 años dedicados al estudio 
                del canto y 5 años de experiencia docente.
              </p>
              
              <p className="text-lg leading-relaxed">
                He tenido el privilegio de formar cantantes tanto en <strong>Argentina como en España</strong>, 
                trabajando en la Fundación Julio Bocca y varias escuelas de arte reconocidas.
              </p>
              
              <p className="text-lg leading-relaxed">
                Mi enfoque se centra en crear un <strong>ambiente de confianza y acompañamiento personal</strong> 
                donde cada alumno pueda superar sus miedos y descubrir su verdadero potencial vocal.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 my-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center p-4 bg-background-accent rounded-lg border border-primary/10">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button 
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#contacto")}
              className="w-full sm:w-auto"
            >
              Comenzar mi viaje musical
            </Button>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative">
              <img
                src={nicoPortrait}
                alt="Nico, profesor de canto profesional"
                className="w-full rounded-2xl shadow-hero object-cover aspect-square"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center shadow-hero">
                <div className="text-center">
                  <div className="text-xl font-bold text-text-primary">5.0</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNico;