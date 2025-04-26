import { Suspense } from 'react'
import PropTypes from 'prop-types'
import { LoadingSuspense } from './loading-suspense'

export default function LoadSuspense ({ children }) {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>
}

LoadSuspense.propTypes = {
  children: PropTypes.node.isRequired,
}
