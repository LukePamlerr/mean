import { prisma } from "@/lib/prisma";
import { BotCard } from "@/components/BotCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Suspense } from "react";

export default async function BotsPage({ searchParams }: { searchParams: { search?: string } }) {
  const search = searchParams.search || "";
  const bots = await prisma.bot incrementalfindMany({
    where: {
      approved: true,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
        { tags: { hasSome: search.split(" ") } },
      ],
    },
    include: { owner: true, votes: true },
    orderBy: [
      { premium: "desc" },
      { votes: { _count: "desc" } },
    ],
    take: 12,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-16">
        <h1 className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Top Discord Bots</h1>
        <form className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <Input
              type="text"
              placeholder="Search bots..."
              defaultValue={search}
              name="search"
              className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 transition-all"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </form>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bots.map((bot) => (
              <BotCard key={bot.id} bot={bot} />
            ))}
          </div>
        </Suspense>
        {bots.length === 0 && (
          <p className="text-center text-gray-400">No bots found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
}
