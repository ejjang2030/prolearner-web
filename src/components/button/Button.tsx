import React, { type ComponentPropsWithRef } from 'react';

type ButtonElementProps = ComponentPropsWithRef<'button'>;

export interface ButtonProps
  extends ButtonElementProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

export default function Button({
  className,
  label,
  rightIcon,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={className}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}