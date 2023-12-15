import { EvaIcon, EvaProps } from "../types.d.ts";

export const Navigation2Outline: EvaIcon = (props: EvaProps) => {
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
        <g data-name="navigation-2">
          <rect width="24" height="24" opacity="0" />
          <path d="M13.67 22h-.06a1 1 0 0 1-.92-.8L11 13l-8.2-1.69a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68zm-6.8-11.9l5.19 1.06a1 1 0 0 1 .79.78l1.05 5.19 3.52-10.55z" />
        </g>
      </g>
    </svg>
  );
};
