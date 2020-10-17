import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  withRouter,
} from "react-router-dom";
import { Navigation, Footer } from "./components";
import {
  MainPage,
  BusinessPage,
  CreditsRestructuringPage,
  CreditingPage,
  OpenCurrentAccountPage,
  CurrencyPage,
  ContactsPage,
  BranchesPage,
  CallCenterPage,
  NewsPage,
  BaspanaHitPage,
  FaqPage,
  p2pPage,
  CarCreditPage,
  DetailsPage,
} from "./pages/";
import { animateScroll } from "react-scroll";

const App = () => {
  function _ScrollToTop(props: any) {
    const { pathname } = useLocation();
    React.useEffect(() => {
      animateScroll.scrollTo(0);
    }, [pathname]);
    return props.children;
  }
  const ScrollToTop = withRouter(_ScrollToTop);
  return (
    <Router basename="/bcc-redesign">
      <ScrollToTop>
        <Navigation />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/business" component={BusinessPage} />
          <Route
            path="/credits-restructuring"
            component={CreditsRestructuringPage}
          />
          <Route path="/crediting" component={CreditingPage} />
          <Route
            exact
            path="/open-current-account"
            component={OpenCurrentAccountPage}
          />
          <Route path="/currency" component={CurrencyPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/branches" component={BranchesPage} />
          <Route path="/call-center" component={CallCenterPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/baspana-hit" component={BaspanaHitPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/p2p" component={p2pPage} />
          <Route path="/details" component={DetailsPage} />
          <Route path="/car-credit" component={CarCreditPage} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
