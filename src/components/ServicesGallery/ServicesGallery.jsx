import React, {useMemo, useState} from 'react';

import styles from './ServicesGallery.module.scss'
import ServicesGalleryItem from "../ServicesGalleryItem/ServicesGalleryItem";
import Dropdown from "../Dropdown/Dropdown";
import {useDispatch} from "react-redux";
import {LOAD_MORE} from "../../redux/servicesGallerySlice";

const ServicesGallery = ({handleItemClick, onKeyDown, services, servicesCopy}) => {

    const [filterType, setFilterType] = useState('Show All');
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [selected, setSelected] = useState('Show All');
    const dispatch = useDispatch();

    const handleBtnClick = e => {
        e.preventDefault();
        e.stopPropagation();
        setFilterType(() => e.target.innerText);
    }

    const handleOptionClick = e => {
        setFilterType(() => e.target.innerText);
    }

    const handleLoadMoreClick = e => {
        e.preventDefault();
        setIsLoadMore(true);
        dispatch(LOAD_MORE(servicesCopy))
    }

    const filteredImages = useMemo(() => {

        if(filterType === 'Show All') return services;

        return services.filter(img => img.category === filterType);

    }, [handleBtnClick])

    return (
        <section className={styles.servicesContainer}>
            {window.innerWidth > 1040 ?
                <div className={styles.filterButtons}>
                    <button autoFocus={true} onClick={handleBtnClick}>Show All</button>
                    <button onClick={handleBtnClick}>Design</button>
                    <button onClick={handleBtnClick}>Branding</button>
                    <button onClick={handleBtnClick}>Illustration</button>
                    <button onClick={handleBtnClick}>Motion</button>
                </div>
                :
                <Dropdown handleOptionClick={handleOptionClick} selected={selected} setSelected={setSelected} />
            }
            <div className={styles.servicesGallery}>
                <ServicesGalleryItem
                    services={filterType ? filteredImages : services}
                    onBtnClick={handleBtnClick}
                    handleItemClick={handleItemClick}
                    onKeyDown={onKeyDown}
                />
            </div>
            {isLoadMore ? null :
                <button
                    onClick={handleLoadMoreClick}
                    className={styles.moreButton}
                >
                    Load More
                </button>
            }
        </section>
    );
};

export default ServicesGallery;