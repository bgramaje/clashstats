'use client';

import { TownHallPlayerRanking } from '@/types/rankings/TownHallPlayerRanking';
import { ColumnDef } from '@tanstack/react-table';
import { Badge } from '@/components/ui/badge';
import { ibm } from '@/lib/font';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { getSecureId } from '@/lib/utils';
import { BadgeRanking } from '@/components/custom/BadgeRanking';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<TownHallPlayerRanking>[] = [
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
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <p className="font-medium text-ellipsis text-nowrap overflow-hidden w-[150px]">
        {row?.original?.name ?? 'UNKNOWN'}
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
              width={23}
              height={23}
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
    accessorKey: 'attackWins',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Attack Wins
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        <Image
          key={getSecureId()}
          alt={`atq-${row.original.tag}`}
          width={20}
          height={20}
          src="https://static.wikia.nocookie.net/clashofclans/images/2/21/Clan_Label_Friendly_Wars.png/revision/latest?cb=20230124084244"
        />
        <p className={`${ibm.className} font-semibold text-center`}>
          {row.original.attackWins}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'defenseWins',
    header: ({ column }) => (
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Defense Wins
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        <Image
          key={getSecureId()}
          alt={`def-${row.original.tag}`}
          width={20}
          height={20}
          src="https://static.wikia.nocookie.net/clashofclans/images/c/cf/Shield.png/revision/latest/scale-to-width-down/150?cb=20151223062526"
        />
        <p className={`${ibm.className} font-semibold`}>
          {row.original.defenseWins}
        </p>
      </div>
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
      <div className="flex items-center justify-center gap-2">
        {row.original.league && (
          <Image
            key={getSecureId()}
            alt={`league-${row.original.tag}`}
            width={25}
            height={25}
            src={row.original.league.iconUrls.small}
          />
        )}
        <p className={`${ibm.className} font-semibold`}>
          {row.original.trophies}
        </p>
      </div>
    ),
  },
];
