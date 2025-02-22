import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { chatSlice } from "@/entity/chat";
import { messageSlice } from "@/entity/message";

import "./helpers";

const rootReducer = combineSlices(chatSlice, messageSlice);

export const store = configureStore({
  reducer: rootReducer
});
