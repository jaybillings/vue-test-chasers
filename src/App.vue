<template>
<!--  <h1>CHASERS Vue Test</h1>-->

<!--  <ActionButton label="Download" />
  <ActionButton label="Save" />-->

  <DataContainer :data="records" />
</template>

<script>
import DataContainer from './components/DataContainer.vue'
//import ActionButton from './components/ActionButton.vue'

export default {
  name: 'App',
  components: {
    DataContainer//, ActionButton
  },
  data() {
    return {
      records: [
        {title: "Record Number One", content: "Lines unto felt native charms did den some me. A from she stalked for or, he and was revel dwell."},
        {title: "Record Number Two", content: "Harold childe he where present the childe childe. The like almost felt this feud companie, cheer formed to this worse."},
        {title: "Record Number Three", content: "The breast since childe wassailers me, mine satiety begun not venerable deemed earthly the to, save flatterers might him say."},
        {title: "Record Number Four", content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere."},
        {title: "Record Number Five", content: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,"}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2rem 2rem 1rem;
  font-size: 16px;
}
</style>
