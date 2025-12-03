import HeroSlider from "../components/HeroSlider";
import TeamSlider from "../components/TeamSlider";
import TestimonialSlider from "../components/TestimonialSlider";
import ContactUs from "../components/ContactUs";
import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const { lang } = useLanguage();

  return (
    <div className="pt-20 space-y-16">
      <div className="animate-fadeUp">
        <HeroSlider />
      </div>
      <div className="animate-fadeUp">
        <TeamSlider />
      </div>
      <div className="animate-fadeUp">
        <TestimonialSlider />
      </div>
      <div className="animate-fadeUp">
        <ContactUs />
      </div>
    </div>
  );
}















