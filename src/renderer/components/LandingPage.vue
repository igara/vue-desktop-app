<template>
  <div>
    <audio v-bind:src="mp3Src" autoplay loop></audio>
  </div>
</template>

<script>
  export default {
    data () {
      // notice the url starts with `static/`
      return { mp3Src: 'static/sound.mp3' }
    },
    mounted () {
      const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))
      const $body = document.getElementsByTagName('body')[0]
      const dancing = async () => {
        while (true) {
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
          $body.className = 'l-body'
          await sleep(600)
          $body.className = 'r-body'
          await sleep(600)
        }
      }
      dancing()
    }
  }
</script>

<style>
  html {
    height: 100%;
    width: 100%
  }
  body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    background-image: url("~@/assets/sample-l.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -moz-background-size:auto 100%;
    background-size:auto 100%;
  }
  .l-body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    background-image: url("~@/assets/sample-l.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -moz-background-size:auto 100%;
    background-size:auto 100%;
  }
  .r-body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    background-image: url("~@/assets/sample-r.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -moz-background-size:auto 100%;
    background-size:auto 100%;
  }
</style>
