import NavBar from "../NavBar";

export default function Layout({ title, children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />

      <main className="mb-auto">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="text-white text-sm">
            ©2022 par JF Paris. Créer avec{" "}
            <a href="https://nextjs.org/">Nextjs</a> /{" "}
            <a href="https://tailwindcss.com/">TailwindCSS</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
