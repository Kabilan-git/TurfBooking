import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface dropdownProps {
  onSelectedValue: (value: string) => void;
}

const sportsName = ["Cricket", "Football", "Batmitton", "Tennis"];

const Dropdown = ({ onSelectedValue }: dropdownProps) => {
  const [selectedValue, setSelectedValue] = React.useState<string>("");

  const handleSelectedValue = (value: string) => {
    setSelectedValue(value);
    onSelectedValue(value);
  };

  return (
    <Select value={selectedValue} onValueChange={handleSelectedValue}>
      <SelectTrigger className="md:max-w-max w-sm">
        <SelectValue placeholder="Select a sport" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {sportsName.map((name) => (
            <SelectItem value={name} key={name}>
              {name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
