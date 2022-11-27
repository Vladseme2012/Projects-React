function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    const Data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(Data);
    alert(JSON.stringify(Data));
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={textValue} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={passwordValue} />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
