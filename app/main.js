// Create a Data Object for the Vue Instance. The Data Object defines how data is passed into and returned from the Vue instance.
const upvoteApp = {
  data() {
    return {
      submissions: Seed.submissions
    }
  },
};


// Vue.createApp(): Create a Vue instance.
// Vue.createApp(upvoteApp): The argument u[pvoteApp specifies the Data Object to use when creating the Vue app.
// Vue.createApp(upvoteApp).mount("#app"): Specifies the mounting point of the Vue app (an ID referecing an element in index.html, in this case).
Vue.createApp(upvoteApp).mount("#app");
