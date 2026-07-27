import app from "../server";

export default function handler(req: any, res: any) {
  const url = req.url || "/";

  if (!url || url === "/" || url === "" || url === "/api" || url === "/api/") {
    req.url = "/api/chat";
  }

  return app(req, res);
}
