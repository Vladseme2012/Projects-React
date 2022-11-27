function Petinfo(props) {
  const { animal, age, hasPet } = props;
  // const text = hasPet
  //   ? `My pet is ${animal}, yur is ${age} years old`
  //   : 'I don`t have a pet';
  return hasPet ? 
  (
    <h1>My pet is {animal}, yur is {age} years old</h1>
  ) : 
  (
    <h2>I don`t have a pet</h2>
  );
}

export default Petinfo;
