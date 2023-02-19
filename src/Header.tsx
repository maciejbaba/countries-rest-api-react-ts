import { BiWorld } from "react-icons/bi";

const toggleCSSClasses = (el: HTMLElement, ...classes: string[]): void => {
  classes.map(cls => el.classList.toggle(cls))
}

const Header = () => {

  const handleDarkMode = () => {
    toggleCSSClasses(document.body, "bg-slate-900", "text-white")
  };

  return (
    <header className="flex items-center justify-between p-3">
      <div>
        <p className="flex gap-2 p-2 md:text-2xl">
          <BiWorld size="1.3em" /> Countries
        </p>
      </div>
      <div>
        <button
          className="rounded-md p-1.5 text-xs shadow-md md:p-2 md:text-lg"
          onClick={handleDarkMode}
        >
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
