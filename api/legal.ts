import { getLegalAnalysisFromBody } from "../server";

export default async function handler(req: any, res: any) {
  try {
    const result = await getLegalAnalysisFromBody(req.body);
    return res.status(result.status).json(result.body);
  } catch (error: any) {
    console.error("Legal API handler error:", error?.message || error);
    return res.status(200).json({
      error: "The legal analysis service is temporarily unavailable. Please try again in a moment."
    });
  }
}
