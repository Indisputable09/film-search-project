const paginationClass = {
  ACTIVE: 'active',
  BTN: 'btn-pagination',
  NUMB: 'numb',
  PREV_PAGE: 'prev-page',
  NEXT_PAGE: 'next-page',
  FIRST_PAGE: 'first-page',
  LAST_PAGE: 'last-page',
  DOTS: 'dots',
  DISABLED: 'disabled',
};

function createPaginationMarkup(pages, page) {
  if (pages < 2) {
    return '';
  }
  let str = `<ul class="pagination-list" data-last="${pages}" data-current="${page}">`;
  let active;
  let disabled;
  let prevPage = page - 1;
  let nextPage = page + 1;

  if (page > 1) {
    str += `<li class="${paginationClass.BTN} ${
      paginationClass.PREV_PAGE
    }" ><button data-page="${page - 1}">&#129144;</button></li>`;
  }

  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page === p ? paginationClass.ACTIVE : '';
      disabled = page === p ? paginationClass.DISABLED : '';
      str += `<li class="${paginationClass.NUMB} ${active}" ><button ${disabled} data-page="${p}">${p}</button></li>`;
    }
  } else {
    if (page > 2) {
      str += `<li class="${paginationClass.NUMB} ${paginationClass.FIRST_PAGE}" ><button data-page="1">1</button></li>`;
      if (page > 3 && window.innerWidth>768) {
        str += `<li class="${paginationClass.DOTS}"><button ${paginationClass.DISABLED}>...</button></li>`;
      }
    }
    // Determine how many pages to show after the current page index
    if (page === 1) {
      nextPage += 2;
    } else if (page === 2) {
      nextPage += 1;
    }

    if (page === pages) {
      prevPage -= 2;
    } else if (page === pages - 1) {
      prevPage -= 1;
    }

    for (let p = prevPage; p <= nextPage; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue;
      }
      active = page === p ? paginationClass.ACTIVE : '';
      disabled = page === p ? paginationClass.DISABLED : '';
      str += `<li class="${paginationClass.NUMB} ${active}" ><button ${disabled} data-page="${p}">${p}</button></li>`;
    }

    if (page < pages - 1 && window.innerWidth>768) {
      if (page < pages - 2 ) {
        str += `<li class="${paginationClass.DOTS}"><button ${paginationClass.DISABLED}>...</button></li>`;
      }
      str += `<li class="${paginationClass.NUMB} ${paginationClass.LAST_PAGE}" ><button data-page="${pages}">${pages}</button></li>`;
    }
  }

  if (page < pages) {
    str += `<li class="${paginationClass.BTN} ${
      paginationClass.NEXT_PAGE
    }" ><button data-page="${page + 1}">&#129146;</button></li>`;
  }
  str += '</ul>';

  // document.querySelector('.pagination').innerHTML = str;
  return str;
}

export function renderPagination(data) {
  const currentPage = data.page;
  const lastPage = data.total_pages;
  document.querySelector('.pagination-container').innerHTML =
    createPaginationMarkup(lastPage, currentPage);
}
