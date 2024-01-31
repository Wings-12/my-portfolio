export default function Navbar() {
  const links = [
    { href: "#top", label: "Top" },
    { href: "#about-site", label: "About this website" },
    { href: "#about-me", label: "About me" },
    { href: "#contact", label: "Contact" },
    { href: "#blog", label: "Blog" },
    /** TODO: Create a translation button for Japanese later **/
  ];

  return (
    <nav className="fixed top-0 right-0 z-50 flex h-12 w-full items-stretch justify-end bg-white px-5 shadow-md">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-700 hover:bg-blue-400 hover:text-white px-5 py-2 text-sm font-medium flex items-center transition duration-200 ease-in-out"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
