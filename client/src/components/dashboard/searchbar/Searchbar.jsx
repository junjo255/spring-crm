import { useRef, useState } from "react";
import styles from './Searchbar.module.scss';
import { RiSearch2Line, RiCloseLine } from "react-icons/ri";

const SearchBar = () => {
    const inputRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(true);
    const handleCollapse = () => {
        setIsExpanded(false);
        inputRef.current.value = ""; // Clears input when collapsing
    };

    return (
        <div className={`${styles.container} ${isExpanded ? styles.expanded : ""}`}>
            <RiSearch2Line className={styles.searchIcon} onClick={handleExpand} />
            <input
                ref={inputRef}
                type="search"
                className={styles.searchInput}
                placeholder="Search"
                onFocus={handleExpand}
            />
            {/*{isExpanded && (*/}
            {/*    <RiCloseLine className={styles.closeIcon} onClick={handleCollapse} />*/}
            {/*)}*/}
        </div>
    );
};

export default SearchBar;
