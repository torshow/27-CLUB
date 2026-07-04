import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { ArtistCard } from './components/ArtistCard';
import './App.css';
import { club27Data } from './components/types';
import type { Artist } from './components/types';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const filteredArtists = club27Data.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-red-600 selection:text-white font-sans antialiased">
      
      {/* Header Section */}
      <header className="relative border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-2 bg-red-600 rounded-full" />
            <h1 className="text-2xl font-black uppercase tracking-wider text-white">The 27 Club</h1>
          </div>
          
          {/* Search Input */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search artist or instrument..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center px-6 py-16 md:py-24"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Gone Too Soon, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Immortalized in Music.
          </span>
        </h2>
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Explore the stories and legacies of legendary musicians who passed away at age 27, leaving an indelible mark on the world.
        </p>
      </motion.section>

      {/* Main Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArtists.map((artist, index) => (
              <ArtistCard 
                key={artist.id} 
                artist={artist} 
                index={index} 
                onSelect={setSelectedArtist} 
              />
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl"
          >
            <p className="text-zinc-500">No artists found matching your search.</p>
          </motion.div>
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedArtist(null)}
                className="absolute top-4 right-4 z-30 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              >
                ✕
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                  <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{selectedArtist.role}</span>
                    <h3 className="text-3xl font-bold text-white mt-1">{selectedArtist.name}</h3>
                    <p className="text-sm text-zinc-400 mt-4 leading-relaxed">{selectedArtist.bio}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-500 uppercase">Famous Track</p>
                      <p className="text-sm font-semibold text-zinc-200">🎵 {selectedArtist.famousTrack}</p>
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={selectedArtist.spotifyUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors inline-block"
                    >
                      Listen on Spotify
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
