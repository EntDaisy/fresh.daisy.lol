import { EvaIcon, EvaProps } from "../types.d.ts";

export const Menu: EvaIcon = (props: EvaProps) => {
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
        <g data-name="menu">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
          <rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
        </g>
      </g>
    </svg>
  );
};
