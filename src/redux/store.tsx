import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { RateInitialState } from "./interfaces";

const store = configureStore({
  reducer: {
    rate: reducers,
  },
  preloadedState: {
    rate: RateInitialState,
  },
});

export default store;
export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
