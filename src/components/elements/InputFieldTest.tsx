import React from "react";
import { Label } from "@radix-ui/react-label";
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface InputFieldTestProps {
  form: {
    control: any;
  };
  label: string | any;
  name: string;
  type: string;
  placeholder?: string;
}

const InputFieldTest: React.FC<InputFieldTestProps> = ({
  form,
  label,
  name,
  type,
  placeholder,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Label htmlFor={name} className="text-xs font-normal">
            {label}
          </Label>
          <div className="flex items-center mt-1">
            <FormControl>
              <Input
                type={type}
                {...field}
                placeholder={placeholder ?? "Type here ..."}
                id={name}
                className="placeholder:text-sm font-normal text-gray-400 ring-gray-150"
              />
            </FormControl>
          </div>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputFieldTest;
