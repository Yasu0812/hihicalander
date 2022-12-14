export const getDateStr = (date: Date = new Date()) => {
    const year = date.getFullYear().toString()
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return { year, month, day }
}

export const getShiftDate = (now_date:Date, shiftDay: number) => {
    const toDate = new Date(now_date)
    toDate.setDate(toDate.getDate() + shiftDay)
    return toDate
}

export const getDropRateData = (): number[] => {

    const res: number[] = [
        0.02,
        0.0396,
        0.05881,
        0.07763,
        0.09608,
        0.11416,
        0.13187,
        0.14924,
        0.16625,
        0.18293,
        0.19927,
        0.21528,
        0.23098,
        0.24636,
        0.26143,
        0.2762,
        0.29068,
        0.30486,
        0.31877,
        0.33239,
        0.34574,
        0.35883,
        0.37165,
        0.38422,
        0.39654,
        0.4086,
        0.42043,
        0.43202,
        0.44338,
        0.45452,
        0.46543,
        0.47612,
        0.48659,
        0.49686,
        0.50693,
        0.51679,
        0.52645,
        0.53592,
        0.5452,
        0.5543,
        0.56321,
        0.57195,
        0.58051,
        0.5889,
        0.59712,
        0.60518,
        0.61308,
        0.62081,
        0.6284,
        0.63583,
        0.64311,
        0.65025,
        0.65725,
        0.6641,
        0.67082,
        0.6774,
        0.68386,
        0.69018,
        0.69637,
        0.70245,
        0.7084,
        0.71423,
        0.71995,
        0.72555,
        0.73104,
        0.73641,
        0.74169,
        0.74685,
        0.75192,
        0.75688,
        0.76174,
        0.76651,
        0.77117,
        0.77575,
        0.78024,
        0.78463,
        0.78894,
        0.79316,
        0.7973,
        0.80135,
        0.80532,
        0.80922,
        0.81303,
        0.81677,
        0.82044,
        0.82403,
        0.82755,
        0.831,
        0.83438,
        0.83769,
        0.84094,
        0.84412,
        0.84723,
        0.85029,
        0.85328,
        0.85622,
        0.85909,
        0.86191,
        0.86467,
        0.86738,
        0.87003,
        0.87263,
        0.87518,
        0.87768,
        0.88012,
        0.88252,
        0.88487,
        0.88717,
        0.88943,
        0.89164,
        0.89381,
        0.89593,
        0.89801,
        0.90005,
        0.90205,
        0.90401,
        0.90593,
        0.90781,
        0.90966,
        0.91146,
        0.91323,
        0.91497,
        0.91667,
        0.91834,
        0.91997,
        0.92157,
        0.92314,
        0.92468,
        0.92618,
        0.92766,
        0.9291,
        0.93052,
        0.93191,
        0.93327,
        0.93461,
        0.93592,
        0.9372,
        0.93845,
        0.93969,
        0.94089,
        0.94207,
        0.94323,
        0.94437,
        0.94548,
        0.94657,
        0.94764,
        0.94869,
        0.94971,
        0.95072,
        0.9517,
        0.95267,
        0.95362,
        0.95454,
        0.95545,
        0.95634,
        0.95722,
        0.95807,
        0.95891,
        0.95973,
        0.96054,
        0.96133,
        0.9621,
        0.96286,
        0.9636,
        0.96433,
        0.96504,
        0.96574,
        0.96643,
        0.9671,
        0.96776,
        0.9684,
        0.96903,
        0.96965,
        0.97026,
        0.97086,
        0.97144,
        0.97201,
        0.97257,
        0.97312,
        0.97366,
        0.97418,
        0.9747,
        0.9752,
        0.9757,
        0.97619,
        0.97666,
        0.97713,
        0.97759,
        0.97804,
        0.97847,
        0.9789,
        0.97933,
        0.97974,
        0.98015,
        0.98054,
        0.98093,
        0.98131,
        0.98169,
        0.98205,
        0.98241,
        0.98276,
        0.98311,
        0.98345,
        0.98378,
        0.9841,
        0.98442,
        0.98473,
        0.98504,
        0.98534,
        0.98563,
        0.98592,
        0.9862,
        0.98647,
        0.98674,
        0.98701,
        0.98727,
        0.98752,
        0.98777,
        0.98802,
        0.98826,
        0.98849,
        0.98872,
        0.98895,
        0.98917,
        0.98939,
        0.9896,
        0.98981,
        0.99001,
        0.99021,
        0.99041,
        0.9906,
        0.99079,
        0.99097,
        0.99115,
        0.99133,
        0.9915,
        0.99167,
        0.99184,
        0.992,
        0.99216,
        0.99232,
        0.99247,
        0.99262,
        0.99277,
        0.99291,
        0.99306,
        0.99319,
        0.99333,
        0.99346,
        0.9936,
        0.99372,
        0.99385,
        0.99397,
        0.99409,
        0.99421,
        0.99433,
        0.99444,
        0.99455,
        0.99466,
        0.99477,
        0.99487,
        0.99497,
        0.99507,
        0.99517,
        0.99527,
        0.99536,
        0.99546,
        0.99555,
        0.99564,
        0.99572,
        0.99581,
        0.99589,
        0.99598,
        0.99606,
        0.99613,
        0.99621,
        0.99629,
        0.99636,
        0.99643,
        0.99651,
        0.99658,
        0.99664,
        0.99671,
        0.99678,
        0.99684,
        0.99691,
        0.99697,
        0.99703,
        0.99709,
        0.99715,
        0.9972,
        0.99726,
        0.99731,
        0.99737,
        0.99742,
        0.99747,
        0.99752,
        0.99757,
        0.99762,
        0.99767,
        0.99771,
        0.99776,
        0.9978,
        0.99785,
        0.99789,
        0.99793,
        0.99798,
        0.99802,
        0.99806,
        0.99809,
        0.99813,
        0.99817,
        0.99821,
        0.99824,
        0.99828,
        0.99831,
        0.99835,
        0.99838,
        0.99841,
        0.99844,
        0.99847,
        0.9985,
        0.99853,
        0.99856,
        0.99859,
        0.99862,
        0.99865,
        0.99868,
        0.9987,
        0.99873,
        0.99875,
        0.99878,
        0.9988,
        0.99883,
        0.99885,
        0.99887,
        0.9989,
        0.99892,
        0.99894,
        0.99896,
    ]

    return res

}