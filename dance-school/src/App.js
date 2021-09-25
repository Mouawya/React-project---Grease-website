import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Basket from "./components/Basket";
import CourseInfo from "./components/CourseInfo";
import StripeContainer from "./components/StripeContainer";
import RegisterContact from "./components/RegisterContact";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoursesProvider } from "./CoursesContext";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <CoursesProvider>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/courses/:id" component={CourseInfo} />
              <Route exact path="/basket/:title" component={Basket} />
              <Route exact path="/payment/:price" component={StripeContainer} />
              <Route exact path="/registration" component={RegisterContact} />
            </Switch>
          </ScrollToTop>
        </CoursesProvider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
