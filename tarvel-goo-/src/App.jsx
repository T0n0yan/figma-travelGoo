import React from 'react';
import Cover from './Components/Cover/Cover.jsx';
import Services from "../src/Components/Services/Services.jsx"
import Packages from './Components/Packages/Packages.jsx'
import Reviews from './Components/Reviews/Reviews.jsx';
import ServiceStatistics from './Components/ServiceStatistics/ServiceStatistics.jsx'
import Destinations from './Components/Destinations/Destination.jsx'
import Footer from './Components/Footer/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Cover />
      <Services />
      <ServiceStatistics />
      <Destinations />
      <Packages />
      {/* <BookSection /> */}
      <Reviews />
      <Footer /> 
    </div>
  );
}

export default App;
