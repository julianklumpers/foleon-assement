import create, { State, StateCreator } from "zustand";
import createVanilla from "zustand/vanilla";
import { persist, devtools } from "zustand/middleware";
import { pipe } from "ramda";
import { withImmer } from "@src/lib/zustandMiddleware";
import { AuthResult } from "@src/@types/services/auth";

const withPersist = <T extends State>(config: StateCreator<T>) =>
  persist(config, { name: "AUTH_STORE" });

const createStore = pipe(withImmer, withPersist, devtools, createVanilla);

type IStore = {
  isLoggedIn?: boolean;
  login(user: AuthResult): void;
  logout(): void;
} & Partial<AuthResult>;

const initialState = {
  isLoggedIn: false,
};

export const authStore = createStore<IStore>((set) => ({
  login: (user) =>
    set((state) => {
      return { ...user, isLoggedIn: true };
    }),
  logout: () => set((state) => ({ ...initialState })),
}));

export const useAuthStore = create(authStore);
