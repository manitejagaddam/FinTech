import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoanProductsPage from './pages/LoanProductsPage';
import LoanSuggestionTool from './pages/LoanSuggestionTool';
// import ApplicationForm from './pages/ApplicationForm';
// import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
// import AboutUs from './pages/AboutUs';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loan-products" element={<LoanProductsPage />} />
            <Route path="/loan-suggestion" element={<LoanSuggestionTool />} />
            {/* <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/dashboard/*" element={<Dashboard />} /> */}
            <Route path="/resources" element={<Resources />} />
            {/* <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;