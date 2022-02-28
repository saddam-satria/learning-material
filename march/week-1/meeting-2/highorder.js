function parent() {
  function childOne() {
    console.log('from the first child');
  }
  console.log('from higher function');
  return childOne;
}

parent();
const childOneFromParent = parent();
childOneFromParent();
