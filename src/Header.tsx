import { BiWorld } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-between p-3">
      <div>
        <p className="p-2 text-2xl flex gap-2">
          <BiWorld size="2rem" /> Countries
        </p>
      </div>
      <div>
        <button className="rounded shadow-md p-2">Dark Mode</button>
      </div>
    </header>
  );
};

export default Header;
