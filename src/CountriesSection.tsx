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
            name: country.name.common ?? "No name",
            nativeName: country.name.nativeName ?? "No native name",
            population: country.population ?? "No population",
            region: country.region ?? "No region",
            subregion: country.subregion ?? "No Subregion",
            topLevelDomain: country.tld ?? "No TLD",
            capital: country.capital ?? "No capital",

            // change this to country code
            borderCode: country.cca3 ?? "No country code",
            borderCountries: country.borders ?? "No border countries",
            flagLink: country.flags.svg, // there is in the project no photo handling logic
            languages: country.languages ?? "No languages",
            currencies: country.currencies ?? "No currencies",
          };
        }
      );
      setCountries(clearedCountries);
    };

    fetchDataAndSetCountries();
  }, []);

  return (
    <> {/* show loading text while countries aren't fetched */}
      {!countries.length && (
        <div className="mt-28 text-center">Loading countries list...</div>
      )}
      <main className="grid grid-cols-1 gap-5 p-5 md:grid-cols-4">
        <> {/* show countries after they are fetched */}
          {countries.map((country) => {
            if (
              country.name.toLowerCase().includes(search.toLowerCase()) ||
              country.region.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <Country
                  countries={countries}
                  key={country.borderCode}
                  country={country}
                />
              );
            }
          })}
        </>
      </main>
    </>
  );
};

export default CountriesSection;
