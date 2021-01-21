function partitionOn(pred, items) {
    let f = items.filter((e)=> !(pred(e)));
    let t= items.filter(pred);
    f.forEach((x,i)=>items[i]=x);
    t.forEach((x,i)=>items[f.length+i]=x);
    return f.length;
  }