import { Brush, Compass, EvaIcon } from "$icons";
import { join } from "../../lib/tw-merge.ts";
import Input from "../common/input.tsx";
import Logo from "../common/logo.tsx";

interface SidebarProps {
  pathname: string;
}

interface SidebarItem {
  icon: EvaIcon;
  href: string;
  label: string;
}

export default function Sidebar({ pathname }: SidebarProps) {
  return (
    <section
      id="sidebar"
      class="flex flex-col bg-zinc-950 h-screen px-3 border-r border-r-zinc-900"
    >
      <div class="h-12" />
      <div class="flex flex-col gap-y-2">
        <a href="/" class="flex gap-x-2 items-center px-2">
          <Logo class="w-8 h-8" />
          <h1 class="font-display font-semibold text-[26px]">Daisy</h1>
        </a>
        <Input placeholder="검색" />
      </div>
      <div class="mt-3">
        {([
          { icon: Compass, href: "/", label: "홈" },
          { icon: Brush, href: "/themes", label: "테마" },
        ] satisfies SidebarItem[])
          .map((item) => {
            return (
              <a
                href={item.href}
                class={join(
                  "flex items-center h-[42px] bg-transparent data-[current]:bg-brand-dark-50 border border-transparent data-[current]:border-brand-dark-100 px-3 font-semibold rounded-xl cursor-pointer group",
                  item.href !== "/"
                    ? "data-[ancestor]:bg-brand-dark-50 data-[ancestor]:border-brand-dark-100"
                    : "",
                )}
              >
                <item.icon
                  class={join(
                    "flex-shrink-0 w-[18px] h-[18px] ml-px fill-zinc-500 group-data-[current]:fill-brand-300",
                    item.href !== "/"
                      ? "group-data-[ancestor]:fill-brand-300"
                      : "",
                  )}
                />
                <span
                  class={join(
                    "bg-transparent w-full ml-2 text-zinc-500 group-data-[current]:text-brand-300 leading-4 focus:outline-none",
                    item.href !== "/"
                      ? "group-data-[ancestor]:text-brand-300"
                      : "",
                  )}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
      </div>
    </section>
  );
}
