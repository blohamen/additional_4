module.exports = function multiply(first, second) {
var len = (+first) + (+second) > 10000 ? len = 10000 : len = (+first) + (+second) ,
	result = Array(len).fill(0);
first =  first.split('')
		.reverse();
second = second.split('')
		.reverse();
for (var i = 0; i< first.length; i++){
	for (var j = 0; j< second.length; j++){
			result[i + j] += first[i] * second[j];
	}
}
for(var i = 0 ; i < len-1 ; i++){
if (result[i] >= 10) {
if (!result[i + 1]) {
result[i + 1] = 0;
		}

result[i + 1] += parseInt(result[i] / 10);
result[i] %= 10;
	}
}

return result.reverse()
	.join('')
	.replace(/^0+/, '')
}
