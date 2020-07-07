<template>
  <div class="team">
    <h2 class="subheading grey--text">Team</h2>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(person,i) in team" :key="i">
          <v-card flat class="text-center ma-3">
            <v-img class="pt-4">
              <v-avatar size="100" class="grey">
                <img :src="person.avatar" alt="John" />
              </v-avatar>
            </v-img>

            <v-card-text>
              <div class="subheading" v-text="person.name"></div>
              <div class="grey--text" v-text="person.role"></div>
            </v-card-text>
            <v-card-actions class="d-flex justify-center align-center">
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        name: "Georges Guelton",
        role: "Web Developer",
        avatar: "/avatar/avatar.jpg"
      },
      {
        name: "Bianca",
        role: "Romancière",
        avatar: "/avatar/avatar.jpg"
      },
      {
        name: "Belore",
        role: "Maître Belore",
        avatar: "/avatar/avatar.jpg"
      },
      {
        name: "John Doe",
        role: "Dummy",
        avatar: "/avatar/avatar.jpg"
      },
      { name: "John Doe", role: "Dummy", avatar: "/avatar/avatar.jpg" }
    ]
  })
};
</script>