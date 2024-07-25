import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

interface SelectItems {
  key: string;
  value: string;
}

interface SelectInputFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  data: SelectItems[];
  defaultValue?: string;
  setSelectValueObj: (prev: any) => void;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({
  data,
  name,
  className,
  defaultValue,
  label,
  placeholder,
  setSelectValueObj,
}) => {
  const onSelectChange = (value: any) => {
    setSelectValueObj(value);
  };
  return (
    <div>
      <Label htmlFor={name} className="font-normal text-xs">
        {label}
      </Label>
      <div className="mt-2">
        <Select onValueChange={onSelectChange} defaultValue={defaultValue}>
          <SelectTrigger
            className={cn(` ring-blue-50 font-normal text-sm h-9`, className)}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.map((item) => (
                <SelectItem value={item.key} key={item.key}>
                  {item.value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectInputField;
