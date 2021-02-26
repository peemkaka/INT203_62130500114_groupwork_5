app.component('photo-view',{
    props:{
        canvasShow:Boolean,
        canvasUrl:String
    },
    template:
    /*html*/
    `
    <div class="w-4/6 p-4 bg-gray-900 flex justify-around" v-show="canvasShow" >
      <img :src="canvasUrl" class="w-11/12 ">
      <button v-on:click="canvasDrop" class="h-1/4 focus:outline-none items-start ">
        <i class="im im-x-mark text-white"></i>
      </button>
    </div>
   
     `,
    data(){
        return{
            
        }
    },
    methods: {
        canvasDrop(){
            this.$emit('canvas-drop')
        }
    }
})