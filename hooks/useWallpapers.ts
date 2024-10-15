export interface Wallpaper{
    url: string;
    name: string;
}

interface MainWallpapaer extends Wallpaper{
    suggested: boolean;
    liked: boolean;
    library: boolean;
}

export function usesuggestedWallpapers(): MainWallpapaer[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function uselikedWallpapers(): MainWallpapaer[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function uselibraryWallpapers(): MainWallpapaer[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}


export function useWallpapers(): MainWallpapaer[] {
    return [{
        url: "https://ideogram.ai/assets/image/lossless/response/NTYAbRrlSf-gbNp-M-Z1TQ",
        "name": "Heritage",
        suggested: false,
        liked: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/5pSCTZvgRsqcYbPq3jdFkg",
        "name": "One",
        suggested: true,
        liked: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/image/lossless/response/NTYAbRrlSf-gbNp-M-Z1TQ",
        "name": "Heritage two",
        suggested: true,
        liked: false,
        library: true
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/qTFlrGKVS6qUBoS0uvpv1A",
        "name": "Heritage Three",
        suggested: false,
        liked: true,
        library: true
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/tT3YGOHkR9q3YMjWshZlaw",
        "name": "Heritage Four",
        suggested: true,
        liked: false,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/7O6PAk77RcWhS_3v3WBuHQ",
        "name": "Heritage Five",
        suggested: false,
        liked: true,
        library: true
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/9yZ5dVtXQ5OmZsW4MTvWYQ",
        "name": "Six",
        suggested: true,
        liked: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/Xgk6jTvGSNqf5Y8IMlyNlg",
        "name": "Seven",
        suggested: true,
        liked: false,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/2gtUe_5-TLWL_QeX8lmuIQ",
        "name": "Hero",
        suggested: true,
        liked: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/m11DZpLfS2CdLtu6Nc21xQ",
        "name": "Mountain",
        suggested: false,
        liked: true,
        library: true
    }]
}