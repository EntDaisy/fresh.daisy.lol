import { EvaIcon, EvaProps } from "../types.d.ts";

export const PieChartOutline: EvaIcon = (props: EvaProps) => {
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
        <g data-name="pie-chart">
          <rect width="24" height="24" opacity="0" />
          <path d="M13 2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 9 9 0 0 0-9-9zm1 8V4.07A7 7 0 0 1 19.93 10z" />
          <path d="M20.82 14.06a1 1 0 0 0-1.28.61A8 8 0 1 1 9.33 4.46a1 1 0 0 0-.66-1.89 10 10 0 1 0 12.76 12.76 1 1 0 0 0-.61-1.27z" />
        </g>
      </g>
    </svg>
  );
};
