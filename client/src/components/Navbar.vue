<template>
    <v-app-bar
            v-if="isLoggedIn"
            app
            color="primary"
            dark
    >
        <div class="d-flex align-center">
            <v-img
                    alt="Flower Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/Flower.png"
                    transition="scale-transition"
                    width="40"
            />

            <h2>STUDIO</h2>
        </div>

        <v-spacer></v-spacer>

        <router-link to="/">
            <v-btn text>
                <span class="mr-2">Home</span>
                <v-icon>mdi-home-group</v-icon>
            </v-btn>
        </router-link>

        <router-link to="/addtimes">
            <v-btn text>
                <span class="mr-2">Add Times</span>
                <v-icon>mdi-home-group</v-icon>
            </v-btn>
        </router-link>

        <router-link to="/about">
            <v-btn text>
                <span class="mr-2">About</span>
                <v-icon>mdi-bullseye</v-icon>
            </v-btn>
        </router-link>

        <router-link v-if="!isLoggedIn" to="/login">
            <v-btn text>
                <span class="mr-2">Login</span>
                <v-icon>mdi-baguette</v-icon>
            </v-btn>
        </router-link>

        <router-link v-if="!isLoggedIn" to="/register">
            <v-btn text>
                <span class="mr-2">Register</span>
                <v-icon>mdi-baguette</v-icon>
            </v-btn>
        </router-link>

        <router-link v-if="isLoggedIn" to="/profile">
            <v-btn text>
                <span class="mr-2">Profile</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </router-link>

        <router-link v-if="isLoggedIn" to="/logout">
            <v-btn text @click.prevent="logoutUser">
                <span class="mr-2">Logout</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </router-link>

    </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["logout"]),
    logoutUser() {
      this.logout();
    }
  }
};
</script>

<style>
</style>
