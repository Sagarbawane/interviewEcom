import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
// import thunk from "redux-thunk";

// import storage from "redux-persist/lib/storage";
import { persistConfig } from "./rootReducer";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// store set with logic of storing data to localstorage

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
