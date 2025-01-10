import '../components/searchBar/searchBar';
import '../components/powerstats';
import '../components/biography';
import '../components/appearance';
import '../components/connections';
import '../components/thumbnail';
import '../components/title';
import DataSource from '../data/data-source';
import attachSearchHandler from '../utils/search';

const main = () => {
  const changeActiveTab = (activeTabIndex) => {
    const allTabsHead = document.querySelectorAll('.tab-nav-link');
    const allTabsBody = document.querySelectorAll('.tab');
    // remove class active-tab from all tabs head / matiin (hilangin garis merah) semua tab head
    allTabsHead.forEach((singleTabHead) => singleTabHead.classList.remove('active-tab'));
    // add class active-tab to selected tab head / aktivin (muncul garis merah) tab head yg dipilih
    allTabsHead[activeTabIndex].classList.add('active-tab');
    // remove class show-tab from all tabs body / hilangin (display: none) semua tab body
    allTabsBody.forEach((singleTabBody) => singleTabBody.classList.remove('show-tab'));
    // add class active-tab to selected tab body / munculin (display: block) tab body yg dipilih
    allTabsBody[activeTabIndex].classList.add('show-tab');
  };

  // button event listeners
  document.querySelectorAll('.tab-nav-link').forEach((singleTabHead) => {
    singleTabHead.addEventListener('click', () => {
      const activeTab = singleTabHead.dataset.id;
      changeActiveTab(activeTab);
    });
  });

  const showSuperheroDetails = (hero) => {
    // hero details tab
    const heroName = document.querySelector('.name');
    const heroPicture = document.querySelector('thumbnail-hero');
    const powerstatsTab = document.querySelector('powerstats-tab');
    const biographyTab = document.querySelector('biography-tab');
    const appearanceTab = document.querySelector('appearance-tab');
    const connectionsTab = document.querySelector('connections-tab');
    heroName.textContent = hero.name;
    heroPicture.src = hero.images.lg;
    powerstatsTab.powerstatsData = hero.powerstats;
    biographyTab.biographyData = hero.biography;
    appearanceTab.appearanceData = hero.appearance;
    connectionsTab.connectionsData = hero.connections;
    changeActiveTab(0);
  };

  window.addEventListener('DOMContentLoaded', async () => {
    const id = new URLSearchParams(window.location.search).get('id'); // id from url parameter
    const data = await DataSource.getSuperHeroDetail(id);
    showSuperheroDetails(data);
  });

  attachSearchHandler();
};

export default main;
