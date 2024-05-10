'use client';

import React, { useMemo } from 'react';

import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from '@/components/ui/tabs';

import Image from 'next/image';
import { getSecureId } from '@/lib/utils';

import { TownHallPlayerRanking } from '@/types/rankings/TownHallPlayerRanking';
import { BuilderBasePlayerRanking } from '@/types/rankings/BuilderBasePlayerRanking';
import { Country } from '@/types/location';

import { LeadershipTable } from '../LeadershipTable';

import { columns as ThColumns } from './columns.townhall';
import { columns as BbColumns } from './columns.builderbase';

type PlayersViewProps = {
  selectedCountry: Country | null,
}

export function PlayersView({ selectedCountry }: PlayersViewProps) {
  const url = useMemo(
    () => `/api/locations/${selectedCountry?.id}/rankings/players`,
    [selectedCountry],
  );

  return (
    <Tabs defaultValue="th" className="w-full flex flex-col">
      <div className="flex items-center justify-between absolute mt-2 z-[999]">
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
        </TabsList>
      </div>
      <TabsContent value="th" className="grow basis-0">
        <LeadershipTable<TownHallPlayerRanking>
          url={url}
          columns={ThColumns}
        />
      </TabsContent>
      <TabsContent value="bh" className="grow basis-0">
        <LeadershipTable<BuilderBasePlayerRanking>
          url={`${url}/builder-base`}
          columns={BbColumns}
        />
      </TabsContent>
    </Tabs>
  );
}
