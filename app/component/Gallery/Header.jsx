import Button from "../Button";

const GalleryHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-4">
        <div className="text-3xl max-sm:text-center text-indigo-950 font-bold">
          Based on your location
        </div>
        <div className="text-xs max-sm:text-center text-gray-400">
          Some of our picked properties near you location.
        </div>
      </div>
      <div className="max-sm:hidden">
        <Button size="lg">Browse more properties</Button>
      </div>
    </div>
  );
};

export default GalleryHeader;
