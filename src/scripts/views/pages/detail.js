/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import UrlParser from '../../routes/url-parser';
import RestoDbSources from '../../data/restodb-sources';
import { createRestoDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
            <section class="list-resto" id="listResto"></section>
            <div id="likeButtonContainer"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoDbSources.detailResto(url.id);
    const restoDetailContainer = document.querySelector('#listResto');
    restoDetailContainer.innerHTML = createRestoDetailTemplate(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default Detail;
