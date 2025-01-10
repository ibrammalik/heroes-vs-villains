import { icon } from '@fortawesome/fontawesome-svg-core';
import { faKhanda } from '@fortawesome/free-solid-svg-icons';

class Powerstats extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set powerstatsData(data) {
    this.powerstats = data;
    this.render();
  }

  render() {
    this.className = 'tab ';
    this.shadowDOM.innerHTML = `
    <style>
        /* powerstats */
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
        .powerstats li{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
            margin: 1.2rem auto;
            padding: 1.2rem;
            -webkit-box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.5);
                    box-shadow: 0 5px 7px 0 rgba(0, 0, 0, 0.5);
        }
        .powerstats li div span{
            text-transform: uppercase;
            letter-spacing: 2px;
            border-radius: 7px;
            padding: 0 1.2rem;
            margin: 0 1.6rem;
            opacity: 0.6;
            font-size: 1.7rem;
        }
        .powerstats li > span{
            color: var(--yellow-color);
            font-weight: 700;
        }
        .icon {
            width: 1.7rem;
            color: var(--accent-color);
            display: inline-block;
        }
    </style>
      <p class="tab-title">powerstats</p>
      <hr>
      <ul class="tab powerstats">
        <li>
            <div>
                <div class="icon">${icon(faKhanda).html[0]}</div>
                <span>intelligence</span>
            </div>
            <span>${this.powerstats.intelligence}</span>
        </li>
        <li>
            <div>
                <div class="icon">${icon(faKhanda).html[0]}</div>
                <span>strength</span>
            </div>
            <span>${this.powerstats.strength}</span>
        </li>
        <li>
            <div>
                <div class="icon">${icon(faKhanda).html[0]}</div>
                <span>speed</span>
            </div>
            <span>${this.powerstats.speed}</span>
        </li>
        <li>
            <div>
                <div class="icon">${icon(faKhanda).html[0]}</div>
                <span>durability</span>
            </div>
            <span>${this.powerstats.durability}</span>
        </li>
        <li>
            <div>
                <div class="icon">${icon(faKhanda).html[0]}</div>
                <span>power</span>
            </div>
            <span>${this.powerstats.power}</span>
        </li>
        <li>
            <div>
                <div class="icon">${icon(faKhanda).html[0]}</div>
                <span>combat</span>
            </div>
            <span>${this.powerstats.combat}</span>
        </li>
      </ul>
    `;
  }
}

customElements.define('powerstats-tab', Powerstats);
