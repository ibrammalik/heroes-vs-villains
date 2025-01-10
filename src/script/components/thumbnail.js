class Thumbnail extends HTMLElement {
  connectedCallback() {
    this.renderSkeleton();
  }

  set src(src) {
    this.imgSrc = src;
    this.render();
  }

  renderSkeleton() {
    this.innerHTML = '<div class="skeleton-thumbnail"></div>';
  }

  render() {
    this.style.margin = '2rem auto';
    const imgPlaceHolder = new Image();
    imgPlaceHolder.onload = () => {
      this.innerHTML = `<img class="app-body-content-thumbnail" fetchpriority="high" width="100%" src = "${imgPlaceHolder.src}" alt="${imgPlaceHolder.src.split('/').pop()}">`;
    };
    imgPlaceHolder.src = this.imgSrc;
  }
}

customElements.define('thumbnail-hero', Thumbnail);
