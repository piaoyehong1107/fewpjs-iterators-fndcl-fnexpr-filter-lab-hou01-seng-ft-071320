function findMatching(arr,str){
  let newarr=arr.filter(dri=>{
   return dri.toLowerCase===str.toLowerCase
  })
  return newarr
}
