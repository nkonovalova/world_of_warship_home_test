import { useEffect, useRef, useState } from "react"

type LazyImagePropsT = {
	src: string
	alt: string
	className: string
}

function LazyImage({ src, alt, ...restProps }: LazyImagePropsT) {
	const [imageSrc, setImageSrc] = useState<string | undefined>(undefined)
	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setImageSrc(src)
						observer.disconnect()
					}
				})
			},
			{ rootMargin: "100px" },
		)
		if (imgRef.current) observer.observe(imgRef.current)

		return () => observer.disconnect()
	}, [src])

	return <img ref={imgRef} src={imageSrc} alt={alt} {...restProps} />
}

export default LazyImage
