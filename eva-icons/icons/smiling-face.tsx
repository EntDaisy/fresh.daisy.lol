import { EvaIcon, EvaProps } from "../types.d.ts";

export const SmilingFace: EvaIcon = (props: EvaProps) => {
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
      <defs>
        <style />
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="smiling-face">
          <g id="smiling-face" data-name="smiling-face">
            <rect width="24" height="24" opacity="0" />
            <path
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm5 9a5 5 0 0 1-10 0z"
              id="&#x1F3A8;-Icon-&#x421;olor"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
