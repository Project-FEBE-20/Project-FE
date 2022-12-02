import PropsTypes from "prop-types";

function Search(props) {
  const { keyword, onSearch,onType } = props;


  return (
    <>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <p className="control has-icons-left">
              <input className="input is-warning" type="text" placeholder="Cari Artikel Disini" onChange={(e) => onType(e.target.value)} />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Search.propTypes = {
  keyword: PropsTypes.string.isRequired,
  onSearch: PropsTypes.func.isRequired,
};

export default Search;
