import { Head } from "$fresh/runtime.ts";
import { type PageProps } from "$fresh/server.ts";
import { SadLogo } from "../components/common/logo.tsx";

export default function Error404({ Component, url }: PageProps) {
  return (
    <>
      <Head>
        <title>페이지를 찾을 수 없음 | Daisy</title>
      </Head>
      <div class="px-4 py-8 mx-auto mt-20">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <div class="flex items-center">
            <span class="text-9xl 0.5sm:text-8xl font-black transition-colors duration-300 ease-in-out">
              4
            </span>
            <SadLogo class="w-28 h-28 0.5sm:w-20 0.5sm:h-20 my-6" />
            <span class="text-9xl 0.5sm:text-8xl font-black transition-colors duration-300 ease-in-out">
              4
            </span>
          </div>
          <h1 class="text-4xl 0.5sm:text-3xl font-bold transition-colors duration-300 ease-in-out">
            페이지를 찾을 수 없어요...
          </h1>
          <p class="text-lg 0.5sm:text-base text-center my-4 transition-colors duration-300 ease-in-out">
            요청하신 페이지를 찾을 수 없어요. 주소를 다시 확인해주세요.
          </p>
          <a
            href="/"
            class="text-brand-600 dark:text-brand-400 text-lg 0.5sm:text-base font-medium leading-5 underline underline-offset-4 cursor-pointer transition-colors duration-300 ease-in-out"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </>
  );
}
