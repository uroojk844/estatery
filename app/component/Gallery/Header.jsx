import Button from "../Button";

const GalleryHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-4">
        <div className="text-3xl text-indigo-950 font-bold">
          Based on your location
        </div>
        <div className="text-xs text-gray-400">
          Some of our picked properties near you location.
        </div>
      </div>
      <Button size="lg">Browse more properties</Button>
    </div>
  );
};

export default GalleryHeader;
