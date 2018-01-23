
const getIcon = (icon) => {
    let iconString = icon;
    iconString = iconString.toUpperCase().replace(/-/g, "_");
    return(iconString);
}

export default getIcon;