import { Search } from "lucide-preact";
import { JSX } from "preact/jsx-runtime";
import { merge } from "../../lib/tw-merge.ts";

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
  return (
    <label
      class={merge(
        "flex items-center h-[42px] bg-zinc-900 border border-zinc-800 px-3 font-semibold rounded-xl cursor-pointer",
        props.class ?? props.className,
      )}
    >
      <Search class="flex-shrink-0 w-[18px] h-[18px] ml-px stroke-zinc-400" />
      <input
        {...{ ...props, class: undefined, className: undefined }}
        class="bg-transparent w-full ml-2 leading-4 focus:outline-none"
      />
      <span class="leading-[12px] border border-zinc-700 rounded-md px-1.5 py-1 font-semibold text-zinc-400 text-xs">
        ⌘K
      </span>
    </label>
  );
}
