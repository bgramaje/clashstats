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

export interface BuilderBaseClanRanking {
    tag: string;
    name: string;
    badgeUrls: BadgeUrls;
    clanLevel: number;
    members: number;
    clanBuilderBasePoints: number;
    rank: number;
    previousRank: number;
    location: Location
}
