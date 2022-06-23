import React, {useState} from 'react';

import styles from './Dropdown.module.scss';
import ArrowImg from '../../images/Triangle.png'

const Dropdown = ({selected, setSelected, handleOptionClick}) => {

    const [isActive, setIsActive] = useState(false);

    const options = [
        { value: 'all', label: 'Show All' },
        { value: 'design', label: 'Design' },
        { value: 'branding', label: 'Branding' },
        { value: 'illustration', label: 'Illustration' },
        { value: 'motion', label: 'Motion' }
    ]

    return (
        <div className={styles.dropdown}
             style={{backgroundImage: `url(${ArrowImg})`,
                    backgroundPosition: '94% 50%',
                    backgroundRepeat: 'no-repeat' }}
        >
            <div
                className={styles.dropdownBtn}
                onClick={() => setIsActive(!isActive)}
            >
                {selected}
            </div>
            {isActive && (
                <div onClick={handleOptionClick} className={styles.dropdownContent}>
                    {options.map(option => (
                        <div key={option.value}
                             onClick={e => {
                                setSelected(option.label);
                                setIsActive(false);
                                // handleOptionClick()
                        }}
                            className={styles.dropdownItem}
                        >
                            {option.label}
                        </div>
                    ))}

                </div>
            )}

        </div>
    );
};

export default Dropdown;