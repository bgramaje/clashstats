'use client';

import { TownHallPlayerRanking } from '@/types/rankings/TownHallPlayerRanking';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { ibm } from '@/lib/font';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { getSecureId } from '@/lib/utils';
import { BuilderBasePlayerRanking } from '@/types/rankings/BuilderBasePlayerRanking';
import { BadgeRanking } from '@/components/custom/BadgeRanking';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<BuilderBasePlayerRanking>[] = [
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
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <p className="font-medium text-ellipsis text-nowrap overflow-hidden w-[150px]">
        {row.original.name}
      </p>
    ),
  },
  {
    accessorKey: 'clan',
    header: 'Clan',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.clan && (
          <>
            <Image
              key={getSecureId()}
              alt={`clan-${row.original.tag}`}
              width={25}
              height={25}
              src={row.original.clan.badgeUrls.small}
            />
            <p className={`${ibm.className} font-semibold`}>
              {row.original.clan.name}
            </p>
          </>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'expLevel',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Level
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <p className="text-center font-medium">
        {row.original.expLevel}
      </p>
    ),
  },
  {
    accessorKey: 'trophies',
    // header: 'Trophies',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Trophies
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.builderBaseLeague && (
          <Image
            key={getSecureId()}
            alt={`league-${row.original.tag}`}
            width={25}
            height={25}
            src="https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png"
          />
        )}
        <p className={`${ibm.className} font-semibold`}>
          {row.original.builderBaseTrophies}
        </p>
      </div>
    ),
  },
];
