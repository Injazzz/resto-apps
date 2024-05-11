/* eslint-disable linebreak-style */
import API_ENDPOINTS from '../../scripts/globals/api-endpoints';

class RestoDbSources {
  static async homePage() {
    const response = await fetch(API_ENDPOINTS.HOME);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    return response.json();
  }
}

export default RestoDbSources;
