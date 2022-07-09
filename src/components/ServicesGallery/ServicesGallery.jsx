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
        setFilterType(e.target.innerText);
    }

    const handleOptionClick = e => {
        setFilterType(() => e.target.innerText);
    }

    const handleLoadMoreClick = e => {
        e.preventDefault();
        setIsLoadMore(true);
        dispatch(LOAD_MORE(servicesCopy))
    }

    const filteredGallery = useMemo(() => {

        if(filterType === 'Show All') return services;

        return services.filter(img => img.category === filterType);

    }, [handleBtnClick, handleOptionClick])

    return (
        <section className={styles.servicesContainer}>
            {window.innerWidth > 1040 ?
                <div className={styles.filterButtons}>
                    <button className={filterType === 'Show All' ? styles.active : ''} onClick={handleBtnClick}>Show All</button>
                    <button className={filterType === 'Design' ? styles.active : ''} onClick={handleBtnClick}>Design</button>
                    <button className={filterType === 'Branding' ? styles.active : ''} onClick={handleBtnClick}>Branding</button>
                    <button className={filterType === 'Illustration' ? styles.active : ''} onClick={handleBtnClick}>Illustration</button>
                    <button className={filterType === 'Motion' ? styles.active : ''} onClick={handleBtnClick}>Motion</button>
                </div>
                :
                <Dropdown handleOptionClick={handleOptionClick} selected={selected} setSelected={setSelected} />
            }
            <div className={styles.servicesGallery}>
                <ServicesGalleryItem
                    services={filteredGallery}
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