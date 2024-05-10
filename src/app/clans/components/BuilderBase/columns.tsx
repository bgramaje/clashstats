'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { ibm } from '@/lib/font';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { getSecureId } from '@/lib/utils';
import { BuilderBasePlayerRanking } from '@/types/rankings/BuilderBasePlayerRanking';
import { BadgeRanking } from '@/components/custom/BadgeRanking';
import { BuilderBaseClanRanking } from '@/types/rankings/BuilderBaseClanRanking';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export const columns: ColumnDef<BuilderBaseClanRanking>[] = [
  {
    accessorKey: 'rank',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Rank
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <BadgeRanking ply={row.original} />,
  },
  {
    accessorKey: 'tag',
    header: 'Tag',
    cell: ({ row }) => (
      <Badge variant="secondary">
        <p className="font-medium ">{row.original.tag}</p>
      </Badge>
    ),
  },
  {
    accessorKey: 'clanLevel',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Clan Level
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <p className="text-center font-medium">
        {row.original.clanLevel}
      </p>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.badgeUrls && (
          <>
            <Image
              key={getSecureId()}
              alt={`clan-${row.original.tag}`}
              width={25}
              height={25}
              src={row.original.badgeUrls.small}
            />
            <p className={`${ibm.className} font-semibold`}>
              {row?.original?.name ?? 'UNKNOWN'}
            </p>
          </>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'country',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        Country
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-full flex justify-center">
        {row.original.location ? (
          <Image
            loading="lazy"
            key={getSecureId()}
            alt={`flag-${row.original.tag}`}
            width={16}
            height={16}
            src={`https://flagsapi.com/${row.original.location.countryCode}/shiny/16.png`}
          />
        ) : '-'}
      </div>
    ),
  },
  {
    accessorKey: 'members',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        Members
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-full flex justify-center">
        <p className="font-medium text-ellipsis text-nowrap overflow-hidden w-[150px] text-center">
          {row?.original?.members ?? 'UNKNOWN'}
          {' '}
          / 50
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'clanPoints',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Clan Points
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2 w-full text-center">
        <Image
          key={getSecureId()}
          alt={`atq-${row.original.tag}`}
          width={20}
          height={20}
          src="https://static.wikia.nocookie.net/clashofclans/images/8/84/Axes.png/revision/latest?cb=20170527003826"
        />
        <p className={`${ibm.className} font-semibold text-right`}>
          {row.original.clanBuilderBasePoints}
        </p>
      </div>
    ),
  },
];
