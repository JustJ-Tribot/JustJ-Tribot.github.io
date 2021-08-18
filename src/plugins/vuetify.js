import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#deaa20',
                secondary: '#1B658D',
                accent: '#2f746f',
                error: '#b71c1c',
            },
        },
    },
});
