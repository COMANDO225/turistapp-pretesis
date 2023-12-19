export interface modalLocalidadInterface {
	idiomaRegion?: idiomaRegionInterface;
	moneda?: {
		tab?: string;
	};
	configuracion?: {
		tab?: string;
	};
}

export interface idiomaRegionInterface {
	tab?: string;
	titulo?: string;
	description?: string;
	inputLabel?: string;
	eligeIdioma?: string;
}
