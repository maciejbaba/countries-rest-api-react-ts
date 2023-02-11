import { Country } from "./Country";

const CountryInfo = ({ country }: Country) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full cursor-default backdrop-blur-md">
      <div className="relative top-[5%] left-[5%] h-[90%] w-[90%] overflow-hidden rounded-xl bg-slate-500">
        <img
          className=""
          src={country.flagLink}
          alt="country flag"
          onError={(e) => {
            // this code sets default no-image photo when flag photo doesnt load
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/no-image.png";
          }}
        />
        <div></div>
      </div>
    </div>
  );
};

export default CountryInfo;
