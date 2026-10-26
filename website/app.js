function renderHero() {
  document.getElementById("perHour").textContent = "~" + DATA.perHour;
}

function renderTrend() {
  new Chart(document.getElementById("trendChart"), {
    type: "line",
    data: {
      labels: DATA.deathsTrend.years,
      datasets: [{ label: "Road deaths", data: DATA.deathsTrend.deaths, borderColor: "#c0392b" }]
    }
  });
  document.getElementById("trendSource").textContent = "Source: " + DATA.deathsTrend.source;
}

function renderComparison() {
  new Chart(document.getElementById("compareChart"), {
    type: "bar",
    data: {
      labels: DATA.comparison.countries,
      datasets: [{ label: "Deaths per 100,000 people", data: DATA.comparison.fatalityPer100k, backgroundColor: "#c0392b" }]
    }
  });
  document.getElementById("compareSource").textContent = "Source: " + DATA.comparison.source;
}

function renderLicence() {
  const l = DATA.licenceTest;
  document.getElementById("licenceText").textContent =
    `The government plans to raise the licence test pass mark from ${l.oldPass}% to ${l.newPass}%. ` +
    `But Vietnam already has a ${l.vietnamPass}% pass mark and still has a high fatality rate. ` +
    `Tougher tests alone are not enough.`;
}

function renderChallans() {
  document.getElementById("challanAmount").textContent = DATA.unpaidChallans.amount;
  document.getElementById("challanSource").textContent = "Source: " + DATA.unpaidChallans.source;
}

renderHero();
renderTrend();
renderComparison();
renderLicence();
renderChallans();
