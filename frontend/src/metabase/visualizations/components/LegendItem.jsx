/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";

import cx from "classnames";
import Icon, { iconPropTypes } from "metabase/components/Icon";
import Tooltip from "metabase/components/Tooltip";
import Ellipsified from "metabase/core/components/Ellipsified";

import { IconContainer } from "./LegendItem.styled";

const propTypes = {
  icon: PropTypes.shape(iconPropTypes),
};

export default class LegendItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static defaultProps = {
    showDot: true,
    showTitle: true,
    isMuted: false,
    isCrossed: false,
    showTooltip: true,
    showDotTooltip: true,
  };

  render() {
    const {
      title,
      color,
      icon,
      showDot,
      showTitle,
      isMuted,
      isCrossed,
      showTooltip,
      showDotTooltip,
      onMouseEnter,
      onMouseLeave,
      className,
      description,
      onClick,
      infoClassName,
    } = this.props;

    return (
      <span
        className={cx(
          className,
          "LegendItem",
          "flex align-center fullscreen-normal-text fullscreen-night-text",
          {
            mr1: showTitle,
            muted: isMuted,
            crossed: isCrossed && showDot,
            "no-decoration": !isCrossed,
            "cursor-pointer": onClick,
          },
        )}
        style={{ overflowX: "hidden", flex: "0 1 auto" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {icon && (
          <IconContainer>
            <Icon {...icon} />
          </IconContainer>
        )}
        {showDot && (
          <Tooltip tooltip={title} isEnabled={showTooltip && showDotTooltip}>
            <div
              className={cx("flex-no-shrink", "inline-block circular")}
              style={{
                width: 13,
                height: 13,
                margin: 4,
                marginRight: 8,
                border: isCrossed && showDot ? "1px dotted grey" : "none",
                backgroundColor: isCrossed && showDot ? "#e0e0e0" : color,
              }}
            />
          </Tooltip>
        )}
        {showTitle && (
          <div className="flex align-center overflow-hidden">
            <Ellipsified showTooltip={showTooltip}>{title}</Ellipsified>
            {description && (
              <div className="hover-child ml1 flex align-center text-medium">
                <Tooltip tooltip={description} maxWidth="22em">
                  <Icon className={infoClassName} name="info" />
                </Tooltip>
              </div>
            )}
          </div>
        )}
      </span>
    );
  }
}

LegendItem.propTypes = propTypes;
