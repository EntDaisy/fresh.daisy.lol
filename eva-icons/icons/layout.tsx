import { EvaIcon, EvaProps } from "../types.d.ts";

export const Layout: EvaIcon = (props: EvaProps) => {
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
        <g data-name="layout">
          <rect width="24" height="24" opacity="0" />
          <path d="M21 8V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2z" />
          <path d="M3 10v8a3 3 0 0 0 3 3h5V10z" />
          <path d="M13 10v11h5a3 3 0 0 0 3-3v-8z" />
        </g>
      </g>
    </svg>
  );
};
