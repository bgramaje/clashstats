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
import { BuilderBaseClanRanking } from '@/types/rankings/BuilderBaseClanRanking';
import { ColumnDef } from '@tanstack/react-table';
import { columns } from './columns';

type BuilderBaseTableProps = {
  country: Country | null,
}

type BuilderBaseClanRankingResponse = {
  status: 200,
  items: BuilderBaseClanRanking[]
}

export function BuilderBaseTable({ country }: BuilderBaseTableProps) {
  const url = useMemo(
    () => `/api/locations/${country?.id}/rankings/clans/builder-base`,
    [country],
  );

  const {
    data,
    error: errorLocations,
    isLoading,
  } = useSWR<BuilderBaseClanRankingResponse>(url, fetcher);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="relative top-0 grow overflow-auto">
      <DataTable<BuilderBaseClanRanking, ColumnDef<BuilderBaseClanRanking>[]>
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
