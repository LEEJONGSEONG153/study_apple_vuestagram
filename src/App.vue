<template>
  <!-- <button @click="tabNo = 0">버튼0</button>
  <button @click="tabNo = 1">버튼1</button>
  <button @click="tabNo = 2">버튼2</button>

  <div v-if="tabNo == 0">내용0</div>
  <div v-else-if="tabNo == 1">내용1</div>
  <div v-else-if="tabNo == 2">내용2</div> -->

  <div class="header">
    <ul class="header-button-left">
        <li @click="step--;">Cancel</li>
    </ul>

    <ul class="header-button-right">
      <li v-if="step==1" @click="step++;">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>

    <img src="./assets/logo.png" class="logo">
  </div>

  <!-- <h4>안녕 {{$store.state.name}}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>
  <h4>몇살? {{$store.state.age}}</h4> -->
  <!-- <button @click="$store.commit('나이올림',10)">버튼2</button> -->
  <!-- <button @click="나이올림(10)">버튼2</button>

  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <p>{{now2}} {{카운터}}</p>
  <button @click="카운터++">버튼</button>

  <p>{{name}}</p>
  <p>{{age}}</p>
  <p>{{likes}}</p> -->

  <ContainerCp :postData="postData" :step="step" :url="url" :filter2="filter2" @textPush="cation = $event"/>
  <button @click="more">더보기</button>

  

  <div class="footer">
    <ul class="footer-buturl.ton-plus">
      <input @change="upload" type="file" id="file" class="inputfile">
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


</template>

<script>

import ContainerCp from './components/ContainerCp.vue'
import postData from './assets/postdata.js'
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      postData,
      addNo : 0,
      // tabNo : 0,
      step : 3,
      url : '',
      caption : '',
      filter2 : '',
      카운터 : 0
      
    }
  },
  mounted() {
    this.emitter.on('filterFire',(value)=>{
      this.filter2 = value
      
    })
  },
  //계산결과를 저장하는 함수?
  computed : {
    //{{name}}으로 바로 사용가능
    name() {
      return this.$store.state.name;
    },
    //위에 처럼 일일이 꺼내기 귀찮을떄
    ...mapState(['name','age','likes']),
    
    
    //처음에 한번 실행되고 값을 갖고있음
    now2(){
      return new Date();
    },
  },
  
  methods: {
    //mutation에있는 함수들 한번에 등록해서 사용가능 $store.commit('이름변경')
    ...mapMutations(['이름변경','나이올림']),
    //함수를 실행할때마다 실행
    now(){
      return new Date();
    },

    publish() {
    let myPost=
    {
      name: "Kimhyukmin",
      userImage: this.url,
      postImage: this.url,
      likes: 36,
      date: 'May 15',
      liked: false,
      caption: this.cation,
      filter: this.filter2
    }

    console.log(myPost)


      this.postData.unshift(myPost);
      this.step = 0;
    },
    more() {
      this.addNo++;
      if(this.addNo==2){
        this.addNo = 0;
      }
      axios.get(`https://codingapple1.github.io/vue/more${this.addNo}.json`)
      .then((data)=>{
        this.postData.push(data.data)
      }).catch((err)=>{
        console.log(err);
      });
    },
    upload(e) {
      let file = e.target.files
      this.url = URL.createObjectURL(file[0]);
      this.step++;
    },
    textPush($event) {

      //alert($event);
      this.catipon = $event;
    }
  },
  components: {
    ContainerCp: ContainerCp,
  }
}
</script>

<style>
  @import './style.css'
</style>
