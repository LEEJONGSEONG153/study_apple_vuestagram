<template>
  <div @click="fire" class="filter-item" :class="filter" :style="`background-image : url(${url})`">
    <slot name="a"></slot>
    <!-- <button >버튼</button> -->
  </div>
</template>

<script>
export default {
  name : 'filterBoxCp',
  props : {
    url : String,
    filter : String
  },
  methods : {
    fire() {
      this.emitter.emit('filterFire',this.filter);
    }
  }
}
</script>

<style>
.filter-item {
width: 100px;
height: 100px;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : #ccc;
background-size: cover;
background-position : center;
}
</style>