/* globals Chart:false, feather:false */

(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("myChart");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            datasets: [
                {
                    data: [8, 5, 3, 6, 2, 10],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#161d6f",
                    borderWidth: 4,
                    pointBackgroundColor: "#161d6f",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SubscribersMonth");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
                {
                    data: [34, 20, 30, 15],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#161d6f",
                    borderWidth: 4,
                    pointBackgroundColor: "#161d6f",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SubscribersYear");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            datasets: [
                {
                    data: [99, 50, 30, 20, 35, 15, 10, 4, 2, 11, 17, 29],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#161d6f",
                    borderWidth: 4,
                    pointBackgroundColor: "#161d6f",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();

(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SummaryInstallation");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            datasets: [
                {
                    data: [13, 6, 18, 10, 8, 17],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#810000",
                    borderWidth: 4,
                    pointBackgroundColor: "#810000",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SummaryInstallationMonth");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
                {
                    data: [72, 100, 60, 30],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#810000",
                    borderWidth: 4,
                    pointBackgroundColor: "#810000",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SummaryInstallationYear");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            datasets: [
                {
                    data: [262, 100, 150, 60, 35, 50, 48, 20, 35, 80, 120, 140],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#810000",
                    borderWidth: 4,
                    pointBackgroundColor: "#810000",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();

(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("Sales");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
            datasets: [
                {
                    data: [2000, 6000, 1000, 3500, 5500, 1500],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#289672",
                    borderWidth: 4,
                    pointBackgroundColor: "#289672",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SalesMonth");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
                {
                    data: [19500, 15000, 10000, 12000],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#289672",
                    borderWidth: 4,
                    pointBackgroundColor: "#289672",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
(function () {
    "use strict";
    feather.replace();
    // Graphs
    var ctx = document.getElementById("SalesYear");
    // eslint-disable-next-line no-unused-vars
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            datasets: [
                {
                    data: [
                        56500,
                        30000,
                        20500,
                        15000,
                        46000,
                        60000,
                        51000,
                        31000,
                        27000,
                        42000,
                        33000,
                        28000,
                    ],
                    lineTension: 0,
                    backgroundColor: "transparent",
                    borderColor: "#289672",
                    borderWidth: 4,
                    pointBackgroundColor: "#289672",
                },
            ],
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        },
    });
})();
