import { FreshContext } from "$fresh/server.ts";
import { getToken, JWT } from "@auth/core/jwt";

export interface DaisyState {
  token: JWT | null;
}

const secret = Deno.env.get("NEXTAUTH_SECRET")!;
export async function handler(req: Request, ctx: FreshContext<DaisyState>) {
  const { pathname } = new URL(req.url);
  if (pathname.startsWith("/_frsh/") || pathname.startsWith("/assets/")) {
    return await ctx.next();
  }
  // deno-lint-ignore ban-ts-comment
  // @ts-expect-error
  const token = await getToken({
    req,
    secret,
    cookieName: "authjs.session-token",
  });
  ctx.state.token = token;
  return await ctx.next();
}
