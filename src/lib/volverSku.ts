export const volverSku = (text: string) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-") // Reemplazar espacios en blanco por guiones
		.replace(/--+/g, "-") // Reemplazar múltiples guiones por uno solo
		.replace(/^-+|-+$/g, "") // Eliminar guiones al principio y al final
		.normalize("NFD") // Eliminar acentos y diacríticos
		.replace(/[\u0300-\u036f]/g, ""); // Reemplazar caracteres Unicode que no sean alfanuméricos
};
