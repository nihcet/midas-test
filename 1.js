const countMaxAppearing = (list) => {
    // key = number, value = amount
    const countingMap = {};
    const countResult = {"result": null, "count": 0};
    for (const i of list) {
        if (countingMap[i] == undefined) {
            countingMap[i] = 0
        }

        countingMap[i] += 1
        if (countResult.result == null || countResult.count < countingMap[i]) {
            countResult.result = i;
            countResult.count = countingMap[i];
        }
    }

    return countResult;
};

const testcases = [
    {input: [6, -1, 6, 3, 3 ,6, 5, 6, 6, 7], expected: {result: 6, count: 5}},
    {input: [-1, -1, -1, -1, 0, 0, 0, 1, 2], expected: {result: -1, count: 4}},
    {input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: {result: 1, count: 1}},
];

const listToString = (list) => `[${list.join(', ')}]`;

console.table(
    testcases.map((testcase) => {
        const actual = countMaxAppearing(testcase.input);
        const [expectedResult, expectedCount, actualResult, actualCount] = [
            testcase?.expected?.result,
            testcase?.expected?.count,
            actual?.result,
            actual?.count,
        ];

        return {
            'input': listToString(testcase?.input),
            'expected-result': expectedResult,
            'expected-count': expectedCount,
            'actual-result': actualResult,
            'actual-count': actualCount,
            'is-correct': expectedResult == actualResult && expectedCount == actualCount,
        }
    }),
    ['input', 'expected-count', 'expected-result', 'actual-count', 'actual-result', 'is-correct'],
);