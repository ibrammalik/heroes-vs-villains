import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';

class Connections extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set connectionsData(data) {
    this.connections = data;
    this.render();
  }

  render() {
    this.className = 'tab ';
    this.shadowDOM.innerHTML = `
      <style>
        /* connections */
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
      .connections li span:first-child{
          display: block;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--grey-color);
          position: relative;
          font-weight: 700;
          font-size: 2rem;
          letter-spacing: 2px;
          margin-top: 3.6rem;
      }
      .connections li span:last-child{
          letter-spacing: 1px;
          line-height: 1.9;
      }
      .icon {
          width: 1.7rem;
          color: var(--accent-color);
          display: inline-block;
          margin-right: 2rem;
      }
      </style>
      <p class="tab-title">connections</p>
      <hr>
      <ul class="tab connections">
        <li>
            <span><div class="icon">${icon(faCircleNodes).html[0]}</div>group--affiliation</span>
            <span>${this.connections['group-affiliation'] || this.connections.groupAffiliation}</span>
        </li>
        <li>
            <span><div class="icon">${icon(faCircleNodes).html[0]}</div>relatives</span>
            <span>${this.connections.relatives}</span>
        </li>
      </ul>
    `;
  }
}

customElements.define('connections-tab', Connections);
