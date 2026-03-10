const Webamp = window.Webamp;
const webamp = new Webamp({
    windowLayout: {
    main: {
        position: { top: 0, left: 0 },
        shadeMode: true,
        closed: false,
    },
    equalizer: {
        position: { top: 230, left: 0 },
        shadeMode: true,
        closed: true,
    },
    playlist: {
        position: { top: 28, left: 0 },
        shadeMode: true,
        size: { extraHeight: 3, extraWidth: 11 },
        closed: true,
    },
    },
    enableDoubleSizeMode: false,
    initialTracks: [{
        metaData: {
            artist: "Omori",
            title: "Spaces In-between",
        },
        url: "https://files.catbox.moe/nx9wwe.mp3",
    },
    
    {
        
        metaData: {
            artist: "Undertale",
            title: "Home (Music Box)",
        },
        url: "https://files.catbox.moe/sgdpuu.mp3",
        },

    {
        metaData: {
            artist: "Omori",
            title: "By Your Side",
        },
        url: "https://files.catbox.moe/b2b93u.mp3",
    },

    {
        metaData: {
            artist: "Omori",
            title: "Sugar Star Planetarium",
        },
        url: "https://files.catbox.moe/tx6r4g.mp3",
    },
    
    {
        metaData: {
            artist: "Nier: Automata",
            title: "City Ruins",
        },
        url: "https://files.catbox.moe/nwk4nc.mp3",
    }
    ],

    }).renderWhenReady(app);             
