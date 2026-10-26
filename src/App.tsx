import React from "react";
import { ShopProvider, useShop } from "./context/ShopContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CartDrawer } from "./components/layout/CartDrawer";
import { QuickViewModal } from "./components/common/QuickViewModal";
import { ToastNotification } from "./components/common/ToastNotification";
import { HomePage } from "./components/pages/HomePage";
import { ShopPage } from "./components/pages/ShopPage";
import { ProductDetailPage } from "./components/pages/ProductDetailPage";
import { AboutPage } from "./components/pages/AboutPage";
import { FAQPage } from "./components/pages/FAQPage";
import { ContactPage } from "./components/pages/ContactPage";

const AppContent: React.FC = () => {
  const { currentPage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case "shop":
        return <ShopPage />;
      case "product":
        return <ProductDetailPage />;
      case "about":
        return <AboutPage />;
      case "faq":
        return <FAQPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-parchment text-espresso font-sans">
      <Navbar />
      <div className="flex-1">{renderPage()}</div>
      <Footer />
      <CartDrawer />
      <QuickViewModal />
      <ToastNotification />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
};

export default App;
