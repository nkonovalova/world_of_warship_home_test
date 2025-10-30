import React from "react"
import style from "./button.module.scss"
import clsx from "clsx"

type ButtonPropsT = React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonPropsT) {
	return (
		<button
			className={clsx(style.button, {
				[style.disabled]: props.disabled,
			})}
			onClick={props.onClick}
			{...props}
		>
			{props.children}
		</button>
	)
}

export default Button
