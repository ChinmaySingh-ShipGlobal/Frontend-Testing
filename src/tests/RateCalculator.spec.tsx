import RateCalculator from "@/pages/RateCalculator";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

//TESTCASES
//(1) Five input fields are present, Two buttons are present
//(2) ->Form fields empty initially
//(3) ->If data is entered, the field is updated
//(4) -> Input fields receive data on form submission
//(5) -> Input fields data type

describe("RateCalculator", () => {
  const mockStore = configureStore();
  let store = mockStore({});

  beforeEach(() => {
    store = mockStore({});
  });

  //(1) -> Five input fields are present, Two buttons are present
  test("Five input fields and two buttons present", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );
    const inputs = await screen.findAllByRole("textbox");
    const buttons = await screen.findAllByRole("button");
    expect(inputs).toHaveLength(5);
    expect(buttons).toHaveLength(2);
  });

  //(2) ->Form fields empty initially
  test("Input fields have no data initially", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );
    const inputs = await screen.findAllByRole("textbox");
    inputs.forEach((input) => {
      expect((input as HTMLInputElement).value).toBe("");
    });
  });

  //(3) ->If data is entered, the field is updated
  test("Input fields data enter and receive", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );
    const pincodeInput = document.getElementById("pincode") as HTMLInputElement;
    const weightInput = document.getElementById("weight") as HTMLInputElement;
    const lengthInput = document.getElementById("length") as HTMLInputElement;
    const widthInput = document.getElementById("width") as HTMLInputElement;
    const heightInput = document.getElementById("height") as HTMLInputElement;

    fireEvent.change(pincodeInput, { target: { value: "123456" } });
    fireEvent.change(weightInput, { target: { value: "10" } });
    fireEvent.change(lengthInput, { target: { value: "20" } });
    fireEvent.change(widthInput, { target: { value: "30" } });
    fireEvent.change(heightInput, { target: { value: "40" } });

    expect(pincodeInput.value).not.toBe("");
    expect(weightInput.value).not.toBe("");
    expect(lengthInput.value).not.toBe("");
    expect(widthInput.value).not.toBe("");
    expect(heightInput.value).not.toBe("");
  });

  // (4)-> Input fields receive data on form submission
  test("Input fields data enter and receive", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );
    const pincodeInput = document.getElementById("pincode") as HTMLInputElement;
    const weightInput = document.getElementById("weight") as HTMLInputElement;
    const lengthInput = document.getElementById("length") as HTMLInputElement;
    const widthInput = document.getElementById("width") as HTMLInputElement;
    const heightInput = document.getElementById("height") as HTMLInputElement;

    fireEvent.change(pincodeInput, { target: { value: "123456" } });
    fireEvent.change(weightInput, { target: { value: "10" } });
    fireEvent.change(lengthInput, { target: { value: "20" } });
    fireEvent.change(widthInput, { target: { value: "30" } });
    fireEvent.change(heightInput, { target: { value: "40" } });

    fireEvent.click(screen.getByRole("button", { name: "Calculate" }));
    expect(pincodeInput.value).toBe("123456");
    expect(weightInput.value).toBe("10");
    expect(lengthInput.value).toBe("20");
    expect(widthInput.value).toBe("30");
    expect(heightInput.value).toBe("40");
  });

  //(5) -> Input fields data type
  test("Input fields data type", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );

    const inputs = await screen.findAllByRole("textbox");
    inputs.forEach((input) => {
      expect(typeof (input as HTMLInputElement).value).toBe("string");
    });
  });

  //(6) -> Form submission on Calculate button click
  test("Form is submitted on Calculate button click", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );
    const formElement = screen.getByTestId("rate-calculator-form");
    formElement.onsubmit = jest.fn();
    fireEvent.click(screen.getByRole("button", { name: "Calculate" }));
    expect(formElement.onsubmit).toHaveBeenCalled();
  });
});
