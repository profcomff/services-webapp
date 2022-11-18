export function format_url(url) {
    url = url.replace(/\$\{\s*marketing_id\s*\}/i, localStorage.getItem("marketing-id"));
    return url;
}
