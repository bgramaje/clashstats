'use client';

import useSWR from 'swr';

import { useMemo } from 'react';
import { Spinner } from '@/components/Spinner';
import { fetcher } from '@/lib/utils';
import { ibm } from '@/lib/font';
import { Country } from '@/types/location';
import { DataTable } from '@/components/ui/data-table';
import { BuilderBasePlayerRanking } from '@/types/rankings/BuilderBasePlayerRanking';
import Image from 'next/image';
import { ColumnDef } from '@tanstack/react-table';
import { CapitalClanRanking } from '@/types/rankings/CapitalClanRanking';
import { columns } from './columns';

type CapitalTableProps = {
  country: Country | null,
}

type CapitalClanRankingResponse = {
  status: 200,
  items: CapitalClanRanking[]
}

export function CapitalTable({ country }: CapitalTableProps) {
  const url = useMemo(
    () => `/api/locations/${country?.id}/rankings/capitals`,
    [country],
  );

  const {
    data,
    error: errorLocations,
    isLoading,
  } = useSWR<CapitalClanRankingResponse>(url, fetcher);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="relative top-0 grow overflow-auto">
      <DataTable<CapitalClanRanking, ColumnDef<CapitalClanRanking>[]>
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
