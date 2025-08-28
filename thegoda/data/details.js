// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "GMR"; // Skip if not NFT
    const serverName = "Gallery Of Digital Assets";
    const serverDescription = "The trusted and curated source for leading contemporary artists looking to explore digital as a new medium.";
    const serverWebsite = "https://thegoda.io/"; // include https://
    const serverTwitter = "https://x.com/TheGoda_io"; // include https://
    const serverDiscord = "https://discord.gg/thegoda"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0x0a36f2178c0db2c85471c45334a1dd17d130fd42";
    const gifImages = [
   "https://i2.seadn.io/ethereum/0x0a36f2178c0db2c85471c45334a1dd17d130fd42/b11cad443de9e27173850d29442fa863.gif?w=350",
   "https://i2.seadn.io/ethereum/0x670d4dd2e6badfbbd372d0d37e06cd2852754a04/dc218b4a472069a6a057111694ebbe/7fdc218b4a472069a6a057111694ebbe.png?w=350",
   "https://i2.seadn.io/ethereum/0x3cf69c6e77b1cf77f6bd41f4497ada96646f66a1/6752856acd2f226210bca5596bce56/756752856acd2f226210bca5596bce56.png?w=350",
   "https://i2.seadn.io/ethereum/0x6eb8176b60d7e60c5c11d6af0847fcccd6451cdf/b01c26f3afa249fd8dbea5d5f80a07e6.png?w=350",
   "https://i2.seadn.io/ethereum/0x3b94e0f0f3b32e9a84d4553d718cbb22234f6a9e/8c4447e9d330018f2e08961103ae800f.jpeg?w=350",
   "https://i2.seadn.io/ethereum/0x670d4dd2e6badfbbd372d0d37e06cd2852754a04/44c750ed1305f31a205723ca5e22c5/0444c750ed1305f31a205723ca5e22c5.png?w=350",
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
        solana: "https://avatars.githubusercontent.com/u/92743431?s=200&v=4",
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