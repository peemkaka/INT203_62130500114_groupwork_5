const app = Vue.createApp({
    data() {
        return {
            photos: [{url:'images/g1.jpg', title: 'Geysers valley, Russia',done: false  ,imgShow:true },
                     {url:'images/g2.jpg',title: 'Khumbu Valley, Nepal',    done: false    ,imgShow:true },
                     {url:'images/g3.jpg',title: 'Waipio Valley , Hawaii', done: false  ,imgShow:true}
                ] ,
                canvasUrl:'',
                canvasShow:false,
                searchBtn:true,
                cancelBtn:false,
                inputBtn:false,
                cancelImg:false,
                inputTask:''
        }
    },
    methods: {
        toggleDone(index){
            this.photos[index].done = !this.photos[index].done
        },
        searchClick(){
            this.searchBtn = false;
            this.cancelBtn = true;
            this.inputBtn = true;
        },
        cancelClick(){
            this.searchBtn = true;
            this.cancelBtn = false;
            this.inputBtn = false;
            for(let i=0;i<this.photos.length;i++){
                this.photos[i].imgShow = true;
            }
            
        },
        searchImg(inputTask){
            if (inputTask) {
                for (let i = 0; i < this.photos.length; i++) {
                    if (this.photos[i].title.toLowerCase().includes(inputTask.toLowerCase())) {
                        this.photos[i].imgShow = true;
                    }
                    else {
                        this.photos[i].imgShow = false;
                    }
                }
            }
        },
        canvasClick(index){
            this.canvasUrl = this.photos[index].url;
            this.canvasShow = true;
            this.photos[index].done = !this.photos[index].done;
        },
        canvasDrop(){
            this.canvasShow = false;
        }
    }
    ,
     computed: {
        totalGallery(){
            return this.photos.length
        },
        checkItems(){
            let count = 0;
            for(let i = 0; i< this.photos.length;i++){
                if(this.photos[i].imgShow == true) count++;
            }
            if(count == 0) return "No photo.";
        }
        
    }

})
