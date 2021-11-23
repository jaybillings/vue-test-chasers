<template>
  <div class="data-container">
    <p class="align-left small-title">[<span class="underline">Advanced Options</span>]</p>
    <div id="records">
      <div class="metaData">
        <dl>
          <div class="dl-sub-item">
            <dt>Origin</dt>
            <dd>sender@harborview.org</dd>
          </div>

          <div class="dl-sub-item">
            <dt>Recipient</dt>
            <dd>aperson@desc.org</dd>
          </div>

          <div class="dl-sub-item">
            <dt>Received on</dt>
            <dd>Nov 22, 2021 1:29pm</dd>
          </div>
        </dl>
      </div>
      <DataRow v-for="(row, index) in data" :key="index" :title="row.title" :text="row.content"/>
    </div>
  </div>
</template>

<script>
import DataRow from './DataRow.vue'

export default {
  props: ["data"],
  components: {DataRow}
};
</script>

<style>
.data-container {
  max-width: 800px;
  margin: 2rem auto;
}

#records {
  padding: 1rem 2rem;
  background-color: rgb(123, 212, 212);
}
</style>