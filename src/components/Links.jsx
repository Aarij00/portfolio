const Links = () => {
  return (
    <>
      {/* Desktop Links */}
      <nav className="fixed left-0 bottom-10 p-8 z-50 hidden md:block">
        <div className="flex flex-col items-start space-y-4 text-2xl leading-10 text-lightGrey">
          <a
            href="https://github.com/Aarij00"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cursor-pointer hover:text-cyan transition-colors">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arij-ashar/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cursor-pointer hover:text-cyan transition-colors">
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/aarijashar/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link cursor-pointer hover:text-cyan transition-colors">
            Instagram
          </a>
        </div>
      </nav>

      {/* Mobile Links */}
      <nav className="fixed top-0 left-0 right-0 bg-night-dark p-4 md:hidden z-50 border-b border-cyan/20">
        <div className="flex justify-around text-lg text-lightGrey">
          <a href="https://github.com/Aarij00" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/arij-ashar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/aarijashar/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </nav>
    </>
  );
};

export default Links;
