import { icon } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

class Appearance extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set appearanceData(data) {
    this.appearance = data;
    this.render();
  }

  render() {
    this.className = 'tab ';
    this.shadowDOM.innerHTML = `
      <style>
        /* appearance */
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
        .appearance li{
            margin: 3.2rem 0;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
                -ms-flex-align: center;
                    align-items: center;
            -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                    justify-content: space-between;
        }
        .appearance li span:first-child i{
            color: var(--yellow-color);
            margin-right: 1.4rem;
        }
        .appearance li span:first-child{
            text-transform: capitalize;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-right: 4rem;
        }
        .appearance li span:last-child{
            font-weight: 600;
            text-transform: capitalize;
            background-color: var(--accent-color);
            border-radius: 2rem;
            padding: 0 1rem;
            text-align: right;
        }
        .icon {
            width: 1.7rem;
            color: var(--accent-color);
            display: inline-block;
        }
      </style>
      <p class="tab-title">appearance</p>
      <hr>
      <ul class="tab appearance">
        <li>
            <span>
                <div class="icon">${icon(faEye).html[0]}</div> gender
            </span>
            <span>${this.appearance.gender}</span>
        </li>
        <li>
            <span>
                <div class="icon">${icon(faEye).html[0]}</div> race
            </span>
            <span>${this.appearance.race}</span>
        </li>
        <li>
            <span>
                <div class="icon">${icon(faEye).html[0]}</div> height
            </span>
            <span>${this.appearance.height[0]}</span>
        </li>
        <li>
            <span>
                <div class="icon">${icon(faEye).html[0]}</div> weight
            </span>
            <span>${this.appearance.weight[0]}</span>
        </li>
        <li>
            <span>
                <div class="icon">${icon(faEye).html[0]}</div> eye-color
            </span>
            <span>${this.appearance['eye-color'] || this.appearance.eyeColor}</span>
        </li>
        <li>
            <span>
                <div class="icon">${icon(faEye).html[0]}</div> hair-color
            </span>
            <span>${this.appearance['hair-color'] || this.appearance.hairColor}</span>
        </li>
      </ul>
    `;
  }
}

customElements.define('appearance-tab', Appearance);
