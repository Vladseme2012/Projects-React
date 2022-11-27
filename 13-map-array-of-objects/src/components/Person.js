function Person(props) {
  const { image, fisrtName, lastName, email } = props;
  console.log(props);
  return (
    <div className='card'>
      <img src={image} />
      <h2>
        {fisrtName} {lastName}
      </h2>
      <h3>{email}</h3>
    </div>
  );
}

export default Person;
