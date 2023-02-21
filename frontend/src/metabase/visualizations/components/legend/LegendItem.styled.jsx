import styled from "@emotion/styled";
import { color } from "metabase/lib/colors";
import Icon from "metabase/components/Icon";

export const LegendItemRoot = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  text-decoration: ${({ isCrossed }) => (isCrossed ? "line-through" : "none")};

  &:not(:first-child) {
    margin-left: ${({ showTitle }) => (showTitle ? "0.75rem" : "5px")};
  }
`;

export const LegendItemLabel = styled.div`
  display: flex;
  align-items: baseline;
  opacity: ${({ isMuted }) => (isMuted ? "0.4" : "1")};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "")};
  overflow: hidden;
  transition: opacity 0.25s linear;

  &:hover {
    color: ${({ onMouseEnter }) => (onMouseEnter ? color("brand") : "")};
  }
`;

export const LegendItemDot = styled.div`
  flex: 0 0 auto;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${({ color, isCrossed }) =>
    isCrossed ? "#e0e0e0" : color};
  border: ${({ isCrossed }) => (isCrossed ? "1px dotted grey" : "none")};
`;

export const LegendItemTitle = styled.div`
  color: ${color("text-dark")};
  font-weight: bold;
  margin-left: 0.5rem;
  overflow: hidden;
`;

export const LegendItemRemoveIcon = styled(Icon)`
  color: ${color("text-light")};
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    color: ${color("text-medium")};
  }
`;

LegendItemRemoveIcon.defaultProps = {
  name: "close",
  size: 12,
};
