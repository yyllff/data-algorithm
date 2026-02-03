
// 十进制转二进制：number.toString(2)
// 二进制转十进制：parseInt(number, 2)

// 进制转换规则：除2取余，逆序排列

var num = 30;
console.log(num.toString(2))

var num1 = 11110;
console.log(parseInt(num1, 2))

function decimalToBinary (number) {
	var arr = [];

	while (number) {
		arr.push(number % 2);
		number = Math.floor(number / 2);
	}

	var binaryNum = '';
	while (arr.length) {
		binaryNum += arr.pop();
	}

	return binaryNum;
}

console.log(decimalToBinary(30))

// 2进制转10进制
function binaryToDecimal (num) {
	num = String(num);
	var stack = [];
	for (let v of num) {
		stack.push(v);
	}

	var decimalNum = 0;
	var count = 0;
	while (stack.length) {
		decimalNum += stack.pop() * Math.pow(2, count);
		count++;
	}

	return decimalNum;
}

console.log(binaryToDecimal(1100100))


