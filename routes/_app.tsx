import { Partial } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import Sidebar from "../components/layout/sidebar.tsx";
import SearchModal from "../islands/layout/search-modal.tsx";
import { DaisyState } from "./_middleware.ts";

export default function App(
  { Component, state }: PageProps<unknown, DaisyState>,
) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Daisy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="/assets/pretendardvariable-dynamic-subset.css"
        />
        <link rel="stylesheet" href="/assets/styles.css" />
      </head>
      <body
        class="grid grid-cols-[16rem_1fr] w-screen bg-zinc-950"
        f-client-nav
      >
        <Sidebar token={state.token} />
        <main>
          <Partial name="main">
            <Component />
          </Partial>
        </main>
        <SearchModal />
      </body>
    </html>
  );
}
