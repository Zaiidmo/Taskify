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
        
        <label >Forgot your Password ?<a className="text-blue-800" href="
    #">Recover it Here !</a></label>
      </form>
    </>
  );
};
