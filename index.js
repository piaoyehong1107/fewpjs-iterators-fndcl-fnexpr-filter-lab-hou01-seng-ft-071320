function findMatching(arr,str){
  let newarr=arr.filter(dri=>{
   return dri.toLowerCase()===str.toLowerCase()
  })
  return newarr
}
function fuzzyMatch(arr,str){
  let newarr=arr.filter(dri=>{
   return dri[0]===str
  })
  return newarr
}