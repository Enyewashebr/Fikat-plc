import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";
import BusinessHours from "../components/BusinessHours";
import SocialMedia from "../components/SocialMedia";
// import ContactCTA from "../components/ContactCTA";

const Contact = () => {
  return (
    <MainLayout>

      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <ContactMap />

      <BusinessHours />
      <SocialMedia />

      {/* <ContactCTA /> */}

    </MainLayout>
  );
};

export default Contact;
