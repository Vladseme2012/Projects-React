import { useState } from 'react';

function Login() {
  // const [textvalue, setTextvalue] = useState("''");
  // const [passwordvalue, setPasswordvalue] = useState('');

  const [objectData, setObjectData] = useState({textvalue: '', passwordvalue: ''})

  function handleFormSubmit(event) {
    event.preventDefault();
    
    console.log(objectData);
    setObjectData({textvalue: '', passwordvalue: ''})
  }

  function handleInputChange(event, name) {
    setObjectData({...objectData, [name]: event.target.value})

  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            onChange={(e) => handleInputChange(e, 'textvalue')} // Вариант записи переиспользуемой функции для избегания дублирования кода 
            type="text"
            value={objectData.textvalue}
          />
        </label>
        <label>
          Password:
          <input
            onChange={(event) => {
              setObjectData({...objectData, passwordvalue: event.target.value});
            }}
            type="password"
            value={objectData.passwordvalue}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
