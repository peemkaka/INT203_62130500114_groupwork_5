app.component('photo-item',{
    props:{
        photos: {
            type: Array,
            require: true
        }
    },
    template:
    /*html*/
    `
    <ul class="w-3/6 p-4 flex flex-col items-center mx-auto  ">
    <li v-for="(photo,index) in photos" v-show="photo.imgShow" class="flex justify-center m-10" >
      <button v-on:click="canvasClick(index)" class="focus:outline-none">
        <img class="h-46 w-80" :src="photo.url">
      </button>
      <span class="font-bold  mx-5 ">{{photo.title}}</span> 
      <span class="mt-5 ml-10"><i v-show="photo.done" class="im im-heart text-red-400"></i></span>
    </li>
    </ul>`,
    methods: {
        canvasClick(index){
            this.$emit('canvas-click',index)
        }
    } ,

})