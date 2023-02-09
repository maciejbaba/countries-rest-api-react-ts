import { CountryNeeded } from "./CountriesSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import CountryInfo from "./CountryInfo";

export type Country = {
  key: string;
  country: CountryNeeded;
};

const Country = ({ country }: Country) => {
  const [isShownInfoComponent, setIsShownInfo] = useState(false);

  const handleClick = () => {
    setIsShownInfo(true);
  };

  return (
    <div
      className="flex flex-col items-center text-center rounded-md overflow-hidden shadow-xl cursor-pointer"
      onClick={handleClick}
    >
      {isShownInfoComponent && <CountryInfo key={country.borderCode} country={country} />}
      {!isShownInfoComponent && (
        <>
          <LazyLoadImage
            className="h-[20vh] w-full object-cover shadow-lg"
            alt="country flag image"
            src={country.flagLink}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/no-image.png";
            }}
          />
          <p className="text-lg">{country.name}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p className="break-all">Capital: {country.capital}</p>
        </>
      )}
    </div>
  );
};

export default Country;
