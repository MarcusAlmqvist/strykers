import AllUserCoupons from "@/app/_components/all-user-coupons";
import CreateCoupon from "@/app/_components/create-coupon";
import Hero from "@/app/_components/hero";
import LatestCoupon from "@/app/_components/latest-coupon";

function RoundLandingPage() {
  return (
    <main>
      <Hero title="Tips" />
      <LatestCoupon />
      <AllUserCoupons />
      <CreateCoupon />
    </main>
  );
}

export default RoundLandingPage;
