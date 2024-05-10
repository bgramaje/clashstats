'use client';

import Image from 'next/image';

import { ibm } from '@/lib/font';
import { getSecureId } from '@/lib/utils';

import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from '@/components/ui/tabs';

import { SelectCountry } from '@/components/custom/SelectCountry';
import { TownHallTable } from './components/TownHall/TownHallTable';
import { BuilderBaseTable } from './components/BuilderBase/BuilderBaseTable';
import { useMemoryStore } from '../stores/stores';
import { CapitalTable } from './components/Capital/CapitalTable';

export default function Clans() {
  const selectedCountry = useMemoryStore((state) => state.selectedCountry);
  const setSelectedCountry = useMemoryStore((state) => state.setSelectedCountry);

  return (
    <main className="flex flex-col items-center justify-between h-screen py-4 p-28 gap-4 w-full">
      <div className="w-full flex justify-between">
        <p className={`${ibm.className} text-md font-semibold w-full text-left`}>Clans</p>
      </div>
      <div className="flex gap-20 grow basis-0 overflow-auto justify-between w-full">
        <Tabs defaultValue="th" className="w-full flex flex-col">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="th">
                <div className="flex items-center gap-2">
                  <Image
                    loading="lazy"
                    key={getSecureId()}
                    alt="builder-base"
                    width={20}
                    height={20}
                    src="https://api-assets.clashofclans.com/labels/128/LIXkluJJeg4ATNVQgO6scLheXxmNpyBLRYGldtv-Miw.png"
                  />
                  <p>Home Village</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="bh">
                <div className="flex items-center gap-2">
                  <Image
                    loading="lazy"
                    key={getSecureId()}
                    alt="builder-base"
                    width={20}
                    height={20}
                    src="https://api-assets.clashofclans.com/labels/128/UEjY-kAdKcE6bPfI_X1L4s-ADYI_IJLuxx5cmClykdU.png"
                  />
                  <p>Builder Base</p>
                </div>
              </TabsTrigger>
              <TabsTrigger value="ca">
                <div className="flex items-center gap-2">
                  <Image
                    loading="lazy"
                    key={getSecureId()}
                    alt="builder-base"
                    width={24}
                    height={24}
                    src="https://static.wikia.nocookie.net/clashofclans/images/7/7c/Small_Cabin.png/revision/latest/scale-to-width-down/100?cb=20220510220642"
                  />
                  <p>Capital</p>
                </div>
              </TabsTrigger>
            </TabsList>
            <SelectCountry
              country={selectedCountry}
              setCountry={setSelectedCountry}
            />
          </div>
          <TabsContent value="th" className="grow basis-0">
            <TownHallTable country={selectedCountry} />
          </TabsContent>
          <TabsContent value="bh" className="grow basis-0">
            <BuilderBaseTable country={selectedCountry} />
          </TabsContent>
          <TabsContent value="ca" className="grow basis-0">
            <CapitalTable country={selectedCountry} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

