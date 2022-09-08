import { ButtonHTMLAttributes, ReactNode } from "react";

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
