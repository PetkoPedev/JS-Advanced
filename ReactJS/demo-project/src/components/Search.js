function Search() {
    return(
        <div id="search">
        <button type="button" className="close">×</button>
        <form id="contact" action="#" method="get">
          <fieldset>
            <input type="search" name="q" placeholder="SEARCH KEYWORD(s)" aria-label="Search through site content" />
          </fieldset>
          <fieldset>
            <button type="submit" className="main-button">Search</button>
          </fieldset>
        </form>
      </div>
    );
}

export default Search;