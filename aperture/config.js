const CONFIG = {
    // API_BASE_URL: 'http://127.0.0.1:8000', // Local Dev
    // API_BASE_URL: 'YOUR_CLOUD_RUN_URL_HERE' // Production: Replace with actual URL
};

const PROD_API = 'https://antigravity-ai-ev5oigp77q-uc.a.run.app'; // Production: Replace with actual URL
CONFIG.API_BASE_URL = PROD_API; // Set default to production URL

// Auto-detect for convenience if needed, or just force user to set it.
// For now, default to localhost if not changed, BUT invalid for prod.
// Let's set a default that is clearly a placeholder if not localhost.

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    CONFIG.API_BASE_URL = 'http://127.0.0.1:8000';
} else {
    // Attempt to guess or warn
    if (CONFIG.API_BASE_URL === 'YOUR_CLOUD_RUN_URL_HERE') {
        console.warn("API_BASE_URL not configured! Please edit config.js");
    }
}
