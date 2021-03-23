import React from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import s from "../App.module.css";

class RegisterView extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className={s.App}>
        <h1>Registration page</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={s.field}>
            <label>
              name
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </div>
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
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
