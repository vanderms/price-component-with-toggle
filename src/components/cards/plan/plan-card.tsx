import { Plans, PlanType, Period } from "@/services/plans";

export const PlanCard: React.FC<{ planType: PlanType; period: Period }> = ({
  planType,
  period,
}) => {
  const plan = Plans[planType];

  return (
    <article
      className={`${plan.emphasis ? "emphasis xl:py-[3.4375rem]" : ""} 
      w-[min(82.9333333%,21.875rem)] flex flex-col items-center [background:var(--surface)]
      shadow-[0px_20px_40px_rgba(212,210,244,0.5)] rounded-xl p-8
      `}
    >
      <h2 className="text-neutral-500 text-lg">{planType}</h2>
      <p className="mt-6 text-neutral-800 flex items-center gap-2">
        <span className="text-[2.5rem]">$</span>
        <strong className="text-[4.5rem] leading-[4.4375rem]">{plan.price[period]}</strong>
      </p>
      <ul
        className={`mt-8 w-full flex flex-col items-center text-neutral-500 
        border-neutral-500-semi-translucid
        [&>li]:h-[3.3125rem] [&>li]:w-full [&>li]:grid [&>li]:place-items-center 
        [&>li]:border-b [&>li]:border-b-neutral-500-semi-translucid
      `}
      >
        <li>{plan.storage} Storage</li>
        <li>{plan.usersAllowed} Users Allowed</li>
        <li>Send up to {plan.bandWidth}</li>
      </ul>
      <a
        href="/"
        className={`mt-8 w-full h-11 rounded-md [background:var(--gradient)] text-neutral-50 grid place-items-center
          hover:text-primary hover:[background:unset] hover:border hover:border-primary
        `}
      >
        LEARN MORE
      </a>
    </article>
  );
};
