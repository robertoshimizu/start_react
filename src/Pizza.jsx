const Pizza = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.photoName}</p>
      <h2>{props.ingredients}</h2>
      <h2>{props.price}</h2>
    </div>
  );
};

export default Pizza;
