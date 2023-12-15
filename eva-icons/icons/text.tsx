import { EvaIcon, EvaProps } from "../types.d.ts";

export const Text: EvaIcon = (props: EvaProps) => {
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
        <g data-name="text">
          <rect width="24" height="24" opacity="0" />
          <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
        </g>
      </g>
    </svg>
  );
};
