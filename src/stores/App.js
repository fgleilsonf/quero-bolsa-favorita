import { extendObservable, action } from 'mobx';

import Config from '../../package.json'

class AppStore {

    constructor() {
        extendObservable(this, {
            version: Config.version,
            title: 'Quero Educação',

            setTitle: action(this.setTitle.bind(this)),
        });
    }

    setTitle(title) {
        this.title = title;
    }
}

export default new AppStore();
