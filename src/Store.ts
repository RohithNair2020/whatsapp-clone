import create from 'zustand';
import { User } from './Types';

export interface Store {
    user: User;
    setUser: (user: User) => void;
}

const useStore = create<Store>((set) => ({
    user: {
        _id: '',
        name: '',
        phone: '',
        userId: '',
    },
    setUser: (user: User) => set({ user }),
}));

export default useStore;
