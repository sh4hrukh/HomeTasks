function prefill(n, v) {
    if(parseInt(n) !== Math.abs(n)){
      let typeError =  new TypeError();
      typeError.message = n+" is invalid";
      throw typeError;
    }
    return parseInt(n) ? Array(n).fill(v): [];
  }