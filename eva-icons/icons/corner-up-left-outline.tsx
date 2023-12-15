import { EvaIcon, EvaProps } from "../types.d.ts";

export const CornerUpLeftOutline: EvaIcon = (props: EvaProps) => {
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
        <g data-name="corner-up-left">
          <rect
            width="24"
            height="24"
            transform="rotate(90 12 12)"
            opacity="0"
          />
          <path d="M16 10H7.08l2.7-3.38a1 1 0 1 0-1.56-1.24l-4 5a1 1 0 0 0 0 1.24l4 5A1 1 0 0 0 9 17a1 1 0 0 0 .62-.22 1 1 0 0 0 .16-1.4L7.08 12H16a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a3 3 0 0 0-3-3z" />
        </g>
      </g>
    </svg>
  );
};
