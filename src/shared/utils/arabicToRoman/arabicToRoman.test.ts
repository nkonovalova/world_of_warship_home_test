import { arabicToRoman } from "./arabicToRoman"

describe("arabicToRoman", () => {
	test("converts typical values", () => {
		expect(arabicToRoman(1)).toBe("I")
		expect(arabicToRoman(4)).toBe("IV")
		expect(arabicToRoman(9)).toBe("IX")
		expect(arabicToRoman(40)).toBe("XL")
		expect(arabicToRoman(90)).toBe("XC")
		expect(arabicToRoman(400)).toBe("CD")
		expect(arabicToRoman(900)).toBe("CM")
		expect(arabicToRoman(58)).toBe("LVIII") // 50 + 5 + 3
		expect(arabicToRoman(1994)).toBe("MCMXCIV")
		expect(arabicToRoman(3999)).toBe("MMMCMXCIX")
	})

	test("rejects invalid inputs", () => {
		expect(() => arabicToRoman(0)).toThrow(RangeError)
		expect(() => arabicToRoman(4000)).toThrow(RangeError)
		expect(() => arabicToRoman(-1)).toThrow(RangeError)
		expect(() => arabicToRoman(1.5)).toThrow(TypeError)
	})
})
