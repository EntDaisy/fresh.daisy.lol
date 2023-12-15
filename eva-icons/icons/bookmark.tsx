import { EvaIcon, EvaProps } from "../types.d.ts";

export const Bookmark: EvaIcon = (props: EvaProps) => {
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
        <g data-name="bookmark">
          <rect width="24" height="24" opacity="0" />
          <path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z" />
        </g>
      </g>
    </svg>
  );
};
