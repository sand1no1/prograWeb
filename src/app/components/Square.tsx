interface RectangleProps {
    color: string;
  }
  
  const colors: Record<string, string> = {
    green: "bg-green-400",
    black: "bg-neutral-950",
    white: "bg-neutral-50",

  };
  
  export default function Rectangle({ color }: RectangleProps) {
    return <div className={`w-32 h-32 ${colors[color]}`}></div>;
  }
  