const Nav = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
  }

  return (
    <nav className="flex justify-center">
      <input
        className="rounded-xl shadow-md p-2 text-center w-[80%]"
        onChange={(event) => handleChange(event)}
        type="text"
        placeholder="maybe search instead of scrolling?"
      />
    </nav>
  );
};

export default Nav;
