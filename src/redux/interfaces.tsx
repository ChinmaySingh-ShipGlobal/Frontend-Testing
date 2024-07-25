export interface RateState {
  id: number;
  country: string;
  pincode: string;
  weight: string;
  length: string;
  breadth: string;
  height: string;
  sortOrder: string;
}

export const RateInitialState: RateState = {
  id: 1,
  country: "",
  pincode: "",
  weight: "",
  length: "",
  breadth: "",
  height: "",
  sortOrder: "",
};

export interface RateCalculatorProps {
  setShowCalculatedWeight: React.Dispatch<React.SetStateAction<boolean>>;
}
