import AllRoutes from './Components/AllRoutes';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';

function App() {

  return (
    <div style={{
      border: "1px solid blue",
      width: "100%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Navbar />
      <Banner />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
