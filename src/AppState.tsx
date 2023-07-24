import { proxy, ref } from "valtio";

export const WP_API = "https://hexofo.com/blog/wp-json/wp/v2/"

export type StateType = {
    wpMedias: Array<any>
    wpEvents: Array<any>
    wpArticles: Array<any>
    wpUsers: Array<any>
}

export const initialState: StateType = {
    wpMedias: [],
    wpEvents: [],
    wpArticles: [],
    wpUsers: []
}

export const state = proxy<StateType>(initialState);

export const SET_MEDIAS = (medias:Array<any>) => state.wpMedias = ref(medias)
export const SET_EVENTS = (events:Array<any>) => state.wpEvents = ref(events)
export const SET_ARTICLES = (articles:Array<any>) => state.wpArticles = ref(articles)
export const SET_USERS = (users: Array<any>) => state.wpUsers = ref(users)

const decodeHtmlCharCodes = (str: string) => {
    str = str.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode))
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    return str
};

export const fetchMedias = (callback?: () => void) => {
    if (!state.wpMedias.length) fetch(WP_API + "media?per_page=60").then((res) => res.json()).then(medias => {
        SET_MEDIAS(medias)
        if (!!callback) callback()
    })
}

export const fetchUsers = (callback?: () => void) => {
    if (!state.wpUsers.length) fetch(WP_API + "users?per_page=20").then((res) => res.json()).then(users => {
        SET_USERS(users)
        if (!!callback) callback()
    })
}

export const fetchEvents = (callback?: () => void) => {
    if (!state.wpMedias.length) fetchMedias()

    if (!state.wpEvents.length)fetch(WP_API + "posts?categories=4").then((res) => res.json()).then(res => {
        const formatEvents: Array<any> = []
        res.forEach((article: any) => {
        const matchMedia = state.wpMedias.find((media: any) => media.id === article.featured_media)
        const date = new Date(article.date)
        const month = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre",][date.getMonth()]
        const day = date.getDate()
        const hours = date.getHours()
        const minutes = ('0' + (date.getMinutes())).slice(-2)
        const wpArticle:any = {
            name: decodeHtmlCharCodes(article.title.rendered),
            date: `${day} ${month} à ${hours}h${minutes}`,
            img: matchMedia?.source_url || "./logo512.png",
            // content: article.alt_text,
            link: article.link
        }
        formatEvents.push(wpArticle)
        })
        SET_EVENTS(formatEvents);
        if (!!callback) callback()
    })
}

export const fetchArticles = (callback?: () => void) => {
    if (!state.wpMedias.length) fetchMedias()
    
    if (!state.wpArticles.length) fetch(WP_API + "posts?categories=1,3,6").then((res) => res.json()).then(res => {
        const formatArticles: Array<any> = []
        res.forEach((article: any) => {
            const matchMedia = state.wpMedias.find((media: any) => media.id === article.featured_media)
            const wpArticle:any = {
                title: decodeHtmlCharCodes(article.title.rendered),
                content: decodeHtmlCharCodes(article.content.rendered),
                thumbnail: matchMedia?.source_url || "./logo512.png",
                alt: matchMedia?.alt_text,
                url: article.link
            }
            formatArticles.push(wpArticle)
        })
        SET_ARTICLES(formatArticles);
        if (!!callback) callback()
    })
}