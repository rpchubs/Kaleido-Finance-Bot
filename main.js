// main.js
import {MiningCoordinator} from'./miner.js';

// Start the mining process
new MiningCoordinator().start().catch(console.error);