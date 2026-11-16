export interface HeaderData {
  appName: string;
  version: string;
  statusBadge: string;
  tagline: string;
  currentDateText: string;
  liveBeat: {
    label: string;
    items: {
      name: string;
      time: string;
      highlightClass: string;
    }[];
  };
}

export interface OperatingStatusData {
  title: string;
  summary: string;
  boldCohortText: string;
  cohortApplyUrl: string;
  tags: string[];
}

export interface WeeklyCadenceItem {
  days: string;
  pace: string;
  paceColor: 'amber' | 'sky' | 'emerald';
  title: string;
  description: string;
  isToday?: boolean;
}

export interface DailyClockItem {
  iconType: 'am' | 'circle' | 'reply' | 'quiet';
  label: string;
  time: string;
  timeColor: string;
  description: string;
}

export interface RhythmData {
  sectionNumber: string;
  title: string;
  subtitle: string;
  cadenceBadge: string;
  weeklyBeats: WeeklyCadenceItem[];
  dailyClockTriggers: DailyClockItem[];
  commentWaveRule: {
    title: string;
    text: string;
  };
}

export interface ApprovalDraftItem {
  id: string;
  title: string;
  badge: string;
  badgeType: 'dayof' | 'sports' | 'scheduled' | 'flywheel';
  details: string;
  statusText: string;
  statusType: 'fired' | 'approved' | 'staged' | 'ready';
}

export interface ApprovalData {
  sectionNumber: string;
  title: string;
  subtitle: string;
  badge: string;
  ruleOfLaw: string;
  gateStatus: string;
  queueHeader: string;
  registeredCountText: string;
  stagedDrafts: ApprovalDraftItem[];
  safetySealText: string;
  tapRuleBadge: string;
}

export interface RoadmapBatchItem {
  batchId: string;
  label: string;
  title: string;
  accentColor: string;
  sections: {
    name: string;
    desc: string;
  }[];
}

export interface HubContent {
  header: HeaderData;
  operatingStatus: OperatingStatusData;
  rhythm: RhythmData;
  approval: ApprovalData;
  roadmap: {
    title: string;
    architectureTag: string;
    batches: RoadmapBatchItem[];
  };
}

