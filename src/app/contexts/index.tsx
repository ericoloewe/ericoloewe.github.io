"use client";
import React from "react"

import { EnvProvider } from "./env"
import { LoggingProvider } from "./logging"

export function AppProviders({ children }: any) {
  return (
    <EnvProvider>
      <LoggingProvider>
        {children}
      </LoggingProvider>
    </EnvProvider>
  )
}