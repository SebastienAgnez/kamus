<template>
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="/src/assets/images/logo_kabus.png" alt="" width="50" height="50"
             className="d-inline-block">
        <span> Kamus</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <router-link to="/gaul">Kamus gaul</router-link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <router-link to="/dayak">Dayak Language</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>

</script>


<style scoped>
.navbar {
  background-color: white !important;
}

.navbar-brand span {
  font-size: 1.4em;
}

.navbar-nav .nav-item {
  margin-right: 1.2em;
}

.navbar-nav a {
  text-decoration: none;
  font-size: 1.1em;
  color: black;
}

.navbar-nav a:hover {
  color: forestgreen;
}

/*#footer {*/
/*  bottom: 0px;*/
/*  padding-top: 1em;*/
/*  padding-bottom: 0.7em;*/
/*  background-color: #d5c8b7;*/
/*  color: black;*/
/*  font-family: "Poppins-Regular",serif;*/
/*}*/

</style>
