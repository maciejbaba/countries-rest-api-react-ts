import { Country } from "./Country";

const CountryInfo = ({ country }: Country) => {
  return (
    <div className="fixed left-0 top-0 h-full w-full cursor-default backdrop-blur-xl">
      <div className="relative top-[5%] left-[5%] h-[90%] overflow-y-auto w-[90%] text-lg">
        <img
          className="mx-auto mb-2 max-h-[40%] max-w-[3/4] rounded-xl object-contain"
          src={country.flagLink}
          alt="country flag"
          onError={(e) => {
            // this code sets default no-image photo when flag photo doesnt load
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/no-image.png";
          }}
        />
        <div className="flex flex-col gap-2 text-center">
          <p className="text-2xl">{country.name}</p>
          <p>Native name: {Object.values(country.nativeName)[0].official}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
          <p>Top level domain: {country.topLevelDomain}</p>
          <p>Currencies: {Object.values(country.currencies).map((curr) => curr.name)}</p>
          <p>Languages: {Object.values(country.languages).join(', ')}</p>
          <p>Country borders: {country.borderCountries.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
