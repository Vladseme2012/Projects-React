import users from '../data/users'
import Person from './Person';

function Persons() {
  return (
    <div className="cards">
      {users.map((user) => {
        return <Person {...user} key={user.id} />;
      })}
    </div>
  );
}

export default Persons;