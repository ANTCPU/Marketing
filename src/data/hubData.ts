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
    version: "v1.1",
    statusBadge: "BATCH 1 ACTIVE",
    tagline: "The rhythm is the beats — the hub is the marching band",
    currentDateText: "Friday, Oct 23, 2026",
    liveBeat: {
      label: "Today's Live Beat:",
      items: [
        {
          name: "Mr Ben Live",
          time: "11:00 AM ET",
          highlightClass: "text-amber-400"
        },
        {
          name: "World Series Game 1",
          time: "8:00 PM ET",
          highlightClass: "text-cyan-400"
        }
      ]
    }
  },
  operatingStatus: {
    title: "Live Session Status · Oct 23, 2026",
    summary: "October Cohort closed yesterday",
    boldCohortText: "33 challengers ≈ 1/3 of arena's 95 ads",
    cohortApplyUrl: "antcpu.io/apply",
    tags: [
      "Venue: Foundry Mode (Bounded)",
      "Target: Export to GitHub"
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
        description: "11 AM welcome engine, full surface broadcast, conversation driver."
      },
      {
        days: "Tue + Thu",
        pace: "Light",
        paceColor: "sky",
        title: "Targeted Waves",
        description: "Agent layer amplification, sports rotation & focused series."
      },
      {
        days: "Fri (Today)",
        pace: "Decisions",
        paceColor: "emerald",
        title: "Decisions & Review",
        description: "Week analysis, arena pace audit, Sunday reset prep.",
        isToday: true
      }
    ],
    dailyClockTriggers: [
      {
        iconType: "am",
        label: "Morning Post Round",
        time: "Early AM",
        timeColor: "text-amber-400",
        description: "Fire-and-go from night-before approvals across all pages simultaneously."
      },
      {
        iconType: "circle",
        label: "Circle Trigger 1",
        time: "~7:30 AM",
        timeColor: "text-indigo-400",
        description: "Elevate the circle: support allies, highlight active members, prime engagement."
      },
      {
        iconType: "reply",
        label: "Trigger 2: Reply Flood",
        time: "~3:30 PM",
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
    registeredCountText: "4 Items Registered",
    stagedDrafts: [
      {
        id: "draft-mrben",
        title: "Mr Ben Facebook Live Stream",
        badge: "Beat 4: Day-of",
        badgeType: "dayof",
        details: "Live drumbeat broadcast · 11:00 AM ET · Surface: ABU Marketplace page (Joseph joins from his personal page)",
        statusText: "GREEN LIGHT FIRED",
        statusType: "fired"
      },
      {
        id: "draft-ws",
        title: "World Series Game 1 Opener",
        badge: "Small Ball Big Wins",
        badgeType: "sports",
        details: "Evening sports drumbeat · 8:00 PM ET · Surfaces: ANTCPU + Agent layer",
        statusText: "APPROVED FOR 8 PM",
        statusType: "approved"
      },
      {
        id: "draft-thankful",
        title: "Thankful Series: Buyers & MAC Rerun",
        badge: "Scheduled Oct 28/29",
        badgeType: "scheduled",
        details: "Community gratitude post · Staging numbers & copy for night review",
        statusText: "STAGED (IN DRAFT)",
        statusType: "staged"
      },
      {
        id: "draft-cohort",
        title: "Cohort 3 Arena Wrap + Cohort 4 Call",
        badge: "Flywheel",
        badgeType: "flywheel",
        details: "33 challengers milestone · Link to antcpu.io/apply · Staged for weekend run",
        statusText: "READY FOR TAP",
        statusType: "ready"
      }
    ],
    safetySealText: "Publishing mandate: Joseph's own tap fires each staged item.",
    tapRuleBadge: "1 Tap = 1 Action"
  },
  roadmap: {
    title: "Subsequent Batches in the Build Plan (Staged for review)",
    architectureTag: "8 Sections Architecture",
    batches: [
      {
        batchId: "BATCH 2 (NEXT)",
        label: "BATCH 2 (NEXT)",
        title: "Row 2: Reach & Initiatives",
        accentColor: "text-amber-400",
        sections: [
          {
            name: "2. Surfaces Inventory:",
            desc: "4 lanes (Map of Pi, ANTCPU Core, Agent Layer, ABU Marketplace)"
          },
          {
            name: "4. Campaigns & Flywheel:",
            desc: "Profile Elevation, Cohort Flywheel, Drumbeats"
          }
        ]
      },
      {
        batchId: "BATCH 3",
        label: "BATCH 3",
        title: "Row 3: Principles & Proof",
        accentColor: "text-sky-400",
        sections: [
          {
            name: "5. Doctrine Baked In:",
            desc: "Tone hierarchy, numbers rule, comment signatures"
          },
          {
            name: "6. The Proof:",
            desc: "Post log, Monday 11 AM welcome engine, Arena score (>100 pts)"
          }
        ]
      },
      {
        batchId: "BATCH 4",
        label: "BATCH 4",
        title: "Row 4: Allies & Pipeline",
        accentColor: "text-emerald-400",
        sections: [
          {
            name: "7. The People:",
            desc: "The 11 Circle members + Amanda's support rotation"
          },
          {
            name: "8. The Pipeline:",
            desc: "Clean reserved Customers Room (prospects retained by project)"
          }
        ]
      }
    ]
  }
};
