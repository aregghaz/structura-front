export interface pageNameType {
    [key: number]: string
}
export const pageName:pageNameType = {
    1: 'important',
    2: 'draft',
    3: 'template',
    4: 'trash',
    10: 'inbox',
    11: 'hot',
    12: 'sent',
}

interface documentStatusType {
    [key: string]: { ru: string, en: string, color: string }
}

export const documentStatus: documentStatusType = {
    new: {
        ru: 'создан и (или) загружен',
        en: 'создан и (или) загружен',
        color: 'black'
    },
    partially: {
        ru: 'частично подписан',
        en: 'частично подписан',
        color: '#FF4B15'
    },
    sent: {
        ru: 'прислан',
        en: 'прислан',
        color: '#1072E5'
    },
    signed: {
        ru: 'подписан',
        en: 'подписан',
        color: '#009B23'
    },
    torn: {
        ru: 'частично или полностью порван',
        en: 'частично или полностью порван',
        color: '#F3212A'
    },
}