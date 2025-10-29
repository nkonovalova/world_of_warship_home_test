import {ReactNode, useEffect, useState} from "react";
import styles from "./layout.module.scss";
import Loader from "../loader/loader.tsx";

type LayoutT = {
    header?: ReactNode;
    children?: ReactNode;
    leftSidebar?: ReactNode;
    rightSidebar?: ReactNode;
    isLoading?: boolean;
    errorMessage?: string;
};

function Layout({header, children, leftSidebar, rightSidebar, errorMessage, isLoading}: LayoutT) {
    // TODO: improve error handling UX
    const [showError, setShowError] = useState(Boolean(errorMessage));

    useEffect(() => {
        setShowError(Boolean(errorMessage));
    }, [errorMessage]);

    const handleCloseError = () => {
        setShowError(false);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebarLeft}>
                {leftSidebar && <aside>{leftSidebar}</aside>}
            </div>
            <header className={styles.header}>
                <div className={styles.headerIcon}></div>
                <h1 className={styles.headerText}>{header}</h1>
            </header>
            <main className={styles.content}>
                { isLoading ? <div className={styles.loader}><Loader /></div> : children }
            </main>
            <div className={styles.sidebarRight}>
                {rightSidebar && <aside>{rightSidebar}</aside>}
            </div>
            {errorMessage && showError && (
                <div className={styles.error} role="alert">
                    <span className={styles.errorMessage}>{errorMessage}</span>
                    <button
                        type="button"
                        className={styles.errorClose}
                        onClick={handleCloseError}
                        aria-label="Close error"
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    )
}

export default Layout;