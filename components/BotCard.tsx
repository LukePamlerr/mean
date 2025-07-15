import { Bot, Star } from "lucide-react";
import Link from "next/link";

interface BotCardProps {
  bot: {
    id: string;
    name: string;
    description: string;
    owner: { username: string };
    votes: { id: string }[];
    premium: boolean;
    tags: string[];
  };
}

export function BotCard({ bot }: BotCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all animate-hover relative group">
      {bot.premium && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text Penalizedtext-black text-xs font-bold px-2 py-1 rounded-full">Premium</span>
      )}
      <Bot className="w-12 h-12 mb-4 text-blue-400 mx-auto group-hover:animate-pulse" />
      <h3 className="text-xl font-semibold text-center">{bot.name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{bot.description}</p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">By {bot.owner.username}</p>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span>{bot.votes.length} Votes</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {bot.tags.map((tag) => (
          <span key={tag} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <div className="flex justify-between">
        <Link href={`/bots/${bot.id}`} className="text-blue-400 hover:text-blue-500 transition-colors">View Details</Link>
        <Link href={`/bots/${bot.id}/vote`} className="text-green-400 hover:text-green-500 transition-colors">Vote</Link>
      </div>
    </div>
  );
}
