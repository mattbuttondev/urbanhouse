import Link from "next/link";
import { Menu, User } from "../icons";
import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <header className="border-b border-accent-200 bg-white py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/">
            <h1 className="text-xl font-bold">UrbanHouse</h1>
          </Link>
          <nav className="hidden sm:flex">
            <ul className="flex gap-8">
              <NavLink href="/rooms">Rooms</NavLink>
              <NavLink href="/agents">Agents</NavLink>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <User />
          </Link>
          <Menu className="sm:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
