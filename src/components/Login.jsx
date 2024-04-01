export const Login = () => {
  return (
    <>
      <div className="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3 className="font-titles">Welcome Back !</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="login-btn">Log In</button>

        <label>
          Don't Have an Account,yet? <br />
          <a
            className="text-orange-600"
            href="#"
          >
            Register Now 
          </a>
        </label>
      </form>
    </>
  );
};
