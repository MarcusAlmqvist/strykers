"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/trpc/react";
import { z } from "zod";

type Coupon = {
  name: string;
  description: string;
  type: string;
  status: string;
  // games: string[];
};

// type Game = {
//   number: string;
//   homeTeam: string;
//   awayTeam: string;
//   date: string;
//   time: string;
//   result: string;
// };

// const GameSchema = z.object({
//   number: z.string(),
//   homeTeam: z.string(),
//   awayTeam: z.string(),
//   date: z.string(),
//   time: z.string(),
//   result: z.string(),
// });

const CouponSchema = z.object({
  name: z.string(),
  description: z.string(),
  type: z.string(),
  status: z.string(),
  // games: z.array(GameSchema),
});

function CreateCoupon() {
  const router = useRouter();
  const [coupon, setCoupon] = useState<Coupon>({
    name: "",
    description: "",
    type: "",
    status: "",
    // games: [],
  });

  const createCoupon = api.stryktips.createCoupon.useMutation({
    onSuccess: () => {
      router.refresh();
      setCoupon({
        name: "",
        description: "",
        type: "",
        status: "",
        // games: [],
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createCoupon.mutate(
          CouponSchema.parse({
            ...coupon,
            // games: coupon.games.map((game) => ({
            //   ...game,
            // })),
          }),
        );
      }}
      className="flex flex-col gap-2"
    >
      <h2 className="text-2xl text-[yellow]">Registrera veckans stryk</h2>
      <label className="text-[yellow]">Namn</label>
      <input
        type="text"
        placeholder="Name"
        value={coupon.name}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            name: e.target.value,
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label className="text-[yellow]">Beskrivning</label>
      <input
        type="text"
        placeholder="Description"
        value={coupon.description}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            description: e.target.value,
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label className="text-[yellow]">Stryktyp</label>
      <input
        type="text"
        placeholder="Type"
        value={coupon.type}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            type: e.target.value,
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <label className="text-[yellow]">Status</label>
      <input
        type="text"
        placeholder="Status"
        value={coupon.status}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            status: e.target.value,
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      {/* <input
        type="text"
        placeholder="Game number"
        value={coupon.games[0]?.number}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            games: [
              {
                ...coupon.games[0],
                number: e.target.value,
              },
            ],
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Home team"
        value={coupon.games[1]?.homeTeam}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            games: [
              {
                ...coupon.games[1],
                homeTeam: e.target.value,
              },
            ],
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Away team"
        value={coupon.games[2]?.awayTeam}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            games: [
              {
                ...coupon.games[2],
                awayTeam: e.target.value,
              },
            ],
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Date"
        value={coupon.games[3]?.date}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            games: [
              {
                ...coupon.games[3],
                date: e.target.value,
              },
            ],
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Time"
        value={coupon.games[4]?.time}
        onChange={(e) =>
          setCoupon({
            ...coupon,
            games: [
              {
                ...coupon.games[4],
                time: e.target.value,
              },
            ],
          })
        }
        className="w-full rounded-full px-4 py-2 text-black"
      /> */}

      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
      >
        Släng in ditt stryk
      </button>
    </form>
  );
}

export default CreateCoupon;
