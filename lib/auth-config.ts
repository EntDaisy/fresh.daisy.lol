import { AuthConfig } from "@auth/core";
import GithubProvider from "@auth/core/providers/github";

export const authConfig: AuthConfig = {
  providers: [
    GithubProvider({
      clientSecret: Deno.env.get("GITHUB_SECRET"),
      clientId: Deno.env.get("GITHUB_ID"),
    }),
  ],
  secret: Deno.env.get("NEXTAUTH_SECRET"),
  trustHost: true,
};
