export function isTabAndMobile() {
    return window.innerWidth <= 768;
}

export function isTabLandscape() {
    return window.innerWidth >= 991 && window.innerWidth <= 1024;
}