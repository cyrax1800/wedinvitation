import { FC, useState } from "react";
import cx from "classnames";
import styles from "./Landing.module.scss";
import { Pagination } from "../pagination";
import { WishesItem } from "@/libs/spreadsheet";

interface WishesComponentProp {
    guestName?: string,
    wishes: WishesItem[],
    onSubmit?: (guestName: string, wishes: string) => void;
}

const FORM_ERROR_STATE = {
    name: "",
    wish: "",
};

export const WishesComponent: FC<WishesComponentProp> = ({
    guestName = "John Doe",
    wishes,
    onSubmit
}) => {
    const [name, setName] = useState<string>(guestName);
    const [wished, setWishes] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [errorState, setErrorState] = useState(FORM_ERROR_STATE);

    const validateAndSubmit = (name: string, wish: string) => {
        let isError = false;
        const newState = { ...FORM_ERROR_STATE };
        if (name.trim().length == 0) {
            newState.name = "Name tidak boleh kosong";
            isError = true
        }
        if (wish.trim().length == 0) {
            newState.wish = "Wish tidak boleh kosong";
            isError = true
        }

        setErrorState(newState);
        if (!isError) {
            onSubmit && onSubmit(name, wished)
        }
    }

    return (
        <>
            <div className={cx(styles.sectionContainer)}>
                <span className={cx(styles.textTitle)}>Wishes</span>
                <span className="text-center mt-1">We would love to hear from you</span>

                <div className="flex flex-col mt-8 w-full ">
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
                    {errorState.name.length != 0 && (<>
                        <span className={cx(styles.textNormal3Default, "text-red-400")}>{errorState.name}</span>
                    </>)}
                    <textarea className="border rounded-xl py-2 px-4 mt-2"
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
                    {errorState.wish.length != 0 && (<>
                        <span className={cx(styles.textNormal3Default, "text-red-400")}>{errorState.wish}</span>
                    </>)}
                    <span className={cx(styles.textNormal3Default, "italic", styles.textSecondary)}>{wished.length} characters out of 480</span>
                </div>
                <button className={cx(styles.buttonDefault)} onClick={() => {
                    validateAndSubmit(name, wished)
                }}>Send</button>


                <div className={cx(styles.gridContainer)}>
                    {
                        wishes.map((e, idx) => {
                            if (idx >= (page - 1) * 6 && idx <= Math.min((page * 6) - 1, wishes.length))
                                return (<div key={idx} className={cx(styles.gridItem)}>
                                    <span className={cx(styles.textNormal3Default)}>
                                        {e.wish}
                                    </span>
                                    <span className={cx(styles.textNormal3Default, "text-right", "mt-2")}>{e.name}</span>
                                </div>)
                        })
                    }
                </div>

                {wishes.length > 0 && (
                    <Pagination className="mt-4" selectedNumber={page} totalPages={Math.ceil(wishes.length / 6)} onClickPagination={(selectedPage) => {
                        setPage(selectedPage)
                    }}></Pagination>
                )}

            </div>
        </>
    );
};
