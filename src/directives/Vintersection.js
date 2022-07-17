export default {
  mounted(el, binding) {
    console.log(el, binding);

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      /* Content excerpted, show below */
      if (entries[0].isIntersecting) {
        console.log("ПЕРЕСЕЧЕНИЕ");
        binding.value();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: "intersection",
};
