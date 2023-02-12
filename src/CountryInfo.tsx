import { Country } from "./Country";

const CountryInfo = ({ country }: Country) => {
  return (
    <div className="absolute left-0 top-0 h-full w-full cursor-default overflow-hidden backdrop-blur-md">
      <div className="relative top-[5%] left-[5%] h-[90%] w-[90%] overflow-scroll rounded-xl bg-slate-500">
        <img
          className="rounded-xl"
          src={country.flagLink}
          alt="country flag"
          onError={(e) => {
            // this code sets default no-image photo when flag photo doesnt load
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/no-image.png";
          }}
        />
        <div className="">
          <p>{country.name}</p>
          <p>{Object.values(country.nativeName)[0].official}</p>
          <p>{country.population.toLocaleString()}</p>
          <p>{country.region}</p>
          <p>{country.subregion}</p>
          <p>{country.capital}</p>
          <p>{country.topLevelDomain}</p>
          <p>{Object.values(country.currencies).map((curr) => curr.name)}</p>
          <p>{Object.values(country.languages)}</p>
          <p>{country.borderCountries}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
