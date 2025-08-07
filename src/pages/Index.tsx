import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutNico from "@/components/AboutNico";
import ClassTypes from "@/components/ClassTypes";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import StudentsGallery from "@/components/StudentsGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
        <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <AboutNico />
        <ClassTypes />
        <StudentsGallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
