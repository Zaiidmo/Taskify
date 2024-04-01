const Login = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3 className="font-titles">Welcome Back!</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="login-btn">Log In</button>

        <label>
          Don't Have an Account, yet? <br />
          <a className="text-orange-600" href="/register">
            Register Now
          </a>
        </label>
      </form>
    </>
  );
};

export default Login;
