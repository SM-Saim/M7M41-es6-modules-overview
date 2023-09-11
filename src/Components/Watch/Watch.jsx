const Watch = ({ watchValue }) => {
  const { brand, price } = watchValue;
  return (
    <div>
      <h3>Brand: {brand}</h3>
      <p>Price: {price}</p>
    </div>
  );
};

export default Watch;
