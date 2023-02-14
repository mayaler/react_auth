import { Container, Col, Row } from "react-bootstrap";
import Register from "./components/Register";
import Login from "./components/Login";
import Account from "./components/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";

import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>React Authentication</h1>

          <section id='navigation'>
            <a href='/'>Home</a>
            <a href='/free'>Free Component</a>
            <a href='/auth'>Auth Component</a>
          </section>
        </Col>
      </Row>

      {/* create routes here */}
      <Switch>
        <Route exact path='/' component={Account} />
        <Route exact path='/free' component={FreeComponent} />
        <ProtectedRoutes exact path='/auth' component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;
