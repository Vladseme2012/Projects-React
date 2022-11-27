import './App.css';
import Persons from './components/Persons';

function App() {
  return (
    <div className="App">
      <Persons />
    </div>
  );
}

export default App;

// Образец старого кода!!!!

// {users.map((user) => {
//   {/* const { id, fisrtName, lastName, email } = user;  */}
//   return (
//     <Peson
// id={id}
// fisrtName={fisrtName}
// lastName={lastName}
// email={email}
// key={id} Вместо этого лучше использовать оператор три точки
// user={user} Вместо этого лучше использовать оператор три точки, не добавляется лишнее свойство user!!!!
//       {...user}
//       key={user.id}
//     />
//   );
// })}

// {/* {users.map(user => {
// return <h1>{user.fisrtName}</h1>
// })} */}
