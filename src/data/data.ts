import {Match, Player, Team, Tournament} from "@/data/types";

export const players: Player[] = [
    { id: 1, name: "Thomas Dupont", ranking: 15 },
    { id: 2, name: "Lucas Martin", ranking: 22 },
    { id: 3, name: "Enzo Garcia", ranking: 8 },
    { id: 4, name: "Hugo Bernard", ranking: 12 },
    { id: 5, name: "Nathan Petit", ranking: 30 },
    { id: 6, name: "Leo Robert", ranking: 18 },
    { id: 7, name: "Maxime Roux", ranking: 5 },
    { id: 8, name: "Antoine Morel", ranking: 9 },
    { id: 9, name: "Julien Fournier", ranking: 25 },
    { id: 10, name: "Paul Girard", ranking: 17 }
];

export const teams: Team[] = [
    { id: 1, name: "Team Smash", playerIds: [1, 2] },
    { id: 2, name: "Les Lobbers", playerIds: [3, 4] },
    { id: 3, name: "Padel Masters", playerIds: [5, 6] },
    { id: 4, name: "Top Spin", playerIds: [7, 8] },
    { id: 5, name: "Les Défenseurs", playerIds: [9, 10] }
];

export const tournaments: Tournament[] = [
    { id: 1, name: "Open de Paris", location: "Paris", date: "2026-05-10" },
    { id: 2, name: "Padel Cup Lyon", location: "Lyon", date: "2026-06-15" },
    { id: 3, name: "Marseille Padel Tour", location: "Marseille", date: "2026-07-20" }
];

export const matches: Match[] = [
    // Tournoi 1
    {
        id: 1,
        tournamentId: 1,
        teamA: 1,
        teamB: 2,
        score: "6-4 3-6 10-7",
        winnerTeamId: 1
    },
    {
        id: 2,
        tournamentId: 1,
        teamA: 3,
        teamB: 4,
        score: "6-2 6-3",
        winnerTeamId: 4
    },
    {
        id: 3,
        tournamentId: 1,
        teamA: 1,
        teamB: 4,
        score: "7-6 6-4",
        winnerTeamId: 1
    },

    // Tournoi 2
    {
        id: 4,
        tournamentId: 2,
        teamA: 2,
        teamB: 3,
        score: "6-2 6-2",
        winnerTeamId: 2
    },
    {
        id: 5,
        tournamentId: 2,
        teamA: 4,
        teamB: 5,
        score: "6-7 6-3 10-6",
        winnerTeamId: 4
    },
    {
        id: 6,
        tournamentId: 2,
        teamA: 2,
        teamB: 4,
        score: null,
        winnerTeamId: null
    },

    // Tournoi 3
    {
        id: 7,
        tournamentId: 3,
        teamA: 1,
        teamB: 5,
        score: null,
        winnerTeamId: null
    },
    {
        id: 8,
        tournamentId: 3,
        teamA: 3,
        teamB: 4,
        score: null,
        winnerTeamId: null
    }
];

