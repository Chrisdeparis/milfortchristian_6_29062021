
import { filterNav } from './modules/filterNav.js'
import { photographerPage } from './modules/photographerPage.js'
// import { router } from './modules/router.js'


filterNav();

//Router with hashchange event
class IndexView {
  constructor() {
    window.addEventListener("hashchange", (e) => this.onRouteChange(e));
    this.slot = document.querySelector("#slot");
  }
  onRouteChange(e) {
    const hashLocation = window.location.hash.substring(1);
    console.log(hashLocation);
    this.loadContent(hashLocation);
  }
  loadContent(uri) {
    const contentUri = `${uri}.html`;
    fetch(contentUri)
      .then((res) => res.text())
      .then((content) => this.updateSlot(content));
  }
  updateSlot(content) {
    this.slot.innerHTML = content;
  }
}

new IndexView();

