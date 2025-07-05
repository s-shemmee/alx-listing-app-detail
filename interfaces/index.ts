export interface CardProps {
  title: string;
  imageSrc: string;
  price: number;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}
