import React, { memo } from "react";
import PropTypes from "prop-types";
import Ellipsified from "metabase/core/components/Ellipsified";
import Tooltip from "metabase/components/Tooltip";
import {
  LegendItemDot,
  LegendItemLabel,
  LegendItemRemoveIcon,
  LegendItemRoot,
  LegendItemTitle,
} from "./LegendItem.styled";

const propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  color: PropTypes.string,
  isMuted: PropTypes.bool,
  isVertical: PropTypes.bool,
  isCrossed: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showTitle: PropTypes.bool,
  onHoverChange: PropTypes.func,
  onSelectSeries: PropTypes.func,
  onRemoveSeries: PropTypes.func,
};

const LegendItem = ({
  label,
  index,
  color,
  isMuted,
  isVertical,
  isCrossed,
  showTooltip,
  showTitle = true,
  onHoverChange,
  onSelectSeries,
  onRemoveSeries,
}) => {
  const handleItemClick = event => {
    onSelectSeries && onSelectSeries(event, index);
  };

  const handleItemMouseEnter = event => {
    onHoverChange && onHoverChange({ index, element: event.currentTarget });
  };

  const handleItemMouseLeave = () => {
    onHoverChange && onHoverChange();
  };

  const handleRemoveClick = event => {
    onRemoveSeries && onRemoveSeries(event, index);
  };

  return (
    <LegendItemRoot
      isVertical={isVertical}
      isCrossed={isCrossed}
      showTitle={showTitle}
      data-testid="legend-item"
    >
      <LegendItemLabel
        isMuted={isMuted}
        onClick={onSelectSeries && handleItemClick}
        onMouseEnter={onHoverChange && handleItemMouseEnter}
        onMouseLeave={onHoverChange && handleItemMouseLeave}
      >
        <Tooltip tooltip={label} isEnabled={showTooltip}>
          <LegendItemDot isCrossed={isCrossed} color={color} />
        </Tooltip>
        {showTitle ? (
          <LegendItemTitle className="fullscreen-normal-text fullscreen-night-text">
            <Ellipsified>{label}</Ellipsified>
          </LegendItemTitle>
        ) : null}
      </LegendItemLabel>
      {onRemoveSeries && <LegendItemRemoveIcon onClick={handleRemoveClick} />}
    </LegendItemRoot>
  );
};

LegendItem.propTypes = propTypes;

export default memo(LegendItem);
