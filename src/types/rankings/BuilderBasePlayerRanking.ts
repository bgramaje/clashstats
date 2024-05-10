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

interface BuilderBaseLeague {
    id: number;
    name: string;
}

export interface BuilderBasePlayerRanking {
    tag: string;
    name: string;
    expLevel: number;
    rank: number;
    previousRank: number;
    builderBaseTrophies: number;
    clan: Clan;
    builderBaseLeague: BuilderBaseLeague;
}

