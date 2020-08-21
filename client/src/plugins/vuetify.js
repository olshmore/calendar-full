import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import VueCleave from 'vue-cleave-component'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

Vue.use(VueCleave); // time format helper (hh:mm)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal, // #009688
                accent: colors.teal.lighten3, // #80CBC4
                error: colors.teal.darken4, // #004D40
                warning: colors.orange.darken4, // #E65100
                secondary: colors.grey.lighten1, // #9E9E9E
            },
        },
    },
  icons: {
    iconfont: 'mdiSvg',
  },
});

