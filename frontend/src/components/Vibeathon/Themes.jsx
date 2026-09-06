import React, { useState } from "react";
import { FaCity, FaRoute, FaGraduationCap, FaTimes } from "react-icons/fa";

// -----------------------------------------------------------------------------
// Data extracted from the problem statement
// -----------------------------------------------------------------------------
const themeData = [
  {
    id: 1,
    title: "City Priority",
    tagline: "A complaint can be ignored. A verified record cannot.",
    icon: FaCity,
    psDescription:
      "Cities receive thousands of complaints about potholes, broken streetlights, water leaks, and unsafe infrastructure. Existing portals lack transparency; citizens cannot verify if their complaint was altered or truly resolved. Build a Web3 platform that makes civic complaint processes traceable and accountable.",
    fullProblem: `Cities receive thousands of complaints concerning potholes, broken streetlights, water leaks, overflowing bins, damaged roads, and unsafe public infrastructure.
Existing complaint portals may generate a ticket, but they rarely provide complete transparency. Citizens cannot always verify whether their complaint was changed, deleted, transferred, or genuinely resolved. Authorities also struggle with duplicate complaints, false reports, manipulated evidence, and limited public trust.
Build a citizen-friendly platform that uses Web3 to make important stages of the civic complaint process traceable, verifiable, and accountable—without exposing citizens’ private information.`,
    rounds: [
      {
        round: "Round 1 — The Vision",
        theme: "Rethink civic trust",
        challenge: "The Complaint That Cannot Disappear",
        description: `Design a Web3-enabled civic complaint platform that follows an issue from its first report to its final resolution.
Your proposed solution should answer:
- How can citizens prove that a complaint was submitted?
- Which actions should create a permanent record?
- Who should be authorised to update complaints?
- How can citizens challenge a false resolution?
- What belongs on-chain, and what must remain private?
- How will non-technical citizens use the platform?`,
      },
//       {
//         round: "Round 2 — The Proof",
//         theme: "Turn transparency into technology",
//         challenge: "Prove It Existed",
//         description: `Build a working mini-prototype demonstrating the trust layer of your proposed platform.
// The prototype should allow a citizen to:
// - Submit a complaint
// - Receive a unique complaint ID
// - Generate timestamped proof
// - View important status changes
// - Verify that a record has not been secretly altered
// - Identify whether an update came from an authorised source

// Competitive twist:
// A citizen’s complaint was visible yesterday but has disappeared today. The citizen still possesses the original complaint ID. Use your prototype to prove:
// - Whether the complaint existed
// - What information it originally contained
// - When it disappeared or changed
// - Who performed the relevant action

// Competitive edge:
// Judges will reward the simplest working implementation that produces meaningful public trust—not the solution using the largest number of Web3 terms.

// Submission:
// A working mini-prototype, brief demonstration, and explanation of the Web3 architecture.`,
//       },
//       {
//         round: "Round 3 — The Build",
//         theme: "From complaint to accountable resolution",
//         challenge: "Fix It. Prove It. Defend It.",
//         description: `Build a functional civic-issue MVP covering the complete complaint lifecycle.
// The MVP should support:
// - Complaint submission
// - Category and location selection
// - Evidence upload
// - Unique complaint identification
// - Authorised status updates
// - Transparent complaint history
// - Citizen verification of completed work
// - Disputed resolutions
// - Appropriate on-chain and off-chain storage

// Live competitive twist:
// An official marks a broken streetlight as repaired. Thirty minutes later, residents upload evidence showing that it is still broken.
// Your system must respond without deleting the official update or automatically trusting either side. It must preserve the record, reopen verification, and establish a transparent path towards the final decision.

// Winning question:
// Can your platform make accountability visible without making civic services harder to use?`,
//       },
    ],
  },
  {
    id: 2,
    title: "The Journey Home",
    tagline: "The fastest route is not always the right route.",
    icon: FaRoute,
    psDescription:
      "Navigation platforms optimise for distance and time, but women also consider lighting, footfall, transport availability, and recent community reports. Build an AI/ML-powered system that recommends journeys using context, explains its reasoning, and protects user privacy.",
    fullProblem: `Navigation platforms generally optimise journeys using distance, cost, and travel time. However, women travelling to college, work, events, or home may also consider lighting, footfall, transport availability, accessibility, open public spaces, recent community reports, and time of day.
Safety is not a fixed score. A road that is active in the afternoon may be isolated at night. A well-rated route may depend on outdated information, while a recent report may be serious but unverified.
Build an AI/ML-powered journey recommendation system that helps women compare routes using contextual information without claiming to guarantee safety, exposing live locations, encouraging surveillance, or unfairly labelling communities.`,
    rounds: [
      {
        round: "Round 1 — The Vision",
        theme: "Reimagine how a journey is recommended",
        challenge: "Beyond the Fastest Route",
        description: `Design an AI/ML-powered system that recommends journeys based on context rather than distance alone.
Your proposed solution should explain:
- Which factors influence a recommendation
- How time changes the recommendation
- How recent and historical reports are balanced
- How users understand why a route was suggested
- How incomplete information is communicated
- How location privacy is protected
- How geographical and social bias is reduced`,
      },
//       {
//         round: "Round 2 — The Proof",
//         theme: "Make the recommendation explain itself",
//         challenge: "Why This Route?",
//         description: `Build a working mini-prototype that accepts journey information and produces contextual recommendations.
// Participants may use rule-based logic, weighted scoring, a simple ML model, synthetic data, public datasets, or pre-trained AI services.
// The prototype should:
// - Accept a starting point and destination
// - Consider time and user preferences
// - Present multiple journey options
// - Recommend an option using contextual factors
// - Explain why it was recommended
// - Display data availability or confidence
// - Warn users when evidence is insufficient
// - Collect feedback

// Competitive twist:
// A historically well-rated route receives a serious negative report 20 minutes before the journey. However, the report comes from a new and unverified user.
// Your system must:
// - Consider the report without presenting it as fact
// - Reflect the importance of recent information
// - Communicate uncertainty
// - Avoid unnecessarily alarming the user
// - Explain whether the recommendation has changed

// Competitive edge:
// Judges will look beyond the interface. Teams must explain why their system reached its recommendation and where it might be wrong.

// Submission:
// A working mini-prototype, recommendation demonstration, and explanation of the underlying logic or model.`,
//       },
//       {
//         round: "Round 3 — The Build",
//         theme: "Build intelligence that adapts mid-journey",
//         challenge: "When the Route Changes",
//         description: `Build a functional journey companion that supports users before and during travel.
// The MVP should include:
// - Journey details
// - Multiple route options
// - Context-based recommendations
// - Explainable recommendation factors
// - Recent community information
// - Information-expiry logic
// - Confidence indicators
// - Feedback or reporting
// - Privacy-conscious location handling
// - Access to official emergency resources

// The solution must clearly state that it provides decision-support information and does not guarantee safety or replace emergency services.

// Live competitive twist:
// Halfway through the journey, the recommended station suddenly closes. The available alternatives contain incomplete and conflicting information.
// Your system must:
// - Recalculate available options
// - Account for the changed conditions
// - Communicate missing information
// - Explain the new recommendation
// - Protect the traveller’s live location
// - Provide a responsible fallback

// Winning question:
// Can your AI remain useful when the data becomes uncertain and the journey stops going according to plan?`,
//       },
    ],
  },
  {
    id: 3,
    title: "Freshman Information Overload",
    tagline: "Everything is announced. Almost nothing is understood.",
    icon: FaGraduationCap,
    psDescription:
      "Freshers are buried under announcements from departments, groups, and societies. Build an AI assistant that summarises, personalises, and prioritises campus information, extracts deadlines and actions, and handles conflicting details—without inventing missing data.",
    fullProblem: `Freshers join multiple department groups, class channels, student societies, placement communities, hostel groups, and email lists.
Every day brings deadlines, events, timetable changes, scholarships, workshops, competitions, placement opportunities, and forwarded notices. Important information becomes buried beneath repeated or irrelevant messages. Some announcements are incomplete, outdated, contradictory, or incorrectly marked as urgent.
Build an AI-powered campus information assistant that transforms scattered announcements into personalised, understandable, and actionable information—without hiding unexpected opportunities or inventing missing details.`,
    rounds: [
      {
        round: "Round 1 — The Vision",
        theme: "Turn campus noise into student action",
        challenge: "What Actually Matters to Me?",
        description: `Design an AI assistant that helps freshers answer:
- Does this announcement apply to me?
- Is it compulsory or optional?
- What action must I take?
- When is the deadline?
- Why has it been prioritised?
- Is the information complete and trustworthy?
- What valuable opportunity might I otherwise miss?

Your solution should address:
- Summarisation
- Deadline and action extraction
- Relevance and urgency
- Duplicate announcements
- Conflicting information
- Personalisation
- Filter bubbles
- AI-generated errors
- Original versus AI-generated content`,
      },
//       {
//         round: "Round 2 — The Proof",
//         theme: "Teach AI to find the signal",
//         challenge: "Read Less. Miss Nothing.",
//         description: `Build a working mini-prototype that processes campus announcements and creates a personalised information feed.
// The prototype should:
// - Accept multiple announcements
// - Generate concise summaries
// - Extract deadlines, venues, eligibility, and actions
// - Categorise messages
// - Estimate student relevance
// - Assign and explain priority
// - Detect possible duplicates
// - Allow students to save or dismiss information
// - Highlight missing or uncertain details

// Teams may use language-model APIs, embeddings, text classification, semantic similarity, rule-based systems, or a combination of approaches.

// Competitive twist:
// Two announcements describe the same event but contain different deadlines. The newer message came from a student group, while the older message came from an official department.
// Your prototype must:
// - Recognise that the messages are related
// - Identify the conflicting information
// - Avoid silently choosing one deadline
// - Show both sources
// - Recommend how the student can verify the correct information

// Competitive edge:
// Judges will reward systems that recognise uncertainty. A confident but incorrect answer will be treated as weaker than an honest and useful warning.

// Submission:
// A working mini-prototype, live processing demonstration, and explanation of the AI approach.`,
//       },
//       {
//         round: "Round 3 — The Build",
//         theme: "Build the student command centre",
//         challenge: "From Chaos to Campus Clarity",
//         description: `Build a functional AI platform that turns scattered campus communication into a personalised student dashboard.
// The MVP should support:
// - Announcement input or import
// - AI-generated summaries
// - Category detection
// - Deadline and action extraction
// - Personalised relevance
// - Priority ranking
// - Duplicate detection
// - Conflict detection
// - Search or question-answering
// - Tasks or reminders
// - Recommendation explanations
// - Student corrections
// - Access to original announcements

// Live competitive twist:
// Twenty campus groups forward different versions of the same event announcement. Some messages omit the venue, one contains an incorrect deadline, and the official notice has just been updated.
// Your system must:
// - Group related announcements
// - Identify conflicting details
// - Distinguish official information from forwarded versions
// - Highlight the latest reliable update
// - Preserve the original messages
// - Refuse to invent missing information`,
//       },
    ],
  },
];

