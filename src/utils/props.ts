import React from "react";

export type HTMLButtonProps = React.HTMLProps<HTMLButtonElement>;

export interface IProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}
