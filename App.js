import Navbar from './navbar';
import Home from './home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignInPage from './signin';
import Register from './register';
import Protected from './protected';
function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="conpx json-nnntent">
      <Switch>
        <Route path = "/home">
         <Protected Component= {Home}/>
        </Route>

        <Route path = "/create">
        <Protected Component= {Create}/>
        </Route>

        <Route path = "/blogs/:id">
          <BlogDetails />
        </Route>

        <Route exact path = "/">
          <SignInPage/>
        </Route>

        <Route path = "/register">
          <Register/>
        </Route>

        
       
       <Route path = "*">
          <NotFound />
        </Route>

      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
