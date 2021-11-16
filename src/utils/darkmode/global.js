import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  
  header {
    border-bottom: 1px solid $gray-200;
    width: 100%;
    position: relative;
    margin-bottom: 30px;
    background-color: ${({ theme }) => theme.header};
    border-bottom: ${({ theme }) => theme.borderBottom};
  
    .navbar {
      height: 70px;
  
      ul.navbar-nav {
        li.nav-item {
          &.active {
            a.nav-link {
              color: $primary;
              font-weight: 500;
            }
          }
          a {
            &.nav-link {
              letter-spacing: 1px;
              color: ${({ theme }) => theme.text};
              padding-left: 1rem;
              padding-right: 1rem;
              &:hover {
                color: $indigo
              }
            }
          }
        }
      }
    }
  }

  footer {
    background-color: ${({ theme }) => theme.header};
    .list-group-item {
      background-color: ${({ theme }) => theme.header};
    }
  }

  `