// -----------------------------------------------------------------------------
// Card Component
// -----------------------------------------------------------------------------
const Card = ({ icon: Icon, title, tagline, psDescription, onClick }) => (
  <div
    className="group bg-zinc-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-amber-500 cursor-pointer w-full max-w-md"
    onClick={onClick}
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-amber-600/20 rounded-full text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-sm text-amber-300 mb-2 italic">“{tagline}”</p>
    <p className="text-zinc-400 text-sm leading-relaxed">{psDescription}</p>
    <div className="mt-4 flex justify-end text-amber-400 text-sm font-medium group-hover:text-amber-300">
      Click for details →
    </div>
  </div>
);

// -----------------------------------------------------------------------------
// Helper to format description lines
// -----------------------------------------------------------------------------
const renderDescription = (text) => {
  const lines = text.split("\n");
  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return <br key={idx} />;

    // Check for special headings
    const headingMatch = trimmed.match(
      /^(Competitive twist|Competitive edge|Submission|Winning question|Live competitive twist|Winning question):/i
    );
    if (headingMatch) {
      return (
        <p key={idx} className="text-amber-400 font-semibold mt-3">
          {trimmed}
        </p>
      );
    }

    // Bullet points
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      return (
        <p key={idx} className="text-zinc-300 text-sm pl-4 -ml-1 flex items-start gap-2">
          <span className="text-amber-400">•</span>
          <span>{trimmed.substring(2)}</span>
        </p>
      );
    }

    // Regular paragraph
    return (
      <p key={idx} className="text-zinc-300 text-sm leading-relaxed">
        {trimmed}
      </p>
    );
  });
};

