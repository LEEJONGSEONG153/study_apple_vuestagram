import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  //컴포넌트들에서 공유할 데이터
  state() {
    return {
      name : 'kim',
      age : 2,
      likes : 30,
      isLikes : false,
      more : {},
    }
  },
  //데이터 수정하는법
  mutations :{
    이름변경(state) {
      state.name = 'park'
    },
    나이올림(state,payload){
      state.age += payload
    },
    사진클릭(state){
      if(state.isLikes) {
        state.likes--;
        state.isLikes = false;
      }else {
        state.likes++;
        state.isLikes = true;
      }
    },
    setMore(state,payload) {
      state.more = payload;
    }
  },
  //모든 ajax요청은 여기다<- 여기서도 state를 변경할때는 mutation사용
  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        context.commit('setMore',a.data);
      })
    },
  }


})

export default store;