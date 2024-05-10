'use client';

import { useMemo } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';

import { Spinner } from '@/components/Spinner';
import { fetcher } from '@/lib/utils';
import { ibm } from '@/lib/font';
import { DataTable } from '@/components/ui/data-table';

import { Country } from '@/types/location';
import { TownHallClanRanking } from '@/types/rankings/TownHallClanRanking';

import { columns } from './columns';

type TownhallTableProps = {
  country: Country | null,
}

type TownHallClanRankingResponse = {
  status: 200,
  items: TownHallClanRanking[]
}

export function TownHallTable({ country }: TownhallTableProps) {
  const url = useMemo(
    () => `/api/locations/${country?.id}/rankings/clans`,
    [country],
  );

  const {
    data,
    error: errorLocations,
    isLoading,
  } = useSWR<TownHallClanRankingResponse>(url, fetcher);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="relative top-0 grow overflow-auto">
      <DataTable<TownHallClanRanking, ColumnDef<TownHallClanRanking>[]>
        title={(
          <div className="flex items-center gap-2">
            <Image
              alt="leadership-icon"
              src="https://static.wikia.nocookie.net/clashofclans/images/c/cd/Trophy.png/revision/latest?cb=20171031024226"
              width={20}
              height={20}
            />
            <p className={`${ibm.className} text-md font-semibold`}>Leadership</p>

          </div>
        )}
        data={data?.items ?? []}
        columns={columns}
      />
    </div>
  );
}
