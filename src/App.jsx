import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Outlet } from "react-router";
function App() {
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
