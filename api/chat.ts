import { getChatResponseFromBody } from "../server";

export default async function handler(req: any, res: any) {
  try {
    const result = await getChatResponseFromBody(req.body);
    return res.status(result.status).json(result.body);
  } catch (error: any) {
    console.error("Chat API handler error:", error?.message || error);
    return res.status(200).json({
      text: "The legal assistant is temporarily unavailable, but I can still provide a structured guidance response.",
      legalBasis: "Pakistan Statutory & Case Law (PPC / CrPC / SCMR Archives)",
      sectionRef: "Munsif.ai Research Engine"
    });
  }
}
