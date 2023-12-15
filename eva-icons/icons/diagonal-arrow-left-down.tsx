import { EvaIcon, EvaProps } from "../types.d.ts";

export const DiagonalArrowLeftDown: EvaIcon = (props: EvaProps) => {
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
        <g data-name="diagonal-arrow-left-down">
          <rect width="24" height="24" opacity="0" />
          <path d="M17.71 6.29a1 1 0 0 0-1.42 0L8 14.59V9a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H9.41l8.3-8.29a1 1 0 0 0 0-1.42z" />
        </g>
      </g>
    </svg>
  );
};
