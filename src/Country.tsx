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
    setIsShownInfo(!isShownInfoComponent);
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center overflow-hidden text-center shadow-xl"
      onClick={() => {
        document.body.classList.toggle("overflow-hidden");
        handleClick();
      }}
    >
      {isShownInfoComponent && (
        <CountryInfo key={country.borderCode} country={country} />
      )}
        <>
          <LazyLoadImage
            className="h-[20vh] shadow-lg rounded-md"
            alt="country flag image"
            src={country.flagLink}
            onError={(e) => {
              // this code sets as default no-image photo when flag photo doesnt load
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/no-image.png";
            }}
          />
          <p className="text-lg">{country.name}</p>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p className="break-all">Capital: {country.capital}</p>
        </>
    </div>
  );
};

export default Country;
