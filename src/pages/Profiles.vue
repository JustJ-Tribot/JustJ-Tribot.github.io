<template>
  <v-card class="pa-3">
    <v-list
        subheader
        two-line>
      <v-list-item
          v-for="profile in profiles"
          :key="profile.lastModified"
      >
        <v-list-item-content>
          <v-list-item-title v-text="profile.name"></v-list-item-title>

          <v-list-item-subtitle v-text="profile.lastModified"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "Profiles",
  props: {
    profiles: Array,
  }
}
</script>

<style scoped>

</style>