import React, { Suspense, lazy, Component } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./copmonents/AppBar/AppBar";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import PrivateRoute from "./copmonents/PrivateRoute/PrivateRoute";
import PublicRoute from "./copmonents/PublicRoute/PublicRoute";

const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute
              path="/register"
              restricted
              redirectTo={"/contacts"}
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo={"/contacts"}
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
