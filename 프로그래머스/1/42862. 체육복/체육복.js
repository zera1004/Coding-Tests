function solution(n, lost, reserve) {
  let L = lost.filter(i => !reserve.includes(i));
  let L2 = lost.filter(i => !reserve.includes(i));
  let R = reserve.filter(i => !lost.includes(i));
  
  let result = n - L.length
  let result2 = n - L.length
  
  R.forEach ( i => {
      if (L.includes(i-1)) {
          result ++;
          L.splice(L.indexOf(i-1),1);
      }
      else if (L.includes(i+1)) {
          result ++;
          L.splice(L.indexOf(i+1),1);
      }
  })

  R.forEach ( i => {
    if (L2.includes(i+1)) {
      result2 ++;
      L2.splice(L2.indexOf(i+1),1);
  }
    else if (L2.includes(i-1)) {
      result2 ++;
      L2.splice(L2.indexOf(i-1),1);
  }
})

  return result > result2 ? result : result2
}