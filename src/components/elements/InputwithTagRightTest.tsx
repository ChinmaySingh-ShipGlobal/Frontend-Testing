import { Label } from "@radix-ui/react-label";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function InputwithTagRightTest({
  form,
  label,
  name,
  type,
  placeholder,
  unit,
  inputTagClass,
  classNameInput,
  divClass,
}: any) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className={divClass}>
            <Label className="font-normal text-xs font-poppins">{label}</Label>
            <div className="flex flex-row items-center">
              <FormControl className="w-full">
                <div
                  className={cn(inputTagClass, "flex-row flex items-center")}
                >
                  <Input
                    type={type}
                    placeholder={placeholder ? placeholder : "Type here ..."}
                    {...field}
                    id={name}
                    className={cn(
                      classNameInput,
                      " rounded focus-visible:ring-0 rounded-r-none placeholder:text-gray-400 placeholder:font-normal placeholder:font-poppins placeholder:text-sm border-gray-150"
                    )}
                  />
                  <div className="bg-gray-200 border-gray-150 border-l-0  rounded-r rounded-l-none p-1.5 font-normal text-sm border w-12 h-9 text-center">
                    {unit}
                  </div>
                </div>
              </FormControl>
            </div>
            <FormDescription></FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
