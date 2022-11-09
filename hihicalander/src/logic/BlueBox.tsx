import { getDateStr } from "./Util"

export class OneDayDrop {

    static getSummary(drops: number[]) {
        return [
            drops.filter(i => i === 0).length,
            drops.filter(i => i === 1).length,
            drops.filter(i => i === 2).length,
            drops.filter(i => i === 3).length,
            drops.filter(i => i === 4).length,
        ]
    }
    static sum(dayDropList: number[][]) {

        let eikan = 0
        let hagyou = 0
        let shigoku = 0
        let hihi = 0
        let other = 0

        for (let dlist of dayDropList) {
            eikan += dlist[0]
            hagyou += dlist[1]
            shigoku += dlist[2]
            hihi += dlist[3]
            other += dlist[4]
        }

        return [eikan, hagyou, shigoku, hihi, other];
    }

}


export type DateDropDict = {
    [year: string]: { // Data year.
        [month: string]: { // Data month.
            [day: string]: number[] // Data day of drops.
        }
    }
}

export type OrderedDropDict = { "date": Date, "drop": number[] }[]


export class BlueBoxes {
    dateDropDict: DateDropDict;

    constructor(dropDict: DateDropDict) {
        this.dateDropDict = dropDict
    }

    ckDropListDate(year: string, month: string | undefined = undefined, day: string | undefined = undefined) {
        let res = false
        if (year in this.dateDropDict) {
            if (month === undefined) {
                res = true
            }
            else if (month in this.dateDropDict[year]) {
                if (day === undefined || day in this.dateDropDict[year][month]) {
                    res = true
                }
            }
        }

        return res
    }

    getDropListOfDay(year: string, month: string, day: string) {
        if (!(year in this.dateDropDict)) {
            this.dateDropDict[year] = {}
        }

        if (!(month in this.dateDropDict[year])) {
            this.dateDropDict[year][month] = {}
        }

        if (!(day in this.dateDropDict[year][month])) {
            this.dateDropDict[year][month][day] = []
        }

        const res = this.dateDropDict[year][month][day]

        return res
    }

    getDropListOfMonth(year: string, month: string) {
        return this.dateDropDict[year][month]
    }

    getDropListOfYear(year: string) {
        return this.dateDropDict[year]
    }

    getDropListOfAll() {
        return this.dateDropDict
    }

    getTotalOfDay(year: string, month: string, day: string) {
        let drops: number[] = [0,0,0,0,0]
        if (this.ckDropListDate(year, month, day)) {
            drops = OneDayDrop.getSummary(this.getDropListOfDay(year, month, day))
        }
        return drops

    }
    getTotalOfMonth(year: string, month: string) {
        const drops: number[][] = []
        if (this.ckDropListDate(year, month)) {
            for (const day in this.dateDropDict[year][month]) {
                drops.push(OneDayDrop.getSummary(this.dateDropDict[year][month][day]))
            }
        }
        return OneDayDrop.sum(drops)
    }

    getTotalOfYear(year: string) {
        const drops: number[][] = []
        for (const month in this.dateDropDict[year]) {
            drops.push(this.getTotalOfMonth(year, month))
        }
        return OneDayDrop.sum(drops)
    }

    getTotalOfAll() {
        const drops: number[][] = []
        for (const year in this.dateDropDict) {
            drops.push(this.getTotalOfYear(year))
        }
        return OneDayDrop.sum(drops)
    }


    getOrderedDrop() {
        const resList: OrderedDropDict = []
        for (const i in this.dateDropDict) {
            for (const j in this.dateDropDict[i]) {
                for (const k in this.dateDropDict[i][j]) {
                    const date = new Date(`${i}-${j}-${k}`)
                    const dateDict = {
                        "date": date,
                        "drop": this.dateDropDict[i][j][k]
                    }
                    resList.push(dateDict)
                }
            }
        }
    }

    getLatestHihi() {
        const res = [0, 0, 0]
        let isFirst = false

        for (const yearKey of [...Object.keys(this.dateDropDict)].reverse()) {
            for (const monthKey of [...Object.keys(this.dateDropDict[yearKey])].reverse()) {
                for (const dayKey of [...Object.keys(this.dateDropDict[yearKey][monthKey])].reverse()) {
                    const itemArray = [...this.dateDropDict[yearKey][monthKey][dayKey]].reverse()
                    for (const i of itemArray) {
                        if (i === 3 && isFirst) {
                            return res
                        } else if (i !== 3) {
                            res[i] += 1
                        }
                        isFirst = true
                    }
                }
            }
        }

        return res

    }

    copy() {
        return new BlueBoxes(this.dateDropDict)
    }

}