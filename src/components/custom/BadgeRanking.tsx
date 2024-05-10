import { BuilderBasePlayerRanking } from '@/types/rankings/BuilderBasePlayerRanking';
import { TownHallPlayerRanking } from '@/types/rankings/TownHallPlayerRanking';
import React from 'react';
import { BadgeDelta } from '@tremor/react';
import { ibm } from '@/lib/font';
import { TownHallClanRanking } from '@/types/rankings/TownHallClanRanking';
import { BuilderBaseClanRanking } from '@/types/rankings/BuilderBaseClanRanking';
import { CapitalClanRanking } from '@/types/rankings/CapitalClanRanking';

type EntityProps = BuilderBasePlayerRanking
  | TownHallPlayerRanking
  | TownHallClanRanking
  | BuilderBaseClanRanking
  | CapitalClanRanking;

type BadgeRankingProps = {
  ply: EntityProps
}

const getBadgeType = (ply: EntityProps) => {
  if (ply.rank - ply.previousRank > 0) return 'decrease';
  if (ply.rank - ply.previousRank < 0) return 'increase';
  return 'unchanged';
};

export function BadgeRanking({ ply }: BadgeRankingProps) {
  return (
    <div className={`${ibm.className} min-w-[150px] font-medium flex gap-2 items-center`}>
      <p className="font-semibold">
        {ply.rank}
      </p>
      <BadgeDelta
        deltaType={getBadgeType(ply)}
        isIncreasePositive
        size="xs"
        className={`${ibm.className} rounded-[8px] max-w-[50px] font-semibold px-1`}
      />
      <p className="text-xs">
        (
        {ply.previousRank - ply.rank > 0 && '+'}
        {ply.previousRank - ply.rank}
        )
      </p>
    </div>
  );
}
