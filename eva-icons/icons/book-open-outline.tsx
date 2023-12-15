import { EvaIcon, EvaProps } from "../types.d.ts";

export const BookOpenOutline: EvaIcon = (props: EvaProps) => {
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
        <g data-name="book-open">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77 4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78zM5 6.25l6 1.35v10.15L5 16.4zM19 16.4l-6 1.35V7.6l6-1.35z" />
        </g>
      </g>
    </svg>
  );
};
