import { configureStore, createSlice } from "@reduxjs/toolkit";

// const INITIAL_VALUE = {
//   counter: 5,
//   privacy: false,
// };
const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    },
  },
});

const privacySlice = createSlice({
  name: "privacyToggle",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return {
//       counter: store.counter + Number(action.payload.num),
//       privacy: store.privacy,
//     };
//   } else if (action.type === "SUBTRACT") {
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return { ...store, privacy: !store.privacy };
//   }

//   return store;
// };

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;
