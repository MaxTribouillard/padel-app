/**
 * @swagger
 * /api/test:
 *   get:
 *     summary: Test route
 *     responses:
 *       200:
 *         description: OK
 */
export async function GET() {
    return Response.json({ ok: true });
}