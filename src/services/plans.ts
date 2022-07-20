export enum Period {
  monthly = "monthly",
  annually = "annually",
}

export enum PlanType {
  basic = "Basic",
  professional = "Professional",
  master = "Master",
}

export const Plans = {
  [PlanType.basic]: {
    price: {
      [Period.monthly]: 19.99,
      [Period.annually]: 199.99,
    },
    emphasis: false,
    storage: "500 GB",
    usersAllowed: 2,
    bandWidth: "3 GB",
  },

  [PlanType.professional]: {
    price: {
      [Period.monthly]: 24.99,
      [Period.annually]: 249.99,
    },
    emphasis: true,
    storage: "1 TB",
    usersAllowed: 5,
    bandWidth: "10 GB",
  },

  [PlanType.master]: {
    price: {
      [Period.monthly]: 39.99,
      [Period.annually]: 399.99,
    },
    emphasis: false,
    storage: "2 TB",
    usersAllowed: 10,
    bandWidth: "20 GB",
  },
};
