<template>
  <div style="padding:10px;">
    <h4>팔로워</h4>
    <input @input="inputt" v-model="search" placeholder=":돋보기">

    <div class="post-header" v-for="(item,i) in follower" :key="i">
      <div class="profile" :style="{backgroundImage : `url(${item.image})`}"></div>
      <span class="profile-name">{{item.name}}</span>
    </div>
    
  </div>
    
</template>

<script>
import {onMounted ,reactive,ref} from 'vue';
import axios from 'axios';
export default {
  name : 'myPage',
  setup() {
    //let {one} = toRef(props);
    //console.log(one.value);
    // console.log(two);
    
    let search = ref('');
    

    //데이터 바인딩을 위해서 ref함수를 적용 
    let follower = ref([]);

    //보통 object, array를 관습적으로 reacive()안에 넣고, ref 안에는 primitive한 걸 넣음 사실 둘다 넣어도 상관없음
    let test = reactive({name : 'kim'})

    onMounted(()=>{
      axios.get('./follower.json').then((a)=>{
        
        follower.value = a.data;

      })
      
    })

    function inputt() {
      
      axios.get('./follower.json').then((a)=>{
        
        let dd = [];

        if(search.value == ''){
          follower.value = a.data;
        } else {

          for(let i=0; i<a.data.length; i++){
            if(a.data[i].name.indexOf(search.value) != -1) {
              dd.push(a.data[i]);
            }
          }
          follower.value = dd;
        }
    })
  }

  return {follower , test, search,inputt};



  }

}

</script>

<style>

</style>