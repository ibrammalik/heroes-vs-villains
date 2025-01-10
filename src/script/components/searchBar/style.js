const style = `
    <style>
      button, input{
          font-family: inherit;
          font-size: 1.8rem;
          outline: 0;
          border: none;
          background-color: transparent;
      }

      .search-bar{
          border: 2px solid var(--grey-color);
          border-radius: 2rem;
          padding: 1rem 2rem;
          position: relative;
      }
      .search-bar-input{
          min-width: 425px;
          color: var(--light-color);
      }
      .search-bar-btn{
          cursor: pointer;
          width: 1.7rem;
          color: var(--accent-color);
      }

      /* search list */
      .search-list{
          position: absolute;
          top: calc(100% + 1rem);
          left: 0;
          background-color: var(--light-color);
          width: 100%;
          overflow-y: scroll;
          z-index: 21;
      }

      /* search list item */
      .search-list-item{
          display: flex;
          align-items: center;
          background-color: var(--dark-color);
          padding: 0.4rem 0;
      }
      .search-list-item:hover{
          background-color: var(--grey-color);
      }
      .search-list-item img{
          width: 50px;
          margin-right: 2rem;
      }
      .search-list-item p{
          font-weight: 700;
          cursor: pointer;
          padding: 0;
          margin: 0;
          padding-left: 2rem;
      }

      @media screen and (max-width: 768px){
          .search-bar{
              display: flex;
          }
          .search-bar-input{
              min-width: auto;
          }
      }
      </style>
`;

export default style;
