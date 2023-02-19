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
  const handleCountryCodeClick = (countryCode: typeof country.countryCode) => {
    const countryToShow: CountryNeeded | null =
      countries.find((country) => country.countryCode === countryCode) || null; // search for a country with that border code in countries and
    setCountryToShow(countryToShow); // set it as country to show, because we prevented propagation the country is normally set and rendered
  };

  return (
    <div className="fixed left-0 top-0 h-full w-full cursor-default text-white backdrop-blur-xl backdrop-brightness-50">
      <div className="relative top-[5%] left-[5%] h-[90%] w-[90%] overflow-y-auto text-xs md:text-lg">
        <img
          className="mx-auto mb-2 max-h-[40%] max-w-[3/4] rounded-xl object-contain"
          src={country.flagLink}
          alt="country flag"
          onError={(e) => {
            // This code sets default no-image photo when flag photo doesnt load
            // I used it here in order to on img fetch error set nicer img than default
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
          <div>
            <p>Country borders: </p>
            {
              Array.isArray(country.borderCountries)
                ? // if it's an array render each country inside it
                  country.borderCountries.map((countryCode) => {
                    return (
                      <button
                        className="m-1 rounded-md bg-slate-200 px-2 py-1 text-black shadow-md hover:bg-slate-300"
                        key={countryCode}
                        onClick={(e) => {
                          e.stopPropagation(); // prevents handleClick function from Country component from firing
                          // (because there is on countryInfo component another on click handler when the stopPropagation isn't used that handler closes countryInfo component (event bubbling))
                          handleCountryCodeClick(countryCode);
                        }}
                      >
                        {countryCode}
                      </button>
                    );
                  })
                : country.borderCountries /* if it's not an array it is string "no border countries" so normally render it */
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
