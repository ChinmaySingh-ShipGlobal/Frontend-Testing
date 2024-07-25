import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { updateSortOrder } from "@/redux/actions";
import SelectInputField from "@/components/elements/SelectInputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import InputFieldTest from "@/components/elements/InputFieldTest";
import InputwithTagRightTest from "@/components/elements/InputwithTagRightTest";
import { Badge } from "@/components/ui/badge";
import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";

const selectCountry = [
  { key: "usa", value: "USA" },
  { key: "india", value: "India" },
  { key: "albania", value: "Albania" },
];

const partners = [
  {
    partner: "UPS",
    rating: "4.2",
    time: "4 to 7 days",
    rate: "Rs. 3500.00",
    speed: "Fastest",
  },
  {
    partner: "ABS",
    rating: "4.2",
    time: "4 to 7 days",
    rate: "Rs. 3500.00",
    speed: "Cheapest",
  },
];

const sortType = [
  { key: "cheapest", value: "Cheapest" },
  { key: "fastest", value: "Fastest" },
];

const formSchema = z.object({
  country: z.string({ message: "Select Country" }),
  pincode: z.coerce
    .number({ message: "Pincode must be in digits" })
    .min(100000, { message: "Pincode must be 6 digits" })
    .max(999999, { message: "Pincode must be 6 digits" }),
  weight: z.coerce.number({ message: "Weight must be in digits" }),
  length: z.coerce.number({ message: "Length must be in digits" }),
  width: z.coerce.number({ message: "Width must be in digits" }),
  height: z.coerce.number({ message: "Height must be in digits" }),
});

