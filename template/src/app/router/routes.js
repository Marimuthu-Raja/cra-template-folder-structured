import { lazy, Suspense } from "react"
import * as Paths from "../constants/Paths"
import { PageLoader } from "../components"

const Home = lazy(() => import("../pages/Home"))

const routes = [
  {
    path: Paths.HOME,
    element: (
      <Suspense fallback={<PageLoader />}>
        <Home />
      </Suspense>
    ),
  },
]

export default routes
