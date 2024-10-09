import { Input } from "../ui/input";

const GenerateThumbnail = ({ field }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-black-1 h-auto">
      <div className="h-full flex-1">
        <Input
          placeholder="AI prompt to generate thumbnail"
          {...field}
          className="bg-black-1 border-none py-4 mr-1"
        />
      </div>
      <div>
        <Input
          type="file"
          accept="image/*"
          className="h-auto file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-1 file:text-white-1 hover:file:bg-orange-1/70 border-none bg-black-2 file:cursor-pointer"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              // Handle file upload logic
              console.log("Selected file: ", file.name);
            }
          }}
        />
      </div>
    </div>
  );
};

export default GenerateThumbnail;
