export const clearImage = (image, sidebar) => {
    if (sidebar){
        return image.replace('-150x150', '-218x150')
    } else if (image.includes('-150x150')) {
        return image.replace('-150x150', '');
    } else {
        return image.replace('-218x150', '')
    }
}