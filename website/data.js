// Single source of truth: every number on the page comes from here (DRY).
const SRC = { toi: "TOI editorial “Sense & Licence”", who: "WHO, as cited in the TOI editorial", sc: "Supreme Court hearing, as cited in TOI" };
const DATA = {
  deaths: { 2015: 146133, 2025: 183382, perHour: 21, source: SRC.toi },
  fatalityPer100k: [
    { country: "India", value: 16.2 },
    { country: "Vietnam", value: 13 },
    { country: "Singapore", value: 1.4 },
  ],
  fatalitySource: SRC.who,
  passMarks: [
    { label: "India today", value: 60 },
    { label: "India proposed", value: 75 },
    { label: "Vietnam", value: 91 },
  ],
  passMarkSource: SRC.toi,
  unpaidChallans: { crore: 23000, bmwChallans: 42, source: SRC.sc },
  policies: [
    { name: "E-challan recovery", text: "Link unpaid fines to licence and registration renewal so ignoring a challan has a cost." },
    { name: "Repeat-offender suspension", text: "Escalate to suspension after repeated violations, with a fair appeal route." },
    { name: "Enforcement technology", text: "Cameras and number-plate recognition reduce reliance on officers on the spot." },
    { name: "Awareness and attitude", text: "Campaigns that target the assumption that every user has the right of way." },
  ],
};
