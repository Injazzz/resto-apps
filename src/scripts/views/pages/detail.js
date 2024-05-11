/* eslint-disable no-empty-function *//* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestoDbSources from '../../../public/data/restodb-sources';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <section class="list-resto" id="listResto"></section>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDbSources.detailResto(url.id);
    const restoDetailContainer = document.querySelector('.list-resto');
    restoDetailContainer.innerHTML = createRestoDetailTemplate(restaurant);
  },
};

export default Detail;
