import { CountryNeeded } from "./CountriesSection";
import { Props } from "./Country";

type CountryInfoProps = Props & {
  setCountryToShow: React.Dispatch<React.SetStateAction<CountryNeeded | null>>;
};

const CountryInfo = ({
  country,
  countries,
  setCountryToShow,
}: CountryInfoProps) => {
  const handleBorderCodeClick = (borderCode: typeof country.borderCode) => {
    const countryToShow: CountryNeeded | null =
      countries.find((country) => country.borderCode === borderCode) || null;
    setCountryToShow(countryToShow);
  };

  return (
    <div className="fixed left-0 top-0 h-full w-full cursor-default backdrop-blur-xl">
      <div className="relative top-[5%] left-[5%] h-[90%] w-[90%] overflow-y-auto text-lg">
        <img
          className="mx-auto mb-2 max-h-[40%] max-w-[3/4] rounded-xl object-contain"
          src={country.flagLink}
          alt="country flag"
          onError={(e) => {
            // this code sets default no-image photo when flag photo doesnt load
            e.currentTarget.onerror = null; // prevents looping
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
          <p>
            Currencies:{" "}
            {Object.values(country.currencies).map((curr) => curr.name)}
          </p>
          <p>Languages: {Object.values(country.languages).join(", ")}</p>
          <p>
            Country borders:{" "}
            {
              Array.isArray(country.borderCountries)
                ? // if it's array it has to render buttons that on click will show countryInfo component with clicked country info of that country border code
                  country.borderCountries
                    .map((borderCode) => {
                      return (
                        <button
                          className="mx-1 rounded-md bg-slate-200 hover:bg-slate-300 px-2 py-1 shadow-md"
                          key={borderCode}
                          onClick={() => {
                            handleBorderCodeClick(borderCode);
                          }}
                        >
                          {borderCode}
                        </button>
                      );
                    })
                : country.borderCountries /* it is string "no border countries" so normaly render it */
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
