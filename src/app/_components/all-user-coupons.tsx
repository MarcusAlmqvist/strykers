import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";

const AllUserCoupons = async () => {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const allCoupons = await api.stryktips.getAll.query({});

  return (
    <div className="w-full max-w-xs">
      <h1>Dina stryk</h1>
      {!!allCoupons?.length ? (
        <ul>
          {allCoupons.map((coupon) => (
            <li key={coupon?.id} className="mb-10">
              <p>{coupon?.id}</p>
              <p>{coupon?.name}</p>
              <p>{coupon?.description}</p>
              <p>{coupon?.type}</p>
              <p>{coupon?.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Du har inga stryktips registrerade</p>
      )}
    </div>
  );
};
export default AllUserCoupons;
