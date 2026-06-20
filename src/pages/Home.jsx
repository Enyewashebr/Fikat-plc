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
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <MainLayout>
<Helmet>
        <title>
          Home | Fikat Finishing Material Supplier PLC
        </title>

        <meta
          name="description"
          content="Premium supplier of granite, marble, ceramic, porcelain and finishing materials in Ethiopia."
        />

        <meta
          name="keywords"
          content="Granite Ethiopia, Marble Ethiopia, Ceramic Tiles, Porcelain Tiles, Finishing Materials"
        />
      </Helmet>
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
