import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import Button from "../Button";
import InputGroup from "../InputGroup";

const RentTab = () => {
  return (
    <div className="p-6 flex flex-wrap gap-x-10">
      <InputGroup label="Location">
        <input
          id="Location"
          type="text"
          placeholder="City"
          defaultValue="Barcelona, Spain"
          className="max-w-[152px] sm:w-36 font-[600] text-indigo-950 text-lg"
          readOnly
        />
      </InputGroup>
      <div className="px-10 border-x max-sm:hidden">
        <InputGroup label="When">
          <input
            id="When"
            type="date"
            defaultValue="Barcelona, Spain"
            readOnly
            hidden
          />
          <div className="flex items-center gap-2">
            <div className="font-[600] placeholder:text-indigo-950 text-lg">
              Select Move-in Date
            </div>
            <FaCalendarAlt size="14" color="#ccc" />
          </div>
        </InputGroup>
      </div>

      <Button size="lg">
        <FaSearch className="lg:hidden" />
        <span className="max-lg:hidden">Browse Properties</span>
      </Button>
    </div>
  );
};

export default RentTab;
