import { AnimatedButton } from "app/components";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto text-center space-y-4 text-white">
      <div>
        <h1 className="text-4xl font-bold">Animating buttons!</h1>
        <button className="text-red-500 bg-yellow-500 border-2 border-red-500 hover:transition-colors hover:bg-green-500 hover:border-yellow-500 hover:text-white">
          Hi{" "}
        </button>
      </div>

      <AnimatedButton text="Click me!" />
    </main>
  );
}
