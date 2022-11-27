function Wrapper(props) {
  console.log(props);
  const style = {
    backgroundColor: props.backgroundColor || "red",
    fontSize: props.fontSize || "10px",
    color: "white",
    width: "500px",
    padding: "20px",
    margin: "40px auto",
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
