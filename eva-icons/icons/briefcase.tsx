import { EvaIcon, EvaProps } from "../types.d.ts";

export const Briefcase: EvaIcon = (props: EvaProps) => {
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
        <g data-name="briefcase">
          <rect width="24" height="24" opacity="0" />
          <path d="M7 21h10V7h-1V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H7zm3-15.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4z" />
          <path d="M19 7v14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3z" />
          <path d="M5 7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z" />
        </g>
      </g>
    </svg>
  );
};
