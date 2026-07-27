import chatHandler from "./chat";
import legalHandler from "./legal";

export default function handler(req: any, res: any) {
  const url = req.url || "/";

  if (url === "/api" || url === "/api/") {
    return chatHandler(req, res);
  }

  if (url.startsWith("/api/legal")) {
    return legalHandler(req, res);
  }

  return chatHandler(req, res);
}
