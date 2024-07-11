import cx from "classnames";
import { FC } from "react";
import styles from "./Pagination.module.scss";

export interface PaginationProp {
  selectedNumber: number;
  totalPages: number;
  onClickPagination?: (index: number) => void;
  className?: string;
}

export const Pagination: FC<PaginationProp> = ({
  selectedNumber,
  totalPages,
  onClickPagination,
  className,
}) => {
  const clamp = (x: number, min: number, max: number) => {
    return Math.min(Math.max(x, min), max);
  };

  // update selectedNumber in bound of 1 - totalPages
  const selectedNumberActual = clamp(selectedNumber, 1, totalPages);
  const shouldShowPrev = selectedNumberActual != 1;
  const shouldShowNext = selectedNumberActual != totalPages;

  let shouldAddLeftElipsis = false;
  let shouldAddRightElipsis = false;
  let shouldRenderAllPagination = true;
  if (totalPages > 8) {
    shouldAddLeftElipsis = Math.max(selectedNumberActual - 2, 1) > 1;
    shouldAddRightElipsis = Math.max(selectedNumberActual + 2, 1) < totalPages;
    shouldRenderAllPagination = false;
  }

  const handleOnPaginationClick = (index: number) => {
    onClickPagination && onClickPagination(index);
  };

  const renderPaginationList = (shouldRenderAllPagination: boolean) => {
    var arr = [];
    if (shouldRenderAllPagination) {
      for (let i = 1; i <= totalPages; i++) {
        arr.push(
          <div
            key={i}
            className={cx(
              styles.paginationNumber,
              selectedNumberActual == i && styles.selected
            )}
            onClick={() => {
              handleOnPaginationClick(i);
            }}
          >
            <span className="self-center">{i}</span>
          </div>
        );
      }
    } else {
      for (
        let i = Math.max(selectedNumberActual - 2, 1);
        i <= Math.min(selectedNumberActual + 2, totalPages);
        i++
      ) {
        arr.push(
          <div
            key={i}
            className={cx(
              styles.paginationNumber,
              selectedNumberActual == i && styles.selected
            )}
            onClick={() => {
              handleOnPaginationClick(i);
            }}
          >
            <span className="self-center">{i}</span>
          </div>
        );
      }
    }
    return arr;
  };

  return (
    <>
      <div className={className}>
        <div className={styles.pagination}>
          {shouldShowPrev && (
            <>
              <div
                className={cx(
                  styles.paginationNumber,
                  "text-neutral-600"
                )}
                onClick={() => {
                  handleOnPaginationClick(selectedNumberActual - 1);
                }}
              >
                <span className="self-center p-2"> &lt;</span>
                <span className="self-center text-xs font-semibold">Prev</span>
              </div>
              <span className="border-l"></span>
            </>
          )}

          {shouldAddLeftElipsis && (
            <>
              <div
                className={cx(styles.paginationNumber)}
                onClick={() => {
                  handleOnPaginationClick(1);
                }}
              >
                <span className="self-center">1</span>
              </div>
              <div className={cx(styles.paginationNumber, styles.disabled)}>
                <span className="self-center">...</span>
              </div>
            </>
          )}

          <div className="flex mx-2 gap-2">
            {renderPaginationList(shouldRenderAllPagination)}
          </div>

          {shouldAddRightElipsis && (
            <>
              <div className={cx(styles.paginationNumber, styles.disabled)}>
                <span className="self-center">...</span>
              </div>
              <div
                className={cx(styles.paginationNumber)}
                onClick={() => {
                  handleOnPaginationClick(totalPages);
                }}
              >
                <span className="self-center">{totalPages}</span>
              </div>
            </>
          )}

          {shouldShowNext && (
            <>
              <span className="border-l my-2"></span>
              <div
                className={cx(styles.paginationNumber, "text-neutral-600")}
                onClick={() => {
                  handleOnPaginationClick(selectedNumberActual + 1);
                }}
              >
                <span className="self-center text-xs font-semibold">Next</span>
                <span className="self-center p-2"> &gt; </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
