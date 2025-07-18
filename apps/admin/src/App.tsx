import Layout from '@/layouts'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { routes } from '@generouted/react-router'

const Routes = () => <RouterProvider router={createHashRouter(routes)} />

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

export default App
