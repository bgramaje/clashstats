import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IBM_Plex_Mono } from 'next/font/google';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

// If loading a variable font, you don't need to specify the font weight
const ibm = IBM_Plex_Mono({ subsets: ['latin'], weight: ['100', '700', '600', '500', '400'] });

export function Sidebar({ className }: any) {
  return (
    <div className={cn('pb-12 basis-0 grow-0 border-r-2 bg-primary-foreground', className)}>
      <div className="space-y-4 px-3 py-2">
        <div className="flex items-center justify-between mb-4">
          {/* <div className="flex items-center gap-2">
            <img
              src="/image.webp"
              style={{
                width: '35px',
                backgroundColor: '#262626',
                padding: 5,
                borderRadius: '10px',
              }}
            />
            <p className={`${ibm.className} text-md font-semibold`}>ClashStats</p>
          </div> */}
          <Badge variant="secondary">v0.0.1</Badge>
        </div>
        <div className="space-y-1 flex flex-col gap-1">
          <Link href="/">
            <Button variant="secondary" className="w-full justify-start">
              <Image
                alt="home-icon"
                src="/home.webp"
                width={24}
                height={24}
                style={{
                  color: 'white',
                  outline: 'white',
                }}
              />
            </Button>
          </Link>
          <Link href="/clans">
            <Button variant="secondary" className="w-full justify-start">
              <Image
                alt="home-icon"
                src="/clan-badge.png"
                width={32}
                height={32}
                style={{
                  color: 'white',
                  outline: 'white',
                }}
              />
            </Button>
          </Link>
          <Link href="/players">
            <Button variant="secondary" className="w-full justify-start">
              <Image
                alt="players-icon"
                src="https://static.wikia.nocookie.net/clashofclans/images/a/aa/Clan_Label_Trophy_Pushing.png/revision/latest?cb=20230124084251"
                width={22}
                height={22}
                style={{
                  color: 'white',
                  outline: 'white',
                }}
              />
            </Button>
          </Link>
        </div>
        {/* <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Playlists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              Songs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Made for You
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              Artists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              Albums
            </Button>
          </div>
        </div> */}
        {/* <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div> */}
      </div>
    </div>
  );
}
