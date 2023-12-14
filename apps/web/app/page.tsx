import styles from "./page.module.css";
import { ReactElement } from "react";

function Gradient({
    conic,
    className,
    small,
}: {
    small?: boolean;
    conic?: boolean;
    className?: string;
}): ReactElement {
    return (
        <span
            className={[
                styles.gradient,
                conic ? styles.glowConic : undefined,
                small ? styles.gradientSmall : styles.gradientLarge,
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        />
    );
}

export default function Page(): JSX.Element {
    return (
        <main className={styles.main}>
            <div>Sinatra: music to my ears</div>
        </main>
    );
}
