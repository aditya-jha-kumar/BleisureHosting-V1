import { useState } from "react";

interface Country {
  value: string;
  label: string;
  flag: string;
  region: string;
}

export function SearchModalComponent() {
  const [step, setStep] = useState(1);
  const [locationValue, setLocationValue] = useState("");

  function SubmitButtonLocal() {
    if (step === 1) {
      return (
        <button
          onClick={() => setStep(step + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="button"
        >
          Next
        </button>
      );
    } else if (step === 2) {
      return (
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Submit
        </button>
      );
    }
  }

  const countries: Country[] = [
    { value: "US", label: "United States", flag: "🇺🇸", region: "North America" },
    { value: "CA", label: "Canada", flag: "🇨🇦", region: "North America" },
    // Add more countries as needed
  ];

  return (
    <div className="relative">
      <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
        <div className="flex h-full divide-x font-medium">
          <p className="px-4">Anywhere</p>
          <p className="px-4">Any Week</p>
          <p className="px-4">Add Guests</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white p-1 bg-primary rounded-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      </div>
      <div className="absolute top-full left-0 w-full">
        <form className="bg-white shadow-lg rounded-lg p-6">
          <input type="hidden" name="country" value={locationValue} />
          {step === 1 ? (
            <>
              <div>
                <h2 className="text-lg font-semibold mb-2">Select a Country</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Please Choose a Country, so that what you want
                </p>
              </div>
              <div className="mb-4">
                <select
                  required
                  onChange={(e) => setLocationValue(e.target.value)}
                  value={locationValue}
                  className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-md shadow-sm"
                >
                  <option value="">Select a Country</option>
                  {countries.map((country) => (
                    <option key={country.value} value={country.value}>
                      {country.flag} {country.label} / {country.region}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Select all the info you need
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Please Choose a Country, so that what you want
                </p>
              </div>
              {/* Render additional fields here */}
            </>
          )}
          <div className="flex justify-end mt-4">
            <SubmitButtonLocal />
          </div>
        </form>
      </div>
    </div>
  );
}
