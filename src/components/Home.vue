<template>
  <main>
    <div class="container content">
      <h1 class="slide-left">Welcome <br> to the dictionary</h1>
      <p class="slide-left">The first site that brings together the meaning of Indonesian slang and the learning of the
        Dayak language</p>
      <div class="links slide-left">
        <a href="#" class="btn">Learn More</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(82, 82, 85, 0.5), rgba(82, 82, 85, 0.5)), url("../assets/images/background.jpg");
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
}

.content {
  padding-top: 9%;
  color: white;
}

.content h1 {
  font-size: 110px;
  line-height: 110px;
  font-weight: 600;
  margin-bottom: 30px;
}

.content p {
  max-width: 500px;
  line-height: 28px;
  font-size: 1.1em;
  opacity: 0;
}

.links {
  margin-top: 30px;
  opacity: 0;
}

.links a {
  color: white;
  text-decoration: none;
  display: inline-block;
}

.btn {
  border: 2px solid white;
  padding: 10px 35px;
  border-radius: 30px;
  margin-right: 15px;
}

.slide-left {
  animation: slideleft 1s linear forwards;
}

@keyframes slideleft {
  0% {
    transform: translate(100px);
    opacity: 0;
  }
  100% {
    transform: translate(0px);
    opacity: 1;
  }
}

p.slide-left {
  animation-delay: 1s;
}

.links.slide-left {
  animation-delay: 2s;
}

@media only screen and (max-width: 768px) {
  .content h1 {
    font-size: 80px;
    line-height: 90px;
  }
}
</style>
