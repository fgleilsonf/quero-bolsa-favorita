import BaseResource from './BaseResource.js';

class ScholarshipsResource extends BaseResource {

  async getScholarships() {
    // return await this.get(`scholarships/`);
    return await this.get(`1fpxez/`);
  }
}

export default new ScholarshipsResource;
