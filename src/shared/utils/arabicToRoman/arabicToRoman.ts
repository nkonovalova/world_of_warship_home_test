export function arabicToRoman(num: number): string {
	if (!Number.isInteger(num)) {
		throw new TypeError("Input must be an integer")
	}
	if (num < 1 || num > 3999) {
		throw new RangeError("Value must be between 1 and 3999")
	}

	const map: Array<[number, string]> = [
		[1000, "M"],
		[900, "CM"],
		[500, "D"],
		[400, "CD"],
		[100, "C"],
		[90, "XC"],
		[50, "L"],
		[40, "XL"],
		[10, "X"],
		[9, "IX"],
		[5, "V"],
		[4, "IV"],
		[1, "I"],
	]

	let remaining = num
	let result = ""

	for (const [value, roman] of map) {
		while (remaining >= value) {
			result += roman
			remaining -= value
		}
		if (remaining === 0) break
	}

	return result
}
