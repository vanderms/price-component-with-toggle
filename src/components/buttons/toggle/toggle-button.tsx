import { ChangeEvent } from "react";

interface ToggleButtonProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  period: number;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ handleChange, period }) => {
  return (
    <div>
      <label>
        <span> Annualy</span>
        <span></span>
        <input
          onChange={handleChange}
          type="radio"
          name="period"
          checked={period === 1}
          value="1"
          id=""
          className="appearance-none"
        />
      </label>
      <label>
        <span></span>
        <input
          onChange={handleChange}
          type="radio"
          name="period"
          checked={period === 12}
          value="12"
          id=""
          className="appearance-none"
        />
        <span> Monthly</span>
      </label>
    </div>
  );
};
