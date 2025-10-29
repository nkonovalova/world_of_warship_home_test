import React from "react"
import style from "./button.module.scss"

type ButtonPropsT = React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonPropsT) {
	return (
		<button className={style.button} onClick={props.onClick} {...props}>
			{props.children}
		</button>
	)
}

export default Button
