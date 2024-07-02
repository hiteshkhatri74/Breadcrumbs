import './App.css';
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from './pages/Home';
import Productdetails from './pages/Product-details';
import Productlisting from './pages/Product-listing';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Breadcrumbs />
      {/* Routes */}

      <Routes>
        <Route path="/"              element={<Home/>} />
        <Route path="/products"      element={<Productlisting />}/>
        <Route path="/products/:id"  element={<Productdetails />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
