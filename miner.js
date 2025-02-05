# 📄 Kaleido Finance Bot 🤖

**Version:** Beta

Welcome to **Kaleido Finance Bot**, an advanced mining management tool designed for optimized performance and effortless multi-wallet mining. 

## 🚀 Key Features

- **Multi-Wallet Mining Support:** Manage multiple wallets simultaneously with ease.
- **Real-Time Earnings Dashboard:** Track your mining earnings in real-time.
- **Automatic Pending → Paid Conversion:** Automate your earnings conversion.
- **Quantum Hash Algorithm Implementation:** Optimized for quantum mining efficiency.
- **Auto-Retry with Exponential Backoff:** Handle network issues smoothly.
- **Detailed Mining Statistics & Analytics:** Gain deep insights into your mining performance.
- **Cross-Platform Compatibility:** Works on Windows, macOS, and Linux.

## 📝 Registration

> **Note:** You must successfully register an account to use the bot tool.

Register for the beta version here:
[https://kaleidofinance.xyz/testnet?ref=TCEZQ4F3](https://kaleidofinance.xyz/testnet?ref=TCEZQ4F3)

## ⚙️ Configuration

### **Pools:**
- **ID:** `quantum-1` - **Name:** `Quantum Surge Pool`
- **ID:** `neural-1` - **Name:** `Neural Network Pool`
- **ID:** `chaos-1` - **Name:** `Chaos Matrix Pool`

### **Workers:**
- **ID:** `quantum-rig-1` - **Name:** `Quantum Accelerator`
- **ID:** `neural-node-1` - **Name:** `Neural Processor`
- **ID:** `chaos-engine-1` - **Name:** `Chaos Engine`
- **ID:** `quantum-rig-2` - **Name:** `Quantum Lite`
- **ID:** `neural-node-2` - **Name:** `Neural Lite`
- **ID:** `chaos-engine-2` - **Name:** `Chaos Lite`
- **ID:** `hybrid-miner-1` - **Name:** `Hybrid Miner`

You can modify the IDs and Names above directly in the code for custom configurations.

### 🔧 **How to Edit IDs:**

To change the **Worker ID** and **Pool ID**, follow these steps:

1. Open the file `miner.js`.
2. Go to **line 17-18**:
   ```javascript
   worker: "quantum-rig-1",
   pool: "quantum-1",
   ```
3. Replace `quantum-rig-1` with your preferred **Worker ID** and `quantum-1` with your preferred **Pool ID** from the list above.
4. Save the file after editing.

### ⚙️ **Adjusting Mining Parameters:**

For each Worker, you can customize the mining parameters in `miner.js` by modifying the following section:
```javascript
this.stats = {
    hashrate: 75.5,        // Adjust based on worker performance
    shares: { accepted: 0, rejected: 0 },
    efficiency: 1.4,       // Adjust for optimal efficiency
    powerUsage: 120        // Set power usage according to worker's hardware
};
```

### 🔍 **Mining Parameters (Default Settings):**

- **Quantum Accelerator:** Hashrate: 75.5 MH/s, Efficiency: 1.4, Power Usage: 120W
- **Neural Processor:** Hashrate: 45.5 MH/s, Efficiency: 1.1, Power Usage: 110W
- **Chaos Engine:** Hashrate: 55.5 MH/s, Efficiency: 1.2, Power Usage: 130W
- **Hybrid Miner:** Hashrate: 40.5 MH/s, Efficiency: 1.0, Power Usage: 100W
- **Quantum Lite:** Hashrate: 35.5 MH/s, Efficiency: 0.9, Power Usage: 90W
- **Neural Lite:** Hashrate: 30.5 MH/s, Efficiency: 0.85, Power Usage: 85W
- **Chaos Lite:** Hashrate: 25.5 MH/s, Efficiency: 0.8, Power Usage: 80W

- **Hashrate:** The mining speed (measured in MH/s).
- **Shares (Accepted/Rejected):** Track accepted/rejected mining shares.
- **Efficiency:** Optimize mining performance.
- **Power Usage:** Adjust power consumption settings based on your hardware.

Make sure to adjust these values to match the capabilities of each worker for optimal performance.

## 🚀 Installation Guide

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rpchubs/Kaleido-Finance-Bot.git
   cd Kaleido-Finance-Bot
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Wallets:**
   Create a `wallets.txt` file and add your wallet addresses (one per line):
   ```bash
   nano wallets.txt
   ```

4. **Run the Bot:**
   ```bash
   npm run start
   ```

## 💡 Contribution

Contributions are welcome! Feel free to submit pull requests to improve the bot.

## 🔐 License

This project is licensed under the MIT License.

## 📢 Support

For support, join our community on Telegram:
[https://t.me/RPC_Hubs](https://t.me/RPC_Hubs)

Happy Mining! 🚀

