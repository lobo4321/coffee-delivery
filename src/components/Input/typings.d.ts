import { InputHTMLAttributes } from "react";

export type IInput = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};
