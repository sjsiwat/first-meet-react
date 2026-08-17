export function Navbar() {
  return (
    <nav className="w-full bg-orange-300 px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="font-semibold text-lg">Learning guide</h2>

      <ul className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base">
        <li className="hover:text-orange-800 cursor-pointer">React</li>
        <li className="hover:text-orange-800 cursor-pointer">DOM</li>
        <li className="hover:text-orange-800 cursor-pointer">JavaScript</li>
        <li className="hover:text-orange-800 cursor-pointer">HTML / CSS</li>
      </ul>
    </nav>
  );
}
