const knowledgeBase = {
    domains: {
        "aerospace": ["space", "satellite", "orbit", "nisar", "earth observation", "aperture", "payload"],
        "ai": ["ai", "artificial intelligence", "ml", "machine learning", "agent", "bot", "neural", "autonomous", "llm", "genai"],
        "strategy": ["strategy", "cto", "leadership", "scale", "valuation", "invest", "funding", "startup"],
        "software": ["software", "platform", "app", "web", "react", "code", "architecture", "system", "full stack"],
        "digital_twins": ["digital twin", "simulation", "robotic", "warehouse", "mapping", "3d", "nvidia", "omniverse", "iot", "sensor"]
    },
    anti_patterns: {
        "construction": {
            keywords: ["building", "construct", "civil", "architect", "house", "skyscraper"],
            response: "NEGATIVE MATCH. Hemanth is a <strong>Systems Architect</strong> (Software/Aerospace), not a Civil Architect. He builds <em>digital platforms</em> and <em>satellite constellations</em>, not physical buildings. However, if you need an IoT system <em>for</em> a smart building, he can assist."
        },
        "medical": {
            keywords: ["surgery", "medical", "doctor", "health", "clinic"],
            response: "NEGATIVE MATCH. Hemanth is an Engineer and Technologist, not a Medical Doctor. He can build <em>MedTech software</em> but cannot provide medical care."
        },
        "legal": {
            keywords: ["lawyer", "legal", "sue", "court", "attorney"],
            response: "NEGATIVE MATCH. Hemanth does not offer legal counsel. His expertise is technical and strategic leadership."
        },
        "dating": {
            keywords: ["date", "dinner", "coffee", "love", "marry", "girlfriend", "boyfriend", "single", "lovely"],
            response: "❤️ <strong>SOCIAL PROTOCOL INITIATED...</strong><br><br>Analyzing request parameters...<br>If <code>user.traits.includes('lovely_woman')</code>, calculated probability of acceptance is <strong>99.9%</strong>.<br><br>Hemanth is fully capable of optimizing social engagements. Proceed with caution: he may talk about <em>Space Elevators</em> during dessert."
        }
    },
    evidence: {
        "aerospace": "Hemanth published work on 'Space-to-Earth' intelligence and built <strong>Aperture</strong> (an enterprise satellite platform). He has deep expertise in orbital mechanics and remote sensing.",
        "ai": "Hemanth developed <strong>MarketLogic's AI Core</strong> and designs autonomous agentic workflows. He holds credentials in advanced data structures and algorithms.",
        "strategy": "Hemanth has founded ventures focused on high-ROI deep tech. He bridges the gap between engineering complexity and business value.",
        "software": "Hemanth is an expert Full Stack Engineer, capable of architecting scalable distributed systems and immersive web experiences.",
        "digital_twins": "Hemanth is an expert in **Robotic Simulation & Digital Twins**. He creates high-fidelity warehouse replicas and synthetic environments to train autonomous agents and optimize physical operations."
    }
};
