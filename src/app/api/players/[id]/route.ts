import {players} from "@/data/data";

/**
 * @swagger
 * /api/players/{id}:
 *   get:
 *     summary: Récupérer un joueur par ID
 *     tags:
 *       - Players
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Joueur trouvé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Player'
 *       404:
 *         description: Joueur non trouvé
 */
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const {id} = await params;

    const player = players.find(p => p.id === parseInt(id));
    if (!player) {
        return new Response("Player not found", { status: 404 });
    }
    return Response.json(player);
}