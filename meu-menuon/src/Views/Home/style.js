import styled from "styled-components";
import { breakpoints } from "../../Shared/Breakpoints";
const borderRadius = "0.3125rem";
const lineHeightH1 = "3.125rem";
const paddingMedia = "8.25rem";
const lineHeightH1Media = "3.4375rem";

const BannerHome = styled.div`
    background-color: #4caf50;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding: 10em 0;

    .bt-whatsapp {
        background-color: #fff;
        border-radius: ${borderRadius};
        color: #25d366;
        display: inline-block;
        font-size: 2rem;
        margin-top: 2rem;
        padding: 1rem;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
        line-height: ${lineHeightH1};
    }

    p {
        font-size: 1.5rem;
        font-weight: 400;
    }

    @media (width >= ${breakpoints.tablet}) {
        padding: ${paddingMedia} 0;

        .bt-whatsapp {
            font-size: 1.2rem;
            font-weight: 700;
            margin-top: 1rem;
            padding: 0.5rem;
        }

        h1 {
            font-size: 4rem;
            line-height: ${lineHeightH1Media};
            margin-bottom: 1rem;
        }

        p {
            font-size: 2rem;
        }
    }
`;

export { BannerHome };
