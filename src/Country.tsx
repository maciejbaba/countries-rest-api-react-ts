import { CountryNeeded } from "./CountriesSection";

const Country = (country: CountryNeeded) => {
  return <div>{country.name}</div>;
};

export default Country;
