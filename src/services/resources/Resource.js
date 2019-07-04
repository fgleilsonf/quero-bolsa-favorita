import * as constants from './../../util/constants';
import axios from "axios";

// const baseUrl = `${constants.Urls.BASE_URL}/api/redealumni`;
const baseUrl = 'https://api.myjson.com/bins/';
const HTTP = {
  OK: 200,
};

class Resource {

  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  getURL(path) {
    return `${baseUrl}/${path}`;
  }

  fetch(config) {
    return this.instance(config);
  }

  async get(path, params) {
    params = params || {};

    const response = await this.fetch({
      url: this.getURL(path),
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      data: params
    });

    return response;
  }
}

export default Resource;
