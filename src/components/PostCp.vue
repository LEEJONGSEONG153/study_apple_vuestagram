<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{backgroundImage:`url(${post.userImage})`}"></div>
      <span class="profile-name">{{post.name}}</span>
    </div>

    <div class="post-body" @click="$store.commit('사진클릭')" :class="post.filter" :style="{ backgroundImage : 'url('+post.postImage+')'}"></div>

    <div class="post-content">
      <p>{{$store.state.likes}} Likes</p>
      <p><strong>{{post.filter}}</strong>{{post.caption}}</p>
      <p class="date">{{post.date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postCp',
  props: {
    post: Object
  }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MTJfNjQg%2FMDAxNzE1NTE2NDMwNTkz.-JLf9NGdobdnCeIREZiakoF6RN8w0iOaAyiIH19yoQog.JjKl5ZNOM1AYZrF8cKxKcr4Npz9_lIH3mHCLfAlpFSIg.JPEG%2FKakaoTalk_20220922_192822019.jpg&type=sc960_832");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/people");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>