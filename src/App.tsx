import { useState } from "react";
import CountriesSection from "./CountriesSection";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  const [search, setSearch] = useState<string>("")
  return (
    <div className="font-mono text-sm font-bold">
      <Header />
      <Nav setSearch={setSearch}/>
      <CountriesSection search={search}/>
    </div>
  );
}

export default App;
