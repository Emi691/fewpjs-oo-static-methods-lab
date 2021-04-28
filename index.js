class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let array = string.split(' ')
    let specialWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let newArray = array.map(function(element){
      if (element === array[0] || !specialWords.find(word => word === element)){
        return Formatter.capitalize(element)
      }else{ return element }
    })

    return newArray.join(' ')
  }
}