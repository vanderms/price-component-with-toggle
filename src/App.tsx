import { ChangeEvent, useState } from "react";
import { ToggleButton } from "./components/buttons/toggle/toggle-button";
import { prices, Period } from "@/services/price";

function App() {
  const [period, setPeriod] = useState<Period>(Period.monthly);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      console.log(e.currentTarget.value);
      setPeriod(e.currentTarget.value as Period);
    }
  };

  return (
    <main className="flex flex-col items-center bg-neutral-200 w-full min-h-screen overflow-hidden">
      <header className="mt-16">
        <h1 className="text-neutral-500 title-lg text-center">Our Pricing</h1>
      </header>
      <div className="mt-10 w-max">
        <ToggleButton period={period} handleChange={handleChange} />
      </div>
    </main>
  );
}

export default App;
