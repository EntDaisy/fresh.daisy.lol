import { EvaIcon, EvaProps } from "../types.d.ts";

export const Navigation2: EvaIcon = (props: EvaProps) => {
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
        <g data-name="navigation-2">
          <rect width="24" height="24" opacity="0" />
          <path d="M13.67 22h-.06a1 1 0 0 1-.92-.8l-1.54-7.57a1 1 0 0 0-.78-.78L2.8 11.31a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68z" />
        </g>
      </g>
    </svg>
  );
};
