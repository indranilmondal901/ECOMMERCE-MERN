import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
// import Home from "./pages/home";
// import Cart from "./pages/cart";
// import Search from "./pages/search";

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Search = lazy(() => import("./pages/search"));

function App() {
  return (
    <Router>
      {/* Header */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
      {/* Footer */}
    </Router>
  );
}

export default App;
