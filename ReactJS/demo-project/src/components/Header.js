function Header() {
    return (
        <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  .BREEZED
                </a>
                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#projects">Projects</a></li>
                  <li className="submenu">
                    <a href="javascript:;">Drop Down</a>
                    <ul>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Features</a></li>
                      <li><a href="">FAQ's</a></li>
                      <li><a href="">Blog</a></li>
                    </ul>
                  </li>
                  <li className="scroll-to-section"><a href="#contact-us">Contact Us</a></li>
                  <div className="search-icon">
                    <a href="#search"><i className="fa fa-search"></i></a>
                  </div>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;