import { IconsI, LocalizationI } from "../../../shared/types/common.ts"

export type NationMark = [
	"ru",
	"fr",
	"en",
	"nl",
	"uk",
	"pt_br",
	"zh_cn",
	"tr",
	"de",
	"ko",
	"it",
	"pl",
	"th",
	"cs",
	"es_mx",
	"zh_sg",
	"ja",
	"es",
	"zh_tw",
]

export interface NationI {
	id: number
	name: string
	color?: number // RGB as integer
	tags?: string[]
	icons?: IconsI
	localization?: LocalizationI
}

export type NationsApiResponseT = {
	status: string
	data: NationI[]
}
