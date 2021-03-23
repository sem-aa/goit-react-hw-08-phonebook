import React from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "../App.module.css";

class LoginView extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className={s.App}>
        <h1>Login page</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={s.field}>
            <label>
              email
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className={s.field}>
            <label>
              password
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
