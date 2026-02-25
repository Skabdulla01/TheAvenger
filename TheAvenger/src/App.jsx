import React, { Suspense } from "react";
import Loading from "./loading";


const Dashboard = React.lazy(() => import("./dashboard"));

function App() {

  return (
    <>
    <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    </>
  )
}

export default App