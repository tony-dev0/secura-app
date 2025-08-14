import { configureStore } from "@reduxjs/toolkit";
import destinationReducer from "./destinationSlice";

const store = configureStore({
  reducer: {
    destination: destinationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
