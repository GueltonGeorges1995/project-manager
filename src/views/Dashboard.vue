<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-5">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn smal text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn smal text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>
      <v-card flat v-for="(project,i) in projects" :key="i">
        <v-row :class="`py-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div v-text="project.title"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div v-text="project.person"></div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div v-text="project.due"></div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="d-flex justify-center align-center">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
                v-text="project.status"
              ></v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: { ...mapGetters(["projects"]) },
  data: () => ({
    //
  }),
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style >
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background-color: #3cd1c2 !important;
}
.v-chip.ongoing {
  background-color: #ffaa2c !important;
}
.v-chip.overdue {
  background-color: #f83e70 !important;
}
</style>