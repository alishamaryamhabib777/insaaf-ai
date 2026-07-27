import app from "../server";

export default function handler(req: any, res: any) {
  const url = req.url || "/";

  if (url === "/api" || url === "/api/") {
    req.url = "/api/chat";
  } else if (url.startsWith("/api")) {
    req.url = url;
  }

  return app(req, res);
}
