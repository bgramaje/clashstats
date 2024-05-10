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

import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from '@tanstack/react-table';

type TableProps<T> = {
  url: string,
  columns: ColumnDef<T>[]
}

export function LeadershipTable<T>({ url, columns }: TableProps<T>) {
  const {
    data,
    error: errorLocations,
    isLoading,
  } = useSWR<{
    status: 200,
    items: T[]
  }>(url, fetcher);

  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Spinner />
    </div>
  ) : (
    <div className="relative top-0 grow overflow-auto">
      <DataTable
        title={null}
        data={data?.items ?? []}
        columns={columns}
      />
    </div>
  );
}
