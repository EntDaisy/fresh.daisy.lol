import { EvaIcon, EvaProps } from "../types.d.ts";

export const Menu2Outline: EvaIcon = (props: EvaProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? 24}
      height={props.size ?? 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ?? "currentColor"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...{ ...props, size: undefined, color: undefined }}
    >
      <g data-name="Layer 2">
        <g data-name="menu-2">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <circle cx="4" cy="12" r="1" />
          <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
          <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
          <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
        </g>
      </g>
    </svg>
  );
};
