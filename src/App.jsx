import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  return (
    <div className="">
      <Header />
      <main>
        <ScrollToTop />
        <ScrollToHashElement />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
