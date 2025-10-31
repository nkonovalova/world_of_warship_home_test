import { VehicleI } from "../../../../../entities/vehicles/model/types.ts"
import { SelectFilteredVehiclesT } from "../../../selectFilteredVehicles.ts"

export const vehiclesSearchByNameFunction = (
	vehicles: VehicleI[],
	searchQuery: string,
	lang: string,
): SelectFilteredVehiclesT => {
	const normalizedQuery = searchQuery.toLowerCase()
	const availableLevels = new Set<number>()
	const availableNations = new Set<string>()
	const availableTypes = new Set<string>()
	const filteredVehicles = vehicles.filter(vehicle => {
		const vehicleType = vehicle.tags?.[0] || ""
		availableLevels.add(vehicle.level)
		availableNations.add(vehicle.nation)
		availableTypes.add(vehicleType)

		return vehicle.localization?.mark?.[lang]
			.toLowerCase()
			.includes(normalizedQuery)
	})
	return {
		filteredVehicles,
		availableLevels,
		availableNations,
		availableTypes,
	}
}
