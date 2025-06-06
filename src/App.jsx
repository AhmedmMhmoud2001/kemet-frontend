import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css';

// ✅ استيراد صفحات الادمن
import Login from './admin/auth/Login';
import Dashboard from './admin/Dashboard/Dashboard';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminProjects from './admin/AdminProjects/Adminprojects';
import AddProject from './admin/AdminProjects/AddProject';
// import EditProject from './admin/AdminProjects/EditProject';
import AdminServices from './admin/AdminServices/Services';
import Messages from './admin/AdminMessages/Messages';

function App() {
  return (
    <Routes>
      {/* 👨‍💼 صفحات الادمن */}
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />
      <Route path="/admin/adminprojects" element={
  <ProtectedRoute><AdminProjects/></ProtectedRoute>
} />
<Route path="/admin/adminprojects/add" element={
  <ProtectedRoute><AddProject /></ProtectedRoute>
} />
{/* <Route path="/admin/projects/edit/:id" element={
  <ProtectedRoute><EditProject /></ProtectedRoute>
} /> */}
<Route path="/admin/services" element={
  <ProtectedRoute><AdminServices/></ProtectedRoute>
} />
<Route path="/admin/messages" element={
  <ProtectedRoute><Messages /></ProtectedRoute>
} />

      {/* 🌐 الموقع العام */}
      <Route path="/" element={
        <>
          <TopBar />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Clients />
          
          <Contact />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;
