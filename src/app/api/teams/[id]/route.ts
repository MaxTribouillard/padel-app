import {players, teams} from "@/data/data";

/**
 * @swagger
 * /api/teams/{id}:
 *   get:
 *     summary: Récupérer une équipe avec ses joueurs
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Équipe avec joueurs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TeamWithPlayers'
 *       404:
 *         description: Équipe non trouvée
 */
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const {id} = await params;
    const team = teams.find(t => t.id == parseInt(id));
    if (!team) {
        return new Response("Team not found", { status: 404 });
    }
    const teamPlayers = players.filter(p =>
        team.playerIds.includes(p.id)
    );
    return Response.json({
        ...team,
        players: teamPlayers
    });
}