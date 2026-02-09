"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 't0h4nwd6',
    dataset: 'production', // Or your dataset name
    apiVersion: '2025-01-13', // Ensure no leading or trailing spaces
    useCdn: false, // Disable CDN for real-time updates
    token: "skRLerAlPchUSysSPdhAGTAmFNdgz3FcqOiOEnfCe63DIcPXUl0MJ3qBwxcaYwkJTwmuxkzqCt1G58Vcfhhf3g0WVtuUvgu2hZipsBHREyChB8GRCfFs8ttevQkkbEcB7vkSlKkVKJDRlaQ159U5XG9uCR0IsLTC41wPS3ytOMOdW52miDrc"
});
