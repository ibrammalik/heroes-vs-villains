class Biography extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set biographyData(data) {
    this.biography = data;
    this.render();
  }

  render() {
    this.className = 'tab ';
    this.shadowDOM.innerHTML = `
    <style>
      /* biography */
      ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
      }
      .tab-title{
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 500;
            font-size: 1.9rem;
            color: var(--light-color);
      }
      .biography li{
          margin: 3.4rem 0;
      }
      .biography li span{
          text-transform: capitalize;
          font-weight: 600;
          font-size: 1.9rem;
      }
      .biography li span:first-child{
          font-weight: 600;
          color: var(--grey-color);
          margin-right: 1rem;
      }
      .biography li span:last-child{
          font-weight: 300;
      }
    </style>
      <p class="tab-title">biography</p>
      <hr>
      <ul class="tab biography">
        <li>
            <span>full name</span>
            <span>${this.biography['full-name'] || this.biography.fullName}</span>
        </li>
        <li>
            <span>alter-egos</span>
            <span>${this.biography['alter-egos'] || this.biography.alterEgos}</span>
        </li>
        <li>
            <span>aliases</span>
            <span>${this.biography.aliases}</span>
        </li>
        <li>
            <span>place-of-birth</span>
            <span>${this.biography['place-of-birth'] || this.biography.placeOfBirth}</span>
        </li>
        <li>
            <span>first-apperance</span>
            <span>${this.biography['first-appearance'] || this.biography.firstAppearance}</span>
        </li>
        <li>
            <span>publisher</span>
            <span>${this.biography.publisher}</span>
        </li>
      </ul>
    `;
  }
}

customElements.define('biography-tab', Biography);
