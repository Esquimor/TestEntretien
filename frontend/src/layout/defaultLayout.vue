<template>
    <div id="container">
        <app-header class="header"/>
        <div class="bord bord1"></div>
        <div class="main"><slot/></div>
        <div class="bord bord2"></div>
    </div>
</template>

<script>
import TheHeader from '@/components/static/TheHeader'

export default {
  components: {
    'app-header': TheHeader
  }
}
</script>

<style scoped>
div#container{
    display:grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 3rem 100%;
    grid-template-areas:
        'header header header'
        'bord1 main bord2';
}

.header {
  grid-area: header;
  background-color: #01579b;
}

.bord1 {
  grid-area: bord1;
}

.bord2 {
  grid-area: bord2;
}

.main {
  grid-area: main;
  margin-top: 50px;
}
</style>
