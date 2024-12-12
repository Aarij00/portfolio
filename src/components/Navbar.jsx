
const Navbar = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-0 bottom-10 p-8 z-50 hidden md:block">
        <div className="flex flex-col items-start space-y-4 text-2xl leading-10 text-cyan">
          <a href="#home" className="nav-link cursor-pointer hover:text-cyan-light transition-colors">cd home/</a>
          <a href="#projects" className="nav-link cursor-pointer hover:text-cyan-light transition-colors">cd projects/</a>
          <a href="#contact" className="nav-link cursor-pointer hover:text-cyan-light transition-colors">cd contact/</a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-night-dark p-4 md:hidden z-50 border-t border-cyan/20">
        <div className="flex justify-around text-lg text-cyan">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
