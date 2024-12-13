import { lazy } from 'react'
import LoadSuspense from '@components/load-suspense'
import CustomLayout from '@layout/custom-layout'

const HomeView = lazy(() => import('@views/home-page'))

const HomePage = () => {
  console.log(2)
  return (
    <LoadSuspense>
      <CustomLayout>
        dsdfds
        <HomeView />
      </CustomLayout>
    </LoadSuspense>
  )
}

export default HomePage
