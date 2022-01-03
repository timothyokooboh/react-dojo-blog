import styled from "styled-components";

export const Nav = styled.nav`
    padding: 20px;
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;

    .timmy {
        color: ${(props) => props.color}
    }

    & > div {
        margin-left: auto;

        a {
            margin-left: 16px;
            text-decoration: none;
            padding: 6px;
            font-size: ${(props) => props.theme.sizes['fs-12']};

            &:hover {
                color: #f1356d;
            }
        }
    }
`

export const NavHeading = styled.h1`
    color: #f1356d;
`