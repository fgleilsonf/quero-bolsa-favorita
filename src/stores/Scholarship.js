import { extendObservable } from 'mobx';
import ScholarshipsResource from "../services/resources/ScholarshipsResource";
import _ from "lodash";

class ScholarshipStore {

    constructor() {
        extendObservable(this, {
            scholarships: [],
            loading: false,
            error: false,
            is_fetched: false,
            favorites: []
        });
    }

    fetch = async () => {
        this.error = false;
        this.loading = true;
        this.is_fetched = false;

        try {
            const response = await ScholarshipsResource.getScholarships();
            this.scholarships = response.data;
            this.is_fetched = true;

            console.log('fetch this.scholarships', this.scholarships);
        } catch (e) {
            this.error = true;
        } finally {
            this.loading = false;
        }
    };

    add(favorites) {
        this.favorites = this.favorites.concat(favorites);
    }

    getFilterFavorites(value) {
        let items = this.favorites;
        if (value) {
            items = _.filter(this.favorites, {enrollment_semester: value});
        }

        return items;
    }
}

export default new ScholarshipStore();
