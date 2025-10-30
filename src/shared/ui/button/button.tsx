import React from "react"
import styles from "./button.module.scss"
import clsx from "clsx"

export enum ButtonStyleE {
	ICON = "ICON",
	DEFAULT = "DEFAULT",
	TINY = "TINY",
}

type ButtonVariant = ButtonStyleE
interface ButtonPropsT extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonStyle?: ButtonVariant
}

function Button({
	buttonStyle = ButtonStyleE.DEFAULT,
	...props
}: ButtonPropsT) {
	return (
		<button
			className={clsx(styles.button, {
				[styles.disabled]: props.disabled,
				[styles.icon]: buttonStyle === ButtonStyleE.ICON,
				[styles.tiny]: buttonStyle === ButtonStyleE.TINY,
			})}
			onClick={props.onClick}
			{...props}
		>
			{props.children}
		</button>
	)
}

export default Button
