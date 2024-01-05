import Image from "next/image";
import GalleryHeader from "./Header";
import { FaBed, FaRegHeart } from "react-icons/fa";
import Card from "./Card";

const GallerySection = () => {
  return (
    <section className="space-y-8 p-8 sm:p-24 ">
      <GalleryHeader />
      <div className="grid max-sm:grid-flow-col max-sm:overflow-x-auto sm:grid-cols-3 gap-6 max-sm:pl-3">
        <Card popular/>
        <Card popular/>
        <Card popular/>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default GallerySection;
