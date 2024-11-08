const Card = ({ children }) => {
  return (
    <div className="p-4 bg-white shadow rounded h-full flex flex-col justify-between">
      {children}
    </div>
  );
};

export default Card;
