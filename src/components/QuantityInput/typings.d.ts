export type IQuantityInput = {
  size?: "small" | "medium";
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
};
