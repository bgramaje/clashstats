interface IconUrls {
    small: string;
    tiny: string;
    medium: string;
}

interface BadgeUrls {
    small: string;
    large: string;
    medium: string;
}

interface Clan {
    tag: string;
    name: string;
    badgeUrls: BadgeUrls;
}

interface League {
    id: number;
    name: string;
    iconUrls: IconUrls;
}

export interface TownHallPlayerRanking {
    tag: string;
    name: string;
    expLevel: number;
    trophies: number;
    attackWins: number;
    defenseWins: number;
    rank: number;
    previousRank: number;
    clan: Clan;
    league: League;
}
