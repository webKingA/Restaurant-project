import Home from './Pages/Home';
import Foods from './Pages/Foods';
import Carts from './Pages/Carts';
import Contact from './Pages/Contact';
import Loggin from './Pages/Loggin';
import Rigester from './Pages/Rigester';
import Bill from './Pages/Bill';

const AllRoutes = [
  { path: "/home", element: <Home /> },
  { path: "/foods", element: <Foods /> },
  { path: "/carts", element: <Carts /> },
  { path: "/contact", element: <Contact /> },
  { path: "/", element: <Loggin /> },
  { path: "/rigester", element: <Rigester /> },
  { path: "/bill", element: <Bill /> },
];

export default AllRoutes;