<script setup>
</script>

<template>
  <div class="layout">
    <header class="header">
      <h1>Vue Basic Lab</h1>
      <nav>
        <RouterLink :to="{ name: 'component-data-flow' }">Component Data Flow</RouterLink>
        <RouterLink :to="{ name: 'router-data-flow' }">Router Data Flow</RouterLink>
        <RouterLink :to="{ name: 'signin' }">Sign In</RouterLink>
      </nav>
    </header>

    <main class="content">
      <RouterView />
    </main>

    <footer class="footer">
      <small>© 2026 Vue Basic Lab</small>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}

.header {
  padding: 6x;
  border-bottom: 1px solid #ddd;
}

.header nav {
  margin-top: 8px;
}

.header a {
  margin-right: 12px;
  text-decoration: none;
  color: #333;
}

.header a.router-link-active {
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 20px;
}

.footer {
  padding: 12px;
  border-top: 1px solid #ddd;
  text-align: center;
  font-size: 12px;
  color: #666;
}
</style>
