import { ChangeEvent } from "react";
import { Period } from "@/services/price";

interface ToggleButtonProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  period: Period;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ handleChange, period }) => {
  return (
    <div className="relative h-8 flex justify-between items-center">
      <label className="pr-[3.25rem] relative z-10 cursor-pointer">
        <span className="text-[0.9375rem] text-neutral-500">Annualy</span>
        <input
          onChange={handleChange}
          type="radio"
          name="period"
          checked={period === Period.annually}
          value={Period.annually}
          id=""
          className="appearance-none"
        />
      </label>
      <label className="pl-[3.25rem] relative z-10 cursor-pointer">
        <input
          onChange={handleChange}
          type="radio"
          name="period"
          checked={period === Period.monthly}
          value={Period.monthly}
          id=""
          className="appearance-none"
        />
        <span className="text-[0.9375rem] text-neutral-500 "> Monthly</span>
      </label>
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative w-[3.5rem] h-[2rem] rounded-full [background:var(--gradient)] flex items-center">
          <span
            className={`absolute block w-6 h-6 rounded-full bg-white transition-all ${
              period === Period.annually ? "left-1.5" : "left-[1.625rem]"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};
