import create from 'zustand';
import { User } from './Types';

export interface Store {
    user: User | null;
    setUser: (user: User | null) => void;
}

const useStore = create<Store>((set) => ({
    user: null,
    setUser: (user: User | null) => set({ user }),
}));

export default useStore;
