/*
 * Vue Slider
 */

const app = new Vue( {
    el: '#app',
    data: {
        slides: [
            {
                image: './img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        activeState: 0,
    },
    created: function () {
        console.log('created');
        let autoPlay = setInterval(this.activePlus, 3000);
    },
    methods: {
        prevPic() {
            this.activeState--;
            if (this.activeState < 0) {
                this.activeState = this.slides.length - 1;
            }
        },

        //////////////////

        nextPic() {
            this.activeState++;
            if (this.activeState > 4) {
                this.activeState = 0;
            }
        },

        ////////////////////

        setActive(index) {
            this.activeState = index;
        },

        //////////////////

        activePlus() {
            this.activeState++;
            if (this.activeState > 4) {
                this.activeState = 0;
            }
        },

        ////////////////////
    },
} );