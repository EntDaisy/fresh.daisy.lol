import { EvaIcon, EvaProps } from "../types.d.ts";

export const MinusCircleOutline: EvaIcon = (props: EvaProps) => {
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
        <g data-name="minus-circle">
          <rect width="24" height="24" opacity="0" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M15 11H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" />
        </g>
      </g>
    </svg>
  );
};
