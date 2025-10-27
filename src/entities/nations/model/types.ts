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

// TODO: если используются те же типы Icons и Localization - вынести в shared
export interface Icons {
	large: string
	small: string
	tiny: string
	default: string
	local_large: string
	local_small: string
	local_tiny: string
}

export interface Localization {
	mark: {
		[key: string]: string
	}
}

export type Nation = {
	id: number
	name: string
	color: string
	icons: Icons
	tags: string[]
	localization: Localization
}

export type NationsApiResponse = {
	status: string
	data: Nation[]
}