export default function RateCalculator() {
  const [showCalculatedWeight, setShowCalculatedWeight] =
    useState<boolean>(false);

  const dispatch = useDispatch();
  const handleSelectSortOrder = (sortOrder: string) => {
    dispatch(updateSortOrder(sortOrder));
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setShowCalculatedWeight(true);
    console.log(values);
  }

  const volumetric_weight =
    form.getValues("length") *
    form.getValues("width") *
    form.getValues("height");

  return (
    <>
      <div className=" bg-gray-100">
        <div className="font-semibold text-2xl text-center m-2 lg:text-left lg:ml-6">
          <p className="m-2 p-2 text-2xl font-medium font-poppins">
            Rate Calculator
          </p>
          <div className="bg-white">
            <div className="lg:flex lg:flex-row lg:gap-x-3">
              <Card className="lg:w-2/3 shadow-none">
                <CardContent>
                  {/* Rate Calculator Input Fields */}
                  <div className="lg:flex lg:flex-row lg:gap-x-3">
                    {/* Rate Calculator Input Fields */}
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        data-testid="rate-calculator-form"
                      >
                        <div className="grid grid-cols-1 gap-x-2 text-left lg:grid-cols-4 max-w-sm m-auto lg:max-w-full">
                          <div className="lg:col-span-2 lg:mr-4 lg:gap-2 justify-center items-center ">
                            <FormField
                              control={form.control}
                              name="country"
                              render={({ field }) => (
                                <FormItem>
                                  <div>
                                    <Label
                                      htmlFor="country"
                                      className="font-normal text-xs"
                                    >
                                      Destination Country
                                    </Label>
                                    <div className="mt-2">
                                      <Select onValueChange={field.onChange}>
                                        <SelectTrigger
                                          className="ring-blue-50 font-normal text-sm h-9"
                                          id="country"
                                        >
                                          <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectGroup>
                                            {selectCountry.map((item) => (
                                              <SelectItem
                                                value={item.key}
                                                key={item.key}
                                              >
                                                {item.value}
                                              </SelectItem>
                                            ))}
                                          </SelectGroup>
                                        </SelectContent>
                                      </Select>
                                    </div>
                                    <FormDescription></FormDescription>
                                    <FormMessage />
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                          <div className="lg:col-span-2 lg:mt-2 lg:gap-2 lg:ml-4">
                            <InputFieldTest
                              name="pincode"
                              label="Destination Pincode"
                              type="text"
                              placeholder="Type code"
                              form={form}
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex-col gap-x-4 text-left lg:flex lg:flex-row lg:justify-between max-w-sm m-auto lg:mt-4 lg:max-w-full">
                          <InputwithTagRightTest
                            label="Actual Weight"
                            type="text"
                            unit="kg"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="weight"
                            divClass="lg:mr-8"
                          />
                          <InputwithTagRightTest
                            label="Length"
                            type="text"
                            unit="cm"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="length"
                            divClass=""
                          />
                          <InputwithTagRightTest
                            label="Width"
                            type="text"
                            unit="cm"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="width"
                            divClass=""
                          />
                          <InputwithTagRightTest
                            label="Height"
                            type="text"
                            unit="cm"
                            placeholder="Type here ..."
                            form={form}
                            inputTagClass=""
                            classNameInput=""
                            name="height"
                            divClass=""
                          />
                        </div>
                        {/* Reset and Calculate buttons */}
                        <div className="flex justify-center gap-4 mt-6 lg:justify-end">
                          <Button className="border border-blue-400 bg-transparent text-blue-400 text-sm font-normal hover:bg-transparent">
                            Reset
                          </Button>
                          <Button className="font-normal text-sm" type="submit">
                            Calculate
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                  {/* Components when Calculate button is pressed */}
                  {showCalculatedWeight && (
                    <>
                      {/* Weights description as Dead, Volumetric and Billed weights */}
                      <div className="flex justify-center mt-10 text-gray-700">
                        <div className="grid gap-x-3 grid-cols-3">
                          <div className="py-2 px-0 text-center border border-gray-350 rounded-lg bg-gray-250">
                            <p className="text-sm font-medium text-gray-650">
                              {form.getValues("weight")}
                              KG
                            </p>
                            <p className="text-sm font-semibold text-gray-600">
                              Dead weight
                            </p>
                          </div>
                          <div className="p-2 text-center border border-gray-350 rounded-lg bg-gray-250">
                            <p className="text-sm font-medium text-gray-650">
                              {volumetric_weight} KG
                            </p>
                            <p className="text-sm font-semibold text-gray-600">
                              Volumetric weight
                            </p>
                          </div>
                          <div className="p-2 text-center border border-orange-700 text-orange-700 bg-pink-100 rounded-lg">
                            <p className="text-sm font-semibold">
                              {form.getValues("weight") > volumetric_weight
                                ? form.getValues("weight")
                                : volumetric_weight}{" "}
                              KG
                            </p>
                            <p className="text-sm font-semibold ">
                              Billed weight
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Partners Table */}
                      <div className="bg-white rounded-md mt-4">
                        <div className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-between items-center mb-4">
                          <p className="font-semibold text-sm font-poppins">
                            Showing {partners.length} results
                          </p>
                          <div className="flex h-9 flex-row rounded-sm items-center justify-end lg:border-gray-150 lg:border px-2">
                            <p className="text-xs font-normal font-poppins h-1/2 text-gray-700 mr-2">
                              Sort by:
                            </p>
                            <SelectInputField
                              name="sort"
                              data={sortType}
                              defaultValue="cheapest"
                              className="rounded-sm h-7 mb-3 border-transparent placeholder:text-xs placeholder:font-medium text-black"
                              setSelectValueObj={handleSelectSortOrder}
                            />
                          </div>
                        </div>
                        <Table className="w-full">
                          <TableHeader>
                            <TableRow className="bg-gray-100 text-gray-800 text-xs font-medium font-poppins">
                              <TableHead className="py-2 text-xs font-medium font-poppins ">
                                Courier Partner
                              </TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">
                                Rating
                              </TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">
                                Estimated Delivery Time
                              </TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">
                                Shipment Rate
                              </TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins "></TableHead>
                              <TableHead className="py-2 text-xs font-medium font-poppins ">
                                Action
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody className="text-left">
                            {partners.map((partner, index) => (
                              <TableRow
                                key={index}
                                className="border border-blue-light"
                              >
                                <TableCell className="py-2 px-6">
                                  {partner.partner}
                                </TableCell>
                                <TableCell className="py-2 flex items-center mt-2">
                                  {partner.rating}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="ml-2"
                                  >
                                    <g clip-path="url(#clip0_12_1626)">
                                      <path
                                        d="M4.29362 4.11797L5.59262 1.50197C5.63043 1.42626 5.68859 1.36259 5.76056 1.31808C5.83254 1.27357 5.91549 1.25 6.00012 1.25C6.08474 1.25 6.1677 1.27357 6.23967 1.31808C6.31165 1.36259 6.36981 1.42626 6.40762 1.50197L7.70662 4.11797L10.6106 4.53997C10.6944 4.55159 10.7732 4.58652 10.8381 4.64078C10.9029 4.69504 10.9512 4.76644 10.9774 4.84683C11.0037 4.92723 11.0068 5.01338 10.9864 5.09545C10.966 5.17752 10.9229 5.2522 10.8621 5.31097L8.76112 7.34597L9.25712 10.221C9.32062 10.59 8.93062 10.871 8.59712 10.697L6.00012 9.33897L3.40262 10.697C3.06962 10.8715 2.67962 10.59 2.74312 10.2205L3.23912 7.34547L1.13812 5.31047C1.07761 5.25166 1.03482 5.17705 1.0146 5.09513C0.994384 5.01321 0.997555 4.92725 1.02375 4.84704C1.04995 4.76683 1.09813 4.69558 1.1628 4.64139C1.22748 4.58719 1.30606 4.55223 1.38962 4.54047L4.29362 4.11797Z"
                                        fill="#F59300"
                                        stroke="#F59300"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_12_1626">
                                        <rect
                                          width="12"
                                          height="12"
                                          fill="white"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </TableCell>
                                <TableCell className="py-2">
                                  {partner.time}
                                </TableCell>
                                <TableCell className="py-2">
                                  {partner.rate}
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    className={
                                      partner.speed === "Fastest"
                                        ? "text-orange-dark bg-orange-light"
                                        : "text-purple bg-blue-light"
                                    }
                                  >
                                    {partner.speed}
                                  </Badge>
                                </TableCell>
                                <TableCell className="py-2 m-auto">
                                  <Button className="bg-blue-400 text-white text-xs font-medium font-poppins py-1 rounded-md">
                                    Create Order
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
              {/* Right Tab */}
              <Card className="hidden lg:w-1/3 lg:block shadow-none">
                <CardContent>
                  <div className="px-2">
                    <div className="w-full h-full m-4 flex flex-col items-center justify-center">
                      <p className="font-semibold text-base">Quick Tips</p>
                      <svg
                        width="90"
                        height="68"
                        viewBox="0 0 90 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mt-4"
                      >
                        <g clip-path="url(#clip0_125_325)">
                          <path
                            d="M49.3999 67.2654L74.0996 51.6462C74.191 51.5899 74.3106 51.6145 74.3668 51.7059C74.4231 51.7974 74.3985 51.9169 74.3071 51.9731L49.5265 67.6416C49.4948 67.6627 49.4597 67.6732 49.4245 67.6732L49.3999 67.2654Z"
                            fill="url(#paint0_linear_125_325)"
                          />
                          <path
                            d="M49.4244 67.6733C49.4033 67.6733 49.3787 67.6698 49.3576 67.6628L15.6825 55.1123C15.6585 55.1036 15.6365 55.0902 15.6178 55.0729C15.599 55.0555 15.584 55.0346 15.5735 55.0113C15.563 54.988 15.5573 54.9629 15.5567 54.9374C15.5561 54.9118 15.5606 54.8865 15.57 54.8627C15.6087 54.7608 15.7176 54.7116 15.8196 54.7502L49.4068 67.2655L49.4244 67.6733Z"
                            fill="url(#paint1_linear_125_325)"
                          />
                          <path
                            d="M84.7616 7.66752L80.8737 14.1043L65.2545 20.7453L64.3861 21.1144L50.3486 34.2411C50.0779 34.5118 49.8951 34.8985 49.8634 35.1129C49.8494 35.1868 49.7861 35.1551 49.7263 35.1516C49.663 35.1481 49.5751 35.1727 49.5681 35.0954C49.5611 34.8141 49.5294 34.5012 49.0759 34.22L42.0415 29.6637L36.9122 26.3379L22.464 22.6328L10.3703 19.532L2.71045 7.63236L2.82646 7.49877L2.8335 7.48822L31.5903 0.0140031C31.6324 -5.93564e-05 31.6395 0.00697189 31.657 0.0315813L41.4649 14.723L41.6583 15.0113C41.8692 15.3207 41.8903 15.5105 41.8903 15.6476H42.0696V15.616C42.0696 15.6019 42.0696 15.5844 42.0731 15.5668C42.0731 15.5562 42.0767 15.5457 42.0767 15.5316C42.0802 15.5176 42.0802 15.5035 42.0837 15.4894C42.0872 15.4754 42.0872 15.4613 42.0907 15.4437C42.1013 15.3945 42.1153 15.3383 42.1294 15.282C42.1329 15.2644 42.1399 15.2469 42.1435 15.2328C42.161 15.1765 42.1786 15.1168 42.1997 15.0605C42.2103 15.0394 42.2173 15.0148 42.2278 14.9937C42.256 14.9234 42.2841 14.8601 42.3157 14.8039C42.3438 14.7476 42.372 14.7019 42.4001 14.6633L51.2419 1.80346C51.263 1.77182 51.2735 1.75775 51.3192 1.76478L84.7057 7.50932L84.7616 7.66752Z"
                            fill="#E8B67F"
                          />
                          <path
                            d="M42.0418 29.6602H42.0383L36.9129 26.3383L22.4644 22.6328L41.8906 15.6476L41.9434 15.5457V15.6476L42.0418 29.6602Z"
                            fill="url(#paint2_linear_125_325)"
                          />
                          <path
                            d="M41.8903 15.6476L22.464 22.6293L20.7133 22.1793L10.3703 19.525L2.71045 7.62528L2.8335 7.48114L31.5903 0.00692306C31.6324 -0.00713943 31.6395 -0.000108184 31.657 0.0245012L41.4649 14.7159L41.6583 15.0042C41.8692 15.3206 41.8903 15.5105 41.8903 15.6476Z"
                            fill="url(#paint3_linear_125_325)"
                          />
                          <path
                            d="M41.9588 16.3896L23.5903 22.9916L20.7251 22.2568L41.4771 14.7966L41.6705 15.0849C41.8814 15.3943 41.9025 15.5841 41.9025 15.7212H41.9553L41.9588 16.3896Z"
                            fill="url(#paint4_linear_125_325)"
                          />
                          <path
                            d="M10.6342 19.5954L10.3741 19.5286L2.71387 7.62896L2.82988 7.49536L10.6342 19.5954Z"
                            fill="#D2A679"
                          />
                          <path
                            d="M65.2547 20.7451L64.3863 21.1142L50.3488 34.2412C50.0781 34.5119 49.8953 34.8986 49.8636 35.1131C49.8495 35.1869 49.7863 35.1553 49.7265 35.1517C49.6632 35.1482 49.5753 35.1728 49.5683 35.0955C49.5613 34.8142 49.5296 34.5013 49.0761 34.2201L42.0417 29.6603L41.9468 15.6513V15.5493L42.0769 15.6513L65.2547 20.7451Z"
                            fill="url(#paint5_linear_125_325)"
                          />
                          <path
                            d="M84.7618 7.66755L80.8739 14.1043L66.6574 20.1477L65.2582 20.7418L42.0734 15.6477C42.0593 15.4684 42.1823 15.0606 42.3159 14.8004C42.3441 14.7441 42.3722 14.6984 42.4003 14.6598L51.2421 1.79997C51.2632 1.76833 51.2738 1.75426 51.3195 1.7613L84.7059 7.50583L84.7618 7.66755Z"
                            fill="url(#paint6_linear_125_325)"
                          />
                          <path
                            d="M66.6575 20.1474L64.3899 21.1107L64.0981 21.3919L41.9434 16.4947L42.0453 15.6439H42.0734C42.0594 15.4646 42.1824 15.0568 42.316 14.7966L66.6575 20.1474Z"
                            fill="url(#paint7_linear_125_325)"
                          />
                          <path
                            opacity="0.75"
                            d="M42.5582 15.7532V29.9943L42.0414 29.6603H42.0379L41.3594 29.2173V15.8375L41.8902 15.6477H42.0695L42.5582 15.7532Z"
                            fill="url(#paint8_linear_125_325)"
                          />
                          <path
                            d="M49.2873 67.4448L15.5841 54.8697C15.3942 54.7889 15.3661 54.6096 15.3555 54.3881C15.3555 54.3881 13.9071 25.6668 13.9036 25.6633C13.9001 25.5895 13.9915 25.5438 13.9845 25.4981C13.9598 25.3891 13.7524 24.9778 13.6856 24.9356L0 17.159L0.116016 16.8953L36.9127 26.3383L49.0729 34.2165C49.5264 34.4977 49.5615 34.8106 49.565 35.0919C49.5686 35.1692 49.66 35.1446 49.7232 35.1481C49.7865 35.1516 49.8463 35.1833 49.8604 35.1094C49.892 34.895 50.0748 34.5083 50.3455 34.2411L64.3827 21.1141L89.8383 10.2937L89.993 10.5082L76.2511 22.584C75.9839 22.8512 75.8609 23.1781 75.9136 23.3117L74.5073 51.4603C74.4863 51.6396 74.4019 51.6923 74.2226 51.8153L49.5861 67.41C49.4877 67.4732 49.3822 67.4905 49.2873 67.4448Z"
                            fill="#BF9064"
                          />
                          <path
                            d="M49.7227 35.1481L49.4801 67.4588C49.4149 67.4771 49.3453 67.4721 49.2833 67.4447L15.5804 54.8732C15.3905 54.7923 15.3624 54.6095 15.3519 54.3916L13.8999 25.6668V25.6598C13.8999 25.6527 13.8999 25.6457 13.9034 25.6387C13.9034 25.6316 13.9069 25.6281 13.9105 25.6246C13.914 25.6176 13.9175 25.6141 13.921 25.607C13.9245 25.6 13.928 25.5965 13.9315 25.5895C13.9456 25.5684 13.9667 25.5473 13.9737 25.5297C13.9772 25.5262 13.9772 25.5227 13.9772 25.5191V25.5156L49.5684 35.1059C49.5824 35.1692 49.6665 35.1446 49.7227 35.1481Z"
                            fill="#BD8F63"
                          />
                          <path
                            opacity="0.54"
                            d="M49.4841 67.3641V67.4555C49.4188 67.4738 49.3492 67.4688 49.2872 67.4414L15.584 54.8699C15.4504 54.8136 15.3977 54.7046 15.373 54.571L49.4841 67.3641Z"
                            fill="url(#paint9_linear_125_325)"
                          />
                          <path
                            d="M34.2441 47.7651L47.2938 52.0331L47.2621 64.759L34.4551 60.0551L34.2441 47.7651ZM40.7832 56.3151L40.8148 62.2105L47.1352 64.5322V58.5226L40.7832 56.3151ZM42.6504 58.2196L43.9276 60.2523L45.1788 59.1561L45.3968 59.4047L44.1055 60.5356L45.3996 62.5951L45.2122 62.7129L43.9367 60.6833L42.6918 61.7745L42.4739 61.526L43.7588 60.3999L42.463 58.3373L42.6504 58.2196ZM46.4114 60.5089V61.089L46.7454 61.198V61.8519L46.4114 61.7183V62.2456L45.6801 61.1347L46.4114 60.5089ZM45.2864 59.8023L45.543 59.8831V62.1999L45.2864 62.1085V59.8023ZM34.5008 54.1316L34.5957 59.9359L40.6355 62.1437L40.6004 56.262L34.5008 54.1316ZM43.9438 61.0503L44.6047 62.1156L43.2863 61.6374L43.9438 61.0503ZM44.9629 60.073V61.5847L44.2774 60.6179L44.9629 60.073ZM42.3473 58.7265L42.6004 58.8109V61.1242L42.3473 61.0363V58.7265ZM42.9168 59.3488L43.5707 60.3578L42.9168 60.8605V59.3488ZM37.4536 56.5468L37.7032 56.6277L37.7039 56.776C38.4471 57.0749 39.1811 57.8202 39.5352 58.9796C39.3031 58.5894 39.0992 58.5156 38.7371 58.6386C38.6035 58.3609 38.2098 58.2132 37.9742 58.3609C37.9144 58.2469 37.8235 58.1523 37.712 58.0881L37.7246 60.2945C37.7246 60.4984 37.584 60.6812 37.2359 60.6109C36.9195 60.5335 36.7895 60.291 36.8246 59.8761L37.0004 59.9042C37.0004 60.182 37.0215 60.3402 37.2324 60.3894C37.4117 60.4316 37.4926 60.3648 37.4926 60.1995L37.4694 58.0111C37.3695 58.004 37.2771 58.0286 37.2113 58.0867C37.1305 57.8828 36.7473 57.6085 36.459 57.8124C36.2551 57.489 35.8719 57.366 35.6574 57.6015C35.9313 56.7736 36.6748 56.4835 37.455 56.6927L37.4536 56.5468ZM41.4543 58.7019L42.168 59.8269L41.4614 60.414L41.4754 59.862L41.1309 59.7812V59.1413L41.4543 59.2609V58.7019ZM43.2649 58.9445L44.6008 59.4296L43.9329 60.0167L43.2649 58.9445ZM40.7723 50.0851L40.7864 56.0968L47.1391 58.3117V52.1699L40.7723 50.0851ZM41.9571 55.2777L45.7539 56.5749V57.3308L41.9571 56.023V55.2777ZM38.6879 56.712C38.7125 56.7367 38.7125 57.0003 38.6316 57.0601C38.6078 57.0709 38.5814 57.0749 38.5554 57.0718C38.5294 57.0687 38.5047 57.0586 38.484 57.0425C38.4348 57.0038 38.4066 56.9476 38.4277 56.8632C38.4488 56.7788 38.6598 56.6874 38.6879 56.712ZM39.0395 56.1109C39.0676 56.1355 39.0676 56.3992 38.9832 56.4589C38.9593 56.4697 38.9329 56.4737 38.9069 56.4706C38.8809 56.4675 38.8562 56.4574 38.8355 56.4413C38.7863 56.4027 38.7582 56.3464 38.7793 56.262C38.8004 56.1777 39.0113 56.0863 39.0395 56.1109ZM38.0551 56.0863C38.0832 56.1109 38.0832 56.3745 37.9988 56.4343C37.9749 56.4451 37.9486 56.4491 37.9226 56.446C37.8965 56.4429 37.8719 56.4328 37.8512 56.4167C37.802 56.3781 37.7738 56.3218 37.7949 56.2374C37.816 56.1531 38.027 56.0617 38.0551 56.0863ZM37.0602 55.9421C37.0883 55.9667 37.0883 56.2304 37.0039 56.2902C36.98 56.3009 36.9537 56.305 36.9276 56.3019C36.9016 56.2988 36.8769 56.2887 36.8563 56.2726C36.807 56.2339 36.7789 56.1777 36.8 56.0933C36.8211 56.0089 37.032 55.9175 37.0602 55.9421ZM44.8891 51.9909L45.8102 53.8085L45.1809 53.594V56.2272L44.5516 56.0093L44.5551 53.3972L43.9293 53.1933L44.8891 51.9909ZM34.3812 47.9901L34.4902 53.921L40.6039 56.0233L40.5512 50.0151L34.3812 47.9901ZM42.8117 51.2983L43.7328 53.1159L43.1035 52.9015V55.5347L42.4742 55.3167L42.4812 52.7046L41.852 52.5007L42.8117 51.2983ZM35.7488 49.1819L36.248 49.3472L36.4801 50.1874L36.2199 50.1698L36.9617 51.9628L36.5785 50.4862L36.7965 50.4827L36.575 49.4526L39.152 50.3034V51.7202C39.152 52.2581 38.5684 52.9366 37.7457 52.5991L37.7492 54.0229L38.9305 54.7823L36.0723 53.7909L37.2219 53.8472L37.2008 52.4374C36.3852 52.1948 35.7945 51.214 35.7945 50.6163L35.7488 49.1819Z"
                            fill="#322214"
                          />
                          <path
                            d="M49.7229 35.1481C49.5823 35.1516 49.4768 35.3379 49.4733 35.5067L49.4416 35.5207L13.9001 25.6629C13.8966 25.5961 13.9739 25.5539 13.9809 25.5117C13.9845 25.5082 13.9845 25.5047 13.9809 25.5012C13.9563 25.3922 13.7489 24.9809 13.6821 24.9387L0 17.1597L0.116016 16.896L36.9091 26.3351H36.9127L49.0729 34.2133C49.5264 34.498 49.5615 34.8074 49.565 35.0887C49.565 35.0922 49.565 35.0992 49.5686 35.1027C49.5826 35.1695 49.667 35.1449 49.7232 35.1484"
                            fill="url(#paint10_linear_125_325)"
                          />
                          <path
                            d="M76.2547 22.5802C75.9875 22.8474 75.8644 23.1743 75.9172 23.3079L50.0323 35.556L49.9796 35.5138C49.9761 35.3099 49.846 35.1728 49.7476 35.1517C49.8003 35.1588 49.8495 35.1763 49.8636 35.1095C49.8706 35.0674 49.8812 35.0181 49.8987 34.9654C49.9128 34.9197 49.9339 34.8705 49.9585 34.8177C50.0323 34.649 50.1448 34.4662 50.289 34.3045C50.3101 34.2834 50.3312 34.2588 50.3522 34.2377L64.3898 21.1107L89.8454 10.2903L90.0001 10.5047L76.2547 22.5802Z"
                            fill="#CD9C6B"
                          />
                          <path
                            d="M33.7484 38.3682C33.7871 38.3787 33.8012 38.3823 33.8012 38.3506L33.6676 31.2002C33.657 30.9576 33.5972 30.4795 33.3054 30.2861L20.344 22.4115L14.269 20.8435L27.4417 28.715C27.7722 28.933 27.8003 29.3408 27.8144 29.6431L28.0042 36.5963C28.0042 36.6315 28.0113 36.6385 28.0359 36.6491L33.7484 38.3682Z"
                            fill="url(#paint11_linear_125_325)"
                          />
                          <path
                            d="M49.7228 35.1481C49.5787 35.1517 49.4732 35.3485 49.4732 35.5208C49.4697 35.5349 49.4451 35.5313 49.4416 35.5208C49.4135 35.1376 49.2553 34.7087 49.0478 34.5575L36.7896 26.6544L36.9091 26.3345H36.9126L49.0728 34.213C49.5263 34.4978 49.5615 34.8071 49.565 35.0884C49.565 35.0919 49.565 35.0989 49.5685 35.1024C49.5826 35.1692 49.6666 35.1446 49.7228 35.1481Z"
                            fill="#D4A271"
                          />
                          <path
                            d="M36.9091 26.3383L36.7896 26.6547L0 17.1593L0.116016 16.8992L36.9091 26.3383Z"
                            fill="#DEB37E"
                          />
                          <path
                            d="M75.9208 23.3079L74.5146 51.4564C74.4935 51.6357 74.4091 51.6885 74.2298 51.8115L49.5934 67.4061C49.5582 67.4307 49.5195 67.4448 49.4844 67.4553L49.727 35.1446C49.7902 35.1481 49.85 35.1798 49.8641 35.106C49.8641 35.0954 49.8676 35.0884 49.8676 35.0778L75.9138 23.2759C75.9138 23.2935 75.9173 23.3008 75.9208 23.3079Z"
                            fill="#DBAD77"
                          />
                          <path
                            opacity="0.54"
                            d="M74.5146 51.4458V51.4599C74.4935 51.6392 74.4091 51.6919 74.2298 51.8149L49.5934 67.4095C49.5582 67.4342 49.5195 67.4482 49.4844 67.4588V67.3674L74.5146 51.4458Z"
                            fill="url(#paint12_linear_125_325)"
                          />
                          <path
                            d="M74.0537 39.1978L73.4912 50.6583L65.2998 55.7595L65.7217 43.831L74.0537 39.1978ZM69.6732 47.4946L65.6021 49.8884L65.4088 55.531L69.4623 53.0103L69.6732 47.4946ZM67.7291 49.9165L67.7221 50.1064C68.2083 49.8638 68.6678 50.0326 68.8611 50.8376C68.7275 50.6513 68.485 50.7251 68.3232 51.1048C68.2494 50.9466 67.8732 51.0767 67.817 51.4072C67.7871 51.3534 67.7333 51.3337 67.6714 51.3407L67.5818 53.5165C67.5748 53.7029 67.5642 53.9033 67.3287 54.0474C67.2197 54.0966 66.9314 54.1353 66.9701 53.731L67.1072 53.6255C67.0966 53.8822 67.1634 53.9595 67.3041 53.8751C67.4728 53.7732 67.4412 53.6115 67.4482 53.4603L67.5238 51.3987C67.4693 51.4344 67.4224 51.4806 67.3859 51.5346C67.3494 51.5885 67.324 51.6492 67.3111 51.713C67.2689 51.5865 66.8611 51.6638 66.8119 52.0259C66.6959 51.8712 66.3795 52.0224 66.2599 52.4126C66.48 51.3991 67.0256 50.5578 67.5688 50.1957L67.5748 50.029L67.7291 49.9165ZM73.6705 45.1318L69.7893 47.4275L69.5748 52.9576L73.4139 50.5423L73.6705 45.1318ZM72.4717 46.9951L72.5842 47.1005L71.7383 49.0194L72.4365 49.9833L72.324 50.2224L71.6279 49.2697L70.7912 51.1681L70.6752 51.0626L71.5274 49.1322L70.8053 48.1447L70.9318 47.9056L71.6385 48.8812L72.4717 46.9951ZM70.1092 49.1994L70.5486 49.7337L70.0811 50.7392V50.2962L69.8842 50.4158L69.8947 49.8427L70.0916 49.7267L70.1092 49.1994ZM70.8686 48.5033L70.7771 50.6232L70.6189 50.7287L70.7068 48.6158L70.8686 48.5033ZM71.6104 49.6107L71.9865 50.1064L71.1779 50.5986L71.6104 49.6107ZM67.3037 49.7654C67.3213 49.7654 67.3107 50.0079 67.251 50.1275C67.2299 50.1697 67.1912 50.2154 67.1596 50.2189C67.1279 50.2224 67.1139 50.1872 67.1314 50.0958C67.149 50.0044 67.2861 49.7654 67.3037 49.7654ZM71.0443 48.7915L71.417 49.2521L70.9811 50.1134L71.0443 48.7915ZM68.3725 49.3259C68.3865 49.3294 68.376 49.572 68.3197 49.688C68.2986 49.7302 68.26 49.7759 68.2283 49.7794C68.1967 49.7829 68.1826 49.7478 68.2002 49.6564C68.2178 49.565 68.3549 49.3259 68.3725 49.3259ZM69.9334 41.6478L65.8201 43.954L65.6057 49.7091L69.6873 47.3044L69.9334 41.6478ZM72.6439 47.424L72.5455 49.5404L72.4049 49.6318L72.4998 47.5189L72.6439 47.424ZM67.9857 49.1677C68.0033 49.1677 67.9928 49.4103 67.933 49.5298C67.9119 49.572 67.8732 49.6177 67.8416 49.6212C67.81 49.6247 67.7959 49.5896 67.8135 49.4982C67.8311 49.4068 67.9682 49.1677 67.9857 49.1677ZM72.2818 48.0392L72.2256 49.3892L71.86 48.9533L72.2818 48.0392ZM73.1537 47.3958L73.1326 47.9162L73.3365 47.8037L73.3119 48.3802L73.115 48.4962L73.108 48.9708L72.6826 48.4611L73.1537 47.3958ZM68.6432 48.4716C68.6607 48.4716 68.6502 48.7142 68.5904 48.8337C68.5693 48.8759 68.5307 48.9216 68.499 48.9251C68.4674 48.9286 68.4533 48.8935 68.4709 48.8021C68.4885 48.7107 68.6256 48.4716 68.6432 48.4716ZM72.0814 47.656L71.6455 48.6544L71.2693 48.1447L72.0814 47.656ZM68.9771 42.8712L68.9244 44.3197C68.9033 44.8119 68.5096 45.7048 67.9225 46.0775L67.8592 47.4451L68.6432 47.2763L66.7342 48.3802L67.5287 47.6244L67.5709 46.2814C67.0611 46.5732 66.6533 46.0318 66.6779 45.4833L66.7236 44.1544L67.0682 43.9681L67.1807 44.6079L66.9943 44.7591L67.4057 45.9509L67.2475 44.8646L67.3881 44.7029L67.2791 43.8486L68.9771 42.8712ZM73.9693 39.4052L70.0318 41.606L69.7857 47.2626L73.6881 44.9282L73.9693 39.4052ZM72.9428 44.2813L72.8936 44.9528L70.5873 46.3169L70.6189 45.6384L72.9428 44.2813ZM71.3115 41.381L71.8213 42.4567L71.4381 42.6712L71.3221 45.0864L70.9564 45.2974L71.0268 42.8821L70.6576 43.1036L71.3115 41.381ZM72.5912 40.6708L73.0869 41.729L72.6791 41.9575L72.5947 44.3552L72.2045 44.5731L72.3275 42.1579L71.9443 42.3759L72.5912 40.6708Z"
                            fill="#322214"
                          />
                          <path
                            d="M64.5938 21.3885L50.6758 34.3256C50.282 34.7018 50.0219 35.2643 50.0324 35.5561C50.0254 35.5702 49.9902 35.5807 49.9762 35.5561C49.9938 35.3311 49.8496 35.1764 49.7441 35.1518C49.7969 35.1588 49.8461 35.1764 49.8602 35.1096C49.8672 35.0674 49.8777 35.0182 49.8953 34.9655C49.9094 34.9198 49.9305 34.8705 49.9551 34.8178C50.0394 34.628 50.1766 34.41 50.3453 34.2413L64.3828 21.1143L64.5938 21.3885Z"
                            fill="#D7AA77"
                          />
                          <path
                            d="M61.5244 37.0814C61.5244 37.1201 61.542 37.1377 61.5666 37.1271L65.7467 34.9826C65.7537 34.9791 65.7572 34.972 65.7607 34.958L65.9928 28.1064C65.9998 27.7302 66.2107 27.3575 66.499 27.1009L80.3812 14.625L76.1554 16.4355L62.2026 29.077C61.844 29.4286 61.7209 29.8434 61.7139 30.195L61.5244 37.0814Z"
                            fill="url(#paint13_linear_125_325)"
                          />
                          <path
                            d="M64.5937 21.3884L89.9965 10.5044L89.8418 10.2935L64.3862 21.1107L64.5937 21.3884Z"
                            fill="#F8CE93"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_125_325"
                            x1="1283.87"
                            y1="846.486"
                            x2="1296.95"
                            y2="867.141"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop />
                            <stop offset="1" stop-opacity="0" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_125_325"
                            x1="1713.92"
                            y1="700.709"
                            x2="1712.23"
                            y2="705.282"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop />
                            <stop offset="1" stop-opacity="0" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_125_325"
                            x1="1618.09"
                            y1="672.535"
                            x2="1840.68"
                            y2="764.797"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#C37A44" />
                            <stop offset="0.4442" stop-color="#BB713D" />
                            <stop offset="0.6406" stop-color="#A05728" />
                            <stop offset="1" stop-color="#964E23" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_125_325"
                            x1="2489.65"
                            y1="1387.64"
                            x2="2006.81"
                            y2="709.912"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#E9B880" />
                            <stop offset="1" stop-color="#E4AF76" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_125_325"
                            x1="1101.39"
                            y1="433.696"
                            x2="1092.26"
                            y2="408.541"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#C37A45" stop-opacity="0" />
                            <stop offset="0.1334" stop-color="#C37A45" />
                            <stop offset="0.2945" stop-color="#D08D55" />
                            <stop offset="0.5021" stop-color="#DEA167" />
                            <stop offset="0.6966" stop-color="#E8AF73" />
                            <stop offset="0.8631" stop-color="#ECB477" />
                            <stop
                              offset="1"
                              stop-color="#ECB477"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_125_325"
                            x1="1147.28"
                            y1="583.066"
                            x2="705.735"
                            y2="1597.87"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0881" stop-color="#AF6938" />
                            <stop offset="0.4829" stop-color="#9A5227" />
                            <stop offset="0.7792" stop-color="#8D4520" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_125_325"
                            x1="1798.62"
                            y1="1089.22"
                            x2="2053.74"
                            y2="630.507"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0327" stop-color="#E4AF76" />
                            <stop offset="1" stop-color="#E9B880" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_125_325"
                            x1="1268.36"
                            y1="347.662"
                            x2="1271.38"
                            y2="334.254"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#AF6A38" stop-opacity="0" />
                            <stop offset="0.086" stop-color="#AF6A38" />
                            <stop offset="0.1977" stop-color="#B87542" />
                            <stop offset="0.5828" stop-color="#D59C66" />
                            <stop offset="0.7771" stop-color="#E4AF76" />
                            <stop
                              offset="0.9239"
                              stop-color="#E4AF76"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_125_325"
                            x1="51.203"
                            y1="733.062"
                            x2="153.142"
                            y2="733.062"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#743F1A" stop-opacity="0" />
                            <stop
                              offset="0.4929"
                              stop-color="#743F1A"
                              stop-opacity="0.887"
                            />
                            <stop
                              offset="0.5"
                              stop-color="#743F1A"
                              stop-opacity="0.9"
                            />
                            <stop
                              offset="0.5297"
                              stop-color="#743F1A"
                              stop-opacity="0.847"
                            />
                            <stop
                              offset="1"
                              stop-color="#743F1A"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear_125_325"
                            x1="1717.55"
                            y1="700.508"
                            x2="1718.38"
                            y2="698.319"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#322214" />
                            <stop
                              offset="0.2397"
                              stop-color="#322314"
                              stop-opacity="0.989"
                            />
                            <stop
                              offset="1"
                              stop-color="#322214"
                              stop-opacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint10_linear_125_325"
                            x1="2554.78"
                            y1="915.278"
                            x2="2526.79"
                            y2="1008.68"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.0476" stop-color="#C69866" />
                            <stop offset="0.4156" stop-color="#BA8C5E" />
                            <stop offset="0.8135" stop-color="#B5875B" />
                          </linearGradient>
                          <linearGradient
                            id="paint11_linear_125_325"
                            x1="1245.55"
                            y1="842.121"
                            x2="582.019"
                            y2="105.187"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#845F35" />
                            <stop offset="0.4311" stop-color="#91673C" />
                            <stop offset="0.4407" stop-color="#976A40" />
                            <stop offset="0.8737" stop-color="#986B40" />
                            <stop offset="1" stop-color="#AB8157" />
                          </linearGradient>
                          <linearGradient
                            id="paint12_linear_125_325"
                            x1="1300.97"
                            y1="852.158"
                            x2="1302.55"
                            y2="854.648"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#322214" stop-opacity="0" />
                            <stop offset="1" stop-color="#322214" />
                          </linearGradient>
                          <linearGradient
                            id="paint13_linear_125_325"
                            x1="922.449"
                            y1="1423.96"
                            x2="1050.43"
                            y2="776.741"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#A9794B" />
                            <stop offset="0.3857" stop-color="#AE7F53" />
                            <stop offset="0.4557" stop-color="#AC7D50" />
                            <stop offset="0.6236" stop-color="#A9794B" />
                            <stop offset="1" stop-color="#B2875D" />
                          </linearGradient>
                          <clipPath id="clip0_125_325">
                            <rect width="90" height="67.8516" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-xs font-normal space-y-3">
                      <p className="font-semibold">Dead Weight:</p>
                      <p className=" mt-1">
                        Dead/Dry weight or volumetric weight whichever is higher
                        will be taken while calculating the freight rates.
                      </p>
                      <p>
                        Fixed COD charge or COD % of the order value whichever
                        is higher will be taken while calculating the COD fee.
                      </p>
                      <p>Above prices are inclusive of GST</p>
                      <p>
                        The above pricing is subject to change based on fuel
                        surcharges and courier company base rates.
                      </p>
                    </div>
                    <div className="text-xs font-normal mt-4">
                      <p className="font-semibold">Volumetric Weight:</p>
                      <p className="mt-1">
                        Volumetric weight is calculated LxBxH/5000 for all
                        courier companies except for Fedex Surface, Aramex,
                        Fedex Surface Light and Gati Surface.
                      </p>
                    </div>
                    <div className="text-xs mt-4 flex flex-row gap-x-4 items-center bg-orange-200 p-1.5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.00016 14.6667C4.31816 14.6667 1.3335 11.682 1.3335 8.00004C1.3335 4.31804 4.31816 1.33337 8.00016 1.33337C11.6822 1.33337 14.6668 4.31804 14.6668 8.00004C14.6668 11.682 11.6822 14.6667 8.00016 14.6667ZM7.50016 6.66671V11.3334H8.50016V6.66671H7.50016ZM8.00016 6.00004C8.17697 6.00004 8.34654 5.9298 8.47157 5.80478C8.59659 5.67975 8.66683 5.51018 8.66683 5.33337C8.66683 5.15656 8.59659 4.98699 8.47157 4.86197C8.34654 4.73695 8.17697 4.66671 8.00016 4.66671C7.82335 4.66671 7.65378 4.73695 7.52876 4.86197C7.40373 4.98699 7.3335 5.15656 7.3335 5.33337C7.3335 5.51018 7.40373 5.67975 7.52876 5.80478C7.65378 5.9298 7.82335 6.00004 8.00016 6.00004Z"
                          fill="#F59300"
                        />
                      </svg>

                      <p className="font-normal mt-1">
                        <p className="font-medium text-xs inline">Important:</p>{" "}
                        The standard courier RTO charge will also apply to their
                        additional weight courier type.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
