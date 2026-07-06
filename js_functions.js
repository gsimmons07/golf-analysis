const categories = [
      "Driving Dist.",
      "Driving Acc.",
      "Approach",
      "Around Green",
      "Putting"
    ];

    function createPlaceholderPlayer(name, shortName, stats) {
      const total = stats["Driving Dist."] + stats["Driving Acc."] + stats.Approach + stats["Around Green"] + stats.Putting;

      return {
        name,
        shortName,
        stats,
        recentResults: [
          { event: "Travelers", finish: "T18", ott: stats["Driving Dist."] - 0.3, app: stats.Approach - 0.2, arg: stats["Around Green"], putt: stats.Putting - 0.1, total: total - 0.6 },
          { event: "U.S. Open", finish: "T24", ott: stats["Driving Dist."] - 0.5, app: stats.Approach - 0.4, arg: stats["Around Green"] + 0.1, putt: stats.Putting - 0.3, total: total - 1.1 },
          { event: "Memorial", finish: "T10", ott: stats["Driving Dist."], app: stats.Approach + 0.2, arg: stats["Around Green"] + 0.2, putt: stats.Putting, total: total + 0.4 },
          { event: "PGA Champ.", finish: "T31", ott: stats["Driving Dist."] - 0.4, app: stats.Approach - 0.1, arg: stats["Around Green"] - 0.2, putt: stats.Putting - 0.2, total: total - 0.9 },
          { event: "RBC Heritage", finish: "T16", ott: stats["Driving Dist."] - 0.1, app: stats.Approach + 0.1, arg: stats["Around Green"], putt: stats.Putting + 0.2, total: total + 0.2 }
        ],
        bestResults: [
          { event: "Memorial", finish: "T10", ott: stats["Driving Dist."], app: stats.Approach + 0.2, arg: stats["Around Green"] + 0.2, putt: stats.Putting, total: total + 0.4 },
          { event: "RBC Heritage", finish: "T16", ott: stats["Driving Dist."] - 0.1, app: stats.Approach + 0.1, arg: stats["Around Green"], putt: stats.Putting + 0.2, total: total + 0.2 },
          { event: "Players", finish: "T21", ott: stats["Driving Dist."] + 0.2, app: stats.Approach, arg: stats["Around Green"] - 0.1, putt: stats.Putting - 0.1, total },
          { event: "Travelers", finish: "T18", ott: stats["Driving Dist."] - 0.3, app: stats.Approach - 0.2, arg: stats["Around Green"], putt: stats.Putting - 0.1, total: total - 0.6 },
          { event: "Genesis", finish: "T28", ott: stats["Driving Dist."] - 0.2, app: stats.Approach - 0.3, arg: stats["Around Green"] + 0.1, putt: stats.Putting - 0.2, total: total - 0.6 }
        ]
      };
    }

    const players = {
      scheffler: {
        name: "Scottie Scheffler",
        shortName: "Scheffler",
        stats: {
          "Driving Dist.": 1.55,
          "Driving Acc.": 1.25,
          "Approach": 2.75,
          "Around Green": 2.15,
          "Putting": 1.75
        },
        recentResults: [
          { event: "Travelers", finish: "T6", ott: 1.2, app: 1.9, arg: 0.4, putt: 0.7, total: 4.2 },
          { event: "U.S. Open", finish: "T3", ott: 1.5, app: 2.4, arg: 0.8, putt: -0.1, total: 4.6 },
          { event: "Memorial", finish: "1", ott: 1.8, app: 2.9, arg: 1.1, putt: 0.9, total: 6.7 },
          { event: "PGA Champ.", finish: "T8", ott: 1.0, app: 1.6, arg: 0.6, putt: 0.2, total: 3.4 },
          { event: "RBC Heritage", finish: "T12", ott: 0.7, app: 1.5, arg: 0.5, putt: 0.1, total: 2.8 }
        ],
        bestResults: [
          { event: "Memorial", finish: "1", ott: 1.8, app: 2.9, arg: 1.1, putt: 0.9, total: 6.7 },
          { event: "Arnold Palmer", finish: "1", ott: 1.4, app: 2.7, arg: 0.7, putt: 1.2, total: 6.0 },
          { event: "Players", finish: "T2", ott: 1.6, app: 2.5, arg: 0.5, putt: 0.8, total: 5.4 },
          { event: "U.S. Open", finish: "T3", ott: 1.5, app: 2.4, arg: 0.8, putt: -0.1, total: 4.6 },
          { event: "Travelers", finish: "T6", ott: 1.2, app: 1.9, arg: 0.4, putt: 0.7, total: 4.2 }
        ]
      },
      mcilroy: {
        name: "Rory McIlroy",
        shortName: "McIlroy",
        stats: {
          "Driving Dist.": 2.45,
          "Driving Acc.": 0.65,
          "Approach": 1.35,
          "Around Green": 0.45,
          "Putting": 1.05
        },
        recentResults: [
          { event: "Travelers", finish: "T14", ott: 2.0, app: 0.8, arg: 0.1, putt: 0.4, total: 3.3 },
          { event: "U.S. Open", finish: "T19", ott: 1.7, app: 0.6, arg: 0.3, putt: -0.2, total: 2.4 },
          { event: "Memorial", finish: "T4", ott: 2.3, app: 1.2, arg: 0.4, putt: 0.6, total: 4.5 },
          { event: "PGA Champ.", finish: "T7", ott: 2.1, app: 1.0, arg: -0.1, putt: 0.8, total: 3.8 },
          { event: "Wells Fargo", finish: "1", ott: 2.8, app: 1.5, arg: 0.2, putt: 1.0, total: 5.5 }
        ],
        bestResults: [
          { event: "Wells Fargo", finish: "1", ott: 2.8, app: 1.5, arg: 0.2, putt: 1.0, total: 5.5 },
          { event: "Memorial", finish: "T4", ott: 2.3, app: 1.2, arg: 0.4, putt: 0.6, total: 4.5 },
          { event: "PGA Champ.", finish: "T7", ott: 2.1, app: 1.0, arg: -0.1, putt: 0.8, total: 3.8 },
          { event: "Travelers", finish: "T14", ott: 2.0, app: 0.8, arg: 0.1, putt: 0.4, total: 3.3 },
          { event: "Genesis", finish: "T5", ott: 1.9, app: 0.9, arg: 0.4, putt: -0.1, total: 3.1 }
        ]
      },
      morikawa: createPlaceholderPlayer("Collin Morikawa", "Morikawa", {
        "Driving Dist.": 0.8,
        "Driving Acc.": 1.1,
        "Approach": 2.1,
        "Around Green": 0.3,
        "Putting": 0.4
      }),
      schauffele: createPlaceholderPlayer("Xander Schauffele", "Schauffele", {
        "Driving Dist.": 1.2,
        "Driving Acc.": 0.9,
        "Approach": 1.7,
        "Around Green": 0.6,
        "Putting": 0.9
      }),
      cantlay: createPlaceholderPlayer("Patrick Cantlay", "Cantlay", {
        "Driving Dist.": 0.7,
        "Driving Acc.": 0.8,
        "Approach": 1.2,
        "Around Green": 0.5,
        "Putting": 1.0
      }),
      hovland: createPlaceholderPlayer("Viktor Hovland", "Hovland", {
        "Driving Dist.": 1.3,
        "Driving Acc.": 0.5,
        "Approach": 1.8,
        "Around Green": 0.1,
        "Putting": 0.5
      }),
      thomas: createPlaceholderPlayer("Justin Thomas", "Thomas", {
        "Driving Dist.": 0.9,
        "Driving Acc.": 0.4,
        "Approach": 1.9,
        "Around Green": 0.8,
        "Putting": 0.2
      }),
      finau: createPlaceholderPlayer("Tony Finau", "Finau", {
        "Driving Dist.": 1.5,
        "Driving Acc.": 0.3,
        "Approach": 1.1,
        "Around Green": 0.4,
        "Putting": 0.3
      }),
      burns: createPlaceholderPlayer("Sam Burns", "Burns", {
        "Driving Dist.": 0.6,
        "Driving Acc.": 0.2,
        "Approach": 0.9,
        "Around Green": 0.4,
        "Putting": 1.6
      }),
      placeholder: createPlaceholderPlayer("Player Placeholder", "Placeholder", {
        "Driving Dist.": 0.5,
        "Driving Acc.": 0.5,
        "Approach": 0.8,
        "Around Green": 0.4,
        "Putting": 0.7
      }),
      rahm: createPlaceholderPlayer("Jon Rahm", "Rahm", {
        "Driving Dist.": 1.6,
        "Driving Acc.": 0.7,
        "Approach": 1.8,
        "Around Green": 0.5,
        "Putting": 0.8
      }),
      fleetwood: createPlaceholderPlayer("Tommy Fleetwood", "Fleetwood", {
        "Driving Dist.": 0.9,
        "Driving Acc.": 1.0,
        "Approach": 1.4,
        "Around Green": 0.7,
        "Putting": 0.6
      }),
      lowry: createPlaceholderPlayer("Shane Lowry", "Lowry", {
        "Driving Dist.": 0.4,
        "Driving Acc.": 0.8,
        "Approach": 1.5,
        "Around Green": 0.9,
        "Putting": 0.5
      }),
      day: createPlaceholderPlayer("Jason Day", "Day", {
        "Driving Dist.": 0.6,
        "Driving Acc.": 0.4,
        "Approach": 0.9,
        "Around Green": 1.0,
        "Putting": 1.2
      }),
      spieth: createPlaceholderPlayer("Jordan Spieth", "Spieth", {
        "Driving Dist.": 0.3,
        "Driving Acc.": 0.3,
        "Approach": 1.3,
        "Around Green": 1.2,
        "Putting": 0.9
      }),
      fowler: createPlaceholderPlayer("Rickie Fowler", "Fowler", {
        "Driving Dist.": 0.5,
        "Driving Acc.": 0.6,
        "Approach": 1.0,
        "Around Green": 0.6,
        "Putting": 1.0
      }),
      harman: createPlaceholderPlayer("Brian Harman", "Harman", {
        "Driving Dist.": 0.1,
        "Driving Acc.": 1.2,
        "Approach": 0.9,
        "Around Green": 0.5,
        "Putting": 1.3
      }),
      young: createPlaceholderPlayer("Cameron Young", "Young", {
        "Driving Dist.": 2.0,
        "Driving Acc.": 0.2,
        "Approach": 1.0,
        "Around Green": 0.2,
        "Putting": 0.4
      }),
      theegala: createPlaceholderPlayer("Sahith Theegala", "Theegala", {
        "Driving Dist.": 0.8,
        "Driving Acc.": 0.4,
        "Approach": 1.1,
        "Around Green": 0.8,
        "Putting": 1.1
      }),
      kim: createPlaceholderPlayer("Tom Kim", "Kim", {
        "Driving Dist.": 0.3,
        "Driving Acc.": 1.1,
        "Approach": 1.2,
        "Around Green": 0.4,
        "Putting": 0.8
      }),
      im: createPlaceholderPlayer("Sungjae Im", "Im", {
        "Driving Dist.": 0.7,
        "Driving Acc.": 0.9,
        "Approach": 1.0,
        "Around Green": 0.7,
        "Putting": 0.7
      }),
      conners: createPlaceholderPlayer("Corey Conners", "Conners", {
        "Driving Dist.": 0.8,
        "Driving Acc.": 1.2,
        "Approach": 1.6,
        "Around Green": 0.1,
        "Putting": 0.2
      }),
      fitzpatrick: createPlaceholderPlayer("Matt Fitzpatrick", "Fitzpatrick", {
        "Driving Dist.": 0.5,
        "Driving Acc.": 1.0,
        "Approach": 1.1,
        "Around Green": 0.6,
        "Putting": 0.8
      }),
      rose: createPlaceholderPlayer("Justin Rose", "Rose", {
        "Driving Dist.": 0.4,
        "Driving Acc.": 0.7,
        "Approach": 1.4,
        "Around Green": 0.8,
        "Putting": 0.7
      }),
      matsuyama: createPlaceholderPlayer("Hideki Matsuyama", "Matsuyama", {
        "Driving Dist.": 0.9,
        "Driving Acc.": 0.6,
        "Approach": 1.9,
        "Around Green": 0.7,
        "Putting": 0.2
      }),
      hatton: createPlaceholderPlayer("Tyrrell Hatton", "Hatton", {
        "Driving Dist.": 0.7,
        "Driving Acc.": 0.6,
        "Approach": 1.3,
        "Around Green": 0.5,
        "Putting": 1.0
      }),
      english: createPlaceholderPlayer("Harris English", "English", {
        "Driving Dist.": 0.5,
        "Driving Acc.": 0.8,
        "Approach": 0.8,
        "Around Green": 0.6,
        "Putting": 1.2
      }),
      henley: createPlaceholderPlayer("Russell Henley", "Henley", {
        "Driving Dist.": 0.2,
        "Driving Acc.": 1.3,
        "Approach": 1.4,
        "Around Green": 0.4,
        "Putting": 0.6
      }),
      straka: createPlaceholderPlayer("Sepp Straka", "Straka", {
        "Driving Dist.": 0.8,
        "Driving Acc.": 0.9,
        "Approach": 1.2,
        "Around Green": 0.3,
        "Putting": 0.6
      }),
      clark: createPlaceholderPlayer("Wyndham Clark", "Clark", {
        "Driving Dist.": 1.5,
        "Driving Acc.": 0.3,
        "Approach": 0.9,
        "Around Green": 0.5,
        "Putting": 1.3
      })
    };

    const selectedPlayer = document.querySelector("#selectedPlayer");
    const playerButtons = document.querySelectorAll("#playerList button");
    const playerSearch = document.querySelector("#playerSearch");
    const shape = document.querySelector("#playerShape");
    const pointsGroup = document.querySelector("#points");
    const valueLabelsGroup = document.querySelector("#valueLabels");
    const axesGroup = document.querySelector("#axes");
    const ringsGroup = document.querySelector("#rings");
    const axisLabelsGroup = document.querySelector("#axisLabels");
    const legendName = document.querySelector("#legendName");
    const recentResultsBody = document.querySelector("#recentResultsBody");
    const bestResultsBody = document.querySelector("#bestResultsBody");
    const profileView = document.querySelector("#profileView");
    const overallProfile = document.querySelector("#overallProfile");
    const breakdownProfile = document.querySelector("#breakdownProfile");
    const skillGroups = document.querySelector("#skillGroups");
    const center = { x: 380, y: 330 };
    const maxRadius = 240;
    const minValue = -3;
    const maxValue = 3;

    function angleForIndex(index) {
      return -Math.PI / 2 + index * ((Math.PI * 2) / categories.length);
    }

    function radiusForValue(value) {
      const clamped = Math.max(minValue, Math.min(maxValue, value));
      return ((clamped - minValue) / (maxValue - minValue)) * maxRadius;
    }

    function pointForValue(value, index) {
      const angle = angleForIndex(index);
      const radius = radiusForValue(value);

      return pointForRadius(radius, index);
    }

    function pointForRadius(radius, index) {
      const angle = angleForIndex(index);

      return {
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius
      };
    }

    function drawBaseChart() {
      [60, 120, 180, 240].forEach((radius) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("class", "radar-ring");
        circle.setAttribute("cx", center.x);
        circle.setAttribute("cy", center.y);
        circle.setAttribute("r", radius);
        ringsGroup.appendChild(circle);
      });

      categories.forEach((category, index) => {
        const outer = pointForValue(maxValue, index);
        const label = pointForRadius(maxRadius + 44, index);
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        line.setAttribute("class", "radar-axis");
        line.setAttribute("x1", center.x);
        line.setAttribute("y1", center.y);
        line.setAttribute("x2", outer.x);
        line.setAttribute("y2", outer.y);
        axesGroup.appendChild(line);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("class", "axis-label");
        text.setAttribute("x", label.x);
        text.setAttribute("y", label.y);
        text.setAttribute("text-anchor", index === 1 || index === 2 ? "start" : index === 3 || index === 4 ? "end" : "middle");
        text.textContent = category;
        axisLabelsGroup.appendChild(text);
      });
    }

    function formatSg(value) {
      return value > 0 ? `+${value.toFixed(2)}` : value.toFixed(2);
    }

    function formatTableSg(value) {
      return value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1);
    }

    function scoreFromSg(value) {
      return Math.round(Math.max(4, Math.min(98, 50 + value * 15)));
    }

    function markerClass(score) {
      if (score < 40) {
        return "skill-marker-low";
      }

      if (score < 58) {
        return "skill-marker-mid";
      }

      return "";
    }

    function skillRow(label, score, isMajor = false) {
      const row = document.createElement("div");
      const markerText = isMajor ? score : "";

      row.className = `skill-row ${isMajor ? "skill-row-major" : "skill-row-minor"}`;
      row.innerHTML = `
        <div class="skill-label">${label}</div>
        <div class="skill-track">
          <span class="skill-track-fill" style="width: ${score}%;"></span>
          <span class="skill-marker ${markerClass(score)}" style="--score: ${score}%;">${markerText}</span>
        </div>
      `;

      return row;
    }

    function renderBreakdown(player) {
      const stats = player.stats;
      const drivingScore = scoreFromSg((stats["Driving Dist."] + stats["Driving Acc."]) / 2);
      const approachScore = scoreFromSg(stats.Approach);
      const aroundGreenScore = scoreFromSg(stats["Around Green"]);
      const puttingScore = scoreFromSg(stats.Putting);
      const groups = [
        {
          label: "Driving",
          score: drivingScore,
          rows: [
            ["Distance", scoreFromSg(stats["Driving Dist."])],
            ["Accuracy", scoreFromSg(stats["Driving Acc."])]
          ]
        },
        {
          label: "Approach",
          score: approachScore,
          rows: [
            ["50-100 Yds", scoreFromSg(stats.Approach - 0.2)],
            ["100-150", scoreFromSg(stats.Approach + 0.1)],
            ["150-200", scoreFromSg(stats.Approach)],
            ["200+", scoreFromSg(stats.Approach - 0.3)]
          ]
        },
        {
          label: "Around Green",
          score: aroundGreenScore,
          rows: [
            ["Fairway", scoreFromSg(stats["Around Green"] - 0.1)],
            ["Rough", scoreFromSg(stats["Around Green"] - 0.2)],
            ["Bunker", scoreFromSg(stats["Around Green"] + 0.1)]
          ]
        },
        {
          label: "Putting",
          score: puttingScore,
          rows: [
            ["2-5 Feet", scoreFromSg(stats.Putting + 0.2)],
            ["5-30", scoreFromSg(stats.Putting + 0.1)],
            ["30+", scoreFromSg(stats.Putting - 0.3)]
          ]
        }
      ];

      skillGroups.innerHTML = "";

      groups.forEach((group) => {
        const section = document.createElement("div");
        section.className = "skill-section";
        section.appendChild(skillRow(group.label, group.score, true));

        group.rows.forEach(([label, score]) => {
          section.appendChild(skillRow(label, score));
        });

        skillGroups.appendChild(section);
      });
    }

    function renderResultsTable(container, results) {
      container.innerHTML = "";

      results.forEach((result) => {
        const row = document.createElement("div");
        row.className = "profile-row";
        row.innerHTML = `
          <strong title="${result.event}">${result.event}</strong>
          <span>${result.finish}</span>
          <span>${formatTableSg(result.ott)}</span>
          <span>${formatTableSg(result.app)}</span>
          <span>${formatTableSg(result.arg)}</span>
          <span>${formatTableSg(result.putt)}</span>
          <b>${formatTableSg(result.total)}</b>
        `;
        container.appendChild(row);
      });
    }

    function updateChart(playerKey) {
      const player = players[playerKey] || players.scheffler;
      const chartPoints = categories.map((category, index) => pointForValue(player.stats[category], index));

      selectedPlayer.textContent = player.name;
      legendName.textContent = `${player.shortName}'s Profile`;
      renderResultsTable(recentResultsBody, player.recentResults);
      renderResultsTable(bestResultsBody, player.bestResults);
      renderBreakdown(player);
      shape.setAttribute("points", chartPoints.map((point) => `${point.x},${point.y}`).join(" "));
      pointsGroup.innerHTML = "";
      valueLabelsGroup.innerHTML = "";

      chartPoints.forEach((point, index) => {
        const value = player.stats[categories[index]];
        const angle = angleForIndex(index);
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");

        circle.setAttribute("class", "radar-point");
        circle.setAttribute("cx", point.x);
        circle.setAttribute("cy", point.y);
        circle.setAttribute("r", 8);
        pointsGroup.appendChild(circle);

        label.setAttribute("class", "point-value");
        label.setAttribute("x", point.x - Math.cos(angle) * 22);
        label.setAttribute("y", point.y - Math.sin(angle) * 22 + 5);
        label.setAttribute("text-anchor", index === 1 || index === 2 ? "start" : index === 3 || index === 4 ? "end" : "middle");
        label.textContent = formatSg(value);
        valueLabelsGroup.appendChild(label);
      });
    }

    playerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        playerButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        updateChart(button.dataset.player);
      });
    });

    playerSearch.addEventListener("input", () => {
      const query = playerSearch.value.trim().toLowerCase();

      playerButtons.forEach((button) => {
        const playerName = button.textContent.toLowerCase();
        button.hidden = !playerName.includes(query);
      });
    });

    profileView.addEventListener("change", () => {
      const showBreakdown = profileView.value === "breakdown";

      overallProfile.hidden = showBreakdown;
      breakdownProfile.hidden = !showBreakdown;
    });

    drawBaseChart();
    updateChart("scheffler");
