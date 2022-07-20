import { ChangeEvent, useState } from "react";
import { ToggleButton } from "./components/buttons/toggle/toggle-button";

function App() {
  const [period, setPeriod] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setPeriod(+e.currentTarget.value);
    }
  };

  return (
    <main className="flex flex-col items-center bg-neutral-200 w-full min-h-screen">
      <header className="mt-16">
        <h1 className="text-neutral-500 title-lg text-center">Our Pricing</h1>
      </header>
      <ToggleButton period={period} handleChange={handleChange} />
    </main>
  );
}

export default App;
