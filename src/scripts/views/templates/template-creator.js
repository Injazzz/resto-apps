/* eslint-disable no-sequences *//* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurants) => `
  <h2 class="resto__name">${restaurants.name}</h2>
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="resto__info">
      <h3>Information</h3>
      <h4>Rating</h4>
        <p>${restaurants.rating}</p>
      <h4>Location</h4>
        <p>${restaurants.city}, ${restaurants.adress}</p>
      <h4>Description</h4>
        <p>${restaurants.description}</p>
      <h4>Categories</h4>
        <ul>
          <li>${restaurants.categories.name}</li>
        </ul>
    </div>
  <div class="resto__menu">
    <h3>Menu</h3>
    <div class="container-menu">
      <div class="card-menu foods">
        <p>${restaurants.menus.foods.name}</p>
      </div>
      <div class="card-menu drinks">
        <p>${restaurants.menus.drinks.name}</p>
      </div>
    </div>  
  </div>
  <div class="resto__review">
    <h4>Customer Reviews</h4>
    <div class="card-review">
      <p>name: ${restaurants.customerReviews.name}</p>
      <p>review: ${restaurants.customerReviews.review}</p>
      <p>date: ${restaurants.customerReviews.date}</p>
    </div>
  </div>
`;

const createHomePageTemplate = (restaurants) => `
  <div class="card">
    <img class="resto-img" alt="${restaurants.name}"
      src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
    <div class="card-title>
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>⭐️${restaurants.rating}</p>
    </div>
    <div class="card-body">
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHomePageTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
