'use client';

import React, { useMemo } from 'react';

import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from '@/components/ui/tabs';

import Image from 'next/image';
import { getSecureId } from '@/lib/utils';
import { Country } from '@/types/location';

import { TownHallClanRanking } from '@/types/rankings/TownHallClanRanking';
import { BuilderBaseClanRanking } from '@/types/rankings/BuilderBaseClanRanking';
import { CapitalClanRanking } from '@/types/rankings/CapitalClanRanking';

import { LeadershipTable } from '../LeadershipTable';

import { columns as ThColumns } from './columns.townhall';
import { columns as BbColumns } from './columns.builderbase';
import { columns as CaColumns } from './columns.capital';

type ClansViewProps = {
  selectedCountry: Country | null,
}

export function ClansView({ selectedCountry }: ClansViewProps) {
  const url = useMemo(
    () => `/api/locations/${selectedCountry?.id}/rankings`,
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
      </div>

      <TabsContent value="th" className="grow basis-0">
        <LeadershipTable<TownHallClanRanking>
          url={`${url}/clans`}
          columns={ThColumns}
        />
      </TabsContent>
      <TabsContent value="bh" className="grow basis-0">
        <LeadershipTable<BuilderBaseClanRanking>
          url={`${url}/clans/builder-base`}
          columns={BbColumns}
        />
      </TabsContent>
      <TabsContent value="ca" className="grow basis-0">
        <LeadershipTable<CapitalClanRanking>
          url={`${url}/capitals`}
          columns={CaColumns}
        />
      </TabsContent>
    </Tabs>
  );
}
