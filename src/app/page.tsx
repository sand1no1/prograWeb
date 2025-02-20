import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Rectangle color="green" />
      <Link href="/page2" className="text-blue-500 hover:underline">
        Go to page 2
      </Link>
    </div>
  );
}
