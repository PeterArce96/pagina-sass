const profile = () => {
    const profileInfo = document.querySelector('.profile__info');
    const profileFigure = document.querySelector('.profile__figure');

    const documentScroll = () => {
        profileInfo.style.marginTop = `-${scrollY}px`;
        profileFigure.style.marginTop = `-${scrollY}px`;
        console.log(scrollY);
    };

    document.addEventListener('scroll', documentScroll);
}

export default profile;