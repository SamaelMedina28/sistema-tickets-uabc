export interface SupportUnit {
    id: number;
    name: string;
    location: string;
    heads: Array<{
        id: number;
        name: string;
        email: string;
    }>;
    members: Array<{
        id: number;
        name: string;
        email: string;
    }>;
}

export type SupportUnitList = SupportUnit[];