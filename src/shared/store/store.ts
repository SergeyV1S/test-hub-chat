import { chatSlice } from "@/entity/chat";
import { messageSlice } from "@/entity/message";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineSlices(chatSlice, messageSlice);

export const store = configureStore({
  reducer: rootReducer
});
