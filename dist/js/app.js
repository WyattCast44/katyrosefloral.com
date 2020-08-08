/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with multiple element roots. Make sure <template> only has a single child node.`);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  function saferEval(expression, dataContext, additionalHelperVariables = {}) {
    if (typeof expression === 'function') {
      return expression.call(dataContext);
    }

    return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  function saferEvalNoReturn(expression, dataContext, additionalHelperVariables = {}) {
    if (typeof expression === 'function') {
      return expression.call(dataContext);
    } // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
    // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.


    if (Object.keys(dataContext).includes(expression)) {
      let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

      if (typeof methodReference === 'function') {
        return methodReference.call(dataContext, additionalHelperVariables['$event']);
      }
    }

    return new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    return directives.filter(i => {
      // If no type is passed in for filtering, bypass filter
      if (!type) return true;
      return i.type === type;
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }

  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  function transitionIn(el, show, component, forceSkip = false) {
    if (forceSkip) return show();
    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.filter(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value)).length > 0) {
      transitionClassesIn(el, component, attrs, show);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();
    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
    } else if (attrs.filter(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value)).length > 0) {
      transitionClassesOut(el, component, attrs, hide);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, styleValues);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, styleValues);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, styleValues) {
    // If the user set these style values, we'll put them back when we're done with them.
    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages);
  }
  function transitionClassesIn(el, component, directives, showCallback) {
    let ensureStringExpression = expression => {
      return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
    };

    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {});
  }
  function transitionClassesOut(el, component, directives, hideCallback) {
    const leave = convertClassStringToArray((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression);
    const leaveStart = convertClassStringToArray((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression);
    const leaveEnd = convertClassStringToArray((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression);
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2) {
    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages);
  }
  function transition(el, stages) {
    stages.start();
    stages.during();
    requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      requestAnimationFrame(() => {
        stages.end(); // Assign current transition to el in case we need to force it.

        setTimeout(() => {
          stages.hide(); // Adding an "isConnected" check, in case the callback
          // removed the element from the DOM.

          if (el.isConnected) {
            stages.cleanup();
          }
        }, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !isNaN(subject);
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    return component.evaluateReturnExpression(el, iteratorNames.items, extraVars);
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      // If nested model key is undefined, set the default value to empty string.
      if (value === undefined && expression.match(/\./).length) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = el.value == value;
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value === 'string' && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => val == el.value);
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = convertClassStringToArray(value);
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      // If an attribute's bound value is null, undefined or false, remove the attribute
      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && expression.match(/\./)) {
      output = '';
    }

    el.innerText = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = resolve => {
      if (value) {
        transitionIn(el, () => {
          show();
        }, component);
        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish());
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && !elementHasAlreadyBeenAdded) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    if (modifiers.includes('away')) {
      let handler = e => {
        // Don't do anything if the click came form the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler);
        }
      }; // Listen for this event at the root level.


      document.addEventListener(event, handler);
    } else {
      let listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      let handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);

          if (returnValue === false) {
            e.preventDefault();
          } else {
            if (modifiers.includes('once')) {
              listenerTarget.removeEventListener(event, handler);
            }
          }
        }
      };

      if (modifiers.includes('debounce')) {
        let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
        let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
        handler = debounce(handler, wait);
      }

      listenerTarget.addEventListener(event, handler);
    }
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(i => i !== newValue);
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, seedDataForCloning = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      this.unobservedData = seedDataForCloning ? seedDataForCloning : saferEval(dataExpression, {
        $el: this.$el
      });
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !seedDataForCloning) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.


      this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.getUnobservedData());
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(thing => {
        return new Promise(resolve => {
          thing(finish => {
            resolve(finish);
          });
        });
      }).reduce((nestedPromise, promise) => {
        return nestedPromise.then(() => {
          return promise.then(finish => finish());
        });
      }, Promise.resolve(() => {})); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);

      if (el.type !== undefined && el.type === 'radio') {
        // If there's an x-model on a radio input, move it to end of attribute list
        // to ensure that x-bind:value (if present) is processed first.
        const modelIdx = attrs.findIndex(attr => attr.type === 'model');

        if (modelIdx > -1) {
          attrs.push(attrs.splice(modelIdx, 1)[0]);
        }
      }

      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.filter(i => i.type === 'for').length > 0) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const rawData = saferEval(mutations[i].target.getAttribute('x-data'), {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.4.1",
    pauseMutationObserver: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime(el => {
        this.initializeComponent(el);
      });
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component.getUnobservedData());
      }
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./node_modules/glightbox/dist/js/glightbox.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/glightbox/dist/js/glightbox.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function l(t,e){var i=function(t,e){var i=o(t)*o(e);if(0===i)return 0;var n=function(t,e){return t.x*e.x+t.y*e.y}(t,e)/i;return n>1&&(n=1),Math.acos(n)}(t,e);return function(t,e){return t.x*e.y-e.x*t.y}(t,e)>0&&(i*=-1),180*i/Math.PI}var r=function(){function t(i){e(this,t),this.handlers=[],this.el=i}return n(t,[{key:"add",value:function(t){this.handlers.push(t)}},{key:"del",value:function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)}},{key:"dispatch",value:function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}}}]),t}();function a(t,e){var i=new r(t);return i.add(e),i}var h=function(){function t(i,n){e(this,t),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var s=function(){};this.rotate=a(this.element,n.rotate||s),this.touchStart=a(this.element,n.touchStart||s),this.multipointStart=a(this.element,n.multipointStart||s),this.multipointEnd=a(this.element,n.multipointEnd||s),this.pinch=a(this.element,n.pinch||s),this.swipe=a(this.element,n.swipe||s),this.tap=a(this.element,n.tap||s),this.doubleTap=a(this.element,n.doubleTap||s),this.longTap=a(this.element,n.longTap||s),this.singleTap=a(this.element,n.singleTap||s),this.pressMove=a(this.element,n.pressMove||s),this.twoFingerPressMove=a(this.element,n.twoFingerPressMove||s),this.touchMove=a(this.element,n.touchMove||s),this.touchEnd=a(this.element,n.touchEnd||s),this.touchCancel=a(this.element,n.touchCancel||s),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(t,[{key:"start",value:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=i.x,e.y=i.y,this.pinchStartLen=o(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(t){if(t.touches){var e=this.preV,i=t.touches.length,n=t.touches[0].pageX,s=t.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var r=t.touches[1].pageX,a=t.touches[1].pageY,h={x:t.touches[1].pageX-n,y:t.touches[1].pageY-s};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=o(h)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=l(h,e),this.rotate.dispatch(t,this.element)),e.x=h.x,e.y=h.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(n-this.x2+r-this.sx2)/2,t.deltaY=(s-this.y2+a-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=r,this.sy2=a}else{if(null!==this.x2){t.deltaX=n-this.x2,t.deltaY=s-this.y2;var c=Math.abs(this.x1-this.x2),d=Math.abs(this.y1-this.y2);(c>10||d>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=n,this.y2=s,i>1&&t.preventDefault()}}},{key:"end",value:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(t,e){this[t]&&this[t].add(e)}},{key:"off",value:function(t,e){this[t]&&this[t].del(e)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),t}(),c=function(){function t(i,n){var s=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e(this,t),this.img=i,this.slide=n,this.onclose=o,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(t){return s.dragStart(t)}),!1),this.img.addEventListener("mouseup",(function(t){return s.dragEnd(t)}),!1),this.img.addEventListener("mousemove",(function(t){return s.drag(t)}),!1),this.img.addEventListener("click",(function(t){if(!s.zoomedIn)return s.zoomIn();s.zoomedIn&&!s.dragging&&s.zoomOut()}),!1),this.img.setZoomEvents=!0}return n(t,[{key:"zoomIn",value:function(){var t=this.widowWidth();if(!(this.zoomedIn||t<=768)){var e=this.img;if(e.setAttribute("data-style",e.getAttribute("style")),e.style.maxWidth=e.naturalWidth+"px",e.style.maxHeight=e.naturalHeight+"px",e.naturalWidth>t){var i=t/2-e.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(t){t.preventDefault(),this.zoomedIn?("touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset),t.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(t){var e=this;t.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){e.dragging=!1,e.img.isDragging=!1,e.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(t){this.active&&(t.preventDefault(),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(t){if(this.zoomedIn){var e=t.clientX-this.img.naturalWidth/2,i=t.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,e,i)}}},{key:"setTranslate",value:function(t,e,i){t.style.transform="translate3d("+e+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),t}(),d="navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),u=null!==d||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,g=document.getElementsByTagName("html")[0],p=function(){var t,e=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),v=function(){var t,e=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),f=Date.now(),m={},y={selector:".glightbox",elements:null,skin:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,onOpen:null,onClose:null,loop:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plyr:{css:"https://cdn.plyr.io/3.5.6/plyr.css",js:"https://cdn.plyr.io/3.5.6/plyr.js",config:{ratio:"16:9",youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoomIn",closeEffect:"zoomOut",slideEffect:"slide",moreText:"See more",moreLength:60,lightboxHtml:"",cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slide_back:{in:"slideInLeft",out:"slideOutRight"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'}};y.slideHtml='<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>';y.lightboxHtml='<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2">{closeSVG}</button>\n</div>\n</div>';var b={href:"",title:"",type:"",description:"",descPosition:"",effect:"",width:"",height:"",node:!1,content:!1};function x(){var t={},e=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var s=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=x(!0,t[n],i[n]):t[n]=i[n])};i<n;i++){s(arguments[i])}return t}var w={isFunction:function(t){return"function"==typeof t},isString:function(t){return"string"==typeof t},isNode:function(t){return!(!t||!t.nodeType||1!=t.nodeType)},isArray:function(t){return Array.isArray(t)},isArrayLike:function(t){return t&&t.length&&isFinite(t.length)},isObject:function(e){return"object"===t(e)&&null!=e&&!w.isFunction(e)&&!w.isArray(e)},isNil:function(t){return null==t},has:function(t,e){return null!==t&&hasOwnProperty.call(t,e)},size:function(t){if(w.isObject(t)){if(t.keys)return t.keys().length;var e=0;for(var i in t)w.has(t,i)&&e++;return e}return t.length},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}};function S(t,e){if((w.isNode(t)||t===window||t===document)&&(t=[t]),w.isArrayLike(t)||w.isObject(t)||(t=[t]),0!=w.size(t))if(w.isArrayLike(t)&&!w.isObject(t))for(var i=t.length,n=0;n<i&&!1!==e.call(t[n],t[n],n,t);n++);else if(w.isObject(t))for(var s in t)if(w.has(t,s)&&!1===e.call(t[s],t[s],s,t))break}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t[f]=t[f]||[],s={all:n,evt:null,found:null};return e&&i&&w.size(n)>0&&S(n,(function(t,n){if(t.eventName==e&&t.fn.toString()==i.toString())return s.found=!0,s.evt=n,!1})),s}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.onElement,n=e.withCallback,s=e.avoidDuplicate,o=void 0===s||s,l=e.once,r=void 0!==l&&l,a=e.useCapture,h=void 0!==a&&a,c=arguments.length>2?arguments[2]:void 0,d=i||[];function u(t){w.isFunction(n)&&n.call(c,t,this),r&&u.destroy()}return w.isString(d)&&(d=document.querySelectorAll(d)),u.destroy=function(){S(d,(function(e){var i=T(e,t,u);i.found&&i.all.splice(i.evt,1),e.removeEventListener&&e.removeEventListener(t,u,h)}))},S(d,(function(e){var i=T(e,t,u);(e.addEventListener&&o&&!i.found||!o)&&(e.addEventListener(t,u,h),i.all.push({eventName:t,fn:u}))})),u}function E(t,e){S(e.split(" "),(function(e){return t.classList.add(e)}))}function A(t,e){S(e.split(" "),(function(e){return t.classList.remove(e)}))}function C(t,e){return t.classList.contains(e)}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||""===e)return!1;if("none"==e)return w.isFunction(i)&&i(),!1;var n=e.split(" ");S(n,(function(e){E(t,"g"+e)})),k(v,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function(t,e){S(n,(function(t){A(e,"g"+t)})),w.isFunction(i)&&i()}})}function N(t){var e=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=t;i.firstChild;)e.appendChild(i.firstChild);return e}function I(t,e){for(;t!==document.body;){if("function"==typeof(t=t.parentElement).matches?t.matches(e):t.msMatchesSelector(e))return t}}function O(t){t.style.display="block"}function M(t){t.style.display="none"}function q(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function z(t){if(C(t.target,"plyr--html5")){var e=I(t.target,".gslide-media");"enterfullscreen"==t.type&&E(e,"fullscreen"),"exitfullscreen"==t.type&&A(e,"fullscreen")}}function P(t){return w.isNumber(t)?"".concat(t,"px"):t}function D(t,e){var i="video"==t.type?P(e.videosWidth):P(e.width),n=P(e.height);return t.width=w.has(t,"width")&&""!==t.width?P(t.width):i,t.height=w.has(t,"height")&&""!==t.height?P(t.height):n,t}var X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,i=x({descPosition:e.descPosition},b);if(w.isObject(t)&&!w.isNode(t)){w.has(t,"type")||(w.has(t,"content")&&t.content?t.type="inline":w.has(t,"href")&&(t.type=W(t.href)));var n=x(i,t);return D(n,e),n}var s="",o=t.getAttribute("data-glightbox"),l=t.nodeName.toLowerCase();if("a"===l&&(s=t.href),"img"===l&&(s=t.src),i.href=s,S(i,(function(n,s){w.has(e,s)&&"width"!==s&&(i[s]=e[s]);var o=t.dataset[s];w.isNil(o)||(i[s]=o)})),i.content&&(i.type="inline"),!i.type&&s&&(i.type=W(s)),w.isNil(o)){if("a"==l){var r=t.title;w.isNil(r)||""===r||(i.title=r)}if("img"==l){var a=t.alt;w.isNil(a)||""===a||(i.title=a)}var h=t.getAttribute("data-description");w.isNil(h)||""===h||(i.description=h)}else{var c=[];S(i,(function(t,e){c.push(";\\s?"+e)})),c=c.join("\\s?:|"),""!==o.trim()&&S(i,(function(t,e){var n=o,s=new RegExp("s?"+e+"s?:s?(.*?)("+c+"s?:|$)"),l=n.match(s);if(l&&l.length&&l[1]){var r=l[1].trim().replace(/;\s*$/,"");i[e]=r}}))}if(i.description&&"."==i.description.substring(0,1)&&document.querySelector(i.description))i.description=document.querySelector(i.description).innerHTML;else{var d=t.querySelector(".glightbox-desc");d&&(i.description=d.innerHTML)}return D(i,e),i},B=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(C(e,"loaded"))return!1;w.isFunction(this.settings.beforeSlideLoad)&&this.settings.beforeSlideLoad({index:i.index,slide:e,player:!1});var s=i.type,o=i.descPosition,l=e.querySelector(".gslide-media"),r=e.querySelector(".gslide-title"),a=e.querySelector(".gslide-desc"),h=e.querySelector(".gdesc-inner"),u=n,g="gSlideTitle_"+i.index,p="gSlideDesc_"+i.index;if(w.isFunction(this.settings.afterSlideLoad)&&(u=function(){w.isFunction(n)&&n(),t.settings.afterSlideLoad({index:i.index,slide:e,player:t.getSlidePlayerInstance(i.index)})}),""==i.title&&""==i.description?h&&h.parentNode.parentNode.removeChild(h.parentNode):(r&&""!==i.title?(r.id=g,r.innerHTML=i.title):r.parentNode.removeChild(r),a&&""!==i.description?(a.id=p,d&&this.settings.moreLength>0?(i.smallDescription=$(i.description,this.settings.moreLength,this.settings.moreText),a.innerHTML=i.smallDescription,U.apply(this,[a,i])):a.innerHTML=i.description):a.parentNode.removeChild(a),E(l.parentNode,"desc-".concat(o)),E(h.parentNode,"description-".concat(o))),E(l,"gslide-".concat(s)),E(e,"loaded"),"video"===s)return E(l.parentNode,"gvideo-container"),l.insertBefore(N('<div class="gvideo-wrapper"></div>'),l.firstChild),void F.apply(this,[e,i,u]);if("external"===s){var v=Y({url:i.href,callback:u});return l.parentNode.style.maxWidth=i.width,l.parentNode.style.height=i.height,void l.appendChild(v)}if("inline"!==s){if("image"===s){var f=new Image;return f.addEventListener("load",(function(){f.naturalWidth>f.offsetWidth&&(E(f,"zoomable"),new c(f,e,(function(){t.resize(e)}))),w.isFunction(u)&&u()}),!1),f.src=i.href,f.alt="",""!==i.title&&f.setAttribute("aria-labelledby",g),""!==i.description&&f.setAttribute("aria-describedby",p),void l.insertBefore(f,l.firstChild)}w.isFunction(u)&&u()}else H.apply(this,[e,i,u])};function F(t,e,i){var n=this,s="gvideo"+e.index,o=t.querySelector(".gvideo-wrapper");_(this.settings.plyr.css);var l=e.href,r=location.protocol.replace(":",""),a="",h="",c=!1;"file"==r&&(r="http"),o.parentNode.style.maxWidth=e.width,_(this.settings.plyr.js,"Plyr",(function(){if(l.match(/vimeo\.com\/([0-9]*)/)){var t=/vimeo.*\/(\d+)/i.exec(l);a="vimeo",h=t[1]}if(l.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||l.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||l.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var r=function(t){var e="";e=void 0!==(t=t.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(e=t[2].split(/[^0-9a-z_\-]/i))[0]:t;return e}(l);a="youtube",h=r}if(null!==l.match(/\.(mp4|ogg|webm|mov)$/)){a="local";var d='<video id="'+s+'" ';d+='style="background:#000; max-width: '.concat(e.width,';" '),d+='preload="metadata" ',d+='x-webkit-airplay="allow" ',d+='webkit-playsinline="" ',d+="controls ",d+='class="gvideo-local">';var u=l.toLowerCase().split(".").pop(),g={mp4:"",ogg:"",webm:""};for(var p in g[u="mov"==u?"mp4":u]=l,g)if(g.hasOwnProperty(p)){var v=g[p];e.hasOwnProperty(p)&&(v=e[p]),""!==v&&(d+='<source src="'.concat(v,'" type="video/').concat(p,'">'))}c=N(d+="</video>")}var f=c||N('<div id="'.concat(s,'" data-plyr-provider="').concat(a,'" data-plyr-embed-id="').concat(h,'"></div>'));E(o,"".concat(a,"-video gvideo")),o.appendChild(f),o.setAttribute("data-id",s),o.setAttribute("data-index",e.index);var y=w.has(n.settings.plyr,"config")?n.settings.plyr.config:{},b=new Plyr("#"+s,y);b.on("ready",(function(t){var e=t.detail.plyr;m[s]=e,w.isFunction(i)&&i()})),b.on("enterfullscreen",z),b.on("exitfullscreen",z)}))}function Y(t){var e=t.url,i=t.allow,n=t.callback,s=t.appendTo,o=document.createElement("iframe");return o.className="vimeo-video gvideo",o.src=e,o.style.width="100%",o.style.height="100%",i&&o.setAttribute("allow",i),o.onload=function(){E(o,"node-ready"),w.isFunction(n)&&n()},s&&s.appendChild(o),o}function _(t,e,i){if(w.isNil(t))console.error("Inject videos api error");else{var n;if(w.isFunction(e)&&(i=e,e=!1),-1!==t.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+t+'"]'))&&n.length>0)return void(w.isFunction(i)&&i());var s=document.getElementsByTagName("head")[0],o=s.querySelectorAll('link[rel="stylesheet"]'),l=document.createElement("link");return l.rel="stylesheet",l.type="text/css",l.href=t,l.media="all",o?s.insertBefore(l,o[0]):s.appendChild(l),void(w.isFunction(i)&&i())}if((n=document.querySelectorAll('script[src="'+t+'"]'))&&n.length>0){if(w.isFunction(i)){if(w.isString(e))return j((function(){return void 0!==window[e]}),(function(){i()})),!1;i()}}else{var r=document.createElement("script");r.type="text/javascript",r.src=t,r.onload=function(){if(w.isFunction(i)){if(w.isString(e))return j((function(){return void 0!==window[e]}),(function(){i()})),!1;i()}},document.body.appendChild(r)}}}function j(t,e,i,n){if(t())e();else{var s;i||(i=100);var o=setInterval((function(){t()&&(clearInterval(o),s&&clearTimeout(s),e())}),i);n&&(s=setTimeout((function(){clearInterval(o)}),n))}}function H(t,e,i){var n,s=this,o=t.querySelector(".gslide-media"),l=!(!w.has(e,"href")||!e.href)&&e.href.split("#").pop().trim(),r=!(!w.has(e,"content")||!e.content)&&e.content;if(r&&(w.isString(r)&&(n=N('<div class="ginlined-content">'.concat(r,"</div>"))),w.isNode(r))){"none"==r.style.display&&(r.style.display="block");var a=document.createElement("div");a.className="ginlined-content",a.appendChild(r),n=a}if(l){var h=document.getElementById(l);if(!h)return!1;var c=h.cloneNode(!0);c.style.height=e.height,c.style.maxWidth=e.width,E(c,"ginlined-content"),n=c}if(!n)return console.error("Unable to append inline slide content",e),!1;o.style.height=e.height,o.style.width=e.width,o.appendChild(n),this.events["inlineclose"+l]=k("click",{onElement:o.querySelectorAll(".gtrigger-close"),withCallback:function(t){t.preventDefault(),s.close()}}),w.isFunction(i)&&i()}var W=function(t){var e=t;if(null!==(t=t.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/))return"image";if(t.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||t.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))return"video";if(t.match(/vimeo\.com\/([0-9]*)/))return"video";if(null!==t.match(/\.(mp4|ogg|webm|mov)$/))return"video";if(t.indexOf("#")>-1&&""!==e.split("#").pop().trim())return"inline";return t.includes("gajax=true")?"ajax":"external"};function V(){var t=this;if(this.events.hasOwnProperty("keyboard"))return!1;this.events.keyboard=k("keydown",{onElement:window,withCallback:function(e,i){var n=(e=e||window.event).keyCode;if(9==n){var o=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==o||"textarea"==o||"button"==o)return;e.preventDefault();var l=document.querySelectorAll(".gbtn");if(!l||l.length<=0)return;var r=s(l).filter((function(t){return C(t,"focused")}));if(!r.length){var a=document.querySelector('.gbtn[tabindex="0"]');return void(a&&(a.focus(),E(a,"focused")))}l.forEach((function(t){return A(t,"focused")}));var h=r[0].getAttribute("tabindex");h=h||"0";var c=parseInt(h)+1;c>l.length-1&&(c="0");var d=document.querySelector('.gbtn[tabindex="'.concat(c,'"]'));d&&(d.focus(),E(d,"focused"))}39==n&&t.nextSlide(),37==n&&t.prevSlide(),27==n&&t.close()}})}function G(){var t=this;if(this.events.hasOwnProperty("touch"))return!1;var e,i,n,s=q(),o=s.width,l=s.height,r=!1,a=null,c=null,d=null,u=!1,g=1,p=1,v=!1,f=!1,m=null,y=null,b=null,x=null,w=0,S=0,T=!1,k=!1,L={},N={},O=0,M=0,z=this,P=document.getElementById("glightbox-slider"),D=document.querySelector(".goverlay"),X=(this.loop(),new h(P,{touchStart:function(t){if(C(t.targetTouches[0].target,"ginner-container")||I(t.targetTouches[0].target,".gslide-desc"))return r=!1,!1;r=!0,N=t.targetTouches[0],L.pageX=t.targetTouches[0].pageX,L.pageY=t.targetTouches[0].pageY,O=t.targetTouches[0].clientX,M=t.targetTouches[0].clientY,a=z.activeSlide,c=a.querySelector(".gslide-media"),n=a.querySelector(".gslide-inline"),d=null,C(c,"gslide-image")&&(d=c.querySelector("img")),A(D,"greset")},touchMove:function(s){if(r&&(N=s.targetTouches[0],!v&&!f)){if(n&&n.offsetHeight>l){var a=L.pageX-N.pageX;if(Math.abs(a)<=13)return!1}u=!0;var h,g=s.targetTouches[0].clientX,p=s.targetTouches[0].clientY,m=O-g,y=M-p;if(Math.abs(m)>Math.abs(y)?(T=!1,k=!0):(k=!1,T=!0),e=N.pageX-L.pageX,w=100*e/o,i=N.pageY-L.pageY,S=100*i/l,T&&d&&(h=1-Math.abs(i)/l,D.style.opacity=h,t.settings.touchFollowAxis&&(w=0)),k&&(h=1-Math.abs(e)/o,c.style.opacity=h,t.settings.touchFollowAxis&&(S=0)),!d)return R(c,"translate3d(".concat(w,"%, 0, 0)"));R(c,"translate3d(".concat(w,"%, ").concat(S,"%, 0)"))}},touchEnd:function(){if(r){if(u=!1,f||v)return b=m,void(x=y);var e=Math.abs(parseInt(S)),i=Math.abs(parseInt(w));if(!(e>29&&d))return e<29&&i<25?(E(D,"greset"),D.style.opacity=1,Z(c)):void 0;t.close()}},multipointEnd:function(){setTimeout((function(){v=!1}),50)},multipointStart:function(){v=!0,g=p||1},pinch:function(t){if(!d||u)return!1;v=!0,d.scaleX=d.scaleY=g*t.zoom;var e=g*t.zoom;if(f=!0,e<=1)return f=!1,e=1,x=null,b=null,m=null,y=null,void d.setAttribute("style","");e>4.5&&(e=4.5),d.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"),p=e},pressMove:function(t){if(f&&!v){var e=N.pageX-L.pageX,i=N.pageY-L.pageY;b&&(e+=b),x&&(i+=x),m=e,y=i;var n="translate3d(".concat(e,"px, ").concat(i,"px, 0)");p&&(n+=" scale3d(".concat(p,", ").concat(p,", 1)")),R(d,n)}},swipe:function(e){if(!f)if(v)v=!1;else{if("Left"==e.direction){if(t.index==t.elements.length-1)return Z(c);t.nextSlide()}if("Right"==e.direction){if(0==t.index)return Z(c);t.prevSlide()}}}}));this.events.touch=X}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==e)return t.style.webkitTransform="",t.style.MozTransform="",t.style.msTransform="",t.style.OTransform="",t.style.transform="",!1;t.style.webkitTransform=e,t.style.MozTransform=e,t.style.msTransform=e,t.style.OTransform=e,t.style.transform=e}function Z(t){var e=C(t,"gslide-media")?t:t.querySelector(".gslide-media"),i=t.querySelector(".gslide-description");E(e,"greset"),R(e,"translate3d(0, 0, 0)");k(p,{onElement:e,once:!0,withCallback:function(t,i){A(e,"greset")}});e.style.opacity="",i&&(i.style.opacity="")}function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i;if((t=t.trim()).length<=e)return t;var s=t.substr(0,e-1);return n?s+'... <a href="#" class="desc-more">'+i+"</a>":s}function U(t,e){var i=t.querySelector(".desc-more");if(!i)return!1;k("click",{onElement:i,withCallback:function(t,i){t.preventDefault();var n=document.body,s=I(i,".gslide-desc");if(!s)return!1;s.innerHTML=e.description,E(n,"gdesc-open");var o=k("click",{onElement:[n,I(s,".gslide-description")],withCallback:function(t,i){"a"!==t.target.nodeName.toLowerCase()&&(A(n,"gdesc-open"),E(n,"gdesc-closed"),s.innerHTML=e.smallDescription,U(s,e),setTimeout((function(){A(n,"gdesc-closed")}),400),o.destroy())}})}})}var J=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.settings=x(y,i),this.effectsClasses=this.getAnimationClasses(),this.slidesData={}}return n(t,[{key:"init",value:function(){var t=this;this.baseEvents=k("click",{onElement:this.getSelector(),withCallback:function(e,i){e.preventDefault(),t.open(i)}}),this.elements=this.getElements()}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=w.isNumber(e)?e:this.settings.startAt;w.isNode(t)&&w.isNil(i)&&(i=this.getElementIndex(t))<0&&(i=0),w.isNumber(i)||(i=0),this.build(),L(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var n=document.body,s=window.innerWidth-document.documentElement.clientWidth;if(s>0){var o=document.createElement("style");o.type="text/css",o.className="gcss-styles",o.innerText=".gscrollbar-fixer {margin-right: ".concat(s,"px}"),document.head.appendChild(o),E(n,"gscrollbar-fixer")}if(E(n,"glightbox-open"),E(g,"glightbox-open"),d&&(E(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(M(this.prevButton),M(this.nextButton)):(O(this.prevButton),O(this.nextButton)),this.lightboxOpen=!0,w.isFunction(this.settings.onOpen)&&this.settings.onOpen(),u&&this.settings.touchNavigation)return G.apply(this),!1;this.settings.keyboardNavigation&&V.apply(this)}},{key:"openAt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,t)}},{key:"showSlide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(this.loader),this.index=parseInt(e);var n=this.slidesContainer.querySelector(".current");n&&A(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[e];if(C(s,"loaded"))this.slideAnimateIn(s,i),M(this.loader);else{O(this.loader);var o=this.elements[e];o.index=e,this.slidesData[e]=o,B.apply(this,[s,o,function(){M(t.loader),t.resize(),t.slideAnimateIn(s,i)}])}this.slideDescription=s.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&C(this.slideDescription.parentNode,"gslide-media"),this.preloadSlide(e+1),this.preloadSlide(e-1),this.updateNavigationClasses(),this.activeSlide=s}},{key:"preloadSlide",value:function(t){var e=this;if(t<0||t>this.elements.length-1)return!1;if(w.isNil(this.elements[t]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[t];if(C(i,"loaded"))return!1;var n=this.elements[t];n.index=t,this.slidesData[t]=n;var s=n.sourcetype;"video"==s||"external"==s?setTimeout((function(){B.apply(e,[i,n])}),200):B.apply(this,[i,n])}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index;var e=this.loop();if(!e&&(t<0||t>this.elements.length-1))return!1;t<0?t=this.elements.length-1:t>=this.elements.length&&(t=0),this.showSlide(t)}},{key:"insertSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=x({descPosition:this.settings.descPosition},b),n=N(this.settings.slideHtml),s=this.elements.length-1;if(e<0&&(e=this.elements.length),(t=x(i,t)).index=e,t.node=!1,this.elements.splice(e,0,t),this.slidesContainer){if(e>s)this.slidesContainer.appendChild(n);else{var o=this.slidesContainer.querySelectorAll(".gslide")[e];this.slidesContainer.insertBefore(n,o)}(0==this.index&&0==e||this.index-1==e||this.index+1==e)&&this.preloadSlide(e),0==this.index&&0==e&&(this.index=1),this.updateNavigationClasses()}w.isFunction(this.settings.slideInserted)&&this.settings.slideInserted({index:e,slide:this.slidesContainer.querySelectorAll(".gslide")[e],player:this.getSlidePlayerInstance(e)})}},{key:"removeSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(t<0||t>this.elements.length-1)return!1;var e=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[t];e&&(this.getActiveSlideIndex()==t&&(t==this.elements.length-1?this.prevSlide():this.nextSlide()),e.parentNode.removeChild(e)),this.elements.splice(t,1),w.isFunction(this.settings.slideRemoved)&&this.settings.slideRemoved(t)}},{key:"slideAnimateIn",value:function(t,e){var i=this,n=t.querySelector(".gslide-media"),s=t.querySelector(".gslide-description"),o={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},l={index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&s&&(M(s),s.style.display=""),A(t,this.effectsClasses),e)L(t,this.settings.openEffect,(function(){!d&&i.settings.autoplayVideos&&i.playSlideVideo(t),w.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,l])}));else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slide_back.in),L(t,a,(function(){!d&&i.settings.autoplayVideos&&i.playSlideVideo(t),w.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,l])}))}setTimeout((function(){i.resize(t)}),100),E(t,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var t=this.prevActiveSlide;A(t,this.effectsClasses),E(t,"prev");var e=this.settings.slideEffect,i="none"!==e?this.settings.cssEfects[e].out:e;this.stopSlideVideo(t),w.isFunction(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slide_back.out),L(t,i,(function(){var e=t.querySelector(".gslide-media"),i=t.querySelector(".gslide-description");e.style.transform="",A(e,"greset"),e.style.opacity="",i&&(i.style.opacity=""),A(t,"prev")}))}},{key:"getAllPlayers",value:function(){return m}},{key:"getSlidePlayerInstance",value:function(t){var e="gvideo"+t;return!(!w.has(m,e)||!m[e])&&m[e]}},{key:"stopSlideVideo",value:function(t){if(w.isNode(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(t);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(t){if(w.isNode(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(t);i&&!i.playing&&i.play()}},{key:"setElements",value:function(t){var e=this;this.settings.elements=!1;var i=[];S(t,(function(t){var n=X(t,e.settings);i.push(n)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",S(this.elements,(function(){var t=N(e.settings.slideHtml);e.slidesContainer.appendChild(t)})),this.showSlide(0,!0))}},{key:"getElementIndex",value:function(t){var e=!1;return S(this.elements,(function(i,n){if(w.has(i,"node")&&i.node==t)return e=n,!0})),e}},{key:"getElements",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=[];this.elements=this.elements?this.elements:[],!w.isNil(this.settings.elements)&&w.isArray(this.settings.elements)&&(i=this.settings.elements);var n=!1,s=this.getSelector();if(null!==e){var o=e.getAttribute("data-gallery");o&&""!==o&&(n=document.querySelectorAll('[data-gallery="'.concat(o,'"]')))}return 0==n&&s&&(n=document.querySelectorAll(this.getSelector())),S(n=Array.prototype.slice.call(n),(function(e,n){var s=X(e,t.settings);s.node=e,s.index=n,i.push(s)})),i}},{key:"getSelector",value:function(){return"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var t=[];for(var e in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(e)){var i=this.settings.cssEfects[e];t.push("g".concat(i.in)),t.push("g".concat(i.out))}return t.join(" ")}},{key:"build",value:function(){var t=this;if(this.built)return!1;var e=w.has(this.settings.svg,"next")?this.settings.svg.next:"",i=w.has(this.settings.svg,"prev")?this.settings.svg.prev:"",n=w.has(this.settings.svg,"close")?this.settings.svg.close:"",s=this.settings.lightboxHtml;s=N(s=(s=(s=s.replace(/{nextSVG}/g,e)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(s);var o=document.getElementById("glightbox-body");this.modal=o;var l=o.querySelector(".gclose");this.prevButton=o.querySelector(".gprev"),this.nextButton=o.querySelector(".gnext"),this.overlay=o.querySelector(".goverlay"),this.loader=o.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},E(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&l&&(this.events.close=k("click",{onElement:l,withCallback:function(e,i){e.preventDefault(),t.close()}})),l&&!this.settings.closeButton&&l.parentNode.removeChild(l),this.nextButton&&(this.events.next=k("click",{onElement:this.nextButton,withCallback:function(e,i){e.preventDefault(),t.nextSlide()}})),this.prevButton&&(this.events.prev=k("click",{onElement:this.prevButton,withCallback:function(e,i){e.preventDefault(),t.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=k("click",{onElement:o,withCallback:function(e,i){C(document.body,"glightbox-mobile")||I(e.target,".ginner-container")||I(e.target,".gbtn")||C(e.target,"gnext")||C(e.target,"gprev")||t.close()}})),S(this.elements,(function(){var e=N(t.settings.slideHtml);t.slidesContainer.appendChild(e)})),u&&E(document.body,"glightbox-touch"),this.events.resize=k("resize",{onElement:window,withCallback:function(){t.resize()}}),this.built=!0}},{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((t=t||this.activeSlide)&&!C(t,"zoomed")){var e=q(),i=t.querySelector(".gvideo-wrapper"),n=t.querySelector(".gslide-image"),s=this.slideDescription,o=e.width,l=e.height;if(o<=768?E(document.body,"glightbox-mobile"):A(document.body,"glightbox-mobile"),i||n){var r=!1;if(s&&(C(s,"description-bottom")||C(s,"description-top"))&&!C(s,"gabsolute")&&(r=!0),n)if(o<=768){var a=n.querySelector("img");a.setAttribute("style","")}else if(r){var h=s.offsetHeight,c=this.slidesData[this.index].width;c=c<=o?c+"px":"100%";var d=n.querySelector("img");d.setAttribute("style","max-height: calc(100vh - ".concat(h,"px)")),s.setAttribute("style","max-width: ".concat(d.offsetWidth,"px;"))}if(i){var u=w.has(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"16:9",g=u.split(":"),p=this.slidesData[this.index].width,v=p/(parseInt(g[0])/parseInt(g[1]));if(v=Math.floor(v),r&&(l-=s.offsetHeight),l<v&&o>p){var f=i.offsetWidth,m=i.offsetHeight,y=l/m,b={width:f*y,height:m*y};i.parentNode.setAttribute("style","max-width: ".concat(b.width,"px")),r&&s.setAttribute("style","max-width: ".concat(b.width,"px;"))}else i.parentNode.style.maxWidth="".concat(p,"px"),r&&s.setAttribute("style","max-width: ".concat(p,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var t=this.loop();A(this.nextButton,"disabled"),A(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(E(this.prevButton,"disabled"),E(this.nextButton,"disabled")):0!==this.index||t?this.index!==this.elements.length-1||t||E(this.nextButton,"disabled"):E(this.prevButton,"disabled")}},{key:"loop",value:function(){var t=w.has(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return t=w.has(this.settings,"loop")?this.settings.loop:t,t}},{key:"close",value:function(){var t=this;if(!this.lightboxOpen){if(this.events){for(var e in this.events)this.events.hasOwnProperty(e)&&this.events[e].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.stopSlideVideo(this.activeSlide),E(this.modal,"glightbox-closing"),L(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),L(this.activeSlide,this.settings.closeEffect,(function(){if(t.activeSlide=null,t.prevActiveSlideIndex=null,t.prevActiveSlide=null,t.built=!1,t.events){for(var e in t.events)t.events.hasOwnProperty(e)&&t.events[e].destroy();t.events=null}var i=document.body;A(g,"glightbox-open"),A(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),t.modal.parentNode.removeChild(t.modal),w.isFunction(t.settings.onClose)&&t.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),t.lightboxOpen=!1,t.closing=null}))}},{key:"destroy",value:function(){this.close(),this.baseEvents.destroy()}}]),t}();return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new J(t);return e.init(),e}}));

/***/ }),

/***/ "./resources/app.js":
/*!**************************!*\
  !*** ./resources/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener("DOMContentLoaded", function () {
  var gallery = document.querySelector(".glightbox");

  if (gallery != null) {
    var lightbox = glightbox__WEBPACK_IMPORTED_MODULE_1___default()({
      loop: true
    });
  }
});

/***/ }),

/***/ "./resources/app.scss":
/*!****************************!*\
  !*** ./resources/app.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./resources/app.js ./resources/app.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Wyatt\desktop\katyrosefloral.com\resources\app.js */"./resources/app.js");
module.exports = __webpack_require__(/*! C:\Users\Wyatt\desktop\katyrosefloral.com\resources\app.scss */"./resources/app.scss");


/***/ })

/******/ });