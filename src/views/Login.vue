<template>
  <div>
    texto texto texto texto
    <div v-if="isLoggedIn">
        <h3>Usuario: {{authUser.number}}</h3>
        <button type="button" @click="logout">Logout</button>
    </div>
    <div v-else>
        <form action class="form" @submit.prevent="login">
        <label class="form-label" for="#user.dni">DNI:</label>
        <input v-model="user.dni" placeholder="Dni" class="form-input" type="dni" id="dni" required>
        <label class="form-label" for="#user.password">Password:</label>
        <input v-model="user.password" placeholder="Password" type="password" autocomplete="on" class="form-input" id="password" required>
        <p v-if="error" class="error">Has introducido mal dni o la contraseña.</p>
        <input class="form-submit" type="submit" value="Login">
        </form>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  //import { mapActions, mapGetters } from './vuex'
  export default {
    name: 'LoginView',
    data: () => ({
      error:false,
      user: {
        dni: null,
        password: null
      }
    }),
    computed: {
      ...mapGetters({
        authUser: 'auth/user',
        isLoggedIn: 'auth/isLoggedIn'
      })
    },
    methods: {
      ...mapActions('auth',['loginUser','logoutUser']),

      async login() {
        await this.loginUser(this.user)
          .catch(() => {
              // Handle error
              this.error=true;
            }
          );
          //Cleaning
          this.user = {
                dni: null,
                password: null
              }
          if (this.isLoggedIn) {
              this.$router.push('/login')
          }
      },
      async logout() {
        await this.logoutUser().catch((err) => {
          console.log(err);
        });
        this.error=false;
        this.user = {
          dni: null,
          password: null
        }
        this.$router.push('/');
      },
    }
  }
  </script>


  <style>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition:0.2s;
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>
