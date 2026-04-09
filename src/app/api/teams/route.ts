import {teams} from "@/data/data";

/**
 * @swagger
 * /api/teams:
 *   get:
 *     summary: Récupérer toutes les équipes
 *     tags:
 *       - Teams
 *     responses:
 *       200:
 *         description: Liste des équipes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Team'
 */
export async function GET() {
    return Response.json(teams);
}