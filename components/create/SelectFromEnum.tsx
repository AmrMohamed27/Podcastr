"use client";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectCategoryProps } from "@/types";

const SelectCategory = ({
  field,
  passedEnum,
  placeholder,
  value,
  setValue,
  hasAudio,
}: SelectCategoryProps) => {
  // Categories
  const [filteredArray, setFilteredArray] = useState(
    passedEnum.options.filter((item) => item)
  );
  const [categoriesSearchText, setSearchText] = useState<string>("");
  // Audio player state variables
  const [audioSource, setAudioSource] = useState<string>(`/${value}.mp3`);
  // Ref for audio player
  const hiddenAudioPlayerRef = useRef<HTMLAudioElement>(null);

  // Voice types array
  const voices = ["alloy", "echo", "fable", "onyx", "nova", "shimmer"];
  // Filtered array based on search text
  useEffect(() => {
    setFilteredArray(
      Array.from(passedEnum.options).filter((item) =>
        item.toLowerCase().includes(categoriesSearchText.toLowerCase())
      )
    );
  }, [categoriesSearchText, passedEnum]);

  // Handle search text change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Handle select value change
  const handleSelectValueChange = (newValue: string) => {
    setValue(newValue);
    field.onChange(newValue);
    if (newValue !== null && voices.includes(newValue)) {
      setAudioSource(`/${newValue}.mp3`); // Update the audio source
      hiddenAudioPlayerRef?.current?.load(); // Load the new audio source
    }
  };
  return (
    <Select
      onValueChange={handleSelectValueChange}
      defaultValue={field.value}
      value={field.value}
    >
      <SelectTrigger className="bg-black-1 outline-none border-none placeholder:text-slate-400 z-50">
        <SelectValue
          placeholder={placeholder}
          className={cn("placeholder:text-gray-1")}
        />
      </SelectTrigger>
      <SelectContent className="text-white-1 z-50 bg-black-1 placeholder:text-slate-400">
        {/* Search input field */}
        <div className="px-4 py-2">
          <Input
            placeholder="Enter search term..."
            value={categoriesSearchText}
            onChange={handleSearch} // Update search term
            className="bg-black-1 border-none placeholder:text-slate-400"
          />
        </div>
        {/* Filtered category options */}
        {filteredArray.length > 0 ? (
          filteredArray.map((item) => (
            <SelectItem key={item} value={item} className="">
              {item}
            </SelectItem>
          ))
        ) : (
          <p className="px-4 py-2 text-slate-400">No match found.</p>
        )}
      </SelectContent>
      {value && hasAudio && (
        <audio ref={hiddenAudioPlayerRef} hidden autoPlay>
          <source src={audioSource} type="audio/mpeg" />
        </audio>
      )}
    </Select>
  );
};

export default SelectCategory;
