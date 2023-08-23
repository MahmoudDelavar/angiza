import Header from './layouts/header';
import Footer from './layouts/footer';
import Home from './component/home';
import { BrowserRouter } from 'react-router-dom';
//=================================================
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
