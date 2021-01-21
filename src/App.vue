<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/">Data Entry</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/DataSubmission">Data Submission</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/CodeManager">Code Manager</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/CodeReference">Code Reference</router-link>
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>

</script>

<style>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
