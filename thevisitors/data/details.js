// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "GMR"; // Skip if not NFT
    const serverName = "The Visitors";
    const serverDescription = "With an initial minting of 10,001, The Visitors is a deflationary collection that decreases over time as new recycling events occur. There are currently 9,001 Visitors on the Polygon Network.";
    const serverWebsite = "https://thevisitorsnft.com/"; // include https://
    const serverTwitter = "https://x.com/TheVisitorsNFT"; // include https://
    const serverDiscord = "https://discord.gg/thevisitors"; // include https://
    const serverChain = "polygon";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://polygonscan.com/address/0x0a0bf65248805efa926c39bf51b6dd94e3d1a7af";
    const gifImages = [
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2Fi9YO%252F4yHXUdJsWcTqhqvfwysfL%252FGy9Em332IY4Ndp%252BIBbT9FDewbxL6csyn6g%252B90%252FRf8bVS%252FT5kfeb1GqrUURd5Z4kBhuY5wINeIEWLHEaFTYuYTjErHy9KGNC0PwGPX8wfzvCDH57VRMuTtYeuqDLv0GkUDiiQrq64VVf8C%252BV%252FJlDLb6EBU%252F2%252FdJAiLI0aDIedetqDohV9p1HttsRQYSA%253D%253D.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2Fi9YO%252F4yHXUdJsWcTqhqvfwysfL%252FGy9Em332IY4Ndp%252BIBbT9FDewbxL6csyn6g%252B90%252FRf8bVS%252FT5kfeb1GqrUURd5Z4kBhuY5wINeIEWLHEaHXpThCygH9gE%252BexU35DhBMJR%252FDqxi%252BYZx21aUZbLiTr1A8KvhrFmX3R84OIxUwSYHmhkdwwIlSeKBiRaz4pnvjA8WaC%252BB1W4V%252BSEWbRsFVIA%253D%253D.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2Fi9YO%252F4yHXUdJsWcTqhqvfwysfL%252FGy9Em332IY4Ndp%252BIBbT9FDewbxL6csyn6g%252B90%252FRf8bVS%252FT5kfeb1GqrUURd5Z4kBhuY5wINeIEWLHEaGEyEZ48y3WHCSvXGq5LyCz%252BBFC91WjulhQ45n9nJXvH45ZNK2ygBILVrIDHXDoF5QLhMYwmi%252F7nbda3vt%252Fi5zUZ1Wgweaky07HbaE9t837ow%253D%253D.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2Fi9YO%252F4yHXUdJsWcTqhqvfwysfL%252FGy9Em332IY4Ndp%252BIBbT9FDewbxL6csyn6g%252B90%252FRf8bVS%252FT5kfeb1GqrUURd5Z4kBhuY5wINeIEWLHEaHRHD7TkCLaCkJNzri8mZSyzToUxvrtdwImiJdeeVUUaSUatyMkGyIATrn7iGHOe%252BbulUa7LZlWwti0%252BlTMaN1mJkeQoXJYMThmAckTDkLBgw%253D%253D.png",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fpolygon%2Fi9YO%252F4yHXUdJsWcTqhqvfwysfL%252FGy9Em332IY4Ndp%252BIBbT9FDewbxL6csyn6g%252B90%252FRf8bVS%252FT5kfeb1GqrUURd5Z4kBhuY5wINeIEWLHEaFWOQHItzz9qMphN1xksVIJrCfwUnJooUgfzCkYgFZ8QnFigJDfjb4MydXuZY2GlrKqlEYHoEk7rOf8imKBOz1WahdU4pmnTLSYFdWVlg42bg%253D%253D.png",
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