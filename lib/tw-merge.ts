import { JSX } from "preact";
import { twJoin, twMerge } from "tailwind-merge";

export function merge(
  ...classNames: (string | JSX.SignalLike<string | undefined> | undefined)[]
) {
  return twMerge(classNames.map((c) => c?.toString()));
}

export function join(
  ...classNames: (string | JSX.SignalLike<string | undefined> | undefined)[]
) {
  return twJoin(classNames.map((c) => c?.toString()));
}
