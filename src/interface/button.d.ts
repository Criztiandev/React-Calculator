import { MouseEvent } from "react";
export interface ButtonDataProps {
  title: string;
  value?: number | string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
