import {matches} from "@/data/data";

/**
 * @swagger
 * /api/matches:
 *   get:
 *     summary: Récupérer les matchs (filtrables)
 *     tags:
 *       - Matches
 *     parameters:
 *       - in: query
 *         name: tournamentId
 *         schema:
 *           type: integer
 *       - in: query
 *         name: teamId
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des matchs filtrés
 */
export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const tournamentId = searchParams.get("tournamentId");
    const teamId = searchParams.get("teamId");
    let result = matches;
    if (tournamentId) {
        result = result.filter(
            m => m.tournamentId === parseInt(tournamentId)
        );
    }
    if (teamId) {
        const id = parseInt(teamId);
        result = result.filter(
            m => m.teamA === id || m.teamB === id
        );
    }
    return Response.json(result);
}