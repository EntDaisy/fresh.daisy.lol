import { EvaIcon, EvaProps } from "../types.d.ts";

export const Monitor: EvaIcon = (props: EvaProps) => {
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
        <g data-name="monitor">
          <rect width="24" height="24" opacity="0" />
          <path d="M19 3H5a3 3 0 0 0-3 3v5h20V6a3 3 0 0 0-3-3z" />
          <path d="M2 14a3 3 0 0 0 3 3h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a3 3 0 0 0 3-3v-1H2z" />
        </g>
      </g>
    </svg>
  );
};
