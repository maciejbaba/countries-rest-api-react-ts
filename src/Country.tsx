import { CountryNeeded } from "./CountriesSection";
import { LazyLoadImage } from "react-lazy-load-image-component";

type CountryFC = {
  key: string;
  country: CountryNeeded;
};

const Country: React.FC<CountryFC> = ({ country }) => {
  return (
    <div className="flex flex-col items-center text-center rounded-md overflow-hidden shadow-xl">
      <LazyLoadImage
        className="h-[20vh] w-full object-cover shadow-lg"
        alt="country flag image"
        src={country.flagLink}
        onError={e => {
          e.currentTarget.onerror = null
          e.currentTarget.src = "/no-image.png"
        }}
      />
      <p className="text-lg">{country.name}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p className="break-all">Capital: {country.capital}</p>
    </div>
  );
};

export default Country;
