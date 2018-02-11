var reverseUppercase = function (string) {
	var reversedString = ''
	for (var i = string.length-1; i >= 0; i--) {
		reversedString += string[i]
	}
	var reversedAndUpper = reversedString.toUpperCase();
	return reversedAndUpper
}

var isEven = function (number) {
  if (number % 2 == 0) {
  	return true
  } else {
  	return false
  }
}

module.exports = {
  reverseUppercase: reverseUppercase,
  isEven: isEven
}
