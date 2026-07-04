import React from 'react';
import { motion } from 'framer-motion';
import type { Artist } from './types';

interface ArtistCardProps {
  artist: Artist;
  index: number;
  onSelect: (artist: Artist) => void;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist, index, onSelect }) => {
  return (
    <motion.div 
      onClick={() => onSelect(artist)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80 transition-all duration-300 hover:border-red-500/40 hover:shadow-[0_0_30px_rgba(239,68,68,0.08)] flex flex-col h-[460px]"
    >
      {/* Artist Image Layout */}
      <div className="h-56 w-full overflow-hidden relative shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
        <motion.img 
          src={artist.image} 
          alt={artist.name} 
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full object-cover object-top"
        />
        <span className="absolute top-4 right-4 z-20 rounded-full bg-red-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-sm">
          Age 27
        </span>
      </div>

      {/* Card Details Area */}
      <div className="p-5 flex flex-col justify-between flex-grow bg-zinc-900">
        <div>
          <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase block mb-1">
            {artist.role}
          </span>
          <h3 className="text-2xl font-black text-white tracking-tight leading-tight group-hover:text-red-400 transition-colors duration-200">
            {artist.name}
          </h3>
          <p className="text-[11px] text-zinc-500 font-medium mt-1">
            {artist.birthYear} — {artist.deathYear} • <span className="text-red-500/80">Forever 27</span>
          </p>
          <p className="mt-3 text-xs text-zinc-400 leading-relaxed line-clamp-3">
            {artist.bio}
          </p>
        </div>
        
        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-600">Track</span>
            <span className="text-xs font-semibold text-zinc-300 italic truncate max-w-[110px]">
              "{artist.famousTrack}"
            </span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(artist.spotifyUrl, '_blank');
            }}
            className="shrink-0 flex items-center gap-1 bg-zinc-800 hover:bg-red-600 border border-zinc-700/50 hover:border-red-500 rounded-xl px-3 py-1.5 text-[11px] font-bold text-zinc-200 hover:text-white transition-all duration-200"
          >
            Listen
            <span className="text-xs">&rarr;</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
