import { useEffect, useState } from "react";

const FETCH_ALL_COUNTRIES_URI: string =
  "https://restcountries.com/v3.1/all" as const;

type Country = {
  name: string;
  nativeName: string;
  capital: string;
  // population: string;
  // region: string;
  // subregion: string;
  // topLevelDomain: string;
  borderCode: string;
  // borderCountries: string[];
  // flagLink: string;
  // languages: string[];
  // currencies: string[];
};

type CountryAllProps = {
  [key: string]: any;
};

type ErrorObject = {
  message: string;
};

const CountriesSection = () => {
  const [countries, setCountries] = useState(Array<any>);

  useEffect(() => {
    const fetchDataAndSetCountries = async (): Promise<void> => {
      const countriesAllProps: CountryAllProps[] = await fetch(
        FETCH_ALL_COUNTRIES_URI
      )
        .then((dataRaw) => dataRaw.json())
        .catch((err: ErrorObject) => console.error(err.message));

      const clearedCountries: Country[] = countriesAllProps.map(
        (country: CountryAllProps): Country => {
          return {
            name: country.name.common,
            nativeName: country.name.nativeName,
            capital: country.capital,
            borderCode: country.cca3,
          };
        }
      );
      setCountries(clearedCountries);
    };

    fetchDataAndSetCountries();
  }, []);

  return (
    <main className="grid grid-cols-4 gap-1 p-2">
      {countries.map((country) => (
        <div key={country.borderCode}>{country.name}</div>
      ))}
    </main>
  );
};

export default CountriesSection;
