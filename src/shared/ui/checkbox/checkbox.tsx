import React, { ChangeEvent } from "react"
import styles from "./checkbox.module.scss"

type CheckboxPropsT = {
	name: string
	value?: string | number
	checked?: boolean
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	label?: string | React.ReactNode
	disabled?: boolean
}

function Checkbox({
	name,
	checked,
	label,
	disabled,
	onChange,
	value,
}: CheckboxPropsT) {
	return (
		<label className={styles.checkbox}>
			<input
				className={styles.control}
				name={name}
				value={value}
				type="checkbox"
				checked={checked}
				disabled={disabled}
				onChange={e => onChange?.(e)}
			/>
			<span className={styles.box} aria-hidden="true">
				<svg
					className={styles.check}
					viewBox="0 0 24 24"
					width="14"
					height="14"
					focusable="false"
					aria-hidden="true"
				>
					<polyline
						points="20 6 9 17 4 12"
						stroke="currentColor"
						strokeWidth="3"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</span>
			{label && <span className={styles.label}>{label}</span>}
		</label>
	)
}

export default Checkbox
