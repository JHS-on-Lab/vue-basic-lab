<script setup>
</script>

<template>
  <div class="layout">
    <div class="container">
      <header class="header">
        <h1>Vue Basic Lab</h1>

        <nav class="nav">
          <div class="dropdown">
            <span class="dropdown-title">Data Flow ▾</span>

            <div class="dropdown-menu">
              <RouterLink :to="{ name: 'component-data-flow' }">
                Component
              </RouterLink>
              <RouterLink :to="{ name: 'router-data-flow' }">
                Router
              </RouterLink>
            </div>
          </div>

          <RouterLink class="nav-link" :to="{ name: 'signup' }">
            Sign Up
          </RouterLink>

          <RouterLink class="nav-link" :to="{ name: 'signin' }">
            Sign In
          </RouterLink>
        </nav>
      </header>

      <main class="content">
        <RouterView />
      </main>

      <footer class="footer">
        <small>© 2026 Vue Basic Lab</small>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  min-width: 1200px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
}


/* Header */
.header {
  padding: 16px 0;
  border-bottom: 1px solid #ddd;
}

.nav {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

/* Content */
.content {
  flex: 1;
  padding: 24px 0;
}

/* Footer */
.footer {
  padding: 12px 0;
  border-top: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
  color: #666;
}

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown-title {
  cursor: pointer;
  font-weight: 500;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  min-width: 120px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 8px 0;
}

.dropdown-menu a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: #333;
}

.dropdown-menu a:hover {
  background-color: #f5f5f5;
}

/* Hover to open */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Single nav link */
.nav-link {
  text-decoration: none;
  color: #333;
}

.router-link-active {
  font-weight: bold;
}
</style>
