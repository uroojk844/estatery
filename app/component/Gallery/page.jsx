import GalleryHeader from "./Header";
import Card from "./Card";
import Button from "../Button";

const GallerySection = () => {
  return (
    <section className="space-y-8 p-8 lg:p-24">
      <GalleryHeader />
      <div className="grid max-sm:grid-flow-col max-sm:overflow-x-auto sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:pl-3">
        <Card popular />
        <Card popular />
        <Card popular />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="sm:hidden flex h-14">
        <Button size="full">Browse more properties</Button>
      </div>
    </section>
  );
};

export default GallerySection;
