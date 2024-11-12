import Link from 'next/link';
import { useState } from 'react';
import { Image } from "@nextui-org/image";

const AnimeCard = ({ anime }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex w-full flex-col gap-2">
      <Link href={`/anime/${anime.slug}`}>
        <div className="relative w-full overflow-hidden rounded-[14px] bg-muted" style={{ aspectRatio: '3 / 4' }}>
          {!imgError ? (
            <Image
              isZoomed
              className="w-full h-full object-cover"
              alt={anime.title}
              src={anime.poster}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Image not available</span>
            </div>
          )}
        </div>
      </Link>
      <Link href={`/anime/${anime.slug}`}>
        <div className="mt-1 truncate">
          <span className="text-sm font-medium">{anime.title}</span>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{anime.year}</span>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <span className="text-xs text-muted-foreground">{anime.type}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;
