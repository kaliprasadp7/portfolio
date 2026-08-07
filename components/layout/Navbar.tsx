import Container from "../ui/Container";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tight">
              KP
            </a>
          </div>
          <nav className="flex gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
