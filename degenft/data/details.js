// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "BTC"; // Skip if not NFT
    const serverName = "DEGEN";
    const serverDescription = "DEGEN is more than just another NFT collection—it's a tribute to the real Web3 degens out there.";
    const serverWebsite = "https://www.degenft.io/"; // include https://
    const serverTwitter = "https://x.com/Degenft_io"; // include https://
    const serverDiscord = "https://discord.gg/degenft"; // include https://
    const serverChain = "apechain";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://apescan.io/address/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1";
    const gifImages = [
     "https://i2.seadn.io/ape_chain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1/e1deb48fc2a5f19d4616d280f3f56b/3ce1deb48fc2a5f19d4616d280f3f56b.png?w=350",
     "https://i2.seadn.io/ape_chain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1/b4b7d77219e844a747734594296d6d/51b4b7d77219e844a747734594296d6d.png?w=350",
     "https://i2.seadn.io/ape_chain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1/c8a851eaa7a739b22ae04e6cbf6c16/f6c8a851eaa7a739b22ae04e6cbf6c16.png?w=350",
     "https://i2.seadn.io/ape_chain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1/1f9e0af164f1b13c0e7d3828ea3225/d61f9e0af164f1b13c0e7d3828ea3225.png?w=350",
     "https://i2.seadn.io/ape_chain/0x0e342f41e1b96532207f1ad6d991969f4b58e5a1/bd82cc26f311be3080103981bc4dbb/30bd82cc26f311be3080103981bc4dbb.png?w=350",
    ];


// END OF EDIT







// DO NOT TOUCH

    document.querySelectorAll(".replace-server").forEach(el => {
        el.innerText = serverName;
    });

    document.getElementById("replaceDescription").innerText = serverDescription;

    const websiteLink = document.getElementById("replaceWebsite");
    websiteLink.innerText = new URL(serverWebsite).hostname;
    websiteLink.href = serverWebsite;

    const twitterLink = document.getElementById("replaceTwitter");
    const twitterUrl = new URL(serverTwitter);
    twitterLink.innerText = twitterUrl.hostname + twitterUrl.pathname;
    twitterLink.href = serverTwitter;

    const discordLink = document.getElementById("replaceDiscord");
    const discordUrl = new URL(serverDiscord);
    discordLink.innerText = discordUrl.hostname + discordUrl.pathname;
    discordLink.href = serverDiscord;

    const explorerUrl = document.getElementById("explorerLink");
    explorerUrl.href = explorerLink;

    let index = 0;
    const img = document.getElementById("nftGIF");

    setInterval(() => {
        img.src = gifImages[index];
        index = (index + 1) % gifImages.length;
    }, 150);

    const chainLogos = {
        abstract: "https://abscan.org/assets/generic/html/favicon-light.ico",
        apechain: "https://static1.tokenterminal.com//apechain/logo.png?logo_hash=0bcf0b91beec0e9cc66be298dcab89245320825b",
        arbitrum: "https://guild.xyz/networkLogos/arbitrum.svg",
        avax: "https://guild.xyz/explorerLogos/snowtrace.svg",
        base: "https://guild.xyz/networkLogos/base.svg",
        berachain: "https://berascan.com/assets/generic/html/favicon-light.ico",
        blast: "https://blastscan.io/assets/blast/images/favicon-light.ico?v=25.7.4.1",
        bsc: "https://guild.xyz/explorerLogos/bscscan-dark.svg",
        ethereum: "https://guild.xyz/explorerLogos/etherscan-dark.svg",
        flow: "https://www.flowscan.io/logo/flowscan-logo.svg",
        monad: "https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/667f1590ccceec3eee19ec7c_logo.jpg",
        optimism: "https://guild.xyz/networkLogos/optimism.svg",
        polygon: "https://guild.xyz/networkLogos/polygon.svg",
        ronin: "https://guild.xyz/networkLogos/ronin.svg",
        sei: "https://guild.xyz/explorerLogos/seitrace.svg",
        shape: "https://shapescan.xyz/assets/favicon/favicon-16x16.png",
        solana: "https://solscan.io/favicon.ico",
        soneium: "https://guild.xyz/networkLogos/soneium.webp",
        unichain: "https://unichain.blockscout.com/assets/favicon/favicon-16x16.png",
        zora: "https://guild.xyz/networkLogos/zora.svg"
    };

    const chainLogo = chainLogos[serverChain];
    document.getElementById("serverChain").src = chainLogo;

    const logoBase = 'data/logo';
    const bannerBase = 'data/banner';
    const extensions = ['png', 'jpg', 'jpeg'];

    function tryLoadImage(base, callback) {
        for (const ext of extensions) {
            const path = `${base}.${ext}`;
            const img = new Image();
            img.src = path;

            img.onload = () => callback(path);
        }
    }

    tryLoadImage(logoBase, (path) => {
        document.querySelectorAll('.logo-img').forEach(el => el.src = path);
        const favicon = document.getElementById('favicon');
        if (favicon) favicon.href = path;
    });

    tryLoadImage(bannerBase, (path) => {
        const banner = document.querySelector('.banner-img');
        if (banner) banner.src = path;
    });

    const textContainer = document.getElementById("ownershipText");
    textContainer.innerHTML = isNFT ?
        `Own a(n) <span class="replace-server">${serverName}</span> NFT` :
        `Hold a minimum amount of <span class="replace-server">${ticker}</span>`;