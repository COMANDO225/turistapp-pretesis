import { create } from "zustand";

interface SearchActive {
	searchActive: boolean;
	setSearchActive: (searchActive: boolean) => void;
}

export const useSearch = create<SearchActive>((set) => ({
	searchActive: false,
	setSearchActive: (searchActive: boolean) => set({ searchActive }),
}));
