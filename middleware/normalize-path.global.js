export default defineNuxtRouteMiddleware((to) => {
  const directionPath = to.path;
  if (directionPath === "/home") return navigateTo("/", { redirectCode: 301 });
  if (directionPath === "/contact")
    return navigateTo("/linktree", { redirectCode: 301 });
  if (directionPath.length > 1 && directionPath.endsWith("/")) {
    return navigateTo(
      {
        path: directionPath.replace(/\/+$/, ""),
        query: to.query,
        hash: to.hash,
      },
      { redirectCode: 301 },
    );
  }
});
