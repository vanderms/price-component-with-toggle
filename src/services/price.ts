export enum Period {
  monthly = "monthly",
  annually = "annually",
}

export const prices = {
  [Period.monthly]: {
    basic: 19.99,
    professional: 24.99,
    master: 39.99,
  },
  [Period.annually]: {
    basic: 199.99,
    professional: 249.99,
    master: 399.99,
  },
};
