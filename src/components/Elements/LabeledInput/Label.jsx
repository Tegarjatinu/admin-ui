const Label = (props) => {
    const { htmlFor, children } = props;
  
    return (
      <label htmlFor={htmlFor} className="block text-sm mb-2 font-bold">
        {children}
      </label>
    );
  };
  
  export default Label;