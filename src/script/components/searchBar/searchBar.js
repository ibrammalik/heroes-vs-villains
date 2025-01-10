import './searchList';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import style from './style';

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set searchBarEvent(event) {
    this.eventHandler = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('.search-bar-input').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      ${style}
      <div class="search-bar">
        <input type="text" class="search-bar-input" placeholder="Search your hero or villain here ..." autocomplete="off">
        <button type="submit" class="search-bar-btn" title="search button">
          <div class="search-bar-btn">${icon(faSearch).html[0]}</div>
        </button>
        <search-list></search-list>
      </div>
        `;
    this.shadowDOM.querySelector('.search-bar-input').addEventListener('input', this.eventHandler);
    this.shadowDOM.querySelector('.search-bar-btn').addEventListener('click', this.eventHandler);
  }
}

customElements.define('search-bar', SearchBar);
