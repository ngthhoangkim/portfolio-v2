import Info from "../components/Info";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <aside className="lg:w-[28rem]">
          <Info />
        </aside>
        <main className="flex-1"></main>
      </div>
    </div>
  );
}
