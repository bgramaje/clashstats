interface BadgeUrls {
    small: string;
    large: string;
    medium: string;
}
interface Location {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
}

export interface TownHallClanRanking {
    tag: string;
    name: string;
    badgeUrls: BadgeUrls;
    clanLevel: number;
    members: number;
    clanPoints: number;
    rank: number;
    previousRank: number;
    location: Location
}
