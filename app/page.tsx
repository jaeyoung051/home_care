import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { NeedsSection } from "@/components/landing/needs-section"
import { DifferentiatorsSection } from "@/components/landing/differentiators-section"
import { ProcessSection } from "@/components/landing/process-section"
import { TrustSection } from "@/components/landing/trust-section"
import { FaqSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { MobileCta } from "@/components/landing/mobile-cta"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <NeedsSection />
      <ServicesSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <TrustSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
      <Footer />
      <MobileCta />
    </main>
  )
}
