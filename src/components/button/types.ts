import type { constants } from "./constants";

export type ButtonTypes =
  (typeof constants.button_types)[keyof typeof constants.button_types];
export type ButtonSizes =
  (typeof constants.button_sizes)[keyof typeof constants.button_sizes];
export type ButtonHtmlType =
  (typeof constants.button_html_types)[keyof typeof constants.button_html_types];
export type ButtonBorderVariant =
  (typeof constants.button_borders)[keyof typeof constants.button_borders];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
  type?: ButtonHtmlType;
  border?: ButtonBorderVariant;
  variant?: ButtonTypes;
  loading?: boolean,
  children: React.ReactNode;
  className?: string;
}
