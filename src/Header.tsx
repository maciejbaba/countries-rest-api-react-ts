import { BiWorld } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-between p-3">
      <div>
        <p className="flex gap-2 p-2 text-2xl">
          <BiWorld size="1.3em" /> Countries
        </p>
      </div>
      <div>
        <button className="rounded p-2 shadow-md">Dark Mode</button>
      </div>
    </header>
  );
};

export default Header;
