import {players} from "@/data/data";

/**
 * @swagger
 * /api/players:
 *   get:
 *     summary: Récupérer tous les joueurs
 *     tags:
 *       - Players
 *     responses:
 *       200:
 *         description: Liste des joueurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Player'
 */
export async function GET() {
    return Response.json(players);
}