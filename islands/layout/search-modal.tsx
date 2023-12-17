import { Dialog, Transition } from "@headlessui/react";
import { signal } from "@preact/signals";
import hotkeys from "hotkeys-js";
import { Fragment } from "preact";
import { useEffect } from "preact/hooks";
import Input from "../../components/common/input.tsx";

export const isOpen = signal(false);

export default function SearchModal() {
  useEffect(() => {
    hotkeys("ctrl+k, command+k", () => {
      isOpen.value = true;
      return false;
    });
  }, []);

  return (
    <Transition appear show={isOpen.value} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => isOpen.value = false}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-500/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="flex items-center justify-center fixed inset-0 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full p-3 max-w-sm min-h-[64px] bg-zinc-950 rounded-[18px]">
              <Input
                placeholder="검색"
                shortcut="ESC"
                onShortcutClick={() => void (isOpen.value = false)}
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
