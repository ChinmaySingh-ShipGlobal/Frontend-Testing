import RateCalculator from "@/pages/RateCalculator";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("RateCalculator", () => {
  //test -> RateCalculator has 5 input fields
  const mockStore = configureStore();
  const store = mockStore({});
  test("input fields are rendered", async () => {
    render(
      <Provider store={store}>
        <RateCalculator />
      </Provider>
    );
    const inputs = await screen.findAllByRole("textbox");
    expect(inputs).toHaveLength(5);
  });
  //test->form is getting submitted or not by clicking Calculate button
  test("input form submitted", async () => {
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
