const app = {
    data() {
        return {
            photos: [{url:'images/g1.jpg', title: 'Geysers valley, Russia',done: false},
                     {url:'images/g2.jpg',title: 'Khumbu Valley, Nepal', done: false},
                     {url:'images/g3.jpg',title: 'Waipio Valley , Hawaii', done: false}
                ]
        }
    },
    methods: {
        toggleDone(index){
            this.photos[index].done = !this.photos[index].done
        }
    }
    ,
     computed: {
        totalGallery(){
            return this.photos.length
        }
    }
}
Vue.createApp(app).mount('#app')