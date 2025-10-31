export function debounce<T extends (...args: any[]) => void>(
	fn: T,
	delay = 300,
) {
	let timeoutId: ReturnType<typeof setTimeout>

	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => fn(...args), delay)
	}
}
