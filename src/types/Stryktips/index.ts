export type Coupon = {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
};

export type StryktipsRouter = {
  createCoupon: {
    input: {
      name: string;
      description: string;
      type: string;
      status: string;
    };
    output: Coupon;
  };
  getLatest: {
    input: void;
    output: Coupon | null;
  };
  getAll: {
    input: void;
    output: Coupon[];
  };
};

export type AppRouter = {
  stryktips: StryktipsRouter;
};
