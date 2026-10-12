// Keeps one canonical URL per page: /home → /, and /anything/ → /anything.
export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/home') return navigateTo('/', { redirectCode: 301 })
  if (to.path.length > 1 && to.path.endsWith('/')) {
    return navigateTo({ path: to.path.replace(/\/+$/, ''), query: to.query, hash: to.hash }, { redirectCode: 301 })
  }
})
