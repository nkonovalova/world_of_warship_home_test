import {ReactNode, useEffect, useState} from "react";
import styles from "./layout.module.scss";

type LayoutT = {
    header?: ReactNode;
    children?: ReactNode;
    leftSidebar?: ReactNode;
    rightSidebar?: ReactNode;
    errorMessage?: string;
};

function Layout({header, children, leftSidebar, rightSidebar, errorMessage}: LayoutT) {
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
            <header className={styles.header}>{header}</header>
            <main className={styles.content}>
                {children}
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