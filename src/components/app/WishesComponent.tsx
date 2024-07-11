import { FC, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import { Pagination } from "../pagination";

interface WishesComponentProp {
    guestName?: string
    onSubmit?: (guestName: string, wishes: string) => void;
}

export const WishesComponent: FC<WishesComponentProp> = ({
    guestName = "John Doe",
    onSubmit
}) => {

    const [name, setName] = useState<string>(guestName);
    const [wished, setWishes] = useState<string>("");
    const [page, setPage] = useState<number>(2);

    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Wishes</span>
                <span className="text-center mt-1">We would love to hear from you</span>

                <div className="flex flex-col mt-8 gap-2 w-full ">
                    <input
                        className="border rounded-xl py-2 px-4"
                        type="text"
                        name="name"
                        value={name}
                        id="name"
                        placeholder="Name"
                        required
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <textarea className="border rounded-xl py-2 px-4"
                        name="wishes"
                        form="wishes"
                        placeholder="Wishes"
                        rows={6}
                        required
                        maxLength={480}
                        onChange={(e) => {
                            setWishes(e.target.value)
                        }}
                    />
                    <span className={cx(styles.textNormal3Default, "italic", styles.textSecondary)}>{wished.length} characters out of 480</span>
                </div>
                <button className={cx(styles.buttonDefault)} onClick={() => { onSubmit && onSubmit(name, wished) }}>Send</button>

                <div className={cx(styles.gridContainer)}>
                    <div className={cx(styles.gridItem)}>
                        <span className={cx(styles.textNormal3Default)}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </span>
                        <span className={cx(styles.textNormal3Default, "text-right", "mt-2")}>John Doe</span>
                    </div>
                    <div className={cx(styles.gridItem)}>
                        <span className={cx(styles.textNormal3Default)}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </span>
                        <span className={cx(styles.textNormal3Default, "text-right", "mt-2")}>John Doe</span>
                    </div>
                    <div className={cx(styles.gridItem)}>
                        <span className={cx(styles.textNormal3Default)}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </span>
                        <span className={cx(styles.textNormal3Default, "text-right", "mt-2")}>John Doe</span>
                    </div>
                    <div className={cx(styles.gridItem)}>
                        <span className={cx(styles.textNormal3Default)}>
                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                        </span>
                        <span className={cx(styles.textNormal3Default, "text-right", "mt-2")}>John Doe</span>
                    </div>
                </div>

                <Pagination className="mt-4" selectedNumber={page} totalPages={5} onClickPagination={(selectedPage) => {
                    setPage(selectedPage)
                }}></Pagination>
            </div>
        </>
    );
};
