class DOMNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(string) {
    if (string) {
      this.array.forEach((el) => { el.innerHTML = string;});
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    return this.array.forEach(el => el.removeChild());
  }

  append(arg) {
    console.log(this);
    // console.log(arg.outerHTML);
    return this.array.forEach(el => {el.innerHTML += arg;});
  }

  attr(){
    let result = [];
    for(let i=0; i< this.array.length; i++) {
      result.push(this.array[i].attributes);
    }
    return result;
  }

  addClass(arg){
    return this.array.forEach((el) => { el.classList.add(arg);});
  }

  removeClass(arg){
    return this.array.forEach((el) => { el.classList.remove(arg);});
  }

  children() {
    const childrenArr = [];
    this.array.forEach((el) => {
      childrenArr.push(el.children);
    });

    return new DOMNodeCollection(childrenArr);
  }

}

module.exports = DOMNodeCollection;
