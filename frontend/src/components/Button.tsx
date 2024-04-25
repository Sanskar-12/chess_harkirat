import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <div>{children}</div>;
};

export default Button;
