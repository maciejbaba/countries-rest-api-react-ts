import { CountryNeeded } from "./CountriesSection";

type CountryFC = {
  key: string
  country: CountryNeeded
}

const Country: React.FC<CountryFC> = ({country}) => {
  return <div>{country.name}</div>;
};

export default Country;
