<template>
  <div>
    <div v-if="step==0">
      <PostCp v-for="(item,i) in postData" :key="i" :post="item"/>
    </div>

    
    <div v-if="step==1">
      <div class="upload-image" :class="filter2" :style="`background-image : url(${url})`"></div>
      <div class="filters">
        <FilterBoxCp :url="url" :filter="filters[i]"  v-for="(item,i) in filters" :key="i" >
          
          <template  v-slot:a>{{filters[i]}}</template>

        </FilterBoxCp>
      </div>
    </div>



    <div v-if="step==2">
      <div class="upload-image" :class="filter2"  :style="{backgroundImage : `url(${url})`}"></div>
      <div class="write">
        <textarea @input="$emit('textPush',texts)" v-model="texts" class="write-box">write!</textarea>
      </div>
    </div>


    <div v-if="step==3">
      <MyPageCp :one="1" :two="2"/>
    </div>
  </div>
</template>

<script>
import PostCp from './PostCp.vue'
import FilterBoxCp from './FilterBoxCp.vue'
import MyPageCp from './MyPageCp.vue'

export default { 
  name : 'ContainerCp',
  data() {
    return{
      texts : '',
      filters : 
                [
                  "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                  "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                  "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
                ]
    }
  },
  components : {
    PostCp,
    FilterBoxCp,
    MyPageCp,
  },
  props: {
    postData : Array,
    step : Number,
    url : String,
    filter2 : String
  }
}
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>