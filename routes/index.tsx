import { PageProps } from "$fresh/server.ts";
import { DaisyState } from "./_middleware.ts";

export default function Home({ state }: PageProps<never, DaisyState>) {
  return (
    <div class="">
      Hello, world!
      {state.token?.name}
    </div>
  );
}
