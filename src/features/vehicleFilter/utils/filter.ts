import { VehicleI } from "../../../entities/vehicles/model/types.ts"
import { VehicleFilterSliceT } from "../store/vehicleFilterSlice.ts"

export const vehiclesFilterFunction = (
	vehicles: VehicleI[],
	filters: VehicleFilterSliceT,
): {
	filteredVehicles: VehicleI[]
	availableTypes: Set<string>
	availableLevels: Set<number>
	availableNations: Set<string>
} => {
	const typesSet = new Set(filters.types)
	const availableTypes = new Set<string>()
	const levelsSet = new Set(filters.levels)
	const availableLevels = new Set<number>()
	const nationsSet = new Set(filters.nations)
	const availableNations = new Set<string>()
	const filteredVehicles: VehicleI[] = vehicles.filter(vehicle => {
		const vehicleType = vehicle.tags?.[0] || ""
		const isLevelOk = levelsSet.size === 0 || levelsSet.has(vehicle?.level)
		const isTypeOk = typesSet.size === 0 || typesSet.has(vehicleType)
		const isNationOk = nationsSet.size === 0 || nationsSet.has(vehicle.nation)
		if (isTypeOk && isNationOk) {
			availableLevels.add(vehicle.level)
		}
		if (isLevelOk && isNationOk) {
			availableTypes.add(vehicleType)
		}
		if (isLevelOk && isTypeOk) {
			availableNations.add(vehicle.nation)
		}
		return isLevelOk && isTypeOk && isNationOk
	})
	return {
		filteredVehicles,
		availableTypes,
		availableLevels,
		availableNations,
	}
}
