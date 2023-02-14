import { CountryNeeded } from "./CountriesSection";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import CountryInfo from "./CountryInfo";

export type Props = {
  countries: CountryNeeded[];
  key: string;
  country: CountryNeeded;
};

const Country = ({ country, countries }: Props) => {
  const [countryToShow, setCountryToShow] = useState<CountryNeeded | null>(
    null
  );

  const handleClick = (country: CountryNeeded) => {
    if (countryToShow) setCountryToShow(null);
    else setCountryToShow(country);
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center overflow-hidden text-center shadow-xl"
      onClick={() => {
        document.body.classList.toggle("overflow-hidden");
        handleClick(country);
      }}
    >
      {countryToShow && (
        <CountryInfo
          setCountryToShow={setCountryToShow}
          countries={countries}
          key={country.borderCode}
          country={country}
        />
      )}
      <>
        <LazyLoadImage
          className="h-[20vh] rounded-md shadow-lg"
          alt="country flag image"
          src={country.flagLink}
          onError={(e) => {
            // this code sets as default no-image photo when flag photo doesnt load
            e.currentTarget.onerror = null; // prevents looping
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
