import hotkeys from "hotkeys-js";
import { useEffect, useRef } from "preact/hooks";
import Input from "../../components/common/input.tsx";

export default function SearchModal() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    hotkeys("ctrl+k, command+k", () => {
      if (!ref.current?.open) ref.current?.showModal();
      else ref.current?.close();
      return false;
    });
  }, []);

  return (
    <dialog
      ref={ref}
      id="search-modal"
      class="w-full p-3 max-w-sm min-h-[64px] bg-zinc-950 rounded-[18px] backdrop:bg-zinc-500/30 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      <Input
        placeholder="검색"
        shortcut="ESC"
        onShortcutClick={() => ref.current?.close()}
      />
    </dialog>
  );
}
