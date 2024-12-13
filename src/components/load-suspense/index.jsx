import { Suspense } from 'react'
import { LoadingSuspense } from './loading-suspense'
import PropTypes from 'prop-types'

export default function LoadSuspense ({ children }) {
  return <Suspense fallback={<LoadingSuspense />}>{children}</Suspense>
}

LoadSuspense.propTypes = {
  children: PropTypes.node.isRequired,
}
