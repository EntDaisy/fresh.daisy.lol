import { Head } from "$fresh/runtime.ts";
import { SadLogo } from "../components/common/logo.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>페이지를 찾을 수 없음 | Daisy</title>
      </Head>
      <div class="px-4 py-8 mx-auto mt-20">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <div class="flex items-center">
            <span class="text-8xl font-black transition-colors duration-300 ease-in-out">
              4
            </span>
            <SadLogo class="w-24 h-24 my-6" />
            <span class="text-8xl font-black transition-colors duration-300 ease-in-out">
              4
            </span>
          </div>
          <h1 class="font-bold text-3xl transition-colors duration-300 ease-in-out">
            페이지를 찾을 수 없어요...
          </h1>
          <p class="font-medium text-center my-4 transition-colors duration-300 ease-in-out">
            요청하신 페이지를 찾을 수 없어요. 주소를 다시 확인해주세요.
          </p>
          <a
            href="/"
            class="font-semibold text-brand-400 leading-5 underline underline-offset-4 cursor-pointer transition-colors duration-300 ease-in-out"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </>
  );
}
