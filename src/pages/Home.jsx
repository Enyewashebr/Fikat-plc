import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductCategories from "../components/ProductCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Partners from "../components/Partners";
import ProjectsPreview from "../components/ProjectsPreview";
import ContactCTA from "../components/ContactCTA";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  return (
    <MainLayout>

      <Hero />
      <WhoWeAre />  
<ProductCategories />
      <WhyChooseUs />

      

      <FeaturedProducts />

      {/* <Services />

      <Partners /> */}

      <ProjectsPreview />

      <ContactCTA />

    </MainLayout>
  );
};

export default Home;
