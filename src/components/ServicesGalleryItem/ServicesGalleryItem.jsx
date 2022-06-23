import React from 'react';
import styles from './ServicesGalleryItem.module.scss';

const ServicesGalleryItem = ({onBtnClick, handleItemClick, onKeyDown, services}) => {

    return (
        <>
            {services.map((img) =>
                <div
                    key={img.id}
                    className={[styles.pictureContainer, img.chosen ? styles.chosen : null].join(' ')}
                    onClick={() => handleItemClick(img.id)}
                    onKeyDown={onKeyDown}
                    style={{backgroundImage: `url(${img.imgSrc})`, backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat' }}
                    tabIndex="0"
                >
                    <div className={styles.pictureContainer_info}>
                        <button onClick={onBtnClick}>{img.category}</button>
                        <span>{img.name}</span>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicesGalleryItem;