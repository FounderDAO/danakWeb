<template>
<div>
  <Sidebar v-if="sidebar" @close="sidebar = false"/>
  <nav class="navbar sticky">
    {{scrolling}}
      <div class="container navbar__container">
        <div class="content">
              <!-- <a @click="sidebar = true" class="border-0" v-if="!sidebar">
                  <img src="@/assets/icons/menu.svg" alt="">
              </a> 
              <a v-if="sidebar" @click="sidebar = false">
                <img src="@/assets/icons/x.svg" alt="">
              </a> -->
              <button @click="toggleMenu()" class="hamburger">
                <span class="hamburger-line hamburger-line-1"></span>
                <span class="hamburger-line hamburger-line-2"></span>
                <span class="hamburger-line hamburger-line-3"></span>
              </button>
              <router-link to="/home" class="link_for_image">
                <img 
                    src="@/assets/images/danak.png" 
                    alt="" width="50">
              </router-link>
              <router-link to="/home" style="text-decoration:none;" class="link_for_danak">
                  <h1 class="c-black">Danak</h1>
              </router-link>
        </div>
          <div class="btns d-flex align-items-center"> 
              <router-link 
                          to="/about" 
                          class="login"
                          class-active="active"
                          >
                          {{ $t("about") }}
              </router-link>
              <template v-if="!isUserAuthenticated">
                <router-link to="/login" class="login">{{ $t("kirish")}}</router-link>
                <div class="p-2">
                  <router-link to="/register" class="btn btn-outline-success " >{{ $t("royxatdan_otish")}}</router-link>
                </div>
              </template>
              <template v-else>
                <button
                  @click="logout"
                  class="btn btn-outline-danger">
                  {{ $t("close") }}
                </button>
              </template>
              <LanguageDropdown />
               <!-- bitta button qo'shildi -->
               <template v-if="isUserAuthenticated">
                  <div class="profile_button">
                    <a @click="profile" class="p-1">
                      <img src="@/assets/icons/user.svg" alt="">
                    </a>
                    <Profile v-if="profileModal" @close="profileModal = false"/>
                  </div>
               </template>
          </div>
      </div>
    </nav>
</div>
</template>

<script>
import LanguageDropdown from './LanguageComponents.vue'
import Sidebar from './SidebarComponents.vue'
import Profile from './ProfileComponent.vue'
export default {
  name: 'Header',
  data() {
    return {
      sidebar: false,
      profileModal: false
    }
  },
  
  components: {
    LanguageDropdown,
    Sidebar,
    Profile
  },
  computed:{
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems(){
      return this.isUserAuthenticated 
      ? [
        {title: 'Profile', path: '/profile' }, 
        {title: 'Logout', path: '/logout'},

        ]
        : [
          {title: 'Login', path: '/login'},
          {title: 'Register', path: '/register'}
        ]
    },
    scrolling(){ 
      window.addEventListener('scroll', function(){
        const header = document.querySelector('.navbar');
        header.classList.toggle("sticky", window.scrollY > 0);
      });
    }
  },
  methods:{
    async logout() {
      let response = await this.$store.dispatch("logoutUser")
      console.log("🚀 ~ file: NavbarComponent.vue ~ line 105 ~ logout ~ response", response)
      this.$router.push("/login");
    },
    profile() {
      this.profileModal = !this.profileModal
      // var x = document.getElementById("card");
      // var y = document.getElementById("mySidenav");
      // if (x.style.display === "flex") {
      //   x.style.display = "none";
      // } else {
      //   x.style.display = "flex";
      //   y.style.marginLeft = "-20rem";
      // }
    },
    setLocale(locale) {
      this.locale = locale;
      import(`../locale/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs);
        this.$i18n.locale = locale;
      });
    },
    toggleMenu(){
      const menu = document.querySelector('.hamburger');
      menu.classList.toggle('active');
      if(this.sidebar === true){
        this.sidebar = false;
      } 
      else {
        this.sidebar = true;  
      }
    }
  }
}
</script>

<style scoped>
  .hamburger {
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 4px;
  background-color: black;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s ease-out;
}

.hamburger-line:not(:first-child) {
  margin-top: 8px;
}

/* To properly translate the element, you should input inside the translateY the sum of the height of your line + margin between 2 lines. In this case, 4px height + 7px margin = 11px */
.hamburger.active .hamburger-line-1 {
  transform: translateY(11px) rotate(-135deg);
}

.hamburger.active .hamburger-line-2 {
  opacity: 0;
  transform: translateX(-50%);
}

/* To properly translate the element, you should input inside the translateY the sum of the height of your line + margin between 2 lines. In this case, 4px height + 7px margin = 11px */
.hamburger.active .hamburger-line-3 {
  transform: translateY(-11px) rotate(-225deg);
}
.languages{
  display: flex;
  justify-content: space-between;
  width: 100px;
}
.content {
    display: flex;
    width: auto;
    justify-content: space-between; 
    overflow: hidden;
    align-items: center;
}
.link_for_image {
  padding: 0rem 1rem;
}
.profile_button {
  position: relative;
}
@media (max-width: 500px){
  .link_for_danak {
    display: none;
  }
}
</style>
