import Link from "next/link";
import Rectangle from "../components/Rectangle";

export default function page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Rectangle color="green" />
      <Link href="/gato" className="text-blue-500 hover:underline">
        Go to Gato
      </Link>
    </div>
  );
}