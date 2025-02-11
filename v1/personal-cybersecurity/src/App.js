import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from ".tanstack/react-query";
// import { Toaster } from "./components/ui/toaster";
// import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    // <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
      // <Toaster />
    // </QueryClientProvider>
  );
}
