import "./assets/theme.css";
import "filepond/dist/filepond.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "react-toastify/dist/ReactToastify.css";
import { PrimeReactProvider } from "primereact/api";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./styles/Theme";
import Routes from "./pages/routes/routes";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <Theme>
      <PrimeReactProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes />
          </Router>
          <ToastContainer position="top-center" />
        </QueryClientProvider>
      </PrimeReactProvider>
    </Theme>
  );
}
