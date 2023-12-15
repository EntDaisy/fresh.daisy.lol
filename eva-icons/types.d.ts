import { JSX } from "preact";

export interface EvaProps extends JSX.SVGAttributes<SVGSVGElement> {
  color?: string;
  size?: number;
}

export type EvaIcon = (props: EvaProps) => JSX.Element;
