import { EvaIcon, EvaProps } from "../types.d.ts";

export const Save: EvaIcon = (props: EvaProps) => {
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
        <g data-name="save">
          <rect width="24" height="24" opacity="0" />
          <rect x="10" y="17" width="4" height="4" />
          <path d="M20.12 8.71l-4.83-4.83A3 3 0 0 0 13.17 3H10v6h5a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1V3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h2a3 3 0 0 0 3-3v-7.17a3 3 0 0 0-.88-2.12z" />
        </g>
      </g>
    </svg>
  );
};
