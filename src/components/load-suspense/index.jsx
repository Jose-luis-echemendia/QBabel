import React, { Suspense } from 'react'
import { LoadingSuspense } from './loading-suspense'

export default function LoadSuspense ({ children }) {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>
}
