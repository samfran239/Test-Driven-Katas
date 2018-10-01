// const wrap = (line, maxLen) => {
// 	let count = 0;
// 	let limitedStr = [];
// 	let splitLine = line.split(' ');
// 	splitLine.forEach((word) => {
// 		count += word.length + 1;
// 		if (count <= maxLen) {
// 			limitedStr.push(word);
// 		} else {
// 			limitedStr.push('\n' + word);
// 			count = 0;
// 		}
// 	});

// 	return limitedStr.join(' ');
// };

const wrap = (line, maxLen) => {
	if (line.length <= maxLen) {
		return line;
	}
	const indexOfBlank = line.lastIndexOf(' ', maxLen);
	let split;
	let offset;
	if (indexOfBlank > -1) {
		split = indexOfBlank;
		offset = 1;
	} else {
		split = maxLen;
		offset = 0;
	}
	return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);
};

module.exports = wrap;
