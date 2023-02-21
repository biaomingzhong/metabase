import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";
import ExplicitSize from "metabase/components/ExplicitSize";
import Legend from "./Legend";
import LegendActions from "./LegendActions";
import {
  ChartContainer,
  LegendContainer,
  LegendLayoutRoot,
  MainContainer,
} from "./LegendLayout.styled";

const propTypes = {
  className: PropTypes.string,
  labels: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  hovered: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  hasLegend: PropTypes.bool,
  actionButtons: PropTypes.node,
  isFullscreen: PropTypes.bool,
  isQueryBuilder: PropTypes.bool,
  children: PropTypes.node,
  onHoverChange: PropTypes.func,
  onSelectSeries: PropTypes.func,
  onRemoveSeries: PropTypes.func,
  visibleIndexes: PropTypes.array,
};

const LegendLayout = ({
  className,
  labels,
  colors,
  hovered,
  hasLegend,
  actionButtons,
  isQueryBuilder,
  children,
  onHoverChange,
  onSelectSeries,
  onRemoveSeries,
  visibleIndexes,
}) => {
  const isVertical = false;
  const isVisible = hasLegend;
  const visibleLength = labels.length;

  return (
    <LegendLayoutRoot className={className} isVertical={isVertical}>
      {isVisible && (
        <LegendContainer
          isVertical={isVertical}
          isQueryBuilder={isQueryBuilder}
        >
          <Legend
            labels={labels}
            colors={colors}
            hovered={hovered}
            visibleLength={visibleLength}
            isVertical={isVertical}
            onHoverChange={onHoverChange}
            onSelectSeries={onSelectSeries}
            onRemoveSeries={onRemoveSeries}
            visibleIndexes={visibleIndexes}
          />
          {actionButtons && <LegendActions>{actionButtons}</LegendActions>}
        </LegendContainer>
      )}
      <MainContainer>
        {isVertical && actionButtons && (
          <LegendActions>{actionButtons}</LegendActions>
        )}
        <ChartContainer>{children}</ChartContainer>
      </MainContainer>
    </LegendLayoutRoot>
  );
};

LegendLayout.propTypes = propTypes;

export default _.compose(ExplicitSize())(LegendLayout);
