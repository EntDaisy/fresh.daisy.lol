import { Search } from "$icons";
import { isOpen } from "./search-modal.tsx";

export default function SearchBar() {
  return (
    <button
      class="flex items-center h-[42px] bg-zinc-900 border border-zinc-800 px-3 font-semibold rounded-xl cursor-pointer"
      onClick={() => isOpen.value = true}
    >
      <Search class="flex-shrink-0 w-[18px] h-[18px] ml-px fill-zinc-400" />
      <span class="w-full ml-2 text-zinc-400 leading-4 text-left">
        검색
      </span>
      <span class="leading-[12px] border border-zinc-700 rounded-md px-1.5 py-1 font-semibold text-zinc-400 text-xs">
        ⌘K
      </span>
    </button>
  );
}
