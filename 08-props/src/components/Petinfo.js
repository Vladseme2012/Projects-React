function Petinfo(props) {
  const { animal, age } = props;
  console.log(props);
  return (
    <div>
      <h1>
        My pet is {animal}, yur is {age} years old{' '}
      </h1>
    </div>
  );
}

export default Petinfo;
