<template>

  <v-card class="pa-3">
    <v-card-text>
      <div class="text-overline mb-4">
        Tasks
      </div>
      <v-form>
        <v-checkbox
            v-model="cook"
            label="Cook harpoonfish"/>
        <v-checkbox
            v-model="repair"
            label="Repair Totems/Masts"/>
        <v-checkbox
            v-model="putOutFire"
            label="Put out fires"/>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cook: true,
      repair: true,
      putOutFire: true,
      bucketsToCarry: 2,
    };
  },
}
</script>

<style scoped>

</style>