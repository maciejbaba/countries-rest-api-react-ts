type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Nav = ({ setSearch }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  return (
    <nav className="flex justify-center">
      <input
        className="w-[80%] rounded-xl p-2 text-center shadow-md text-black"
        onChange={(event) => handleChange(event)}
        type="text"
        placeholder="maybe search??"
      />
    </nav>
  );
};

export default Nav;
