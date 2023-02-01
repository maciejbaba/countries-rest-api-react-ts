import { useEffect, useState } from "react";

const FETCH_ALL_COUNTRIES_URI: string =
  "https://restcountries.com/v3.1/all" as const;

type Country = {
  
}

const CountriesSection = () => {
  const [countries, setCountries] = useState(Array<object>);
  useEffect(() => {
    const fetchData = async () => {
      const dataRaw = await fetch(FETCH_ALL_COUNTRIES_URI);
      const data: Array<object> = await dataRaw.json();

      setCountries(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <main className="grid grid-cols-4 gap-1 p-2">
      {countries.map((country) => (
        <div key={country.cca3}>{country.name.common}</div>
      ))}
    </main>
  );
};

export default CountriesSection;
