app.component('photo-search',{
    props:{
        searchBtn:Boolean,
        cancelBtn:Boolean,
        inputBtn:Boolean,
        canvasShow:Boolean
    },
    template:
    /*html*/
    `
    <div class="w-3/6 p-4 flex justify-end " v-show="!canvasShow">
    <button v-show="searchBtn" @click="searchClick"><i class="im im-magnifier"></i></button>
    <input  v-show="inputBtn"  type="text" v-model="inputTask" placeholder="Enter a new task ..." @keyup.enter="searchImg" class="p-2 bg-white rounded flex-1 border-b-2 border-blue-300 mr-4 mt-4">
    <button v-show="cancelBtn" @click="cancelClick" class="bg-blue-600 text-white rounded" ><p class="m-2">Cancel</p></button>
    </div>
     `,
    data(){
        return{
            inputTask : ''
        }
    },
    methods: {
        searchClick(){
            this.$emit('search-click')
        },
        cancelClick(){
            this.$emit('cancel-click')
        },
        searchImg(){
            this.$emit('search',this.inputTask)
        }
    }
})