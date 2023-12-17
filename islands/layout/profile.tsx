import { JWT } from "@auth/core/jwt";
import { EvaIcon, Login, Logout, Person } from "$icons";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "preact";

interface ProfileItem {
  icon: EvaIcon;
  href: string;
  label: string;
}

export default function Profile({ token }: { token: JWT | null }) {
  if (!token) {
    return (
      <a
        href="/login"
        class="flex items-center hover:bg-zinc-900 border border-transparent hover:border-zinc-800 gap-x-2 transition-colors duration-300 ease-in-out rounded-xl px-3 py-2.5 cursor-pointer"
      >
        <div class="flex items-center justify-center h-10">
          <Login class="fill-zinc-400 w-6 h-w-6" />
          <span class="font-semibold text-zinc-400 text-lg leading-4 ml-2">
            로그인
          </span>
        </div>
      </a>
    );
  }

  const items: ProfileItem[] = [
    {
      icon: Person,
      href: `/user/${""}`,
      label: "내 프로필",
    },
    {
      icon: Logout,
      href: "/logout",
      label: "로그아웃",
    },
  ];

  return (
    <Popover>
      {({ open }) => (
        <>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel>
              <ul class="bg-zinc-950 border border-zinc-900 w-[231px] mb-1 p-2 transition-colors duration-300 ease-in-out shadow-md rounded-2xl">
                {items.map((item) => (
                  <li>
                    <a
                      href={item.href}
                      class="flex items-center h-[42px] bg-transparent hover:bg-zinc-900 border border-transparent hover:border-zinc-800 px-3 font-semibold rounded-xl cursor-pointer group transition-colors duration-300 ease-in-out"
                    >
                      <item.icon class="flex-shrink-0 w-[18px] h-[18px] ml-px fill-zinc-400" />
                      <span class="bg-transparent w-full ml-2 text-zinc-400 leading-4 focus:outline-none">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Transition>
          <Popover.Button class="flex items-center hover:bg-zinc-900 text-start border border-transparent hover:border-zinc-800 gap-x-2 transition-colors duration-300 ease-in-out rounded-xl px-3 py-2.5 w-full cursor-pointer focus:outline-none">
            <div class="flex items-center justify-center bg-zinc-950 w-10 h-10 rounded-full border border-zinc-800 transition-colors duration-300 ease-in-out overflow-clip">
              {
                /* {userInfo.value && (
              <img
                src={asset(userInfo.value.profileImage)}
                width="40"
                height="40"
              />
            )} */
              }
              <img
                src="https://playentry.org/img/DefaultCardUserThmb.svg"
                width="40"
                height="40"
              />
            </div>
            <div class="flex flex-col mt-1">
              <span class="text-zinc-100 text-lg font-medium leading-4 transition-colors duration-300 ease-in-out">
                {/* {userInfo.value?.nickname} */}
                wwww
              </span>
              <span class="text-zinc-400 text-[15px] leading-4 mt-px transition-colors duration-300 ease-in-out">
                {token.name}
              </span>
            </div>
          </Popover.Button>
        </>
      )}
    </Popover>
  );
}
