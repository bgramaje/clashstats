'use client';

// import Image from "next/image";
// import useSWR from 'swr'
import axios from 'axios';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from '@/components/Sidebar';
import useSWR from 'swr';
import { BadgeDelta, Card } from '@tremor/react';
import MoonLoader from 'react-spinners/MoonLoader';
import { Oval } from 'react-loader-spinner';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { useEffect, useMemo } from 'react';
import { Spinner } from '@/components/Spinner';
import { fetcher, getSecureId } from '@/lib/utils';
import { ibm } from '@/lib/font';
import Image from 'next/image';
import { TownHallPlayerRanking } from '@/types/rankings/TownHallPlayerRanking';
import { Country } from '@/types/location';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './columns';

type TownhallTableProps = {
  country: Country | null,
}

type TownHallPlayerRankingResponse = {
  status: 200,
  items: TownHallPlayerRanking[]
}

export function TownHallTable({ country }: TownhallTableProps) {
  const url = useMemo(
    () => `/api/locations/${country?.id}/rankings/players`,
    [country],
  );

  const {
    data,
    error: errorLocations,
    isLoading,
  } = useSWR<TownHallPlayerRankingResponse>(url, fetcher);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="relative top-0 grow overflow-auto">
      <DataTable
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
