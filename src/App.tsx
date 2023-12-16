import { Outlet } from 'react-router-dom'
import { Layout } from './Template/Default'

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default App
