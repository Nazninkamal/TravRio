import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import AddService from './pages/AddService/AddService';
import PlaceOrder from './pages/Booking/PlaceOrder/PlaceOrder';
import ManageServices from './pages/ManageServices/ManageServices';
import Contact from './pages/Home/Contact/Contact';
import DuscountDetails from './pages/Booking/DiscountDetails/DuscountDetails';


function App() {
  return (
    <div className="App">
  <AuthProvider>
  <Router>
  <Header></Header>
  <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>
    <Route path="/home">
      <Home></Home>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    < PrivateRoute path="/placeorder/:serviceId">
    <PlaceOrder></PlaceOrder>
    </PrivateRoute>
    < PrivateRoute path="/duscountdetails/:discountId">
   <DuscountDetails></DuscountDetails>
    </PrivateRoute>
    <Route path="/addservice">
      <AddService></AddService>
    </Route>
    <Route path="/contact">
      <Contact></Contact>
    </Route>
    <Route path="/manageservices">
     <ManageServices></ManageServices>
    </Route>
    <Route path="*">
      <NotFound></NotFound>
    </Route>
  </Switch>
  </Router>
  </AuthProvider>
   <Footer></Footer>

    </div>
  );
}

export default App;
