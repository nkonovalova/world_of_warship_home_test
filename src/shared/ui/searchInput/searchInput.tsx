import React, { ChangeEvent, useEffect, useMemo, useState } from "react"
import styles from "./searchInput.module.scss"
import clsx from "clsx"
import { IconSearch } from "../icons/icons.tsx"
import { debounce } from "../../utils/debounce/debounce.ts"
import Button, { ButtonStyleE } from "../button/button.tsx"

type SearchInputPropsT = {
	name: string
	value?: string | number
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	onReset?: () => void
	disabled?: boolean
}

function SearchInput({
	name,
	disabled,
	onChange,
	onReset,
	value,
	...restProps
}: SearchInputPropsT) {
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		setSearchValue(String(value))
	}, [value])

	const debouncedSearch = useMemo(
		() =>
			debounce((e: React.ChangeEvent<HTMLInputElement>) => {
				if (onChange) {
					onChange(e)
				}
			}, 500),
		[],
	)

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		debouncedSearch(e)
	}

	const onResetSearch = () => {
		setSearchValue("")
		if (onReset) {
			onReset()
		}
	}

	return (
		<label className={styles.container}>
			<input
				className={clsx(styles.searchInput, {
					[styles.disabled]: disabled,
				})}
				name={name}
				value={searchValue}
				onChange={onChangeSearch}
				{...restProps}
			/>
			{!searchValue ? (
				<div className={styles.icon}>
					<IconSearch />
				</div>
			) : (
				<div className={styles.icon}>
					<Button buttonStyle={ButtonStyleE.ICON} onClick={onResetSearch}>
						×
					</Button>
				</div>
			)}
		</label>
	)
}

export default SearchInput
