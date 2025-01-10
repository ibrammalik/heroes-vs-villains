import './searchItem';

class SearchList extends HTMLElement {
  connectedCallback() {
    this.setHeight();
    this.hideSearchList();
  }

  set searchListData(data) {
    this.searchList = data;
    this.render();
  }

  setHeight() {
    const domRect = this.getBoundingClientRect();
    const spaceBelow = window.innerHeight - domRect.bottom - 50;
    this.style.maxHeight = `${spaceBelow}px`;
  }

  hideSearchList() {
    window.addEventListener('click', (event) => {
      if (!event.target.hasAttribute('data-id')) this.innerHTML = '';
    });
  }

  render() {
    this.classList = 'search-list';
    this.innerHTML = '';
    this.searchList.forEach((searchItem) => {
      const searchItemElement = document.createElement('search-item');
      searchItemElement.searchItemData = searchItem;
      this.appendChild(searchItemElement);
    });
  }

  renderError(error) {
    this.innerHTML = `
      <div class = "search-list-item">
          <p>${error}</p>
      </div>
    `;
  }
}

customElements.define('search-list', SearchList);
