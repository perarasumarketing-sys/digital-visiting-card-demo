import ProfileHeader from "@/components/card/ProfileHeader";
import ContactActions from "@/components/card/ContactActions";
import AboutSection from "@/components/card/AboutSection";
import ServicesSection from "@/components/card/ServicesSection";
import GallerySection from "@/components/card/GallerySection";
import LocationSection from "@/components/card/LocationSection";
import SocialSection from "@/components/card/SocialSection";
import CardActions from "@/components/card/CardActions";
import Footer from "@/components/card/Footer";
import StickyActions from "@/components/card/StickyActions";

export default function Template1() {
  return (
    <main className="min-h-screen px-3 pb-24 pt-4 sm:px-6 sm:py-10">
      <div
        className="
          mx-auto
          max-w-md
          overflow-hidden
          rounded-[2.5rem]
          bg-white
          text-zinc-900
          shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          ring-1
          ring-white/10
        "
      >
        {/* Profile */}
        <div className="animate-fade-up">
          <ProfileHeader />
        </div>

        {/* Contact Actions */}
        <div className="animate-fade-up">
          <ContactActions />
        </div>

        {/* About */}
        <div className="animate-fade-up">
          <AboutSection />
        </div>

        {/* Services */}
        <div className="animate-fade-up">
          <ServicesSection />
        </div>

        {/* Gallery */}
        <div className="animate-fade-up">
          <GallerySection />
        </div>

        {/* Location */}
        <div className="animate-fade-up">
          <LocationSection />
        </div>

        {/* Social */}
        <div className="animate-fade-up">
          <SocialSection />
        </div>

        {/* Save Contact / Share */}
        <div className="animate-fade-up">
          <CardActions />
        </div>

        {/* Footer */}
        <Footer />
      </div>

      {/* Mobile Sticky Actions */}
      <StickyActions />
    </main>
  );
}