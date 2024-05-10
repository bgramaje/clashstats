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

export interface CapitalClanRanking {
    tag: string;
    name: string;
    location: Location
    badgeUrls: BadgeUrls;
    clanLevel: number;
    members: number;
    clanCapitalPoints: number;
    rank: number;
    previousRank: number;
}
