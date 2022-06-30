import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice'

import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    api: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch