import { useState } from 'react';
import AllRoutes from './Components/AllRoutes';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import { MyNavbar } from './Components/MyNavbar';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const hideBanner = () => setIsBannerVisible(false);

  return (
    <div style={{
      width: "100%",
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Pass the hideBanner function to the Banner component */}
      {isBannerVisible && <Banner onClose={hideBanner} />}

      {/* Conditionally apply marginTop based on banner visibility */}
      <div style={{ marginTop: isBannerVisible ? '70px' : '0px' }}>
        <MyNavbar />
      </div>

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
