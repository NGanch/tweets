// import { useState } from 'react';
// import { Button, List, StyledArrows, Wrapper } from './Pagination.styled';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

    import { useState } from "react";

    export const usePagination = (data, itemsPerPage) => {
      const [currentPage, setCurrentPage] = useState(1);
      const maxPage = Math.ceil(data.length / itemsPerPage);
    
      function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
      }
    
      function next() {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
      }
    
      function prev() {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
      }
    
      function jump(page) {
        // const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(currentPage, maxPage));
      }
    
      return { next, prev, jump, currentData, currentPage, maxPage };
    }
    
//     import { useState } from 'react';
// import { Button, List, StyledArrows, Wrapper } from './Pagination.styled';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// export const Pagination = ({
//   currentPage, drinksPerPage, totalDrinks, onPageChange, pageNumbersToShow,
// }) => {

//   const handlePageChange = (pageNumber) => {
//     onPageChange(pageNumber);
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const getVisiblePageNumbers = () => {
//     const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
//     const currentPageIndex = pageNumbers.indexOf(currentPage);

//     const start = Math.max(0, currentPageIndex - halfPageNumbersToShow);
//     const end = Math.min(pageNumbers.length - 1, start + pageNumbersToShow - 1);

//     return pageNumbers.slice(start, end + 1);
//   };

//   return (
//     <Wrapper>
//       <List>
//         <StyledArrows
//           type="button"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           <HiChevronLeft size={24} />
//         </StyledArrows>
//         {getVisiblePageNumbers().map((number) => (
//           <li key={number}>
//             <Button
//               onClick={() => handlePageChange(number)}
//               className={number === currentPage ? 'active' : ''}
//             >
//               {number}
//             </Button>
//           </li>
//         ))}
//         <StyledArrows
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === Math.ceil(totalDrinks / drinksPerPage)}
//         >
//           <HiChevronRight size={24} />
//         </StyledArrows>
//       </List>
//     </Wrapper>
//   );
// };

