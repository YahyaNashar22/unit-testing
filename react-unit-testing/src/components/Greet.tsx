const Greet = ({ name }: { name?: string }) => {
  if (name) return <h1>Hello {name}</h1>;
  return <h1>No Name Specified!</h1>;
};

export default Greet;
