import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucks/slice.js";
import { truckReducer } from "./truck/slice.js";
import { usersReducer } from "./users/slice.js";
import { authReducer } from "./auth/slice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whiteList: ["token"],
};

// const trucksPersistConfig = {
//   key: "trucks",
//   storage: storage,
//   whiteList: [
//     "location",
//     "transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water",
//     "van, fully integrated, alcove",
//   ],
// };

// const trucksDetailsPersistConfig = {
//   key: "truck",
//   storage: storage,
//   whiteList: [
//     "transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water",
//     "form, length, width, height, tank, consumption",
//   ],
// };

// const usersPersistConfig = {
//   key: "users",
//   storage: storage,
//   whiteList: ["name"],
// };

const persistAuthReducer = persistReducer(authPersistConfig, authReducer);
// const persistTrucksReducer = persistReducer(trucksPersistConfig, trucksReducer);
// const persistTruckReducer = persistReducer(
//   trucksDetailsPersistConfig,
//   truckReducer
// );
// const persistUserReducer = persistReducer(usersPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    trucks: trucksReducer,
    truck: truckReducer,
    user: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
