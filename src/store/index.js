import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from "./Characters_Slice";

const store = configureStore({
	reducer: charactersSlice.reducer
});

export default store;
