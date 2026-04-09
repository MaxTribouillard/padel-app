import {tournaments} from "@/data/data";

/**
 * @swagger
 * /api/tournaments:
 *   get:
 *     summary: Récupérer tous les tournois
 *     tags:
 *       - Tournaments
 *     responses:
 *       200:
 *         description: Liste des tournois
 */
export async function GET() {
    return Response.json(tournaments);
}