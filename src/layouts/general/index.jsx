

import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import { Footer, Navbar } from '../../components';
import Booking from "../../components/Booking";

export default function GeneralLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/landing") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="bg-slate-100" >
      <main id="content" className="w-full  ">
        <div className="fixed md:static bg-white dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <Routes>
          {getRoutes(routes)}
          <Route
            path="/"
            element={<Navigate to="/landing/" replace />}
          />
        </Routes>

      
      </main>
      <Footer />
    </div>

  );
}
