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

