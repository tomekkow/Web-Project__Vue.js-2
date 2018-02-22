export default {
    props: {
        image: {
            type: String,
            required: false,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: false,
        },
        wider: {
            type: Boolean,
            default: false,
        },
        hide: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        hideClass() {
            return {
                'hide-image': this.hide,
            };
        },
        widerClass() {
            return {
                'wider-image': this.wider,
            };
        },
    },
};