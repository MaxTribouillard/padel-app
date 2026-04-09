import {players, teams} from "@/data/data";

export const getTeamById = (id: number) =>
    teams.find(t => t.id === id);

export const getPlayerById = (id: number) =>
    players.find(p => p.id === id);

export const getPlayersOfTeam = (teamId: number) => {
    const team = getTeamById(teamId);
    if (!team) return [];

    return team.playerIds.map(getPlayerById);
};