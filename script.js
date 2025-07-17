document.addEventListener("DOMContentLoaded", () => {
    const botGreeting = document.getElementById("bot-greeting");
    const taskContainer = document.getElementById("tasks-container");

    botGreeting.textContent = "Welcome back! Today’s Galxe time-saving task: Visit 1 campaign, 2 mins max.";

    const walletBar = document.getElementById("wallet-bar");
    const wallets = [
        { symbol: "eth", name: "Ethereum", balance: "0.42 ETH" },
        { symbol: "bnb", name: "BNB Chain", balance: "3.1 BNB" },
        { symbol: "sol", name: "Solana", balance: "10.5 SOL" }
    ];
    wallets.forEach(wallet => {
        const img = document.createElement("img");
        img.src = `https://cryptologos.cc/logos/${wallet.symbol}-${wallet.symbol}-logo.png?v=010`;
        img.alt = wallet.name;
        img.title = `${wallet.name} - ${wallet.balance}`;
        walletBar.appendChild(img);
    });

    const tasks = [
        { title: "Join Discord Campaign", level: "Easy" },
        { title: "Follow Twitter Page", level: "Easy" },
        { title: "Connect Wallet", level: "Medium" }
    ];
    tasks.forEach(task => {
        const card = document.createElement("div");
        card.className = "task-card";
        card.innerHTML = `<strong>${task.title}</strong><br><em>Level: ${task.level}</em>`;
        taskContainer.appendChild(card);
    });

    document.getElementById("completed-count").textContent = "1";
    document.getElementById("pending-count").textContent = "2";
    document.getElementById("earnings-count").textContent = "$1.50";
});