import { FreshContext } from "$fresh/server.ts";
import { Auth } from "@auth/core";
import { authConfig } from "../../../lib/auth-config.ts";

export async function handler(
  req: Request,
  _ctx: FreshContext,
): Promise<Response> {
  const res = await Auth(req, authConfig);

  return new Response(res.body, {
    headers: res.headers,
    status: res.status,
  });
}
