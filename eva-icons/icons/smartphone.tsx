import { EvaIcon, EvaProps } from "../types.d.ts";

export const Smartphone: EvaIcon = (props: EvaProps) => {
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
        <g data-name="smartphone">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />
          <path d="M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-5 16a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 18zm2.5-10h-5a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2z" />
        </g>
      </g>
    </svg>
  );
};
