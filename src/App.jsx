import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🌐 Public Pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutPage from "./pages/AboutPage";
import VirtualOfficeServices from "./pages/VirtualOfficeServices";
import Auth from "./pages/Auth";

// 👤 User Dashboard Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";
import Reservations from "./pages/Reservations";
import Visitors from "./pages/Visitors";
import VisitorsList from "./pages/VisitorsList";
import ProtectedRoute from "./components/ProtectedRoute";

// 🧑‍💼 Admin Layout + Login
import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./pages/Admin/AdminLogin";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";

// 🧩 Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
// ✅ NEW IMPORT: Admin Occupancy Graph Dashboard
import AdminOccupancyDashboard from "./pages/Admin/AdminOccupancyDashboard";

// 2️⃣ User Management
import AddUser from "./pages/Admin/AddUser";
import UserList from "./pages/Admin/UserList";

// 3️⃣ Reservations
import AdminReservations from "./pages/Admin/Reservations";

// 4️⃣ Visitors
import AdminVisitors from "./pages/Admin/Visitors";

// 5️⃣ Coupon Codes
import AddCoupon from "./pages/Admin/AddCoupon";
import CouponList from "./pages/Admin/CouponList";

// 6️⃣ Space Master
import AddSpaceMaster from "./pages/Admin/AddSpaceMaster";
import SpaceMasterList from "./pages/Admin/SpaceMasterList";

// 7️⃣ Contact Request
import AddContact from "./pages/Admin/AddContact";
import ContactList from "./pages/Admin/ContactList";

// 8️⃣ Blog
import AddBlog from "./pages/Admin/AddBlog";
import BlogList from "./pages/Admin/BlogList";

// 9️⃣ Virtual Office
import VirtualOfficePrice from "./pages/Admin/VirtualOfficePrice";
import VirtualOfficeBookings from "./pages/Admin/VirtualOfficeBookings";
import VirtualOfficeEnquiries from "./pages/Admin/VirtualOfficeEnquiries";

// ⚙️ Admin Settings
import AdminSettings from "./pages/Admin/AdminSettings";

// 📰 Blog Pages
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import AdminSeatMapView from "./pages/Admin/AdminSeatMapView";
import AdminBlueprintView from "./pages/Admin/AdminBlueprintView";
import ContactComments from "./pages/Admin/ContactComments";
import Amenities from "./components/Amenities";
import EditContact from "./pages/Admin/EditContact";
import AdminVisitorsOverview from "./pages/Admin/AdminVisitorsOverview";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideHeaderRoutes = [
    "/dashboard",
    "/profile",
    "/company-profile",
    "/reservations",
    "/visitors",
    "/visitors-list",
    "/admin",
  ];

  const hideHeader = hideHeaderRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      {!hideHeader && <Header />}
      {children}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* 🌐 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/virtual" element={<VirtualOfficeServices />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />

          {/* 👤 User Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/company-profile"
            element={
              <ProtectedRoute>
                <CompanyProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reservations"
            element={
              <ProtectedRoute>
                <Reservations />
              </ProtectedRoute>
            }
          />
          <Route
            path="/visitors"
            element={
              <ProtectedRoute>
                <Visitors />
              </ProtectedRoute>
            }
          />
          <Route
            path="/visitors-details"
            element={
              <ProtectedRoute>
                <VisitorsList />
              </ProtectedRoute>
            }
          />

          {/* 🧑‍💼 Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* 🔒 Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* ✅ NEW ROUTE: Admin Occupancy Graph Dashboard */}
          <Route
            path="/admin/occupancy"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminOccupancyDashboard />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          <Route
            path="/admin/occupancyy"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminSeatMapView /> {/* 👈 Uses the Grid View now */}
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          <Route
            path="/admin/occupancyyy"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminBlueprintView />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 2️⃣ User Management */}
          <Route
            path="/admin/add-user"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AddUser />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/user-list"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <UserList />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 3️⃣ Reservations */}
          <Route
            path="/admin/reservations"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminReservations />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 4️⃣ Visitors 
          <Route
            path="/admin/visitors"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminVisitors />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />*/}

          <Route
            path="/admin/visitorsOverview"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminVisitorsOverview />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 5️⃣ Coupon Codes */}
          <Route
            path="/admin/add-coupon"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AddCoupon />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/coupon-list"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <CouponList />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 6️⃣ Space Master */}
          <Route
            path="/admin/add-space-master"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AddSpaceMaster />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/space-master-list"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <SpaceMasterList />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 7️⃣ Contact Request */}
          <Route
            path="/admin/add-contact"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AddContact />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/contact-list"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <ContactList />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          <Route
            path="/admin/contact-comments/:id"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <ContactComments />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          <Route
            path="/admin/edit-contact/:id"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <EditContact />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 8️⃣ Blog */}
          <Route
            path="/admin/add-blog"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AddBlog />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/blog-list"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <BlogList />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* 9️⃣ Virtual Office */}
          <Route
            path="/admin/virtual-office-price"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <VirtualOfficePrice />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/virtual-office-bookings"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <VirtualOfficeBookings />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="/admin/virtual-office-enquiries"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <VirtualOfficeEnquiries />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />

          {/* ⚙️ Admin Settings */}
          <Route
            path="/admin/settings"
            element={
              <ProtectedRouteAdmin>
                <AdminLayout>
                  <AdminSettings />
                </AdminLayout>
              </ProtectedRouteAdmin>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
