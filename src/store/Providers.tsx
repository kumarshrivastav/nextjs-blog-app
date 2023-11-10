"use client";
import React from 'react'
import { Provider} from "react-redux"
import { persistor, store } from "./store"
import { PersistGate } from "redux-persist/integration/react"
import ThemeProvider from '@/components/ThemeProvider';
const Providers = ({ children }: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </PersistGate>

    </Provider>
  )
}
export default Providers
