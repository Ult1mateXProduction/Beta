<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{content.name}}</strong>
      </h3>
    </header>
    <p>
      <strong>ID:</strong>
      {{content.id}}
    </p>
    <p>
      <strong>Имя_Пользователя:</strong>
      {{content.username}}
    </p>
  </div>
</template>

<script>
import AuthService from "@/services/auth.service";

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    AuthService.getUser().then(
        (response) => {
          this.content = response.data.usert;
        },
        (error) => {
          this.content =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();
        }
    );
  }
};
</script>