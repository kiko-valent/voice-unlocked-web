import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Users } from "lucide-react";
import studentsImage from "@/assets/students-gallery.jpg";
// Por favor, asegúrate de que estas rutas y nombres de archivo son correctos
import lauraImage from "@/assets/students/laura.png";
import robertoImage from "@/assets/students/roberto.png";
import isabellaImage from "@/assets/students/isabella.png";

const StudentsGallery = () => {
  const [activeImage, setActiveImage] = useState(studentsImage);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const successStories = [
    {
      name: "Laura M.",
      achievement: "Nico es un profesor increíble porque identifica muy bien donde puedes mejorar y sabe crear ejercicios personalizados y claros para mejorar la técnica. Tuve muchos profesores pero el destaca sin dudas. Súper recomendable",
      description: "",
      image: lauraImage
    },
    {
      name: "Roberto S.",
      achievement: "El profesor tiene mucho dominio, es paciente y adapta sus clases a las necesidades de mi hijo. Las notas mejoraron mucho. Muy recomendable.",
      description: "Padre de alumno",
      image: robertoImage
    },
    {
      name: "Isabella R.",
      achievement: "Nico es una maravilla! Trabajar con el es divertido, además de que ves todos los recursos de los que dispone para ayudarte a mejorar. Avanzas a tu ritmo, siempre sabiendo qué se está trabajando, pero el lo enfoca al juego, a que lo disfrutes",
      description: "",
      image: isabellaImage
    }
  ];

  return (
    <section id="alumnos" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Historias de éxito y{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              alumnos destacados
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Cada alumno tiene su propia historia de crecimiento y superación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gallery Image */}
          <div className="relative">
            <img
              src={activeImage}
              alt="Alumnos de Canta con Nico en el estudio"
              className="w-full rounded-2xl shadow-hero object-cover aspect-video transition-all duration-500"
            />

            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-text-primary">+60 alumnos</span>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Casos de éxito reales
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Cada alumno que pasa por mis clases tiene una historia única. 
                Algunos llegan con miedo a cantar en voz alta, otros buscan perfeccionar 
                su técnica, y muchos simplemente quieren disfrutar de la música.
              </p>
            </div>

            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-background-soft rounded-lg p-6 border border-border/50 hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveImage(story.image)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-hero rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {story.name}
                    </h4>
                    <p className="text-primary font-medium mb-2">
                      {story.achievement}
                    </p>
                    <p className="text-text-secondary text-sm">
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero"
                onClick={() => scrollToSection("#contacto")}
                className="flex-1"
              >
                Quiero formar parte
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#testimonios")}
                className="flex-1"
              >
                Ver testimonios
              </Button>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-background-accent rounded-lg border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">60+</div>
            <div className="text-text-secondary">Alumnos formados</div>
          </div>
          <div className="p-6 bg-background-accent rounded-lg border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-text-secondary">Continúan cantando</div>
          </div>
          <div className="p-6 bg-background-accent rounded-lg border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-text-secondary">Superan sus miedos</div>
          </div>
          <div className="p-6 bg-background-accent rounded-lg border border-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-text-secondary">Países representados</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsGallery;