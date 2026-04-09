import {matches, tournaments} from "@/data/data";

/**
 * @swagger
 * /api/tournaments/{id}:
 *   get:
 *     summary: Récupérer un tournoi avec ses matchs
 *     tags:
 *       - Tournaments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tournoi avec matchs
 *       404:
 *         description: Tournoi non trouvé
 */
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const {id} = await params;

    const tournament = tournaments.find(t => t.id === parseInt(id));
    if (!tournament) {
        return new Response("Tournament not found", { status: 404 });
    }
    const tournamentMatches = matches.filter(
        m => m.tournamentId === parseInt(id)
    );
    return Response.json({
        ...tournament,
        matches: tournamentMatches
    });
}