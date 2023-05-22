export interface Entry {
    id: string,
    createdAt: string,
    updatedAt: string,
    todayDate: string,
    gratefulContent: Array<string>,
    focusContent: Array<string>,
    wentWellContent: Array<string>,
    notSoWellContent: Array<string>,
    improvementContent: Array<string>,
    effortRating: number
  }