// -----------------------------------------------------------------------------
// Modal Component (with formatted descriptions)
// -----------------------------------------------------------------------------
const Modal = ({ data, onClose }) => {
  if (!data) return null;

  const { title, tagline, fullProblem, rounds } = data;
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col relative border border-zinc-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className="text-amber-300 text-lg italic">“{tagline}”</p>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-700 px-6 pt-4">
          <button
            className={`py-2 px-4 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "overview"
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium transition-colors border-b-2 ${
              activeTab === "rounds"
                ? "border-amber-500 text-amber-400"
                : "border-transparent text-zinc-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("rounds")}
          >
            Rounds ({rounds.length})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "overview" && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Problem Statement
              </h3>
              <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-line">
                {fullProblem}
              </div>
            </div>
          )}

          {activeTab === "rounds" && (
            <div className="space-y-6">
              {rounds.map((round, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-800/50 rounded-xl p-5 border border-zinc-700"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-amber-400">
                        {round.round}
                      </h4>
                      <p className="text-white font-medium">{round.theme}</p>
                      <p className="text-sm text-amber-300 mb-2">
                        Challenge: {round.challenge}
                      </p>
                      <div className="space-y-1">
                        {renderDescription(round.description)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Main Themes Component (unchanged)
// -----------------------------------------------------------------------------
const Themes = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  return (
    <section className="text-white py-20" id="ps">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-14">THEMES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {themeData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              tagline={item.tagline}
              psDescription={item.psDescription}
              onClick={() => setSelectedTrack(item)}
            />
          ))}
        </div>
      </div>

      {selectedTrack && (
        <Modal data={selectedTrack} onClose={() => setSelectedTrack(null)} />
      )}
    </section>
  );
};

export default Themes;