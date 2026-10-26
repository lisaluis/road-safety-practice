# Website spec
Goal: explain why road deaths rise despite stricter rules.
Sections: hero (21 deaths/hour), trend 2015-2025, India vs Vietnam vs Singapore, licence-test debate, enforcement gap (Rs 23,000 crore), what could work.
Stack: plain HTML/CSS/JS, Chart.js (CDN). No build step.
Principles: DRY (all figures in data.js), orthogonality (one render function per block), small iterations (one commit per feature), documentation (source note under every statistic).
