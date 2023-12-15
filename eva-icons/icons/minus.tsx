import { EvaIcon, EvaProps } from "../types.d.ts";

export const Minus: EvaIcon = (props: EvaProps) => {
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
        <g data-name="minus">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
        </g>
      </g>
    </svg>
  );
};
