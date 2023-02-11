import { useEffect, useState } from "react";
import Country from "./Country";

const FETCH_ALL_COUNTRIES_URI: string =
  "https://restcountries.com/v3.1/all" as const;

type NativeName = {
  [key: string]: { official: string };
};

type Currencies = {
  [key: string]: { name: string };
};

export type CountryNeeded = {
  name: string;
  nativeName: NativeName;
  capital: string;
  population: string;
  region: string;
  subregion: string;
  topLevelDomain: string;
  borderCode: string;
  borderCountries: string[];
  flagLink: string;
  languages: string[];
  currencies: Currencies;
};

type CountryAllProps = {
  [key: string]: any;
};

type ErrorObject = {
  message: string;
};

type Props = {
  search: string;
};

const CountriesSection = ({ search }: Props) => {
  const [countries, setCountries] = useState<CountryNeeded[]>([]);

  useEffect(() => {
    const fetchDataAndSetCountries = async (): Promise<void> => {
      const countriesAllProps: CountryAllProps[] = await fetch(
        FETCH_ALL_COUNTRIES_URI
      )
        .then((dataRaw) => dataRaw.json())
        .catch((err: ErrorObject) => console.error(err.message));

      const clearedCountries: CountryNeeded[] = countriesAllProps.map(
        (country: CountryAllProps): CountryNeeded => {
          return {
            name: country.name.common,
            nativeName: country.name.nativeName,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            topLevelDomain: country.tld,
            capital: country.capital,
            borderCode: country.cca3,
            borderCountries: country.borders,
            flagLink: country.flags.svg,
            languages: country.languages,
            currencies: country.currencies,
          };
        }
      );
      setCountries(clearedCountries);
    };

    fetchDataAndSetCountries();
  }, []);

  return (
    <main className="grid grid-cols-4 gap-5 p-5">
      <>
        {countries.map((country) => {
          if (
            country.name.toLowerCase().includes(search.toLowerCase()) ||
            country.region.toLowerCase().includes(search.toLowerCase())
          ) {
            return <Country key={country.borderCode} country={country} />;
          }
        })}
      </>
    </main>
  );
};

export default CountriesSection;
