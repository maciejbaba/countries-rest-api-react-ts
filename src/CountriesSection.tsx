import { useEffect, useState } from "react";

const FETCH_ALL_COUNTRIES_URI: string =
  "https://restcountries.com/v3.1/all" as const;

type Country = {
  name: string;
  nativeName: string;
  capital: string;
  population: string;
  region: string;
  subregion: string;
  topLevelDomain: string;
  borderCode: string;
  borderCountries: string[]
  flagLink: string;
  languages: string[]
  currencies: string[]
};

type ResponeCountry = {
  name: {
    common: string;
    nativeName: { cat: { official: string } };
  };
  capital: string[];
  population: string;
  region: string;
  subregion: string;
  tld: string[];
  currencies: { [s: string]: { [s: string]: string } };
  languages: { [s: string]: string };
  cca3: string;
  borders: string[];
  flags: { [s: string]: string };
};

const CountriesSection = () => {
  const [countries, setCountries] = useState(Array<Country>);

  useEffect(() => {
    const fetchData = async () => {
      const dataRaw = await fetch(FETCH_ALL_COUNTRIES_URI);
      const data = await dataRaw.json();
      console.log(data);
      const modifiedCountries: Country[] = data.map((country: ResponeCountry): Country => {
        return {
          name: country.name.common,
          nativeName: country.name.nativeName.cat.official || "No native name",
          capital: country.capital ? country.capital[0] : "No capital",
          population: country.population.toLocaleString(),
          region: country.region,
          subregion: country.subregion,
          topLevelDomain: country.tld[0] || "No top level domain",
          currencies: Object.values(country.currencies).map(
            (currency) => currency.name
          ),
          languages: Object.values(country.languages),
          borderCode: country.cca3,
          borderCountries: country.borders || "No borders",
          flagLink: country.flags.svg,
        };
      });

      setCountries(modifiedCountries);
    };

    fetchData();
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
