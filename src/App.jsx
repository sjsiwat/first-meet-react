import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-500">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}
