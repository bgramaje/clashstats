export interface Location {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
}

export interface Country {
    id: number;
    name: string;
    isCountry: true;
    countryCode: string;
}
