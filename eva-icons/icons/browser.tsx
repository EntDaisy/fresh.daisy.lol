import { EvaIcon, EvaProps } from "../types.d.ts";

export const Browser: EvaIcon = (props: EvaProps) => {
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
        <g data-name="browser">
          <rect width="24" height="24" opacity="0" />
          <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm-6 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm11 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7h14z" />
        </g>
      </g>
    </svg>
  );
};