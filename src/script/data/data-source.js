import axios from 'axios';

export default class DataSource {
  static async searchSuperHero(keyword) {
    try {
      const responseAllHero = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
      const response = 'success';
      const results = responseAllHero.data.filter((dt) => dt.name.toLowerCase().includes(keyword));
      const responseFiltered = { response, keyword, results };
      if (results.length === 0) {
        responseFiltered.response = 'error';
        responseFiltered.error = `${keyword} not found`;
      }
      return responseFiltered;
    } catch (error) {
      return error;
    }
  }

  static async getSuperHeroDetail(id) {
    try {
      const response = await axios.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
