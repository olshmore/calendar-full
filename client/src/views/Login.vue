<template>
  <div class="login-form">
    <div class="inputBox">
          <form autocomplete="off">
            <div class="form-group">
              <input
                placeholder="Username"
                v-model="username"
              >
            </div>
            <div class="form-group">
              <input
                placeholder="Password"
                v-model="password"
                autocomplete="new password"
              >
            </div>
            <div class="form-group">
            <a @click="loginUser"><span>Login</span></a>
            </div>
            <Errors v-if="error" :msg="error"/>
          </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import Errors from "@/components/Errors";

export default {
  components: {
    Errors
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/profile");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapGetters(["error"])
  }
};
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f2f3f7;

    font-family: 'Poppins', sans-serif;
  }
  .form-group {
    padding: 10px;
  }
  .inputBox input {
    width: 400px;
    height: 60px;
    border: none;
    color: #5a84a2;
    background: transparent;
    padding: 0 20px;
    font-size: 18px;
      letter-spacing: 1px;
    box-sizing: border-box;
    outline: none;
    border-radius: 8px;
      box-shadow:inset  -2px -2px 8px rgba(255,255,255,1),
      inset -2px -2px 12px rgba(255,255,255,0.5),
      inset 2px 2px 4px rgba(255,255,255,0.1),
      inset 2px 2px 8px rgba(0,0,0,0.15);
  }
  .inputBox input::selection {
      background-color: #fff;
  }

  .inputBox input::placeholder {
    color: #ccc;
  }
  a {
    display: inline-block;
    padding: 10px 30px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1px;
    color: #5a84a2;
    font-size: 18px;
    border-radius: 40px;
    box-shadow: -2px -2px 8px rgba(255,255,255,1),
    -2px -2px 12px rgba(255,255,255,0.5),
    inset 2px 2px 4px rgba(255,255,255,0.1),
    2px 2px 8px rgba(0,0,0,0.15);
    cursor: pointer;
  }

  a:hover {
    box-shadow:inset  -2px -2px 8px rgba(255,255,255,1),
    inset -2px -2px 12px rgba(255,255,255,0.5),
    inset 2px 2px 4px rgba(255,255,255,0.1),
    inset 2px 2px 8px rgba(0,0,0,0.15);
  }
  a:hover span {
    display: inline-block;
    transform: scale(0.98);
  }
</style>
