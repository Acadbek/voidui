import clsx from "clsx";
import type { ButtonBorderVariant, ButtonProps, ButtonSizes, ButtonTypes } from "./types";

const button_variants: Record<ButtonTypes, string> = {
  link: 'bg-transparent text-[oklch(var(--link))] hover:underline underline-offset-4',
  ghost: 'bg-transparent text-[oklch(var(--neutral))] border border-[oklch(var(--border))] hover:bg-[oklch(var(--neutral)/0.05)]',
  danger: 'bg-[oklch(var(--danger))] text-[oklch(var(--on-danger))] hover:bg-[oklch(var(--danger)/0.9)]',
  success: 'bg-[oklch(var(--success))] text-[oklch(var(--on-success))] hover:bg-[oklch(var(--success)/0.9)]',
  primary: 'bg-[oklch(var(--primary))] text-[oklch(var(--on-primary))] hover:bg-[oklch(var(--primary)/0.9)]',
  secondary: 'bg-[oklch(var(--muted))] text-[oklch(var(--neutral))] hover:bg-[oklch(var(--muted)/0.9)]',
};

const button_sizes: Record<ButtonSizes, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const button_borders: Record<ButtonBorderVariant, string> = {
  zero: 'rounded-none',
  xs: 'rounded-xs',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
}

export default function Button(
  {
    variant = 'primary',
    type = 'button',
    size = 'md',
    children,
    border = 'sm',
    className,
    disabled,
    loading = false,
    ...props
  }: ButtonProps) {

  const Spinner = loading ? (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <path d="M22 12a10 10 0 0 1-10 10" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  ) : null;

  const classes = clsx(
    "inline-flex items-center justify-center gap-2",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[oklch(var(--primary)_/_0.4)]",
    "transition-colors duration-200",
    "disabled:opacity-50 disabled:pointer-events-none",
    button_variants[variant],
    button_sizes[size],
    button_borders[border],
    className
  );

  return <button type={type} disabled={disabled} className={classes} {...props}>
    {Spinner} <span>{children}</span>
  </button>
}