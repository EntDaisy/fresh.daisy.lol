import { EvaIcon, EvaProps } from "../types.d.ts";

export const People: EvaIcon = (props: EvaProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill={props.color ?? "currentColor"}
      stroke="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...{ ...props, size: undefined, color: undefined }}
    >
      <g data-name="Layer 2">
        <g data-name="people">
          <rect width="24" height="24" opacity="0" />
          <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
          <path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" />
          <path d="M21 20a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1" />
        </g>
      </g>
    </svg>
  );
};