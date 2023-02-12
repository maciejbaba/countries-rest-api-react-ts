import { BiWorld } from "react-icons/bi";

const Header = () => {
  return (
    <header className="flex justify-center p-3">
      <div>
        <p className="flex gap-2 p-2 text-2xl">
          <BiWorld size="1.3em" /> Countries
        </p>
      </div>
    </header>
  );
};

export default Header;
