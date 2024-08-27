import Link from "next/link";
import { usePathname } from "next/navigation";

interface Navlink {
  name: string;
  href: string;
}

export default function Navlink({ links }: { links: Navlink[] }) {
  const pathname = usePathname();
  return (
    <ul className="hidden xlr:flex  gap-[52px] items-start">
      {links.map((link) => (
        <li
          key={link.name}
          className={
            pathname === link.href
              ? "text-black font-medium"
              : "opacity-50 font-medium"
          }
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
