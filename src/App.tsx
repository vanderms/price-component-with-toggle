import { ChangeEvent, useState } from "react";
import { ToggleButton } from "./components/buttons/toggle/toggle-button";
import { PlanType, Period } from "@/services/plans";
import { PlanCard } from "./components/cards/plan/plan-card";

function App() {
  const [period, setPeriod] = useState<Period>(Period.monthly);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setPeriod(e.currentTarget.value as Period);
    }
  };

  return (
    <main className="relative bg-patterns flex flex-col items-center bg-neutral-200 w-full min-h-screen overflow-hidden pb-[4.4375rem] xl:pb-[5.9375rem]">
      <header className="mt-16 xl:mt-[4.4375rem]">
        <h1 className="text-neutral-500 title-lg text-center">Our Pricing</h1>
      </header>
      <div className="mt-10 w-max">
        <ToggleButton period={period} handleChange={handleChange} />
      </div>
      <ul className="mt-20 w-full relative z-10 flex flex-col items-center gap-y-8 xl:flex-row xl:justify-center xl:mt-[4.5rem]">
        <li className="contents">
          <PlanCard period={period} planType={PlanType.basic} />
        </li>
        <li className="contents">
          <PlanCard period={period} planType={PlanType.professional} />
        </li>
        <li className="contents">
          <PlanCard period={period} planType={PlanType.master} />
        </li>
      </ul>
    </main>
  );
}

export default App;
