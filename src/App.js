import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home, Skills, Contact } from "./pages";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </Router>
    );
  }
}

// 1. Create a new page - Contact
// 2. Routed from here
// 3. Added to the Header
// 4. Form: Name, Email Address and a Message box.
// 5. Button to submit form.

export default App;
