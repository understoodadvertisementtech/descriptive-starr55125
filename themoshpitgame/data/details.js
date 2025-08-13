// FOR EDITING

    const isNFT = true; // false if not NFT
    const ticker = "GMR"; // Skip if not NFT
    const serverName = "The Moshpit";
    const serverDescription = "A Horde Mode TPS Single Player Game powered by Collider Craftworks.";
    const serverWebsite = "https://www.themoshpitgame.com/"; // include https://
    const serverTwitter = "https://x.com/themoshpitgame"; // include https://
    const serverDiscord = "https://discord.gg/themoshpitgame"; // include https://
    const serverChain = "ethereum";
    // serverChain choices = abstract, apechain, arbitrum, avax, base, berachain, blast, bsc, ethereum, flow, monad, optimism, polygon, ronin, sei, shape, solana, soneium, unichain, zora
    const explorerLink = "https://etherscan.io/address/0x6400c9cf1961a36b40616ead83e87a973f47f548";
    const gifImages = [
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fhc%252BnPcLmWxs%252FDW99DlBQ42k40ZoyYV5jCIms5qHjwvsYDYkg0fi0HsNDccrl2x%252FQVTAFqULs7vPFhGE9lxEnwTuVECGayLFMAcSYDMU75dKcOenwAybsjqq4nL4L%252F6EjsYgi%252FVUZu8RJUB0DJMIn4rMxE6xldinjcdiy3bB6eYlRui8VCGEDIeay%252FUNkxF4N",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fhc%252BnPcLmWxs%252FDW99DlBQ42k40ZoyYV5jCIms5qHjwvtem2aivwPZ2BZmQAT351WMx%252BTy5KuV1FpzxzRsDeJw3jOLd%252FGpOClphaytUQudleOS44CgrztjTYIhBmyb7yyQ3DQ65%252FeDqQ8odAftEJe7mZWs1OsNTb37zWkBT16cvQmAjuE%252Bkn9JT%252B08Gulm06xB",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fhc%252BnPcLmWxs%252FDW99DlBQ42k40ZoyYV5jCIms5qHjwvvhF0aw6laLxHn%252FYX%252FVaZGXg8N8NVKHTVGszU3y9tO7e1LII3zSGiVNnb41OPAr3GVTSo22FP3HlLEXrh6BsR6pPzQYWt9IQjS3qrhmWykukB%252B1QsdTGURu%252BhRb2Ia3ICQN6Izu0EqXrVt0oEJzBLh4",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fhc%252BnPcLmWxs%252FDW99DlBQ42k40ZoyYV5jCIms5qHjwvuufTH5TpM5rfu5pyc0GQc1EOUBe1UWMKsfIn9bUDXBeGOnmrnj0L51M9fUgvmANIIe5EVYUf85whifBdaGuEb6wDeJO9sTo%252FfdUq%252BF%252FTZDpjOOauApyQ8r%252F5DhXe%252FHQvJun%252Br4BAFF2wvp2TCS19%252Fz",
     "https://img-cdn.magiceden.dev/da:t/rs:fill:400:0:0/plain/https%3A%2F%2Fimg.reservoir.tools%2Fimages%2Fv2%2Fmainnet%2Fz9JRSpLYGu7%252BCZoKWtAuALw9Dx80z4Vud1WrgXBzrLTJxmUpAQZ9hQVS0L5efZIueeu8ieAGwh1pUM%252BZDPGzyOY%252BhmkyZE9X0OWgFNs8O5B2ErPyHgs0px51URDCaHNf",
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