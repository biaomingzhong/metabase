import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";

import Button from "metabase/core/components/Button";

export const StyledButton = styled(Button)<{
  isFullHeight?: boolean;
  focus?: boolean;
}>`
  height: ${({ isFullHeight }) => (isFullHeight ? "100%" : "auto")};
  ${({ focus }) =>
    focus
      ? `
    border: 2px solid ${color("focus")};
  `
      : ""}
`;

export const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

StyledButton.defaultProps = {
  isFullHeight: true,
};
