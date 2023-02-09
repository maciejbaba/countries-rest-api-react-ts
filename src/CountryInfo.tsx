import { Country } from "./Country"

const CountryInfo = ({country}: Country) => {
  return (
    <div className="absolute left-0 top-0 w-full h-full backdrop-blur-md cursor-default">
      <div className="relative top-[12.5%] left-[12.5%] w-3/4 h-3/4 bg-slate-500">
        <img src={country.flagLink} alt="country flag" />
      </div>
    </div>
  )
}

export default CountryInfo