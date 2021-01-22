import styled from 'styled-components'
import {Container} from "../../containers/Container.js"

export const WeekContainer = styled(Container)`
    justify-content: space-around;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }

`