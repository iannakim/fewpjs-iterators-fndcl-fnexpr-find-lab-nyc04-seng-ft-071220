const testVar = {}

function testFunc() {
  return "hi"
}


let superbowlWin = (array) => {

let obj  = array.find( e => {
    return e.result === "W"})
  if (obj){
    return obj.year
  }
  else {
    return undefined
  }

}