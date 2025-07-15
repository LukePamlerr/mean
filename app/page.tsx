"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Server, Search } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/bots?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <header className="container mx-auto py-8 flex justify-between items-center">
        <Link href="/" className="text-4xl font-extrabold tracking-tight">DiscordHub</Link>
        <nav className="flex items-center space-x-8">
          <Link href="/bots" className="text-lg hover:text-blue-400 transition-colors animate-hover">Bots</Link>
          <Link href="/servers" className="text-lg hover:text-purple-400 transition-colors animate-hover">Servers</Link>
          <Link href="/support" className="text-lg hover:text-blue-400 transition-colors animate-hover">Support</Link>
          <Link href="/login" className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition-all animate-hover">Login with Discord</Link>
        </nav>
      </header>

      <main className="container mx-auto py-20 text-center">
        <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Discover Top Discord Bots & Servers</h1>
        <p className="text-xl mb-10 max-w-3xl mx-auto">Join millions in exploring the best bots and communities to elevate your Discord experience.</p>
        <form onSubmit={handleSearch} className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <Input
              type="text"
              placeholder="Search bots or servers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 transition-all"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </form>

        <div className="flex justify-center space-x-6 mb-16">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
            <Link href="/bots">Browse Bots</Link>
          </Button>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3 rounded-lg transform hover:scale-105 transition-all">
            <Link href="/servers">Browse Servers</Link>
          </Button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800 rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all animate-hover">
            <Bot className="w-14 h-14 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-semibold mb-3">Top Bots</h3>
            <p className="text-gray-300">Discover community-voted bots for moderation, music, and more.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all animate-hover">
            <Server className="w-14 h-14 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-semibold mb-3">Top Servers</h3>
            <p className="text-gray-300">Join vibrant communities for gaming, learning, or fun.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-neumorphic hover:shadow-neumorphic-hover transition-all animate-hover">
            <Bot className="w-14 h-14 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-semibold mb-3">Premium Listings</h3>
            <p className="text-gray-300">Boost your bot or server with premium visibility.</p>
          </div>
        </section>
      </main>

      <footer className="container mx-auto py-8 text-center border-t border-gray-700">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="/purchasing" className="text-gray-300 hover:text-blue-400 transition-colors">Purchasing Policy</Link>
        </div>
        <p className="text-gray-400">© 2025 DiscordHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
