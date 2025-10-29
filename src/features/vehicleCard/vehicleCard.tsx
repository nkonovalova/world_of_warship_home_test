import styles from "./vehicleCard.module.scss"
type VehicleCardT = {
	id: string
	level: number
	vehicleType?: string
	nation: string
	name: string
	description: string
	nationIconUrl: string
	vehicleTypeIconUrl: string
	vehicleIconUrl: string
	mediaPath?: string
}

function VehicleCard({
	id,
	vehicleIconUrl,
	vehicleTypeIconUrl,
	vehicleType,
	nationIconUrl,
	nation,
	name,
	level,
	description,
	mediaPath,
}: VehicleCardT) {
	return (
		<div className={styles.card} key={id}>
			<img
				className={styles.image}
				src={mediaPath + vehicleIconUrl}
				alt={name}
			/>
			<div className={styles.content}>
				<div className={styles.header}>
					<img
						className={styles.nation}
						src={mediaPath + nationIconUrl}
						alt={nation}
					/>
					<img
						className={styles.type}
						src={mediaPath + vehicleTypeIconUrl}
						alt={vehicleType}
					/>
					<h2 className={styles.name}>
						{level} {name}
					</h2>
				</div>

				<div className={styles.description}>{description}</div>
			</div>
		</div>
	)
}

export default VehicleCard
