class Title extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
      <style>
        .app-header-title {
            color: var(--light-color);
        }
        .app-header-title span{
            color: var(--accent-color);
        }
      </style>
      <a href="/">
        <h2 class="app-header-title">Hero <span>vs</span> Villain</h2>
      </a>
    `;
  }
}

customElements.define('app-title', Title);
