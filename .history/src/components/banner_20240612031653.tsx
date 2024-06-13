import { SearchModalComponent } from "./SearchModalComponent";
import { useCountries } from "../lib/getCountries";
import { Country } from "../types";

export default function ParentComponent() {
  const { getAllCountries } = useCountries();
  const countries: Country[] = getAllCountries();

  return (
    <div>
      <SearchModalComponent countries={countries} />
      {/* Rest of your content */}
    </div>
  );
}
