import DataSource from '../data/data-source';

const attachSearchHandler = () => {
  const searchBar = document.querySelector('search-bar');

  const searchHandler = async () => {
    const searchList = searchBar.shadowDOM.querySelector('search-list');
    const keyword = searchBar.value.toLowerCase();
    try {
      const allHero = await DataSource.searchSuperHero(keyword);
      if (allHero.response === 'success') {
        searchList.searchListData = allHero.results;
      } else if (allHero.response === 'error') {
        searchList.renderError(allHero.error);
      }
    } catch (error) {
      searchList.renderError(error);
    }
  };

  searchBar.searchBarEvent = searchHandler;
};

export default attachSearchHandler;
