/* eslint-disable no-empty-function *//* eslint-disable linebreak-style */
import RestoDbSources from '../../data/restodb-sources';
import { createHomePageTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
            <h2>Home Page</h2>
            <section class="list-resto" id="listResto"></section>
        `;
  },

  async afterRender() {
    const restaurants = await RestoDbSources.homePage();
    const listRestoContainer = document.querySelector('#listResto');
    restaurants.forEach((restaurant) => {
      listRestoContainer.innerHTML += createHomePageTemplate(restaurant);
    });
  },
};

export default Home;
