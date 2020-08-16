"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BottomTabBarItem;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _color = _interopRequireDefault(require("color"));

var _TabBarIcon = _interopRequireDefault(require("./TabBarIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function BottomTabBarItem({
  focused,
  route,
  label,
  icon,
  to,
  button = (_ref) => {
    let {
      children,
      style,
      onPress: _onPress,
      to,
      accessibilityRole
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["children", "style", "onPress", "to", "accessibilityRole"]);

    if (_reactNative.Platform.OS === 'web' && to) {
      // React Native Web doesn't forward `onClick` if we use `TouchableWithoutFeedback`.
      // We need to use `onClick` to be able to prevent default browser handling of links.
      return /*#__PURE__*/_react.default.createElement(_native.Link, _extends({}, rest, {
        to: to,
        style: [styles.button, style],
        onPress: e => {
          if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && ( // ignore clicks with modifier keys
          e.button == null || e.button === 0) // ignore everything but left clicks
          ) {
              e.preventDefault();
              _onPress === null || _onPress === void 0 ? void 0 : _onPress(e);
            }
        }
      }), children);
    } else {
      return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, _extends({}, rest, {
        accessibilityRole: accessibilityRole,
        onPress: _onPress
      }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: style
      }, children));
    }
  },
  accessibilityLabel,
  testID,
  onPress,
  onLongPress,
  horizontal,
  activeTintColor: customActiveTintColor,
  inactiveTintColor: customInactiveTintColor,
  activeBackgroundColor = 'transparent',
  inactiveBackgroundColor = 'transparent',
  showLabel = true,
  allowFontScaling,
  labelStyle,
  iconStyle,
  style
}) {
  const {
    colors
  } = (0, _native.useTheme)();
  const activeTintColor = customActiveTintColor === undefined ? colors.primary : customActiveTintColor;
  const inactiveTintColor = customInactiveTintColor === undefined ? (0, _color.default)(colors.text).mix((0, _color.default)(colors.card), 0.5).hex() : customInactiveTintColor;

  const renderLabel = ({
    focused
  }) => {
    if (showLabel === false) {
      return null;
    }

    const color = focused ? activeTintColor : inactiveTintColor;

    if (typeof label === 'string') {
      return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
        numberOfLines: 1,
        style: [styles.label, {
          color
        }, horizontal ? styles.labelBeside : styles.labelBeneath, labelStyle],
        allowFontScaling: allowFontScaling
      }, label);
    }

    return label({
      focused,
      color
    });
  };

  const renderIcon = ({
    focused
  }) => {
    if (icon === undefined) {
      return null;
    }

    const activeOpacity = focused ? 1 : 0;
    const inactiveOpacity = focused ? 0 : 1;
    return /*#__PURE__*/_react.default.createElement(_TabBarIcon.default, {
      route: route,
      size: horizontal ? 17 : 24,
      activeOpacity: activeOpacity,
      inactiveOpacity: inactiveOpacity,
      activeTintColor: activeTintColor,
      inactiveTintColor: inactiveTintColor,
      renderIcon: icon,
      style: [horizontal ? styles.iconHorizontal : styles.iconVertical, iconStyle]
    });
  };

  const scene = {
    route,
    focused
  };
  const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
  return button({
    to,
    onPress,
    onLongPress,
    testID,
    accessibilityLabel,
    accessibilityRole: 'button',
    accessibilityStates: focused ? ['selected'] : [],
    style: [styles.tab, {
      backgroundColor
    }, horizontal ? styles.tabLandscape : styles.tabPortrait, style],
    children: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderIcon(scene), renderLabel(scene))
  });
}

const styles = _reactNative.StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center'
  },
  tabPortrait: {
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  tabLandscape: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  iconVertical: {
    flex: 1
  },
  iconHorizontal: {
    height: '100%'
  },
  label: {
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  labelBeneath: {
    fontSize: 11,
    marginBottom: 1.5
  },
  labelBeside: {
    fontSize: 12,
    marginLeft: 20
  },
  button: {
    display: 'flex'
  }
});
//# sourceMappingURL=BottomTabItem.js.map