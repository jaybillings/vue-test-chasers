<template>
  <div class="data-row">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <ul v-if="links">
      <li v-for="(link, index) in links" :key="index">
        <a target="_top" :href="link" :title="link">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'links']
}
</script>

<style>
.data-row {
  background-color: rgba(255, 255, 255, 0.5);
  margin: 1rem;
  padding: 1rem;
  border: 1px solid white;
}
</style>