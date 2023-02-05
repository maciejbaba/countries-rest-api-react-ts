import { CountryNeeded } from "./CountriesSection";

type CountryFC = {
  key: string;
  country: CountryNeeded;
};

const Country: React.FC<CountryFC> = ({ country }) => {
  return (
    <div className="flex flex-col items-center text-center rounded-md overflow-hidden">
      <img src={country.flagLink} alt="country flag" />
      <p className="text-lg">{country.name}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default Country;
