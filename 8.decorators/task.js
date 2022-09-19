//Task 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    let hash = args.join(',');
    if (hash in cache) {
      return "Из кэша: " + cache[hash];
    } else {
      cache[hash] = func.apply(this, args);
      if (Object.keys(cache).length > 4) delete cache[Object.keys(cache)[0]];
      return "Вычисляем: " + cache[hash];
    }
  }
  return wrapper;
}

//Task 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
     if (!timeoutId) {
        wrapper.count++;
        func(...args);
     }
     wrapper.allCount++;
     clearTimeout(timeoutId);
     timeoutId = setTimeout(() => {
        wrapper.count++;
        return func(...args);
     }, delay)
  }
  return wrapper;
}