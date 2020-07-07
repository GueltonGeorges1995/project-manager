<template>
  <nav>
    <v-app-bar flat>
      <v-app-bar-nav-icon @click="draw=!draw" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Projects</span>
        <span>Manager</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="grey" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer absolute temporary v-model="draw" class="primary">
      <v-row>
        <v-col class="mt-5">
          <div class="d-flex justify-center align-center">
            <v-avatar size="100">
              <v-img src="../../public/avatar/avatar.jpg" />
            </v-avatar>
          </div>
          <div class="d-flex justify-center align-center">
            <p class="white--text subheading mt-1">Georges Guelton</p>
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-center mt-4 mb-3">
            <Popup />
        </v-col>
      </v-row>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text" v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: {
    Popup
  },
  data: () => ({
    draw: false,
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "folder", text: "My Projects", route: "/projects" },
      { icon: "person", text: "Team", route: "/team" }
    ]
  })
};
</script>