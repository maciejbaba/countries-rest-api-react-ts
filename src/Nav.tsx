type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Nav = ({setSearch}: Props ) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
    setSearch(searchValue)
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
