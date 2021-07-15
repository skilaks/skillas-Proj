// import "bootstrap/dist/css/bootstrap.rtl.min.css";

// import '../node_modules/bootstrap/dist/css/bootstrap'

import { Home, LoginPage, DashbordPage,PageService,Team } from "./pages";
import "./App.css";

import { NavbarRtl } from "./components/navbar";
import { Footer,Footer2 } from "./components/footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const flag = PageService.getUserData();
 // console.log(flag)
  return (
    <BrowserRouter>
      <div className="App">
        {/* {flag ? (
          ""
        ) : (<header>
       
          </header>
          
        )} */}
        <Switch>
          <Route exact path="/">
          <NavbarRtl />
            <Home />
            <Footer2/>
          </Route>
          <Route exact path="/login">
          <NavbarRtl />
            <LoginPage />
          </Route>
          <Route exact path="/dashbord">
            <DashbordPage />
          </Route>
          <Route exact path="/team">
          <NavbarRtl />
            <Team />
            <Footer2/>
          </Route>
        </Switch>
       
      </div>
    </BrowserRouter>
  );
}

export default App;
