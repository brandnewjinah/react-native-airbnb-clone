"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabBarIcon;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabBarIcon({
  activeOpacity,
  inactiveOpacity,
  activeTintColor,
  inactiveTintColor,
  renderIcon,
  size,
  style
}) {
  // We render the icon twice at the same position on top of each other:
  // active and inactive one, so we can fade between them.
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.icon, {
      opacity: activeOpacity
    }]
  }, renderIcon({
    focused: true,
    size,
    color: activeTintColor
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.icon, {
      opacity: inactiveOpacity
    }]
  }, renderIcon({
    focused: false,
    size,
    color: inactiveTintColor
  })));
}

const styles = _reactNative.StyleSheet.create({
  icon: {
    // We render the icon twice at the same position on top of each other:
    // active and inactive one, so we can fade between them:
    // Cover the whole iconContainer:
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    // Workaround for react-native >= 0.54 layout bug
    minWidth: 25
  }
});
//# sourceMappingURL=TabBarIcon.js.map