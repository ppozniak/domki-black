import { writable } from 'svelte/store';

export const navOpened = writable(false);

export const openNav = (): void => navOpened.set(true);
export const closeNav = (): void => navOpened.set(false);
export const toggleNav = (): void => navOpened.update(opened => !opened);