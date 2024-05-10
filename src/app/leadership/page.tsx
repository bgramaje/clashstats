'use client';

import Image from 'next/image';

import { ibm } from '@/lib/font';
import { getSecureId } from '@/lib/utils';

import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from '@/components/ui/tabs';
import { SelectCountry } from '@/components/custom/SelectCountry';

import { useMemoryStore } from '../stores/stores';
import { TownHallTable } from '../clans/components/TownHall/TownHallTable';
import { BuilderBaseTable } from '../clans/components/BuilderBase/BuilderBaseTable';
import { CapitalTable } from '../clans/components/Capital/CapitalTable';
import { ClansView } from './components/clans';
import { PlayersView } from './components/players';

export default function Leadership() {
  const selectedCountry = useMemoryStore((state) => state.selectedCountry);
  const setSelectedCountry = useMemoryStore((state) => state.setSelectedCountry);

  return (
    <main className="flex flex-col h-screen py-4 p-28 gap-4 w-full">
      <Tabs defaultValue="players" className="flex flex-col w-full gap-3">
        <div className="flex items-center gap-2">
          <Image
            alt="leadership-icon"
            src="https://static.wikia.nocookie.net/clashofclans/images/c/cd/Trophy.png/revision/latest?cb=20171031024226"
            width={20}
            height={20}
          />
          <p className={`${ibm.className} text-md font-semibold`}>Leadership</p>
        </div>
        <div className="w-full flex justify-between">
          <TabsList>
            <TabsTrigger value="players">
              <div className="flex items-center gap-2">
                <Image
                  loading="lazy"
                  key={getSecureId()}
                  alt="builder-base"
                  width={20}
                  height={20}
                  src="https://clashspot.net/cache/xlarge/media/game/misc/players.webp"
                />
                <p>Players</p>
              </div>
            </TabsTrigger>
            <TabsTrigger value="clans">
              <div className="flex items-center gap-2">
                <Image
                  loading="lazy"
                  key={getSecureId()}
                  alt="builder-base"
                  width={20}
                  height={20}
                  src="https://static.wikia.nocookie.net/clashofclans/images/c/cf/Shield.png/revision/latest/scale-to-width-down/150?cb=20151223062526"
                />
                <p>Clans</p>
              </div>
            </TabsTrigger>
          </TabsList>
          <SelectCountry
            country={selectedCountry}
            setCountry={setSelectedCountry}
          />
        </div>

        <TabsContent value="players" className="grow basis-0">
          <PlayersView selectedCountry={selectedCountry} />
        </TabsContent>
        <TabsContent value="clans" className="grow basis-0">
          <ClansView selectedCountry={selectedCountry} />
        </TabsContent>
      </Tabs>

    </main>
  );
}

