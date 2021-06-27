import { useState } from "react";



export const usePagination = (items, itemsPerPage, sort = "") => {
  const [activePage, setActivePage] = useState(1);
  const pagesTotal = Math.ceil(items.length / itemsPerPage);


  const getCurrentItems = () => {
    const start = (activePage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    if (sort === "ASC") {
      return items.slice(start, end).sort((a,b) => b.cost-a.cost);
    } else if (sort === "DESC") {
      return items.slice(start, end).sort((a,b) => a.cost-b.cost);
    } else {
      return items.slice(start, end);
    }
  };

  const getItems = () => {
    const start = (activePage - 1 ) * itemsPerPage;
    const end = start + itemsPerPage;
    return end
  }

  const nextPage = () => {
    setActivePage((activePage) => Math.min(activePage + 1, pagesTotal));
  };

  const prevPage = () => {
    setActivePage((activePage) => Math.max(activePage - 1, 1));
  };

  const getPage = (page) => {
    // min page es 1
    const pageNumber = Math.max(1, page);
    // max page es itemsTotal
    setActivePage((activePage) => Math.min(pageNumber, pagesTotal));
  };

  return {
    getCurrentItems,
    getItems,
    getPage,
    nextPage,
    prevPage,
    activePage,
    pagesTotal,
  };
};