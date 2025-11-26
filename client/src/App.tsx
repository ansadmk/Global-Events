import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Speakers from "@/pages/Speakers";
import Agenda from "@/pages/Agenda";
import Sponsors from "@/pages/Sponsors";
import Contact from "@/pages/Contact";
import Register from "@/pages/Register";
import CXLoyaltyMENA from "@/pages/events/CXLoyaltyMENA";
import FutureBanksKSA from "@/pages/events/FutureBanksKSA";
import ProptechSummit from "@/pages/events/ProptechSummit";
import EventFour from "@/pages/events/EventFour";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/speakers" component={Speakers} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/sponsors" component={Sponsors} />
      <Route path="/contact" component={Contact} />
      <Route path="/register" component={Register} />
      <Route path="/events/cx-loyalty-mena" component={CXLoyaltyMENA} />
      <Route path="/events/future-banks-ksa" component={FutureBanksKSA} />
      <Route path="/events/proptech-summit" component={ProptechSummit} />
      <Route path="/events/event-four" component={EventFour} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
