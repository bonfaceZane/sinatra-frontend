import styles from "./page.module.css";
import { ReactElement } from "react";
import {  getOrElse, Option, some } from "fp-ts/Option";

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

export default function Page(): ReactElement {
    return (
        <main className={styles.main}>
            <h2 className={"text-red-500"}>Sinatra: music to my earsss</h2>
        </main>
    );
}
