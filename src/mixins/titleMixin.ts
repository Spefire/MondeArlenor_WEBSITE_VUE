// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTitle (vm: any) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === "function"
      ? title.call(vm)
      : title;
  }
}
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created () {
    const title = getTitle(this);
    if (title) {
      document.title = title;
    }
  }
};