export const hubData: HubContent = {
  header: {
    appName: "ANTCPU Marketing Hub",
    version: "v1.2",
    statusBadge: "LIVE — BUILT & DEPLOYED",
    tagline: "The rhythm is the beats — the hub is the marching band",
    currentDateText: "Sunday, Nov 15, 2026",
    liveBeat: {
      label: "Today's Live Beat:",
      items: [
        {
          name: "Pathway page — live",
          time: "antcpu.github.io/antcputestpilot",
          highlightClass: "text-amber-400"
        },
        {
          name: "Navigation island landed",
          time: "Both repos",
          highlightClass: "text-cyan-400"
        }
      ]
    }
  },
  operatingStatus: {
    title: "Live Session Status · Nov 15, 2026",
    summary: "Cohort 4 in its final stretch — December is the last monthly cohort, and its last week is the biggest one ever",
    boldCohortText: "46 challengers in the system · arena at 4,620 points and climbing",
    cohortApplyUrl: "antcpu.io/apply",
    tags: [
      "Venue: The Village (GitHub)",
      "2027: 52 Weekly Cohorts"
    ]
  },
  rhythm: {
    sectionNumber: "SECTION 1",
    title: "The Rhythm",
    subtitle: "The weekly beats & daily clock governing the marketing drumbeat",
    cadenceBadge: "Weekly Cadence",
    weeklyBeats: [
      {
        days: "Mon + Wed",
        pace: "Heavy",
        paceColor: "amber",
        title: "Big Posting Days",
        description: "Full surface broadcast, conversation driver — Mondays carry the Same-Day Window."
      },
      {
        days: "Tue + Thu",
        pace: "Light",
        paceColor: "sky",
        title: "Targeted Waves",
        description: "Agent layer amplification, sports rotation & focused series. Gary's check-in rides Tuesday Block 2."
      },
      {
        days: "Fri",
        pace: "Decisions",
        paceColor: "emerald",
        title: "Decisions & Review",
        description: "Week analysis, arena pace audit, Sunday reset prep."
      }
    ],
    dailyClockTriggers: [
      {
        iconType: "am",
        label: "Morning Post Round",
        time: "7:00 AM",
        timeColor: "text-amber-400",
        description: "Fire-and-go from night-before approvals across all pages simultaneously."
      },
      {
        iconType: "circle",
        label: "Circle Trigger 1",
        time: "~7:52 AM",
        timeColor: "text-indigo-400",
        description: "Elevate the circle: support allies, highlight active members, prime engagement."
      },
      {
        iconType: "reply",
        label: "Trigger 2: Reply Flood",
        time: "~3:52 PM",
        timeColor: "text-emerald-400",
        description: "Reply to every genuine comment. Flood the timeliness with conversation."
      },
      {
        iconType: "quiet",
        label: "Quiet Hours",
        time: "Night window",
        timeColor: "text-purple-400",
        description: "Low noise. Staging next day's drafts and night approvals with Joseph."
      }
    ],
    commentWaveRule: {
      title: "The Comment-Wave Rhythm: \"We are the follow\"",
      text: "Post on ALL pages first in the early round, then read the comments. A wave of comments signals where the action already is; we flood that timeliness with direct replies."
    }
  },
  approval: {
    sectionNumber: "SECTION 3",
    title: "The Approval Flow",
    subtitle: "Drafts staged → Joseph's tap → Fire. One tap at a time.",
    badge: "Zero Auto-Publish",
    ruleOfLaw: "Rule of Law: Prepped day before → Approved night before → Explicit green light.",
    gateStatus: "Safety Gate: LOCKED",
    queueHeader: "Today's Staged Queue & Approval Status",
    registeredCountText: "3 Items Registered",
    stagedDrafts: [
      {
        id: "draft-comic",
        title: "Comic Week — Page One: A Day in the Build",
        badge: "Thankful Series · Nov 16–22",
        badgeType: "scheduled",
        details: "Seven comic pages, one a day · FB / IG / Threads · the teaser Reel is already live",
        statusText: "READY FOR MONDAY",
        statusType: "ready"
      },
      {
        id: "draft-window",
        title: "Same-Day Window #1",
        badge: "Beat 1: Day-of",
        badgeType: "dayof",
        details: "Requests land in the comments · designs ride the 3–5 PM window · posted back before 6 PM · Mon Nov 16",
        statusText: "STAGED FOR TAP",
        statusType: "staged"
      },
      {
        id: "draft-december",
        title: "December Cohort — The Final Monthly Run",
        badge: "Flywheel",
        badgeType: "flywheel",
        details: "46 challengers in the system · the last week is the biggest challenge ever · 52 weekly cohorts follow in 2027",
        statusText: "BUILDING",
        statusType: "staged"
      }
    ],
    safetySealText: "Publishing mandate: Joseph's own tap fires each staged item.",
    tapRuleBadge: "1 Tap = 1 Action"
  },
  roadmap: {
    title: "The Build From Here (Staged for Review)",
    architectureTag: "Village Architecture",
    batches: [
      {
        batchId: "THE VILLAGE",
        label: "THE VILLAGE",
        title: "Repos, Pathway & The Island",
        accentColor: "text-amber-400",
        sections: [
          {
            name: "Pathway page:",
            desc: "Live — four lanes routing every contact into its own funnel"
          },
          {
            name: "Navigation island:",
            desc: "One nav playbook across the pathway and this hub"
          },
          {
            name: "The tower repos:",
            desc: "antcputestpilot · Marketing · ads — built in the open, PRs and peer review"
          }
        ]
      },
      {
        batchId: "THE MACHINE",
        label: "THE MACHINE",
        title: "Ops, Health & Automations",
        accentColor: "text-sky-400",
        sections: [
          {
            name: "Ops page:",
            desc: "Rendered from the cohort YAML — one data source, no empty pages"
          },
          {
            name: "Health pages:",
            desc: "health.html + health.json in both repos — the codes stay stable"
          },
          {
            name: "Automations:",
            desc: "Build & deploy on merge, YAML checks on PRs, weekly rollover, nightly health"
          }
        ]
      },
      {
        batchId: "2027",
        label: "2027",
        title: "52 Weekly Cohorts",
        accentColor: "text-emerald-400",
        sections: [
          {
            name: "Day one:",
            desc: "Team mates chosen first — devs and marketers, collaboration from the start"
          },
          {
            name: "Week two:",
            desc: "Ready-for-work check — the captains surface fast"
          },
          {
            name: "Before that:",
            desc: "December's final week — the biggest challenge ever"
          }
        ]
      }
    ]
  }
};
