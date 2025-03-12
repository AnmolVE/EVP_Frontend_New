import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/bars/Navbar";
import Login from "./components/auth/Login";
import CustomerDetail from "./components/customer-details/CustomerDetail";
import CompanyDetail from "./components/company-details/CompanyDetail";
import UserProfile from "./components/user-profile/UserProfile";
import PrivateRoutes from "./components/utils/privateroutes/PrivateRoutes";
import LandingPage from "./components/home/LandingPage";
import MasterVectorDatabase from "./components/admin/master-vector-database/MasterVectorDatabase";
import Footer from "./components/bars/Footer";
import TalentInsights from "./components/home/talent-insights/TalentInsights";
import IndustryTrends from "./components/home/industry-trends/IndustryTrends";
import EVPJourney from "./components/home/evp-journey/EVPJourney";
import InternalCommunications from "./components/internal-communications/InternalCommunications";
import EVP from "./components/evp/EVP";
import ListingEvp from "./components/evp/edit-evps/ListingEvp";
import EVPEmbedment from "./components/evp-embedment/EVPEmbedment";
import Create from "./components/create/Create";
import Engage from "./components/engage/Engage";
import Influence from "./components/influence/Influence";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<CustomerDetail />} path="/customer-detail" />
            <Route element={<CompanyDetail />} path="/company-detail" />
            <Route element={<UserProfile />} path="/user-profile" />
            <Route element={<LandingPage />} path="/home" />
            <Route element={<ListingEvp />} path="/edit-evp" />
          </Route>
          <Route element={<PrivateRoutes requiredRole="Admin" />}>
            <Route
              element={<MasterVectorDatabase />}
              path="/master-vector-database"
            />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Navbar />} path="/navbar" />
          <Route element={<Footer />} path="/footer" />
          <Route element={<TalentInsights />} path="/talent-insights" />
          <Route element={<IndustryTrends />} path="/industry-trends" />
          <Route element={<EVPJourney />} path="/evp-journey" />
          <Route element={<EVP />} path="/evp" />
          <Route element={<Create />} path="/create" />
          <Route element={<Engage />} path="/engage" />
          <Route element={<Influence />} path="/influence" />
          <Route element={<EVPEmbedment />} path="/evp-embedment" />
          <Route
            element={<InternalCommunications />}
            path="/internal-communications"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
