export type Player = {
    id: number;
    name: string;
    ranking: number;
};

export type Team = {
    id: number;
    name: string;
    playerIds: number[];
};

export type Tournament = {
    id: number;
    name: string;
    location: string;
    date: string; // ISO
};

export type Match = {
    id: number;
    tournamentId: number;
    teamA: number;
    teamB: number;
    score: string | null;
    winnerTeamId: number | null;
};