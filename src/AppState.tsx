import { proxy } from "valtio";

export type StateType = {
    wpMedias: Array<any>
    wpArticles: Array<any>
    wpUsers: Array<any>
}

export const initialState: StateType = {
    wpMedias: [],
    wpArticles: [],
    wpUsers: []
}

export const state = proxy<StateType>(initialState);

export const SET_MEDIAS = (medias:Array<any>) => state.wpMedias = medias
export const SET_ARTICLES = (articles:Array<any>) => state.wpArticles = articles
export const SET_USERS = (users:Array<any>) => state.wpUsers = users