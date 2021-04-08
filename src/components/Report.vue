<template>
  <div>
    <template>
      <v-tabs :value="3" background-color="primary">
        <v-tab @click="$router.push({ name: 'Case' })">TestCases</v-tab>
        <v-tab @click="$router.push({ name: 'Task' })">Tasks</v-tab>
        <v-tab @click="$router.push({ name: 'Jenkins' })">Jenkins</v-tab>
        <v-tab @click="$router.push({ name: 'Report' })">Report</v-tab>
      </v-tabs>
    </template>
    Report
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>




<style scoped>
</style>