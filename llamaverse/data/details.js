// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "BTC"; // Skip if not NFT
    const serverName = "Llamaverse Genesis";
    const serverDescription = "Llamaverse is an NFT Inner Circle. Ecosystem focused on providing value to holders through opportunity and interoperability.";
    const serverWebsite = "https://x.com/Llamaverse_"; // include https://
    const serverTwitter = "https://hub.xyz/llamaverse"; // include https://
    const serverDiscord = "https://discord.gg/llamaverse"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0x9df8aa7c681f33e442a0d57b838555da863504f3";
    const gifImages = [
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/9945f35fe2c4c2efc8e6edeae4779fe3.gif?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/314580a3045539e32f23b2f97b43498d.gif?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/e4f66dd6384ab733a42a583b99d1912b.gif?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/f9ee264163b3d83c73ac7888a34a69ea.gif?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/5fe2793de142c514247d01c22d220301.gif?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/bfb758735bac0af47411b85e571e87f8.gif?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/3963a231dd944aad89375e8a9a81fc15.png?w=350",
     "https://i2.seadn.io/ethereum/0x9df8aa7c681f33e442a0d57b838555da863504f3/dd29f8e6b95b7517fedca3e034911cb9.png?w=350",
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