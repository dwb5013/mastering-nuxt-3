export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistroy = useLocalStorage("histroy", []);
  navigationHistroy.value.push(to.path);
});
