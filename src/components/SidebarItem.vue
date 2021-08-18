<template>
  <v-list-item
      link
      :to="href"
  >
    <v-list-item-icon>
      <v-icon
        large
      >{{ icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    title: String,
    icon: String,
    href: String,
  }
}
</script>

<style scoped>

</style>