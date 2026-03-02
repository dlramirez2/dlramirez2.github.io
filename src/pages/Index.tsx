import { Layout } from "@/components/layout/Layout";
import { PhotoSlideshow } from "@/components/home/PhotoSlideshow";
import { BioSection } from "@/components/home/BioSection";

const Index = () => {
  return (
    <Layout>
      <PhotoSlideshow />
      <BioSection />
    </Layout>
  );
};

export default Index;
