
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import NotFound from "./pages/NotFound";

// Catalog pages
import SlidingDoors from "./pages/catalog/SlidingDoors";
import AccordionDoors from "./pages/catalog/AccordionDoors";
import BookDoors from "./pages/catalog/BookDoors";
import Partitions from "./pages/catalog/Partitions";
import HingedWardrobes from "./pages/catalog/HingedWardrobes";
import BuiltInWardrobes from "./pages/catalog/BuiltInWardrobes";
import SlidingWardrobes from "./pages/catalog/SlidingWardrobes";
import DressingRooms from "./pages/catalog/DressingRooms";

// Services pages
import Measurement from "./pages/services/Measurement";
import Design from "./pages/services/Design";
import Manufacturing from "./pages/services/Manufacturing";
import Installation from "./pages/services/Installation";

// Materials pages
import LDSP from "./pages/materials/LDSP";
import MDF from "./pages/materials/MDF";
import NaturalWood from "./pages/materials/NaturalWood";

// About pages
import Company from "./pages/about/Company";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/city/:citySlug" element={<CityPage />} />
          
          {/* Catalog routes */}
          <Route path="/catalog/sliding-doors" element={<SlidingDoors />} />
          <Route path="/catalog/accordion-doors" element={<AccordionDoors />} />
          <Route path="/catalog/book-doors" element={<BookDoors />} />
          <Route path="/catalog/partitions" element={<Partitions />} />
          <Route path="/catalog/hinged-wardrobes" element={<HingedWardrobes />} />
          <Route path="/catalog/built-in-wardrobes" element={<BuiltInWardrobes />} />
          <Route path="/catalog/sliding-wardrobes" element={<SlidingWardrobes />} />
          <Route path="/catalog/dressing-rooms" element={<DressingRooms />} />
          
          {/* Services routes */}
          <Route path="/services/measurement" element={<Measurement />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route path="/services/installation" element={<Installation />} />
          
          {/* Materials routes */}
          <Route path="/materials/ldsp" element={<LDSP />} />
          <Route path="/materials/mdf" element={<MDF />} />
          <Route path="/materials/natural-wood" element={<NaturalWood />} />
          
          {/* About routes */}
          <Route path="/about/company" element={<Company />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;