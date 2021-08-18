<template>
  <v-app id="inspire">
    <v-navigation-drawer
        permanent
        app
        class="pt-4"
        color="primary"
    >

      <v-avatar
          size="144"
          class="d-block text-center mx-auto mb-15">
        <img
            :src="require('@/assets/Alpaca-full.png')"
             alt="Logo">
      </v-avatar>

      <v-list nav>
        <SidebarItem title="Tempoross" icon="mdi-fish" href="tempoross-settings"/>
        <SidebarItem title="Profiles" icon="mdi-content-save" href="profiles"/>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
              color="secondary"
              block>
            Start
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view/>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarItem from "@/components/SidebarItem";
export default {
  components: {SidebarItem}

  //
}
</script>