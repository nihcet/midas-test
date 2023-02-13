const steps = [
    {
        "previous-status": "LEFT: 1, 2, 5, 8 -------- RIGHT: ___",
        "description": "1, 2",
        "time-taken": "2",
        "next-state": "LEFT: 5, 8 -------- RIGHT: 1, 2",
    },
    {
        "previous-status": "LEFT: 5, 8 -------- RIGHT: 1, 2",
        "description": "1 back",
        "time-taken": "1",
        "next-state": "LEFT: 1, 5, 8 -------- RIGHT: 2",
    },
    {
        "previous-status": "LEFT: 1, 5, 8 -------- RIGHT: 2",
        "description": "5, 8 go",
        "time-taken": "8",
        "next-state": "LEFT: 1 -------- RIGHT: 2, 5, 8",
    },
    {
        "previous-status": "LEFT: 1 -------- RIGHT: 2, 5, 8",
        "description": "2 back",
        "time-taken": "2",
        "next-state": "LEFT: 1, 2 -------- RIGHT: 5, 8",
    },
    {
        "previous-status": "LEFT: 1, 2 -------- RIGHT: 5, 8",
        "description": "1, 2 go",
        "time-taken": "2",
        "next-state": "LEFT: ___ -------- RIGHT: 1, 2, 5, 8",
    },
    {
        "previous-status": "          TOTAL",
        "description": "2 + 1 + 8 + 2 + 2 = 15",
        "time-taken": "15",
        "next-state": "",
    },
]


console.table(steps.map((step) => ({
    "previous-status": step["previous-status"].padEnd(36, ' '),
    "description": step["description"].padEnd(24, ' '),
    "time-taken": step["time-taken"],
    "next-state": step["next-state"].padEnd(36, ' '),
})), ["previous-status", "description", "time-taken", "next-state"]);

// so this will take 15 minutes
// the steps to move all people
// should be shown after execute `npm run 2`
