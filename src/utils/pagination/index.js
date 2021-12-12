const centerRules = ({ total, activePage }) => {
  if (activePage - 1 <= 0) {
    return 1;
  }

  if (activePage === total) {
    return activePage - 2;
  }

  return activePage - 1;
};

const isNumber = value => typeof value !== 'number';

export function pagination({ total = 1, activePage = 1 } = {}) {
  if (isNumber(total)) {
    throw new TypeError('total should be a number');
  }

  if (isNumber(activePage)) {
    throw new TypeError('total should be a number');
  }

  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const visiblePages = 3;
  const pages = [
    1,
    ...Array.from(
      { length: visiblePages },
      (_, i) => i + centerRules({ total, activePage })
    ),
    total,
  ];

  let removedDuplicatedIndexFromPages = pages.filter(
    (page, index, arr) => arr.indexOf(page) === index
  );

  let firstPage = removedDuplicatedIndexFromPages[0];
  let secondPage = removedDuplicatedIndexFromPages[1];

  if (secondPage === firstPage + 2) {
    removedDuplicatedIndexFromPages = [
      firstPage,
      firstPage + 1,
      ...removedDuplicatedIndexFromPages.slice(1),
    ];
  }

  [firstPage, secondPage] = removedDuplicatedIndexFromPages;

  if (secondPage >= firstPage + 2) {
    removedDuplicatedIndexFromPages = [
      firstPage,
      '...',
      ...removedDuplicatedIndexFromPages.slice(1),
    ];
  }

  let penultimatePage =
    removedDuplicatedIndexFromPages[removedDuplicatedIndexFromPages.length - 2];
  let lastPage =
    removedDuplicatedIndexFromPages[removedDuplicatedIndexFromPages.length - 1];

  if (penultimatePage === lastPage - 2) {
    return [
      ...removedDuplicatedIndexFromPages.slice(0, -1),
      lastPage - 1,
      lastPage,
    ];
  }

  penultimatePage =
    removedDuplicatedIndexFromPages[removedDuplicatedIndexFromPages.length - 2];
  lastPage =
    removedDuplicatedIndexFromPages[removedDuplicatedIndexFromPages.length - 1];

  if (penultimatePage < lastPage - 2) {
    removedDuplicatedIndexFromPages = [
      ...removedDuplicatedIndexFromPages.slice(0, -1),
      '...',
      lastPage,
    ];
  }

  return removedDuplicatedIndexFromPages;
}
