export interface selectOptionsType {
    position: string[]
    career: string[]
    devLanguage: string[]
    stackAndTool: string[]
    designAndCollab: string[]
}

export const selectOptions:selectOptionsType = {
    position: ['Desiginer', 'FrontEnd', 'BackEnd', 'Marketer', 'Planner', 'DevOps', 'PM', 'Android', 'IOS'],
    career: ['대학생 또는 대학원생', '신입', '1년', '2년', '3년', '4년', '5년', '6년 이상'],
    devLanguage: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Swift', 'Kotlin', 'C', 'PHP', 'SQL'],
    stackAndTool: ['기술1', '기술2', '기술3', '기술4', '기술5', '기술6', '기술7'],
    designAndCollab: ['디자인1', '디자인2', '디자인3', '디자인4', '디자인5', '디자인6', '디자인7'],
}