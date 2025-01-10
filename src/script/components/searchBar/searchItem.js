class SearchItem extends HTMLElement {
  set searchItemData(hero) {
    this.searchItem = hero;
    this.ID = hero.id;
    this.render();
  }

  render() {
    this.addEventListener('click', () => {
      window.location.href = `/details.html?id=${this.ID}`;
    });
    this.innerHTML = `
      <div class = "search-list-item">
          <p data-id = "${this.searchItem.id}">${this.searchItem.name} - ${this.searchItem.biography.publisher}</p>
      </div>
    `;
  }
}

customElements.define('search-item', SearchItem);
