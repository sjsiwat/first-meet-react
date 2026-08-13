export function Navbar() {
  return (
    <nav className="w-full bg-orange-300 px-6 py-4 flex items-center justify-between">
      <h2 className="font-semibold text-lg">Learning guide</h2>

      <ul className="flex items-center gap-6">
        <li className="hover:text-orange-800 cursor-pointer">React</li>
        <li className="hover:text-orange-800 cursor-pointer">DOM</li>
        <li className="hover:text-orange-800 cursor-pointer">JavaScript</li>
        <li className="hover:text-orange-800 cursor-pointer">HTML &amp; CSS</li>
      </ul>
    </nav>
  );
}
