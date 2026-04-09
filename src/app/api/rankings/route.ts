import {matches, teams} from "@/data/data";

/**
 * @swagger
 * /api/rankings:
 *   get:
 *     summary: Classement des équipes
 *     tags:
 *       - Rankings
 *     responses:
 *       200:
 *         description: Classement basé sur les matchs
 */
export async function GET() {
    const scores: Record<number, number> = {};
    teams.forEach(team => {
        scores[team.id] = 0;
    });
    matches.forEach(match => {
        if (match.winnerTeamId) {
            scores[match.winnerTeamId] += 3;
        }
    });
    const ranking = teams
        .map(team => ({
            team,
            points: scores[team.id]
        }))
        .sort((a, b) => b.points - a.points);
    return Response.json(ranking);
}