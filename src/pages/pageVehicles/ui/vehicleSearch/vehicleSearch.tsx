import SearchInput from "../../../../shared/ui/searchInput/searchInput.tsx"
import React from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks.ts"
import {
	resetSearch,
	selectSearchQuery,
	setSearchQuery,
} from "./store/vehicleSearchSlice.ts"
import { resetFilter } from "../vehicleFilter/store/vehicleFilterSlice.ts"

function VehicleSearch() {
	const dispatch = useAppDispatch()
	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(resetFilter())
		dispatch(setSearchQuery(e.target.value))
	}
	const onReset = () => dispatch(resetSearch())

	const searchValue = useAppSelector(selectSearchQuery)
	return (
		<SearchInput
			value={searchValue}
			name="vehicleSearch"
			onChange={onSearch}
			onReset={onReset}
		/>
	)
}

export default VehicleSearch
