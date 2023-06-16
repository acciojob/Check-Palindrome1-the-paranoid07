// complete the given function

function palindrome(str){
let start = 0, end = str.length ;
	while (start < end ) {
		if(str[start] !=== str[end])
			return false;
	}
	return true;
}
module.exports = palindrome
