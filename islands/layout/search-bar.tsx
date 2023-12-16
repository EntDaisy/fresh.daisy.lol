import { IS_BROWSER } from "$fresh/runtime.ts";
import { Search } from "$icons";

export default function SearchBar() {
  const searchModal = IS_BROWSER
    ? document.getElementById("search-modal") as HTMLDialogElement | null
    : null;

  return (
    <button
      class="flex items-center h-[42px] bg-zinc-900 border border-zinc-800 px-3 font-semibold rounded-xl cursor-pointer"
      onClick={() => searchModal?.showModal()}
    >
      <Search class="flex-shrink-0 w-[18px] h-[18px] ml-px stroke-zinc-400" />
      <span class="w-full ml-2 text-zinc-400 leading-4 text-left">
        검색
      </span>
      <span class="leading-[12px] border border-zinc-700 rounded-md px-1.5 py-1 font-semibold text-zinc-400 text-xs">
        ⌘K
      </span>
    </button>
  );
}
