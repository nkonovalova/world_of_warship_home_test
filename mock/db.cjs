const fs = require("fs")

const dir = __dirname
const data = {
	vehicles: JSON.parse(fs.readFileSync(dir + "/data/vehicles.json", "utf8")),
	nations: JSON.parse(fs.readFileSync(dir + "/data/nations.json", "utf8")),
	vehicle_types_common: JSON.parse(
		fs.readFileSync(dir + "/data/vehicle_types_common.json", "utf8"),
	),
	media_path: JSON.parse(
		fs.readFileSync(dir + "/data/media_path.json", "utf8"),
	),
}

module.exports = () => data
