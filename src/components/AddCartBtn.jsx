import styled from "@emotion/styled";
import { Link } from "gatsby";
import { device } from "../css/device";

const AddCartBtn = styled(Link)`
  background: var(--primary);
  display: flex;
  border-radius: 15px;
  justify-content: center;
  padding: 5px 15px;
  width: max-content;
  @media ${device.tablet} {
    width: auto
  }
`;

export default AddCartBtn;