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
      className="flex cursor-pointer flex-col items-center overflow-hidden rounded text-center shadow-xl"
      onClick={() => {
        document.body.classList.toggle("overflow-hidden"); // prevents scrolling while country info is displayed
        handleClick(country);
      }}
    >
      {countryToShow && (
        <CountryInfo
          setCountryToShow={setCountryToShow}
          countries={countries}
          key={country.countryCode}
          country={countryToShow}
        />
      )}
      <>
        <LazyLoadImage
          className="h-[20vh] rounded-md shadow-lg"
          alt="country flag image"
          src={country.flagLink}
          onError={(e) => {
            // This code sets as default no-image photo when flag photo doesnt load
            // I used it here in order to on img fetch error set nicer img than default
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
