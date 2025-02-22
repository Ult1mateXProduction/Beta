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
      <strong>Почта:</strong>
      {{content.email}}
    </p>
    <p>
      <strong>Имя:</strong>
      {{content.name}}
    </p>
    <p>
      <strong>Фамилия:</strong>
      {{content.last_name}}
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
          this.content = response.data;
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