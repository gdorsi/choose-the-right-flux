var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _mapping = createCommonjsModule(function (module, exports) {
/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 2, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 2, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 2, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'afterRearg': true, 'start': 1 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'afterRearg': true, 'start': 1 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'afterRearg': true, 'start': 1 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to track methods with placeholder support */
exports.placeholder = {
  'bind': true,
  'bindKey': true,
  'curry': true,
  'curryRight': true,
  'partial': true,
  'partialRight': true
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};
});

var skipRearg = _mapping.skipRearg;
var skipFixed = _mapping.skipFixed;
var remap = _mapping.remap;
var realToAlias = _mapping.realToAlias;
var placeholder = _mapping.placeholder;
var mutate = _mapping.mutate;
var methodSpread = _mapping.methodSpread;
var methodRearg = _mapping.methodRearg;
var iterateeRearg = _mapping.iterateeRearg;
var iterateeAry = _mapping.iterateeAry;
var aryRearg = _mapping.aryRearg;
var aryMethod = _mapping.aryMethod;
var aliasToReal = _mapping.aliasToReal;

var _mapping$2 = Object.freeze({
	default: _mapping,
	__moduleExports: _mapping,
	skipRearg: skipRearg,
	skipFixed: skipFixed,
	remap: remap,
	realToAlias: realToAlias,
	placeholder: placeholder,
	mutate: mutate,
	methodSpread: methodSpread,
	methodRearg: methodRearg,
	iterateeRearg: iterateeRearg,
	iterateeAry: iterateeAry,
	aryRearg: aryRearg,
	aryMethod: aryMethod,
	aliasToReal: aliasToReal
});

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
var placeholder$1 = {};



var placeholder$3 = Object.freeze({
	default: placeholder$1,
	__moduleExports: placeholder$1
});

var require$$1 = ( _mapping$2 && _mapping$2['default'] ) || _mapping$2;

var require$$0$1 = ( placeholder$3 && placeholder$3['default'] ) || placeholder$3;

var mapping = require$$1;
var mutateMap = mapping.mutate;
var fallbackHolder = require$$0$1;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert$1(util, name, func, options) {
  var setPlaceholder,
      isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      placeholder = isLib ? func : fallbackHolder,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isFunction': util.isFunction,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'spread': util.spread,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isFunction = helpers.isFunction,
      keys = helpers.keys,
      rearg = helpers.rearg,
      spread = helpers.spread,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert$1(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : spread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null) {
        nested[path[index]] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var oldOptions = options;
    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[name] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert$1(newUtil, name, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func) {
    name = mapping.aliasToReal[name] || name;

    var result,
        wrapped = func,
        wrapper = wrappers[name];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mutateMap.array[name]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mutateMap.object[name]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mutateMap.set[name]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (name == otherName) {
          var spreadData = mapping.methodSpread[name],
              afterRearg = spreadData && spreadData.afterRearg;

          result = afterRearg
            ? castFixed(name, castRearg(name, wrapped, aryKey), aryKey)
            : castRearg(name, castFixed(name, wrapped, aryKey), aryKey);

          result = castCap(name, result);
          result = castCurry(name, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(name, func);
    if (mapping.placeholder[name]) {
      setPlaceholder = true;
      result.placeholder = func.placeholder = placeholder;
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  if (setPlaceholder) {
    _.placeholder = placeholder;
  }
  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

var _baseConvert = baseConvert$1;



var _baseConvert$2 = Object.freeze({
	default: _baseConvert,
	__moduleExports: _baseConvert
});

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

var identity_1 = identity$1;



var identity$2 = Object.freeze({
	default: identity_1,
	__moduleExports: identity_1
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;



var isObject$3 = Object.freeze({
	default: isObject_1,
	__moduleExports: isObject_1
});

var require$$0$2 = ( isObject$3 && isObject$3['default'] ) || isObject$3;

var isObject$1 = require$$0$2;

/** `Object#toString` result references. */
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto$1.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject$1(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

var isFunction_1 = isFunction$1;



var isFunction$2 = Object.freeze({
	default: isFunction_1,
	__moduleExports: isFunction_1
});

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;



var _freeGlobal$2 = Object.freeze({
	default: _freeGlobal,
	__moduleExports: _freeGlobal
});

var require$$0$3 = ( _freeGlobal$2 && _freeGlobal$2['default'] ) || _freeGlobal$2;

var freeGlobal = require$$0$3;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal || freeSelf || Function('return this')();

var _root = root$2;



var _root$2 = Object.freeze({
	default: _root,
	__moduleExports: _root
});

var require$$1$1 = ( _root$2 && _root$2['default'] ) || _root$2;

var root$1 = require$$1$1;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$1['__core-js_shared__'];

var _coreJsData = coreJsData$1;



var _coreJsData$2 = Object.freeze({
	default: _coreJsData,
	__moduleExports: _coreJsData
});

var require$$0$4 = ( _coreJsData$2 && _coreJsData$2['default'] ) || _coreJsData$2;

var coreJsData = require$$0$4;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;



var _isMasked$2 = Object.freeze({
	default: _isMasked,
	__moduleExports: _isMasked
});

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;



var _toSource$2 = Object.freeze({
	default: _toSource,
	__moduleExports: _toSource
});

var require$$1$2 = ( isFunction$2 && isFunction$2['default'] ) || isFunction$2;

var require$$2 = ( _isMasked$2 && _isMasked$2['default'] ) || _isMasked$2;

var require$$0$5 = ( _toSource$2 && _toSource$2['default'] ) || _toSource$2;

var isFunction = require$$1$2;
var isMasked = require$$2;
var isObject = require$$0$2;
var toSource = require$$0$5;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;



var _baseIsNative$2 = Object.freeze({
	default: _baseIsNative,
	__moduleExports: _baseIsNative
});

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;



var _getValue$2 = Object.freeze({
	default: _getValue,
	__moduleExports: _getValue
});

var require$$1$3 = ( _baseIsNative$2 && _baseIsNative$2['default'] ) || _baseIsNative$2;

var require$$0$6 = ( _getValue$2 && _getValue$2['default'] ) || _getValue$2;

var baseIsNative = require$$1$3;
var getValue = require$$0$6;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$1;



var _getNative$2 = Object.freeze({
	default: _getNative,
	__moduleExports: _getNative
});

var require$$1$4 = ( _getNative$2 && _getNative$2['default'] ) || _getNative$2;

var getNative = require$$1$4;
var root = require$$1$1;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$1;



var _WeakMap$2 = Object.freeze({
	default: _WeakMap,
	__moduleExports: _WeakMap
});

var require$$2$1 = ( _WeakMap$2 && _WeakMap$2['default'] ) || _WeakMap$2;

var WeakMap = require$$2$1;

/** Used to store function metadata. */
var metaMap$1 = WeakMap && new WeakMap;

var _metaMap = metaMap$1;



var _metaMap$2 = Object.freeze({
	default: _metaMap,
	__moduleExports: _metaMap
});

var require$$2$2 = ( identity$2 && identity$2['default'] ) || identity$2;

var require$$1$5 = ( _metaMap$2 && _metaMap$2['default'] ) || _metaMap$2;

var identity = require$$2$2;
var metaMap = require$$1$5;

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData$1 = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

var _baseSetData = baseSetData$1;



var _baseSetData$2 = Object.freeze({
	default: _baseSetData,
	__moduleExports: _baseSetData
});

var isObject$5 = require$$0$2;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate$1(proto) {
  return isObject$5(proto) ? objectCreate(proto) : {};
}

var _baseCreate = baseCreate$1;



var _baseCreate$2 = Object.freeze({
	default: _baseCreate,
	__moduleExports: _baseCreate
});

var require$$2$3 = ( _baseCreate$2 && _baseCreate$2['default'] ) || _baseCreate$2;

var baseCreate = require$$2$3;
var isObject$4 = require$$0$2;

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor$1(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject$4(result) ? result : thisBinding;
  };
}

var _createCtor = createCtor$1;



var _createCtor$2 = Object.freeze({
	default: _createCtor,
	__moduleExports: _createCtor
});

var require$$1$6 = ( _createCtor$2 && _createCtor$2['default'] ) || _createCtor$2;

var createCtor = require$$1$6;
var root$3 = require$$1$1;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$1 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind$1(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG$1,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root$3 && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

var _createBind = createBind$1;



var _createBind$2 = Object.freeze({
	default: _createBind,
	__moduleExports: _createBind
});

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;



var _apply$2 = Object.freeze({
	default: _apply,
	__moduleExports: _apply
});

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs$1(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$1(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

var _composeArgs = composeArgs$1;



var _composeArgs$2 = Object.freeze({
	default: _composeArgs,
	__moduleExports: _composeArgs
});

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight$1(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$2(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

var _composeArgsRight = composeArgsRight$1;



var _composeArgsRight$2 = Object.freeze({
	default: _composeArgsRight,
	__moduleExports: _composeArgsRight
});

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders$1(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

var _countHolders = countHolders$1;



var _countHolders$2 = Object.freeze({
	default: _countHolders,
	__moduleExports: _countHolders
});

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash$1() {
  // No operation performed.
}

var _baseLodash = baseLodash$1;



var _baseLodash$2 = Object.freeze({
	default: _baseLodash,
	__moduleExports: _baseLodash
});

var require$$0$7 = ( _baseLodash$2 && _baseLodash$2['default'] ) || _baseLodash$2;

var baseCreate$2 = require$$2$3;
var baseLodash = require$$0$7;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper$1(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper$1.prototype = baseCreate$2(baseLodash.prototype);
LazyWrapper$1.prototype.constructor = LazyWrapper$1;

var _LazyWrapper = LazyWrapper$1;



var _LazyWrapper$2 = Object.freeze({
	default: _LazyWrapper,
	__moduleExports: _LazyWrapper
});

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop$1() {
  // No operation performed.
}

var noop_1 = noop$1;



var noop$2 = Object.freeze({
	default: noop_1,
	__moduleExports: noop_1
});

var require$$0$8 = ( noop$2 && noop$2['default'] ) || noop$2;

var metaMap$2 = require$$1$5;
var noop = require$$0$8;

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData$2 = !metaMap$2 ? noop : function(func) {
  return metaMap$2.get(func);
};

var _getData = getData$2;



var _getData$2 = Object.freeze({
	default: _getData,
	__moduleExports: _getData
});

/** Used to lookup unminified function names. */
var realNames$1 = {};

var _realNames = realNames$1;



var _realNames$2 = Object.freeze({
	default: _realNames,
	__moduleExports: _realNames
});

var require$$0$9 = ( _realNames$2 && _realNames$2['default'] ) || _realNames$2;

var realNames = require$$0$9;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName$1(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty$1.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

var _getFuncName = getFuncName$1;



var _getFuncName$2 = Object.freeze({
	default: _getFuncName,
	__moduleExports: _getFuncName
});

var baseCreate$3 = require$$2$3;
var baseLodash$3 = require$$0$7;

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper$1(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper$1.prototype = baseCreate$3(baseLodash$3.prototype);
LodashWrapper$1.prototype.constructor = LodashWrapper$1;

var _LodashWrapper = LodashWrapper$1;



var _LodashWrapper$2 = Object.freeze({
	default: _LodashWrapper,
	__moduleExports: _LodashWrapper
});

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;



var isArray$2 = Object.freeze({
	default: isArray_1,
	__moduleExports: isArray_1
});

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;



var isObjectLike$2 = Object.freeze({
	default: isObjectLike_1,
	__moduleExports: isObjectLike_1
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;



var _copyArray$2 = Object.freeze({
	default: _copyArray,
	__moduleExports: _copyArray
});

var require$$2$4 = ( _LazyWrapper$2 && _LazyWrapper$2['default'] ) || _LazyWrapper$2;

var require$$5 = ( _LodashWrapper$2 && _LodashWrapper$2['default'] ) || _LodashWrapper$2;

var require$$4 = ( _copyArray$2 && _copyArray$2['default'] ) || _copyArray$2;

var LazyWrapper$3 = require$$2$4;
var LodashWrapper$2 = require$$5;
var copyArray = require$$4;

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone$1(wrapper) {
  if (wrapper instanceof LazyWrapper$3) {
    return wrapper.clone();
  }
  var result = new LodashWrapper$2(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone$1;



var _wrapperClone$2 = Object.freeze({
	default: _wrapperClone,
	__moduleExports: _wrapperClone
});

var require$$1$7 = ( isArray$2 && isArray$2['default'] ) || isArray$2;

var require$$0$10 = ( isObjectLike$2 && isObjectLike$2['default'] ) || isObjectLike$2;

var require$$0$11 = ( _wrapperClone$2 && _wrapperClone$2['default'] ) || _wrapperClone$2;

var LazyWrapper$2 = require$$2$4;
var LodashWrapper = require$$5;
var baseLodash$2 = require$$0$7;
var isArray = require$$1$7;
var isObjectLike = require$$0$10;
var wrapperClone = require$$0$11;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array of at least `200` elements
 * and any iteratees accept only one argument. The heuristic for whether a
 * section qualifies for shortcut fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash$1(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper$2)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$2.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash$1.prototype = baseLodash$2.prototype;
lodash$1.prototype.constructor = lodash$1;

var wrapperLodash = lodash$1;



var wrapperLodash$2 = Object.freeze({
	default: wrapperLodash,
	__moduleExports: wrapperLodash
});

var require$$3 = ( _getData$2 && _getData$2['default'] ) || _getData$2;

var require$$2$5 = ( _getFuncName$2 && _getFuncName$2['default'] ) || _getFuncName$2;

var require$$0$12 = ( wrapperLodash$2 && wrapperLodash$2['default'] ) || wrapperLodash$2;

var LazyWrapper = require$$2$4;
var getData$1 = require$$3;
var getFuncName = require$$2$5;
var lodash = require$$0$12;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable$1(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData$1(other);
  return !!data && func === data[0];
}

var _isLaziable = isLaziable$1;



var _isLaziable$2 = Object.freeze({
	default: _isLaziable,
	__moduleExports: _isLaziable
});

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 500;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;



var _shortOut$2 = Object.freeze({
	default: _shortOut,
	__moduleExports: _shortOut
});

var require$$1$8 = ( _baseSetData$2 && _baseSetData$2['default'] ) || _baseSetData$2;

var require$$0$13 = ( _shortOut$2 && _shortOut$2['default'] ) || _shortOut$2;

var baseSetData$2 = require$$1$8;
var shortOut = require$$0$13;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData$2 = shortOut(baseSetData$2);

var _setData = setData$2;



var _setData$2 = Object.freeze({
	default: _setData,
	__moduleExports: _setData
});

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails$1(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

var _getWrapDetails = getWrapDetails$1;



var _getWrapDetails$2 = Object.freeze({
	default: _getWrapDetails,
	__moduleExports: _getWrapDetails
});

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails$1(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

var _insertWrapDetails = insertWrapDetails$1;



var _insertWrapDetails$2 = Object.freeze({
	default: _insertWrapDetails,
	__moduleExports: _insertWrapDetails
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;



var constant$2 = Object.freeze({
	default: constant_1,
	__moduleExports: constant_1
});

var getNative$2 = require$$1$4;

/* Built-in method references that are verified to be native. */
var nativeDefineProperty$1 = getNative$2(Object, 'defineProperty');

var _nativeDefineProperty = nativeDefineProperty$1;



var _nativeDefineProperty$2 = Object.freeze({
	default: _nativeDefineProperty,
	__moduleExports: _nativeDefineProperty
});

var require$$2$6 = ( constant$2 && constant$2['default'] ) || constant$2;

var require$$0$14 = ( _nativeDefineProperty$2 && _nativeDefineProperty$2['default'] ) || _nativeDefineProperty$2;

var constant = require$$2$6;
var identity$3 = require$$2$2;
var nativeDefineProperty = require$$0$14;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !nativeDefineProperty ? identity$3 : function(func, string) {
  return nativeDefineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;



var _baseSetToString$2 = Object.freeze({
	default: _baseSetToString,
	__moduleExports: _baseSetToString
});

var require$$1$9 = ( _baseSetToString$2 && _baseSetToString$2['default'] ) || _baseSetToString$2;

var baseSetToString = require$$1$9;
var shortOut$2 = require$$0$13;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut$2(baseSetToString);

var _setToString = setToString$1;



var _setToString$2 = Object.freeze({
	default: _setToString,
	__moduleExports: _setToString
});

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;



var _arrayEach$2 = Object.freeze({
	default: _arrayEach,
	__moduleExports: _arrayEach
});

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex$1;



var _baseFindIndex$2 = Object.freeze({
	default: _baseFindIndex,
	__moduleExports: _baseFindIndex
});

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN$1(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN$1;



var _baseIsNaN$2 = Object.freeze({
	default: _baseIsNaN,
	__moduleExports: _baseIsNaN
});

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf$1;



var _strictIndexOf$2 = Object.freeze({
	default: _strictIndexOf,
	__moduleExports: _strictIndexOf
});

var require$$2$7 = ( _baseFindIndex$2 && _baseFindIndex$2['default'] ) || _baseFindIndex$2;

var require$$1$10 = ( _baseIsNaN$2 && _baseIsNaN$2['default'] ) || _baseIsNaN$2;

var require$$0$15 = ( _strictIndexOf$2 && _strictIndexOf$2['default'] ) || _strictIndexOf$2;

var baseFindIndex = require$$2$7;
var baseIsNaN = require$$1$10;
var strictIndexOf = require$$0$15;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf$1(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf$1;



var _baseIndexOf$2 = Object.freeze({
	default: _baseIndexOf,
	__moduleExports: _baseIndexOf
});

var require$$0$16 = ( _baseIndexOf$2 && _baseIndexOf$2['default'] ) || _baseIndexOf$2;

var baseIndexOf = require$$0$16;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes$1(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes$1;



var _arrayIncludes$2 = Object.freeze({
	default: _arrayIncludes,
	__moduleExports: _arrayIncludes
});

var require$$14 = ( _arrayEach$2 && _arrayEach$2['default'] ) || _arrayEach$2;

var require$$0$17 = ( _arrayIncludes$2 && _arrayIncludes$2['default'] ) || _arrayIncludes$2;

var arrayEach = require$$14;
var arrayIncludes = require$$0$17;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$4 = 1;
var BIND_KEY_FLAG$3 = 2;
var CURRY_FLAG$3 = 8;
var CURRY_RIGHT_FLAG$2 = 16;
var PARTIAL_FLAG$2 = 32;
var PARTIAL_RIGHT_FLAG$2 = 64;
var ARY_FLAG$2 = 128;
var REARG_FLAG = 256;
var FLIP_FLAG$1 = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', ARY_FLAG$2],
  ['bind', BIND_FLAG$4],
  ['bindKey', BIND_KEY_FLAG$3],
  ['curry', CURRY_FLAG$3],
  ['curryRight', CURRY_RIGHT_FLAG$2],
  ['flip', FLIP_FLAG$1],
  ['partial', PARTIAL_FLAG$2],
  ['partialRight', PARTIAL_RIGHT_FLAG$2],
  ['rearg', REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails$1(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

var _updateWrapDetails = updateWrapDetails$1;



var _updateWrapDetails$2 = Object.freeze({
	default: _updateWrapDetails,
	__moduleExports: _updateWrapDetails
});

var require$$3$1 = ( _getWrapDetails$2 && _getWrapDetails$2['default'] ) || _getWrapDetails$2;

var require$$2$8 = ( _insertWrapDetails$2 && _insertWrapDetails$2['default'] ) || _insertWrapDetails$2;

var require$$0$18 = ( _setToString$2 && _setToString$2['default'] ) || _setToString$2;

var require$$0$19 = ( _updateWrapDetails$2 && _updateWrapDetails$2['default'] ) || _updateWrapDetails$2;

var getWrapDetails = require$$3$1;
var insertWrapDetails = require$$2$8;
var setToString = require$$0$18;
var updateWrapDetails = require$$0$19;

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString$2(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

var _setWrapToString = setWrapToString$2;



var _setWrapToString$2 = Object.freeze({
	default: _setWrapToString,
	__moduleExports: _setWrapToString
});

var require$$0$20 = ( _isLaziable$2 && _isLaziable$2['default'] ) || _isLaziable$2;

var require$$1$11 = ( _setData$2 && _setData$2['default'] ) || _setData$2;

var require$$0$21 = ( _setWrapToString$2 && _setWrapToString$2['default'] ) || _setWrapToString$2;

var isLaziable = require$$0$20;
var setData$1 = require$$1$11;
var setWrapToString$1 = require$$0$21;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$3 = 1;
var BIND_KEY_FLAG$2 = 2;
var CURRY_BOUND_FLAG = 4;
var CURRY_FLAG$2 = 8;
var PARTIAL_FLAG$1 = 32;
var PARTIAL_RIGHT_FLAG$1 = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry$2(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG$2,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? PARTIAL_FLAG$1 : PARTIAL_RIGHT_FLAG$1);
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG$1 : PARTIAL_FLAG$1);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG$3 | BIND_KEY_FLAG$2);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData$1(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString$1(result, func, bitmask);
}

var _createRecurry = createRecurry$2;



var _createRecurry$2 = Object.freeze({
	default: _createRecurry,
	__moduleExports: _createRecurry
});

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder$2(func) {
  var object = func;
  return object.placeholder;
}

var _getHolder = getHolder$2;



var _getHolder$2 = Object.freeze({
	default: _getHolder,
	__moduleExports: _getHolder
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;



var _isIndex$2 = Object.freeze({
	default: _isIndex,
	__moduleExports: _isIndex
});

var require$$1$12 = ( _isIndex$2 && _isIndex$2['default'] ) || _isIndex$2;

var copyArray$2 = require$$4;
var isIndex = require$$1$12;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder$1(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray$2(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

var _reorder = reorder$1;



var _reorder$2 = Object.freeze({
	default: _reorder,
	__moduleExports: _reorder
});

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders$2(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

var _replaceHolders = replaceHolders$2;



var _replaceHolders$2 = Object.freeze({
	default: _replaceHolders,
	__moduleExports: _replaceHolders
});

var require$$2$9 = ( _composeArgs$2 && _composeArgs$2['default'] ) || _composeArgs$2;

var require$$1$13 = ( _composeArgsRight$2 && _composeArgsRight$2['default'] ) || _composeArgsRight$2;

var require$$6 = ( _countHolders$2 && _countHolders$2['default'] ) || _countHolders$2;

var require$$4$1 = ( _createRecurry$2 && _createRecurry$2['default'] ) || _createRecurry$2;

var require$$3$2 = ( _getHolder$2 && _getHolder$2['default'] ) || _getHolder$2;

var require$$2$10 = ( _reorder$2 && _reorder$2['default'] ) || _reorder$2;

var require$$0$22 = ( _replaceHolders$2 && _replaceHolders$2['default'] ) || _replaceHolders$2;

var composeArgs = require$$2$9;
var composeArgsRight = require$$1$13;
var countHolders = require$$6;
var createCtor$3 = require$$1$6;
var createRecurry$1 = require$$4$1;
var getHolder$1 = require$$3$2;
var reorder = require$$2$10;
var replaceHolders$1 = require$$0$22;
var root$5 = require$$1$1;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$2 = 1;
var BIND_KEY_FLAG$1 = 2;
var CURRY_FLAG$1 = 8;
var CURRY_RIGHT_FLAG$1 = 16;
var ARY_FLAG$1 = 128;
var FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid$2(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG$1,
      isBind = bitmask & BIND_FLAG$2,
      isBindKey = bitmask & BIND_KEY_FLAG$1,
      isCurried = bitmask & (CURRY_FLAG$1 | CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor$3(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder$1(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders$1(args, placeholder);
      return createRecurry$1(
        func, bitmask, createHybrid$2, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root$5 && this instanceof wrapper) {
      fn = Ctor || createCtor$3(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

var _createHybrid = createHybrid$2;



var _createHybrid$2 = Object.freeze({
	default: _createHybrid,
	__moduleExports: _createHybrid
});

var require$$4$2 = ( _apply$2 && _apply$2['default'] ) || _apply$2;

var require$$4$3 = ( _createHybrid$2 && _createHybrid$2['default'] ) || _createHybrid$2;

var apply = require$$4$2;
var createCtor$2 = require$$1$6;
var createHybrid$1 = require$$4$3;
var createRecurry = require$$4$1;
var getHolder = require$$3$2;
var replaceHolders = require$$0$22;
var root$4 = require$$1$1;

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry$1(func, bitmask, arity) {
  var Ctor = createCtor$2(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid$1, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root$4 && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

var _createCurry = createCurry$1;



var _createCurry$2 = Object.freeze({
	default: _createCurry,
	__moduleExports: _createCurry
});

var apply$2 = require$$4$2;
var createCtor$4 = require$$1$6;
var root$6 = require$$1$1;

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$5 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial$1(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG$5,
      Ctor = createCtor$4(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root$6 && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply$2(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

var _createPartial = createPartial$1;



var _createPartial$2 = Object.freeze({
	default: _createPartial,
	__moduleExports: _createPartial
});

var composeArgs$2 = require$$2$9;
var composeArgsRight$2 = require$$1$13;
var replaceHolders$3 = require$$0$22;

/** Used as the internal argument placeholder. */
var PLACEHOLDER$1 = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG$6 = 1;
var BIND_KEY_FLAG$4 = 2;
var CURRY_BOUND_FLAG$1 = 4;
var CURRY_FLAG$4 = 8;
var ARY_FLAG$3 = 128;
var REARG_FLAG$1 = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$1 = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData$1(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (BIND_FLAG$6 | BIND_KEY_FLAG$4 | ARY_FLAG$3);

  var isCombo =
    ((srcBitmask == ARY_FLAG$3) && (bitmask == CURRY_FLAG$4)) ||
    ((srcBitmask == ARY_FLAG$3) && (bitmask == REARG_FLAG$1) && (data[7].length <= source[8])) ||
    ((srcBitmask == (ARY_FLAG$3 | REARG_FLAG$1)) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG$4));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & BIND_FLAG$6) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & BIND_FLAG$6 ? 0 : CURRY_BOUND_FLAG$1;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs$2(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders$3(data[3], PLACEHOLDER$1) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight$2(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders$3(data[5], PLACEHOLDER$1) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & ARY_FLAG$3) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

var _mergeData = mergeData$1;



var _mergeData$2 = Object.freeze({
	default: _mergeData,
	__moduleExports: _mergeData
});

var isObjectLike$3 = require$$0$10;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$4.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$3(value) && objectToString$1.call(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;



var isSymbol$2 = Object.freeze({
	default: isSymbol_1,
	__moduleExports: isSymbol_1
});

var require$$2$11 = ( isSymbol$2 && isSymbol$2['default'] ) || isSymbol$2;

var isObject$6 = require$$0$2;
var isSymbol = require$$2$11;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$6(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$6(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;



var toNumber$2 = Object.freeze({
	default: toNumber_1,
	__moduleExports: toNumber_1
});

var require$$0$23 = ( toNumber$2 && toNumber$2['default'] ) || toNumber$2;

var toNumber = require$$0$23;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;



var toFinite$2 = Object.freeze({
	default: toFinite_1,
	__moduleExports: toFinite_1
});

var require$$0$24 = ( toFinite$2 && toFinite$2['default'] ) || toFinite$2;

var toFinite = require$$0$24;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$1;



var toInteger$2 = Object.freeze({
	default: toInteger_1,
	__moduleExports: toInteger_1
});

var require$$8 = ( _createBind$2 && _createBind$2['default'] ) || _createBind$2;

var require$$7 = ( _createCurry$2 && _createCurry$2['default'] ) || _createCurry$2;

var require$$5$1 = ( _createPartial$2 && _createPartial$2['default'] ) || _createPartial$2;

var require$$3$3 = ( _mergeData$2 && _mergeData$2['default'] ) || _mergeData$2;

var require$$0$25 = ( toInteger$2 && toInteger$2['default'] ) || toInteger$2;

var baseSetData = require$$1$8;
var createBind = require$$8;
var createCurry = require$$7;
var createHybrid = require$$4$3;
var createPartial = require$$5$1;
var getData = require$$3;
var mergeData = require$$3$3;
var setData = require$$1$11;
var setWrapToString = require$$0$21;
var toInteger = require$$0$25;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1;
var BIND_KEY_FLAG = 2;
var CURRY_FLAG = 8;
var CURRY_RIGHT_FLAG = 16;
var PARTIAL_FLAG = 32;
var PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap$1(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

var _createWrap = createWrap$1;



var _createWrap$2 = Object.freeze({
	default: _createWrap,
	__moduleExports: _createWrap
});

var require$$1$14 = ( _createWrap$2 && _createWrap$2['default'] ) || _createWrap$2;

var createWrap = require$$1$14;

/** Used to compose bitmasks for function metadata. */
var ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

var ary_1 = ary;



var ary$1 = Object.freeze({
	default: ary_1,
	__moduleExports: ary_1
});

/** Built-in value references. */
var defineProperty = Object.defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$2;



var _baseAssignValue$2 = Object.freeze({
	default: _baseAssignValue,
	__moduleExports: _baseAssignValue
});

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;



var eq$2 = Object.freeze({
	default: eq_1,
	__moduleExports: eq_1
});

var require$$1$15 = ( _baseAssignValue$2 && _baseAssignValue$2['default'] ) || _baseAssignValue$2;

var require$$3$4 = ( eq$2 && eq$2['default'] ) || eq$2;

var baseAssignValue$1 = require$$1$15;
var eq = require$$3$4;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$3.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$1;



var _assignValue$2 = Object.freeze({
	default: _assignValue,
	__moduleExports: _assignValue
});

var require$$5$2 = ( _assignValue$2 && _assignValue$2['default'] ) || _assignValue$2;

var assignValue = require$$5$2;
var baseAssignValue = require$$1$15;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$1;



var _copyObject$2 = Object.freeze({
	default: _copyObject,
	__moduleExports: _copyObject
});

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;



var _baseTimes$2 = Object.freeze({
	default: _baseTimes,
	__moduleExports: _baseTimes
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$1;



var isLength$2 = Object.freeze({
	default: isLength_1,
	__moduleExports: isLength_1
});

var require$$1$16 = ( isLength$2 && isLength$2['default'] ) || isLength$2;

var isFunction$3 = require$$1$2;
var isLength = require$$1$16;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$2(value) {
  return value != null && isLength(value.length) && !isFunction$3(value);
}

var isArrayLike_1 = isArrayLike$2;



var isArrayLike$3 = Object.freeze({
	default: isArrayLike_1,
	__moduleExports: isArrayLike_1
});

var require$$0$26 = ( isArrayLike$3 && isArrayLike$3['default'] ) || isArrayLike$3;

var isArrayLike$1 = require$$0$26;
var isObjectLike$4 = require$$0$10;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$4(value) && isArrayLike$1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject$1;



var isArrayLikeObject$2 = Object.freeze({
	default: isArrayLikeObject_1,
	__moduleExports: isArrayLikeObject_1
});

var require$$0$27 = ( isArrayLikeObject$2 && isArrayLikeObject$2['default'] ) || isArrayLikeObject$2;

var isArrayLikeObject = require$$0$27;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$7.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments$1(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty$5.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag);
}

var isArguments_1 = isArguments$1;



var isArguments$2 = Object.freeze({
	default: isArguments_1,
	__moduleExports: isArguments_1
});

var require$$3$5 = ( _baseTimes$2 && _baseTimes$2['default'] ) || _baseTimes$2;

var require$$1$17 = ( isArguments$2 && isArguments$2['default'] ) || isArguments$2;

var baseTimes = require$$3$5;
var isArguments = require$$1$17;
var isArray$3 = require$$1$7;
var isIndex$2 = require$$1$12;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray$3(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;



var _arrayLikeKeys$2 = Object.freeze({
	default: _arrayLikeKeys,
	__moduleExports: _arrayLikeKeys
});

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

  return value === proto;
}

var _isPrototype = isPrototype$1;



var _isPrototype$2 = Object.freeze({
	default: _isPrototype,
	__moduleExports: _isPrototype
});

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;



var _overArg$2 = Object.freeze({
	default: _overArg,
	__moduleExports: _overArg
});

var require$$0$28 = ( _overArg$2 && _overArg$2['default'] ) || _overArg$2;

var overArg = require$$0$28;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;



var _nativeKeys$2 = Object.freeze({
	default: _nativeKeys,
	__moduleExports: _nativeKeys
});

var require$$1$18 = ( _isPrototype$2 && _isPrototype$2['default'] ) || _isPrototype$2;

var require$$0$29 = ( _nativeKeys$2 && _nativeKeys$2['default'] ) || _nativeKeys$2;

var isPrototype = require$$1$18;
var nativeKeys = require$$0$29;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;



var _baseKeys$2 = Object.freeze({
	default: _baseKeys,
	__moduleExports: _baseKeys
});

var require$$2$12 = ( _arrayLikeKeys$2 && _arrayLikeKeys$2['default'] ) || _arrayLikeKeys$2;

var require$$1$19 = ( _baseKeys$2 && _baseKeys$2['default'] ) || _baseKeys$2;

var arrayLikeKeys = require$$2$12;
var baseKeys = require$$1$19;
var isArrayLike = require$$0$26;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$1;



var keys$2 = Object.freeze({
	default: keys_1,
	__moduleExports: keys_1
});

var require$$4$4 = ( _copyObject$2 && _copyObject$2['default'] ) || _copyObject$2;

var require$$0$30 = ( keys$2 && keys$2['default'] ) || keys$2;

var copyObject = require$$4$4;
var keys = require$$0$30;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

var _baseAssign = baseAssign;



var _baseAssign$2 = Object.freeze({
	default: _baseAssign,
	__moduleExports: _baseAssign
});

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;



var _listCacheClear$2 = Object.freeze({
	default: _listCacheClear,
	__moduleExports: _listCacheClear
});

var eq$3 = require$$3$4;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$1;



var _assocIndexOf$2 = Object.freeze({
	default: _assocIndexOf,
	__moduleExports: _assocIndexOf
});

var require$$0$31 = ( _assocIndexOf$2 && _assocIndexOf$2['default'] ) || _assocIndexOf$2;

var assocIndexOf = require$$0$31;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;



var _listCacheDelete$2 = Object.freeze({
	default: _listCacheDelete,
	__moduleExports: _listCacheDelete
});

var assocIndexOf$2 = require$$0$31;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;



var _listCacheGet$2 = Object.freeze({
	default: _listCacheGet,
	__moduleExports: _listCacheGet
});

var assocIndexOf$3 = require$$0$31;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$3(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;



var _listCacheHas$2 = Object.freeze({
	default: _listCacheHas,
	__moduleExports: _listCacheHas
});

var assocIndexOf$4 = require$$0$31;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf$4(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;



var _listCacheSet$2 = Object.freeze({
	default: _listCacheSet,
	__moduleExports: _listCacheSet
});

var require$$4$5 = ( _listCacheClear$2 && _listCacheClear$2['default'] ) || _listCacheClear$2;

var require$$3$6 = ( _listCacheDelete$2 && _listCacheDelete$2['default'] ) || _listCacheDelete$2;

var require$$2$13 = ( _listCacheGet$2 && _listCacheGet$2['default'] ) || _listCacheGet$2;

var require$$1$20 = ( _listCacheHas$2 && _listCacheHas$2['default'] ) || _listCacheHas$2;

var require$$0$32 = ( _listCacheSet$2 && _listCacheSet$2['default'] ) || _listCacheSet$2;

var listCacheClear = require$$4$5;
var listCacheDelete = require$$3$6;
var listCacheGet = require$$2$13;
var listCacheHas = require$$1$20;
var listCacheSet = require$$0$32;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;



var _ListCache$2 = Object.freeze({
	default: _ListCache,
	__moduleExports: _ListCache
});

var require$$1$21 = ( _ListCache$2 && _ListCache$2['default'] ) || _ListCache$2;

var ListCache$2 = require$$1$21;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;



var _stackClear$2 = Object.freeze({
	default: _stackClear,
	__moduleExports: _stackClear
});

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;



var _stackDelete$2 = Object.freeze({
	default: _stackDelete,
	__moduleExports: _stackDelete
});

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;



var _stackGet$2 = Object.freeze({
	default: _stackGet,
	__moduleExports: _stackGet
});

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;



var _stackHas$2 = Object.freeze({
	default: _stackHas,
	__moduleExports: _stackHas
});

var getNative$3 = require$$1$4;
var root$7 = require$$1$1;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative$3(root$7, 'Map');

var _Map = Map$1;



var _Map$2 = Object.freeze({
	default: _Map,
	__moduleExports: _Map
});

var getNative$4 = require$$1$4;

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = getNative$4(Object, 'create');

var _nativeCreate = nativeCreate$1;



var _nativeCreate$2 = Object.freeze({
	default: _nativeCreate,
	__moduleExports: _nativeCreate
});

var require$$0$33 = ( _nativeCreate$2 && _nativeCreate$2['default'] ) || _nativeCreate$2;

var nativeCreate = require$$0$33;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;



var _hashClear$2 = Object.freeze({
	default: _hashClear,
	__moduleExports: _hashClear
});

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;



var _hashDelete$2 = Object.freeze({
	default: _hashDelete,
	__moduleExports: _hashDelete
});

var nativeCreate$2 = require$$0$33;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$10.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;



var _hashGet$2 = Object.freeze({
	default: _hashGet,
	__moduleExports: _hashGet
});

var nativeCreate$3 = require$$0$33;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$11.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$3 ? data[key] !== undefined : hasOwnProperty$8.call(data, key);
}

var _hashHas = hashHas$1;



var _hashHas$2 = Object.freeze({
	default: _hashHas,
	__moduleExports: _hashHas
});

var nativeCreate$4 = require$$0$33;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$4 && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;



var _hashSet$2 = Object.freeze({
	default: _hashSet,
	__moduleExports: _hashSet
});

var require$$4$6 = ( _hashClear$2 && _hashClear$2['default'] ) || _hashClear$2;

var require$$3$7 = ( _hashDelete$2 && _hashDelete$2['default'] ) || _hashDelete$2;

var require$$2$14 = ( _hashGet$2 && _hashGet$2['default'] ) || _hashGet$2;

var require$$1$22 = ( _hashHas$2 && _hashHas$2['default'] ) || _hashHas$2;

var require$$0$34 = ( _hashSet$2 && _hashSet$2['default'] ) || _hashSet$2;

var hashClear = require$$4$6;
var hashDelete = require$$3$7;
var hashGet = require$$2$14;
var hashHas = require$$1$22;
var hashSet = require$$0$34;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;



var _Hash$2 = Object.freeze({
	default: _Hash,
	__moduleExports: _Hash
});

var require$$2$15 = ( _Hash$2 && _Hash$2['default'] ) || _Hash$2;

var require$$5$3 = ( _Map$2 && _Map$2['default'] ) || _Map$2;

var Hash = require$$2$15;
var ListCache$4 = require$$1$21;
var Map$2 = require$$5$3;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache$4),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;



var _mapCacheClear$2 = Object.freeze({
	default: _mapCacheClear,
	__moduleExports: _mapCacheClear
});

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;



var _isKeyable$2 = Object.freeze({
	default: _isKeyable,
	__moduleExports: _isKeyable
});

var require$$0$35 = ( _isKeyable$2 && _isKeyable$2['default'] ) || _isKeyable$2;

var isKeyable = require$$0$35;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$1;



var _getMapData$2 = Object.freeze({
	default: _getMapData,
	__moduleExports: _getMapData
});

var require$$0$36 = ( _getMapData$2 && _getMapData$2['default'] ) || _getMapData$2;

var getMapData = require$$0$36;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;



var _mapCacheDelete$2 = Object.freeze({
	default: _mapCacheDelete,
	__moduleExports: _mapCacheDelete
});

var getMapData$2 = require$$0$36;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;



var _mapCacheGet$2 = Object.freeze({
	default: _mapCacheGet,
	__moduleExports: _mapCacheGet
});

var getMapData$3 = require$$0$36;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$3(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;



var _mapCacheHas$2 = Object.freeze({
	default: _mapCacheHas,
	__moduleExports: _mapCacheHas
});

var getMapData$4 = require$$0$36;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData$4(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;



var _mapCacheSet$2 = Object.freeze({
	default: _mapCacheSet,
	__moduleExports: _mapCacheSet
});

var require$$4$7 = ( _mapCacheClear$2 && _mapCacheClear$2['default'] ) || _mapCacheClear$2;

var require$$3$8 = ( _mapCacheDelete$2 && _mapCacheDelete$2['default'] ) || _mapCacheDelete$2;

var require$$2$16 = ( _mapCacheGet$2 && _mapCacheGet$2['default'] ) || _mapCacheGet$2;

var require$$1$23 = ( _mapCacheHas$2 && _mapCacheHas$2['default'] ) || _mapCacheHas$2;

var require$$0$37 = ( _mapCacheSet$2 && _mapCacheSet$2['default'] ) || _mapCacheSet$2;

var mapCacheClear = require$$4$7;
var mapCacheDelete = require$$3$8;
var mapCacheGet = require$$2$16;
var mapCacheHas = require$$1$23;
var mapCacheSet = require$$0$37;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;



var _MapCache$2 = Object.freeze({
	default: _MapCache,
	__moduleExports: _MapCache
});

var require$$0$38 = ( _MapCache$2 && _MapCache$2['default'] ) || _MapCache$2;

var ListCache$3 = require$$1$21;
var Map = require$$5$3;
var MapCache = require$$0$38;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$3) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;



var _stackSet$2 = Object.freeze({
	default: _stackSet,
	__moduleExports: _stackSet
});

var require$$4$8 = ( _stackClear$2 && _stackClear$2['default'] ) || _stackClear$2;

var require$$3$9 = ( _stackDelete$2 && _stackDelete$2['default'] ) || _stackDelete$2;

var require$$2$17 = ( _stackGet$2 && _stackGet$2['default'] ) || _stackGet$2;

var require$$1$24 = ( _stackHas$2 && _stackHas$2['default'] ) || _stackHas$2;

var require$$0$39 = ( _stackSet$2 && _stackSet$2['default'] ) || _stackSet$2;

var ListCache = require$$1$21;
var stackClear = require$$4$8;
var stackDelete = require$$3$9;
var stackGet = require$$2$17;
var stackHas = require$$1$24;
var stackSet = require$$0$39;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;

var _Stack = Stack$1;



var _Stack$2 = Object.freeze({
	default: _Stack,
	__moduleExports: _Stack
});

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer$1(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

var _cloneBuffer = cloneBuffer$1;



var _cloneBuffer$2 = Object.freeze({
	default: _cloneBuffer,
	__moduleExports: _cloneBuffer
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;



var stubArray$2 = Object.freeze({
	default: stubArray_1,
	__moduleExports: stubArray_1
});

var require$$0$40 = ( stubArray$2 && stubArray$2['default'] ) || stubArray$2;

var overArg$2 = require$$0$28;
var stubArray = require$$0$40;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = nativeGetSymbols ? overArg$2(nativeGetSymbols, Object) : stubArray;

var _getSymbols = getSymbols$1;



var _getSymbols$2 = Object.freeze({
	default: _getSymbols,
	__moduleExports: _getSymbols
});

var require$$1$25 = ( _getSymbols$2 && _getSymbols$2['default'] ) || _getSymbols$2;

var copyObject$2 = require$$4$4;
var getSymbols = require$$1$25;

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols(source), object);
}

var _copySymbols = copySymbols$1;



var _copySymbols$2 = Object.freeze({
	default: _copySymbols,
	__moduleExports: _copySymbols
});

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;



var _arrayPush$2 = Object.freeze({
	default: _arrayPush,
	__moduleExports: _arrayPush
});

var require$$3$10 = ( _arrayPush$2 && _arrayPush$2['default'] ) || _arrayPush$2;

var arrayPush = require$$3$10;
var isArray$5 = require$$1$7;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$5(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;



var _baseGetAllKeys$2 = Object.freeze({
	default: _baseGetAllKeys,
	__moduleExports: _baseGetAllKeys
});

var require$$2$18 = ( _baseGetAllKeys$2 && _baseGetAllKeys$2['default'] ) || _baseGetAllKeys$2;

var baseGetAllKeys = require$$2$18;
var getSymbols$2 = require$$1$25;
var keys$4 = require$$0$30;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$4, getSymbols$2);
}

var _getAllKeys = getAllKeys$1;



var _getAllKeys$2 = Object.freeze({
	default: _getAllKeys,
	__moduleExports: _getAllKeys
});

var getNative$5 = require$$1$4;
var root$8 = require$$1$1;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$5(root$8, 'DataView');

var _DataView = DataView$1;



var _DataView$2 = Object.freeze({
	default: _DataView,
	__moduleExports: _DataView
});

var getNative$6 = require$$1$4;
var root$9 = require$$1$1;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$6(root$9, 'Promise');

var _Promise = Promise$2;



var _Promise$2 = Object.freeze({
	default: _Promise,
	__moduleExports: _Promise
});

var getNative$7 = require$$1$4;
var root$10 = require$$1$1;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$7(root$10, 'Set');

var _Set = Set$1;



var _Set$2 = Object.freeze({
	default: _Set,
	__moduleExports: _Set
});

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$4 = objectProto$13.toString;

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  return objectToString$4.call(value);
}

var _baseGetTag = baseGetTag$1;



var _baseGetTag$2 = Object.freeze({
	default: _baseGetTag,
	__moduleExports: _baseGetTag
});

var require$$6$1 = ( _DataView$2 && _DataView$2['default'] ) || _DataView$2;

var require$$4$9 = ( _Promise$2 && _Promise$2['default'] ) || _Promise$2;

var require$$3$11 = ( _Set$2 && _Set$2['default'] ) || _Set$2;

var require$$1$26 = ( _baseGetTag$2 && _baseGetTag$2['default'] ) || _baseGetTag$2;

var DataView = require$$6$1;
var Map$3 = require$$5$3;
var Promise$1 = require$$4$9;
var Set = require$$3$11;
var WeakMap$2 = require$$2$1;
var baseGetTag = require$$1$26;
var toSource$2 = require$$0$5;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]';
var objectTag$1 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$1 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$3 = objectProto$12.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource$2(DataView);
var mapCtorString = toSource$2(Map$3);
var promiseCtorString = toSource$2(Promise$1);
var setCtorString = toSource$2(Set);
var weakMapCtorString = toSource$2(WeakMap$2);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (Map$3 && getTag$1(new Map$3) != mapTag$1) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag$1) ||
    (WeakMap$2 && getTag$1(new WeakMap$2) != weakMapTag$1)) {
  getTag$1 = function(value) {
    var result = objectToString$3.call(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource$2(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;



var _getTag$2 = Object.freeze({
	default: _getTag,
	__moduleExports: _getTag
});

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$14.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray$1;



var _initCloneArray$2 = Object.freeze({
	default: _initCloneArray,
	__moduleExports: _initCloneArray
});

var root$11 = require$$1$1;

/** Built-in value references. */
var Uint8Array$1 = root$11.Uint8Array;

var _Uint8Array = Uint8Array$1;



var _Uint8Array$2 = Object.freeze({
	default: _Uint8Array,
	__moduleExports: _Uint8Array
});

var require$$4$10 = ( _Uint8Array$2 && _Uint8Array$2['default'] ) || _Uint8Array$2;

var Uint8Array = require$$4$10;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$1;



var _cloneArrayBuffer$2 = Object.freeze({
	default: _cloneArrayBuffer,
	__moduleExports: _cloneArrayBuffer
});

var require$$0$41 = ( _cloneArrayBuffer$2 && _cloneArrayBuffer$2['default'] ) || _cloneArrayBuffer$2;

var cloneArrayBuffer$2 = require$$0$41;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;



var _cloneDataView$2 = Object.freeze({
	default: _cloneDataView,
	__moduleExports: _cloneDataView
});

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry$1(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

var _addMapEntry = addMapEntry$1;



var _addMapEntry$2 = Object.freeze({
	default: _addMapEntry,
	__moduleExports: _addMapEntry
});

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce$1;



var _arrayReduce$2 = Object.freeze({
	default: _arrayReduce,
	__moduleExports: _arrayReduce
});

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;



var _mapToArray$2 = Object.freeze({
	default: _mapToArray,
	__moduleExports: _mapToArray
});

var require$$2$19 = ( _addMapEntry$2 && _addMapEntry$2['default'] ) || _addMapEntry$2;

var require$$1$27 = ( _arrayReduce$2 && _arrayReduce$2['default'] ) || _arrayReduce$2;

var require$$1$28 = ( _mapToArray$2 && _mapToArray$2['default'] ) || _mapToArray$2;

var addMapEntry = require$$2$19;
var arrayReduce = require$$1$27;
var mapToArray = require$$1$28;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap$1(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

var _cloneMap = cloneMap$1;



var _cloneMap$2 = Object.freeze({
	default: _cloneMap,
	__moduleExports: _cloneMap
});

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;



var _cloneRegExp$2 = Object.freeze({
	default: _cloneRegExp,
	__moduleExports: _cloneRegExp
});

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry$1(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

var _addSetEntry = addSetEntry$1;



var _addSetEntry$2 = Object.freeze({
	default: _addSetEntry,
	__moduleExports: _addSetEntry
});

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;



var _setToArray$2 = Object.freeze({
	default: _setToArray,
	__moduleExports: _setToArray
});

var require$$2$20 = ( _addSetEntry$2 && _addSetEntry$2['default'] ) || _addSetEntry$2;

var require$$0$42 = ( _setToArray$2 && _setToArray$2['default'] ) || _setToArray$2;

var addSetEntry = require$$2$20;
var arrayReduce$2 = require$$1$27;
var setToArray = require$$0$42;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet$1(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce$2(array, addSetEntry, new set.constructor);
}

var _cloneSet = cloneSet$1;



var _cloneSet$2 = Object.freeze({
	default: _cloneSet,
	__moduleExports: _cloneSet
});

var root$12 = require$$1$1;

/** Built-in value references. */
var Symbol$2 = root$12.Symbol;

var _Symbol = Symbol$2;



var _Symbol$2 = Object.freeze({
	default: _Symbol,
	__moduleExports: _Symbol
});

var require$$2$21 = ( _Symbol$2 && _Symbol$2['default'] ) || _Symbol$2;

var Symbol$1 = require$$2$21;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;



var _cloneSymbol$2 = Object.freeze({
	default: _cloneSymbol,
	__moduleExports: _cloneSymbol
});

var cloneArrayBuffer$3 = require$$0$41;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;



var _cloneTypedArray$2 = Object.freeze({
	default: _cloneTypedArray,
	__moduleExports: _cloneTypedArray
});

var require$$5$4 = ( _cloneDataView$2 && _cloneDataView$2['default'] ) || _cloneDataView$2;

var require$$4$11 = ( _cloneMap$2 && _cloneMap$2['default'] ) || _cloneMap$2;

var require$$3$12 = ( _cloneRegExp$2 && _cloneRegExp$2['default'] ) || _cloneRegExp$2;

var require$$2$22 = ( _cloneSet$2 && _cloneSet$2['default'] ) || _cloneSet$2;

var require$$1$29 = ( _cloneSymbol$2 && _cloneSymbol$2['default'] ) || _cloneSymbol$2;

var require$$0$43 = ( _cloneTypedArray$2 && _cloneTypedArray$2['default'] ) || _cloneTypedArray$2;

var cloneArrayBuffer = require$$0$41;
var cloneDataView = require$$5$4;
var cloneMap = require$$4$11;
var cloneRegExp = require$$3$12;
var cloneSet = require$$2$22;
var cloneSymbol = require$$1$29;
var cloneTypedArray = require$$0$43;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var mapTag$2 = '[object Map]';
var numberTag$1 = '[object Number]';
var regexpTag$1 = '[object RegExp]';
var setTag$2 = '[object Set]';
var stringTag$1 = '[object String]';
var symbolTag$2 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$2 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;



var _initCloneByTag$2 = Object.freeze({
	default: _initCloneByTag,
	__moduleExports: _initCloneByTag
});

var overArg$3 = require$$0$28;

/** Built-in value references. */
var getPrototype$1 = overArg$3(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$1;



var _getPrototype$2 = Object.freeze({
	default: _getPrototype,
	__moduleExports: _getPrototype
});

var require$$1$30 = ( _getPrototype$2 && _getPrototype$2['default'] ) || _getPrototype$2;

var baseCreate$4 = require$$2$3;
var getPrototype = require$$1$30;
var isPrototype$2 = require$$1$18;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype$2(object))
    ? baseCreate$4(getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject$1;



var _initCloneObject$2 = Object.freeze({
	default: _initCloneObject,
	__moduleExports: _initCloneObject
});

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;



var stubFalse$1 = Object.freeze({
	default: stubFalse_1,
	__moduleExports: stubFalse_1
});

var require$$0$44 = ( stubFalse$1 && stubFalse$1['default'] ) || stubFalse$1;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var root = require$$1$1,
    stubFalse = require$$0$44;

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
});



var isBuffer$1 = Object.freeze({
	default: isBuffer_1,
	__moduleExports: isBuffer_1
});

var require$$6$2 = ( _Stack$2 && _Stack$2['default'] ) || _Stack$2;

var require$$12 = ( _baseAssign$2 && _baseAssign$2['default'] ) || _baseAssign$2;

var require$$11 = ( _cloneBuffer$2 && _cloneBuffer$2['default'] ) || _cloneBuffer$2;

var require$$9 = ( _copySymbols$2 && _copySymbols$2['default'] ) || _copySymbols$2;

var require$$8$1 = ( _getAllKeys$2 && _getAllKeys$2['default'] ) || _getAllKeys$2;

var require$$2$23 = ( _getTag$2 && _getTag$2['default'] ) || _getTag$2;

var require$$6$3 = ( _initCloneArray$2 && _initCloneArray$2['default'] ) || _initCloneArray$2;

var require$$5$5 = ( _initCloneByTag$2 && _initCloneByTag$2['default'] ) || _initCloneByTag$2;

var require$$4$12 = ( _initCloneObject$2 && _initCloneObject$2['default'] ) || _initCloneObject$2;

var require$$2$24 = ( isBuffer$1 && isBuffer$1['default'] ) || isBuffer$1;

var Stack = require$$6$2;
var arrayEach$2 = require$$14;
var assignValue$2 = require$$5$2;
var baseAssign$1 = require$$12;
var cloneBuffer = require$$11;
var copyArray$3 = require$$4;
var copySymbols = require$$9;
var getAllKeys = require$$8$1;
var getTag = require$$2$23;
var initCloneArray = require$$6$3;
var initCloneByTag = require$$5$5;
var initCloneObject = require$$4$12;
var isArray$4 = require$$1$7;
var isBuffer = require$$2$24;
var isObject$7 = require$$0$2;
var keys$3 = require$$0$30;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag$1 = '[object Symbol]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag$1] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject$7(value)) {
    return value;
  }
  var isArr = isArray$4(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$3(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag$1 || tag == genTag$1;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag$1 || (isFunc && !object)) {
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign$1(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone$1, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys$3(value);
  }
  arrayEach$2(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue$2(result, key, baseClone$1(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$1;



var _baseClone$2 = Object.freeze({
	default: _baseClone,
	__moduleExports: _baseClone
});

var require$$1$31 = ( _baseClone$2 && _baseClone$2['default'] ) || _baseClone$2;

var baseClone = require$$1$31;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

var clone_1 = clone;



var clone$1 = Object.freeze({
	default: clone_1,
	__moduleExports: clone_1
});

var createWrap$2 = require$$1$14;

/** Used to compose bitmasks for function metadata. */
var CURRY_FLAG$5 = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap$2(func, CURRY_FLAG$5, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

var curry_1 = curry;



var curry$1 = Object.freeze({
	default: curry_1,
	__moduleExports: curry_1
});

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd$1;



var _setCacheAdd$2 = Object.freeze({
	default: _setCacheAdd,
	__moduleExports: _setCacheAdd
});

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;



var _setCacheHas$2 = Object.freeze({
	default: _setCacheHas,
	__moduleExports: _setCacheHas
});

var require$$1$32 = ( _setCacheAdd$2 && _setCacheAdd$2['default'] ) || _setCacheAdd$2;

var require$$0$45 = ( _setCacheHas$2 && _setCacheHas$2['default'] ) || _setCacheHas$2;

var MapCache$2 = require$$0$38;
var setCacheAdd = require$$1$32;
var setCacheHas = require$$0$45;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache$2;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;



var _SetCache$2 = Object.freeze({
	default: _SetCache,
	__moduleExports: _SetCache
});

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome$1(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;



var _arraySome$2 = Object.freeze({
	default: _arraySome,
	__moduleExports: _arraySome
});

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;



var _cacheHas$2 = Object.freeze({
	default: _cacheHas,
	__moduleExports: _cacheHas
});

var require$$2$25 = ( _SetCache$2 && _SetCache$2['default'] ) || _SetCache$2;

var require$$1$33 = ( _arraySome$2 && _arraySome$2['default'] ) || _arraySome$2;

var require$$0$46 = ( _cacheHas$2 && _cacheHas$2['default'] ) || _cacheHas$2;

var SetCache = require$$2$25;
var arraySome = require$$1$33;
var cacheHas = require$$0$46;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG$1 = 1;
var PARTIAL_COMPARE_FLAG$2 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$1(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$2,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$1;



var _equalArrays$2 = Object.freeze({
	default: _equalArrays,
	__moduleExports: _equalArrays
});

var require$$2$26 = ( _equalArrays$2 && _equalArrays$2['default'] ) || _equalArrays$2;

var Symbol$3 = require$$2$21;
var Uint8Array$2 = require$$4$10;
var eq$4 = require$$3$4;
var equalArrays$2 = require$$2$26;
var mapToArray$2 = require$$1$28;
var setToArray$2 = require$$0$42;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG$2 = 1;
var PARTIAL_COMPARE_FLAG$3 = 2;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var errorTag$1 = '[object Error]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$3 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$3 ? Symbol$3.prototype : undefined;
var symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag$3:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$2:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;

    case boolTag$2:
    case dateTag$2:
    case numberTag$2:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$4(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$2:
    case stringTag$2:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$3:
      var convert = mapToArray$2;

    case setTag$3:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG$3;
      convert || (convert = setToArray$2);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag$3:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;



var _equalByTag$2 = Object.freeze({
	default: _equalByTag,
	__moduleExports: _equalByTag
});

var keys$5 = require$$0$30;

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG$4 = 2;

/** Used for built-in method references. */
var objectProto$16 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$16.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$4,
      objProps = keys$5(object),
      objLength = objProps.length,
      othProps = keys$5(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$11.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;



var _equalObjects$2 = Object.freeze({
	default: _equalObjects,
	__moduleExports: _equalObjects
});

var isLength$3 = require$$1$16;
var isObjectLike$6 = require$$0$10;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var errorTag$2 = '[object Error]';
var funcTag$2 = '[object Function]';
var mapTag$4 = '[object Map]';
var numberTag$3 = '[object Number]';
var objectTag$3 = '[object Object]';
var regexpTag$3 = '[object RegExp]';
var setTag$4 = '[object Set]';
var stringTag$3 = '[object String]';
var weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$3] = typedArrayTags[arrayTag$2] =
typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] =
typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] =
typedArrayTags[errorTag$2] = typedArrayTags[funcTag$2] =
typedArrayTags[mapTag$4] = typedArrayTags[numberTag$3] =
typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$3] =
typedArrayTags[setTag$4] = typedArrayTags[stringTag$3] =
typedArrayTags[weakMapTag$2] = false;

/** Used for built-in method references. */
var objectProto$17 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$5 = objectProto$17.toString;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$6(value) &&
    isLength$3(value.length) && !!typedArrayTags[objectToString$5.call(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;



var _baseIsTypedArray$2 = Object.freeze({
	default: _baseIsTypedArray,
	__moduleExports: _baseIsTypedArray
});

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;



var _baseUnary$2 = Object.freeze({
	default: _baseUnary,
	__moduleExports: _baseUnary
});

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeGlobal = require$$0$3;

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});



var _nodeUtil$2 = Object.freeze({
	default: _nodeUtil,
	__moduleExports: _nodeUtil
});

var require$$2$27 = ( _baseIsTypedArray$2 && _baseIsTypedArray$2['default'] ) || _baseIsTypedArray$2;

var require$$1$34 = ( _baseUnary$2 && _baseUnary$2['default'] ) || _baseUnary$2;

var require$$0$47 = ( _nodeUtil$2 && _nodeUtil$2['default'] ) || _nodeUtil$2;

var baseIsTypedArray = require$$2$27;
var baseUnary = require$$1$34;
var nodeUtil = require$$0$47;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;



var isTypedArray$2 = Object.freeze({
	default: isTypedArray_1,
	__moduleExports: isTypedArray_1
});

var require$$4$13 = ( _equalByTag$2 && _equalByTag$2['default'] ) || _equalByTag$2;

var require$$3$13 = ( _equalObjects$2 && _equalObjects$2['default'] ) || _equalObjects$2;

var require$$0$48 = ( isTypedArray$2 && isTypedArray$2['default'] ) || isTypedArray$2;

var Stack$3 = require$$6$2;
var equalArrays = require$$2$26;
var equalByTag = require$$4$13;
var equalObjects = require$$3$13;
var getTag$2 = require$$2$23;
var isArray$7 = require$$1$7;
var isTypedArray = require$$0$48;

/** Used to compose bitmasks for comparison styles. */
var PARTIAL_COMPARE_FLAG$1 = 2;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$15.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray$7(object),
      othIsArr = isArray$7(other),
      objTag = arrayTag$1,
      othTag = arrayTag$1;

  if (!objIsArr) {
    objTag = getTag$2(object);
    objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  }
  if (!othIsArr) {
    othTag = getTag$2(other);
    othTag = othTag == argsTag$2 ? objectTag$2 : othTag;
  }
  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$10.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$10.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$3);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;



var _baseIsEqualDeep$2 = Object.freeze({
	default: _baseIsEqualDeep,
	__moduleExports: _baseIsEqualDeep
});

var require$$2$28 = ( _baseIsEqualDeep$2 && _baseIsEqualDeep$2['default'] ) || _baseIsEqualDeep$2;

var baseIsEqualDeep = require$$2$28;
var isObject$8 = require$$0$2;
var isObjectLike$5 = require$$0$10;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject$8(value) && !isObjectLike$5(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual$1, customizer, bitmask, stack);
}

var _baseIsEqual = baseIsEqual$1;



var _baseIsEqual$2 = Object.freeze({
	default: _baseIsEqual,
	__moduleExports: _baseIsEqual
});

var require$$6$4 = ( _baseIsEqual$2 && _baseIsEqual$2['default'] ) || _baseIsEqual$2;

var Stack$2 = require$$6$2;
var baseIsEqual = require$$6$4;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1;
var PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;



var _baseIsMatch$2 = Object.freeze({
	default: _baseIsMatch,
	__moduleExports: _baseIsMatch
});

var isObject$9 = require$$0$2;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$1(value) {
  return value === value && !isObject$9(value);
}

var _isStrictComparable = isStrictComparable$1;



var _isStrictComparable$2 = Object.freeze({
	default: _isStrictComparable,
	__moduleExports: _isStrictComparable
});

var require$$2$29 = ( _isStrictComparable$2 && _isStrictComparable$2['default'] ) || _isStrictComparable$2;

var isStrictComparable = require$$2$29;
var keys$6 = require$$0$30;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$6(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;



var _getMatchData$2 = Object.freeze({
	default: _getMatchData,
	__moduleExports: _getMatchData
});

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable$1(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$1;



var _matchesStrictComparable$2 = Object.freeze({
	default: _matchesStrictComparable,
	__moduleExports: _matchesStrictComparable
});

var require$$2$30 = ( _baseIsMatch$2 && _baseIsMatch$2['default'] ) || _baseIsMatch$2;

var require$$1$35 = ( _getMatchData$2 && _getMatchData$2['default'] ) || _getMatchData$2;

var require$$1$36 = ( _matchesStrictComparable$2 && _matchesStrictComparable$2['default'] ) || _matchesStrictComparable$2;

var baseIsMatch = require$$2$30;
var getMatchData = require$$1$35;
var matchesStrictComparable = require$$1$36;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;



var _baseMatches$2 = Object.freeze({
	default: _baseMatches,
	__moduleExports: _baseMatches
});

var MapCache$3 = require$$0$38;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$3);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$3;

var memoize_1 = memoize$1;



var memoize$2 = Object.freeze({
	default: memoize_1,
	__moduleExports: memoize_1
});

var require$$0$49 = ( memoize$2 && memoize$2['default'] ) || memoize$2;

var memoize = require$$0$49;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;



var _memoizeCapped$2 = Object.freeze({
	default: _memoizeCapped,
	__moduleExports: _memoizeCapped
});

var Symbol$4 = require$$2$21;
var isSymbol$3 = require$$2$11;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$4 ? Symbol$4.prototype : undefined;
var symbolToString = symbolProto$2 ? symbolProto$2.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol$3(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString$1;



var _baseToString$2 = Object.freeze({
	default: _baseToString,
	__moduleExports: _baseToString
});

var require$$0$50 = ( _baseToString$2 && _baseToString$2['default'] ) || _baseToString$2;

var baseToString = require$$0$50;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;



var toString$2 = Object.freeze({
	default: toString_1,
	__moduleExports: toString_1
});

var require$$1$37 = ( _memoizeCapped$2 && _memoizeCapped$2['default'] ) || _memoizeCapped$2;

var require$$0$51 = ( toString$2 && toString$2['default'] ) || toString$2;

var memoizeCapped = require$$1$37;
var toString = require$$0$51;

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;



var _stringToPath$2 = Object.freeze({
	default: _stringToPath,
	__moduleExports: _stringToPath
});

var require$$1$38 = ( _stringToPath$2 && _stringToPath$2['default'] ) || _stringToPath$2;

var isArray$8 = require$$1$7;
var stringToPath = require$$1$38;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value) {
  return isArray$8(value) ? value : stringToPath(value);
}

var _castPath = castPath$1;



var _castPath$2 = Object.freeze({
	default: _castPath,
	__moduleExports: _castPath
});

var isArray$9 = require$$1$7;
var isSymbol$4 = require$$2$11;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$2(value, object) {
  if (isArray$9(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$4(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$2;



var _isKey$2 = Object.freeze({
	default: _isKey,
	__moduleExports: _isKey
});

var isSymbol$5 = require$$2$11;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$2(value) {
  if (typeof value == 'string' || isSymbol$5(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}

var _toKey = toKey$2;



var _toKey$2 = Object.freeze({
	default: _toKey,
	__moduleExports: _toKey
});

var require$$4$14 = ( _castPath$2 && _castPath$2['default'] ) || _castPath$2;

var require$$2$31 = ( _isKey$2 && _isKey$2['default'] ) || _isKey$2;

var require$$0$52 = ( _toKey$2 && _toKey$2['default'] ) || _toKey$2;

var castPath = require$$4$14;
var isKey$1 = require$$2$31;
var toKey$1 = require$$0$52;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = isKey$1(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$1(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;



var _baseGet$2 = Object.freeze({
	default: _baseGet,
	__moduleExports: _baseGet
});

var require$$0$53 = ( _baseGet$2 && _baseGet$2['default'] ) || _baseGet$2;

var baseGet = require$$0$53;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;



var get$2 = Object.freeze({
	default: get_1,
	__moduleExports: get_1
});

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;



var _baseHasIn$2 = Object.freeze({
	default: _baseHasIn,
	__moduleExports: _baseHasIn
});

var castPath$2 = require$$4$14;
var isArguments$3 = require$$1$17;
var isArray$10 = require$$1$7;
var isIndex$3 = require$$1$12;
var isKey$3 = require$$2$31;
var isLength$4 = require$$1$16;
var toKey$3 = require$$0$52;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = isKey$3(path, object) ? [path] : castPath$2(path);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$3(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object ? object.length : 0;
  return !!length && isLength$4(length) && isIndex$3(key, length) &&
    (isArray$10(object) || isArguments$3(object));
}

var _hasPath = hasPath$1;



var _hasPath$2 = Object.freeze({
	default: _hasPath,
	__moduleExports: _hasPath
});

var require$$1$39 = ( _baseHasIn$2 && _baseHasIn$2['default'] ) || _baseHasIn$2;

var require$$0$54 = ( _hasPath$2 && _hasPath$2['default'] ) || _hasPath$2;

var baseHasIn = require$$1$39;
var hasPath = require$$0$54;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;



var hasIn$2 = Object.freeze({
	default: hasIn_1,
	__moduleExports: hasIn_1
});

var require$$5$6 = ( get$2 && get$2['default'] ) || get$2;

var require$$4$15 = ( hasIn$2 && hasIn$2['default'] ) || hasIn$2;

var baseIsEqual$2 = require$$6$4;
var get = require$$5$6;
var hasIn = require$$4$15;
var isKey = require$$2$31;
var isStrictComparable$2 = require$$2$29;
var matchesStrictComparable$2 = require$$1$36;
var toKey = require$$0$52;

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG$3 = 1;
var PARTIAL_COMPARE_FLAG$5 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey(path) && isStrictComparable$2(srcValue)) {
    return matchesStrictComparable$2(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual$2(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG$3 | PARTIAL_COMPARE_FLAG$5);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;



var _baseMatchesProperty$2 = Object.freeze({
	default: _baseMatchesProperty,
	__moduleExports: _baseMatchesProperty
});

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;



var _baseProperty$2 = Object.freeze({
	default: _baseProperty,
	__moduleExports: _baseProperty
});

var baseGet$2 = require$$0$53;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$2(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;



var _basePropertyDeep$2 = Object.freeze({
	default: _basePropertyDeep,
	__moduleExports: _basePropertyDeep
});

var require$$3$14 = ( _baseProperty$2 && _baseProperty$2['default'] ) || _baseProperty$2;

var require$$2$32 = ( _basePropertyDeep$2 && _basePropertyDeep$2['default'] ) || _basePropertyDeep$2;

var baseProperty = require$$3$14;
var basePropertyDeep = require$$2$32;
var isKey$4 = require$$2$31;
var toKey$4 = require$$0$52;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey$4(path) ? baseProperty(toKey$4(path)) : basePropertyDeep(path);
}

var property_1 = property$1;



var property$2 = Object.freeze({
	default: property_1,
	__moduleExports: property_1
});

var require$$4$16 = ( _baseMatches$2 && _baseMatches$2['default'] ) || _baseMatches$2;

var require$$3$15 = ( _baseMatchesProperty$2 && _baseMatchesProperty$2['default'] ) || _baseMatchesProperty$2;

var require$$0$55 = ( property$2 && property$2['default'] ) || property$2;

var baseMatches = require$$4$16;
var baseMatchesProperty = require$$3$15;
var identity$4 = require$$2$2;
var isArray$6 = require$$1$7;
var property = require$$0$55;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$4;
  }
  if (typeof value == 'object') {
    return isArray$6(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;



var _baseIteratee$2 = Object.freeze({
	default: _baseIteratee,
	__moduleExports: _baseIteratee
});

var require$$2$33 = ( _baseIteratee$2 && _baseIteratee$2['default'] ) || _baseIteratee$2;

var baseClone$2 = require$$1$31;
var baseIteratee = require$$2$33;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone$2(func, true));
}

var iteratee_1 = iteratee;



var iteratee$1 = Object.freeze({
	default: iteratee_1,
	__moduleExports: iteratee_1
});

var Symbol$5 = require$$2$21;
var isArguments$4 = require$$1$17;
var isArray$11 = require$$1$7;

/** Built-in value references. */
var spreadableSymbol = Symbol$5 ? Symbol$5.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$11(value) || isArguments$4(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable$1;



var _isFlattenable$2 = Object.freeze({
	default: _isFlattenable,
	__moduleExports: _isFlattenable
});

var require$$0$56 = ( _isFlattenable$2 && _isFlattenable$2['default'] ) || _isFlattenable$2;

var arrayPush$2 = require$$3$10;
var isFlattenable = require$$0$56;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$2(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten$1;



var _baseFlatten$2 = Object.freeze({
	default: _baseFlatten,
	__moduleExports: _baseFlatten
});

var require$$0$57 = ( _baseFlatten$2 && _baseFlatten$2['default'] ) || _baseFlatten$2;

var baseFlatten = require$$0$57;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten$1(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array, 1) : [];
}

var flatten_1 = flatten$1;



var flatten$2 = Object.freeze({
	default: flatten_1,
	__moduleExports: flatten_1
});

var apply$3 = require$$4$2;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax$3(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$3(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply$3(func, this, otherArgs);
  };
}

var _overRest = overRest$1;



var _overRest$2 = Object.freeze({
	default: _overRest,
	__moduleExports: _overRest
});

var require$$2$34 = ( flatten$2 && flatten$2['default'] ) || flatten$2;

var require$$1$40 = ( _overRest$2 && _overRest$2['default'] ) || _overRest$2;

var flatten = require$$2$34;
var overRest = require$$1$40;
var setToString$2 = require$$0$18;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest$1(func) {
  return setToString$2(overRest(func, undefined, flatten), func + '');
}

var _flatRest = flatRest$1;



var _flatRest$2 = Object.freeze({
	default: _flatRest,
	__moduleExports: _flatRest
});

var require$$4$17 = ( _flatRest$2 && _flatRest$2['default'] ) || _flatRest$2;

var createWrap$3 = require$$1$14;
var flatRest = require$$4$17;

/** Used to compose bitmasks for function metadata. */
var REARG_FLAG$2 = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap$3(func, REARG_FLAG$2, undefined, undefined, undefined, indexes);
});

var rearg_1 = rearg;



var rearg$1 = Object.freeze({
	default: rearg_1,
	__moduleExports: rearg_1
});

var identity$5 = require$$2$2;
var overRest$2 = require$$1$40;
var setToString$3 = require$$0$18;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString$3(overRest$2(func, start, identity$5), func + '');
}

var _baseRest = baseRest$1;



var _baseRest$2 = Object.freeze({
	default: _baseRest,
	__moduleExports: _baseRest
});

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice$1;



var _baseSlice$2 = Object.freeze({
	default: _baseSlice,
	__moduleExports: _baseSlice
});

var require$$0$58 = ( _baseSlice$2 && _baseSlice$2['default'] ) || _baseSlice$2;

var baseSlice = require$$0$58;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice$1(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

var _castSlice = castSlice$1;



var _castSlice$2 = Object.freeze({
	default: _castSlice,
	__moduleExports: _castSlice
});

var require$$1$41 = ( _baseRest$2 && _baseRest$2['default'] ) || _baseRest$2;

var require$$1$42 = ( _castSlice$2 && _castSlice$2['default'] ) || _castSlice$2;

var apply$4 = require$$4$2;
var arrayPush$3 = require$$3$10;
var baseRest = require$$1$41;
var castSlice = require$$1$42;
var toInteger$3 = require$$0$25;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$4 = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  start = start === undefined ? 0 : nativeMax$4(toInteger$3(start), 0);
  return baseRest(function(args) {
    var array = args[start],
        otherArgs = castSlice(args, 0, start);

    if (array) {
      arrayPush$3(otherArgs, array);
    }
    return apply$4(func, this, otherArgs);
  });
}

var spread_1 = spread;



var spread$1 = Object.freeze({
	default: spread_1,
	__moduleExports: spread_1
});

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;



var _arrayMap$2 = Object.freeze({
	default: _arrayMap,
	__moduleExports: _arrayMap
});

var require$$3$16 = ( _arrayMap$2 && _arrayMap$2['default'] ) || _arrayMap$2;

var arrayMap = require$$3$16;
var copyArray$4 = require$$4;
var isArray$12 = require$$1$7;
var isSymbol$6 = require$$2$11;
var stringToPath$2 = require$$1$38;
var toKey$5 = require$$0$52;

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray$12(value)) {
    return arrayMap(value, toKey$5);
  }
  return isSymbol$6(value) ? [value] : copyArray$4(stringToPath$2(value));
}

var toPath_1 = toPath;



var toPath$1 = Object.freeze({
	default: toPath_1,
	__moduleExports: toPath_1
});

var require$$12$1 = ( ary$1 && ary$1['default'] ) || ary$1;

var require$$10 = ( clone$1 && clone$1['default'] ) || clone$1;

var require$$9$1 = ( curry$1 && curry$1['default'] ) || curry$1;

var require$$5$7 = ( iteratee$1 && iteratee$1['default'] ) || iteratee$1;

var require$$3$17 = ( rearg$1 && rearg$1['default'] ) || rearg$1;

var require$$2$35 = ( spread$1 && spread$1['default'] ) || spread$1;

var require$$0$59 = ( toPath$1 && toPath$1['default'] ) || toPath$1;

var _util = {
  'ary': require$$12$1,
  'assign': require$$12,
  'clone': require$$10,
  'curry': require$$9$1,
  'forEach': require$$14,
  'isArray': require$$1$7,
  'isFunction': require$$1$2,
  'iteratee': require$$5$7,
  'keys': require$$1$19,
  'rearg': require$$3$17,
  'spread': require$$2$35,
  'toInteger': require$$0$25,
  'toPath': require$$0$59
};



var _util$2 = Object.freeze({
	default: _util,
	__moduleExports: _util
});

var require$$1$43 = ( _baseConvert$2 && _baseConvert$2['default'] ) || _baseConvert$2;

var require$$0$60 = ( _util$2 && _util$2['default'] ) || _util$2;

var baseConvert = require$$1$43;
var util = require$$0$60;

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert$1(name, func, options) {
  return baseConvert(util, name, func, options);
}

var convert_1 = convert$1;



var convert$2 = Object.freeze({
	default: convert_1,
	__moduleExports: convert_1
});

var assignValue$3 = require$$5$2;
var castPath$3 = require$$4$14;
var isIndex$4 = require$$1$12;
var isKey$5 = require$$2$31;
var isObject$10 = require$$0$2;
var toKey$6 = require$$0$52;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet$1(object, path, value, customizer) {
  if (!isObject$10(object)) {
    return object;
  }
  path = isKey$5(path, object) ? [path] : castPath$3(path);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey$6(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject$10(objValue)
          ? objValue
          : (isIndex$4(path[index + 1]) ? [] : {});
      }
    }
    assignValue$3(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet$1;

var baseSet = _baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set$2(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var set_1 = set$2;

var require$$2$36 = ( convert$2 && convert$2['default'] ) || convert$2;

var convert = require$$2$36;
var func$1 = convert('set', set_1);

func$1.placeholder = require$$0$1;
var set = func$1;

function createStore(reducer, middlewares) {
    var store = {
        reducer: reducer,
        subscribers: [],
        state: void 0
    };

    var publicApi = {
        subscribe: makeSubscribe(store),
        getState: makeGetState(store),
        dispatch: makeDispatch(store)
    };

    if (middlewares && middlewares.length) {
        publicApi = applyMiddlewares(publicApi, middlewares);
    }

    publicApi.dispatch({ type: '@@INIT' }); //Set the initial state

    return publicApi;
}

function applyMiddlewares(store, middlewares) {
    return set('dispatch', middlewares.map(function (middleware, index) {
        return middleware(store)(middlewares[index + 1] || store.dispatch);
    })[0], store);
}

function makeDispatch(store) {
    return function (action) {
        var nextState = store.reducer(action, store.state);

        if (nextState !== store.state) {
            store.state = nextState;
            emitChange(store);
        }
    };
}

function makeSubscribe(store) {
    return function (reduceFn, callback) {
        store.subscribers.push({ reduceFn: reduceFn, callback: callback });
    };
}

function makeGetState(store) {
    return function () {
        return store.state;
    };
}

function emitChange(store) {
    store.subscribers.forEach(function (_ref) {
        var reduceFn = _ref.reduceFn;
        var callback = _ref.callback;

        if (!callback) {
            callback = reduceFn;
            callback(store.state);
        } else {
            callback(reduceFn(store.state));
        }
    });
}

var LOAD_DEPTH_LIST = 'LOAD_DEPTH_LIST';
var NEXT = 'NEXT';
var PREV = 'PREV';
var SET_SLIDE = 'SET_SLIDE';

var eq$5 = require$$3$4;
var isArrayLike$5 = require$$0$26;
var isIndex$5 = require$$1$12;
var isObject$11 = require$$0$2;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$1(value, index, object) {
  if (!isObject$11(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$5(object) && isIndex$5(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq$5(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall$1;



var _isIterateeCall$2 = Object.freeze({
	default: _isIterateeCall,
	__moduleExports: _isIterateeCall
});

var require$$0$62 = ( _isIterateeCall$2 && _isIterateeCall$2['default'] ) || _isIterateeCall$2;

var baseRest$2 = require$$1$41;
var isIterateeCall = require$$0$62;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner$1(assigner) {
  return baseRest$2(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner$1;



var _createAssigner$2 = Object.freeze({
	default: _createAssigner,
	__moduleExports: _createAssigner
});

var require$$3$18 = ( _createAssigner$2 && _createAssigner$2['default'] ) || _createAssigner$2;

var assignValue$4 = require$$5$2;
var copyObject$3 = require$$4$4;
var createAssigner = require$$3$18;
var isArrayLike$4 = require$$0$26;
var isPrototype$3 = require$$1$18;
var keys$7 = require$$0$30;

/** Used for built-in method references. */
var objectProto$18 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$18.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign$2 = createAssigner(function(object, source) {
  if (isPrototype$3(source) || isArrayLike$4(source)) {
    copyObject$3(source, keys$7(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty$12.call(source, key)) {
      assignValue$4(object, key, source[key]);
    }
  }
});

var assign_1 = assign$2;



var assign$3 = Object.freeze({
	default: assign_1,
	__moduleExports: assign_1
});

var require$$1$45 = ( assign$3 && assign$3['default'] ) || assign$3;

var convert$3 = require$$2$36;
var func$2 = convert$3('assign', require$$1$45);

func$2.placeholder = require$$0$1;
var assign = func$2;

var initialState = {
    slide: 0,
    fragment: -1
};

function moveNext(state) {
    var slide = state.slide;
    var fragment = state.fragment;
    var depthList = state.depthList;
    var slidesCount = depthList.length;

    if (fragment + 1 < depthList[slide]) {
        return {
            fragment: fragment + 1
        };
    } else if (slide + 1 < slidesCount) {
        return {
            fragment: -1,
            slide: slide + 1
        };
    }
}

function movePrev(state) {
    var slide = state.slide;
    var fragment = state.fragment;
    var depthList = state.depthList;


    if (state.fragment >= 0) {
        return {
            fragment: fragment - 1
        };
    } else if (slide > 0) {
        return {
            fragment: depthList[slide - 1] - 1,
            slide: slide - 1
        };
    }
}

var reducer = (function (action) {
    var state = arguments.length <= 1 || arguments[1] === undefined ? initialState : arguments[1];
    var payload = action.payload;


    switch (action.type) {
        case LOAD_DEPTH_LIST:
            return set(['depthList'], payload, state);
        case NEXT:
            return assign(state, moveNext(state));
        case PREV:
            return assign(state, movePrev(state));
        case SET_SLIDE:
            return assign(state, {
                fragment: -1,
                slide: payload
            });
    }

    return state;
});

var helpers = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = exports.repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = exports.pad = function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
};

var formatTime = exports.formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
};

// Use performance API if it's available in order to get better precision
var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;
});

var index$1 = createCommonjsModule(function (module, exports) {
/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function() {
      return factory();
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(commonjsGlobal, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof commonjsGlobal === 'object' && commonjsGlobal) {
    $scope = commonjsGlobal;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter) {
        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
        else if (typeof(prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i = -1,
          last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));
});

var diff = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diffLogger;

var _deepDiff = index$1;

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/flitbit/diff#differences
var dictionary = {
  'E': {
    color: '#2196F3',
    text: 'CHANGED:'
  },
  'N': {
    color: '#4CAF50',
    text: 'ADDED:'
  },
  'D': {
    color: '#F44336',
    text: 'DELETED:'
  },
  'A': {
    color: '#2196F3',
    text: 'ARRAY:'
  }
};

function style(kind) {
  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
}

function render(diff) {
  var kind = diff.kind;
  var path = diff.path;
  var lhs = diff.lhs;
  var rhs = diff.rhs;
  var index = diff.index;
  var item = diff.item;

  switch (kind) {
    case 'E':
      return path.join('.') + ' ' + lhs + ' → ' + rhs;
    case 'N':
      return path.join('.') + ' ' + rhs;
    case 'D':
      return '' + path.join('.');
    case 'A':
      return [path.join('.') + '[' + index + ']', item];
    default:
      return null;
  }
}

function diffLogger(prevState, newState, logger, isCollapsed) {
  var diff = (0, _deepDiff2.default)(prevState, newState);

  try {
    if (isCollapsed) {
      logger.groupCollapsed('diff');
    } else {
      logger.group('diff');
    }
  } catch (e) {
    logger.log('diff');
  }

  if (diff) {
    diff.forEach(function (elem) {
      var kind = elem.kind;

      var output = render(elem);

      logger.log('%c ' + dictionary[kind].text, style(kind), output);
    });
  } else {
    logger.log('—— no diff ——');
  }

  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— diff end —— ');
  }
}
module.exports = exports['default'];
});

var core = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printBuffer = printBuffer;

var _helpers = helpers;

var _diff = diff;

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

/**
 * Get log level string based on supplied params
 *
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
    case 'object':
      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case 'function':
      return level(action);
    default:
      return level;
  }
}

function defaultTitleFormatter(options) {
  var timestamp = options.timestamp;
  var duration = options.duration;

  return function (action, time, took) {
    return 'action @ ' + (timestamp ? time : '') + ' ' + action.type + ' ' + (duration ? '(in ' + took.toFixed(2) + ' ms)' : '');
  };
}

function printBuffer(buffer, options) {
  var logger = options.logger;
  var actionTransformer = options.actionTransformer;
  var _options$titleFormatt = options.titleFormatter;
  var titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt;
  var collapsed = options.collapsed;
  var colors = options.colors;
  var level = options.level;
  var diff$$1 = options.diff;

  buffer.forEach(function (logEntry, key) {
    var started = logEntry.started;
    var startedTime = logEntry.startedTime;
    var action = logEntry.action;
    var prevState = logEntry.prevState;
    var error = logEntry.error;
    var took = logEntry.took;
    var nextState = logEntry.nextState;

    var nextEntry = buffer[key + 1];

    if (nextEntry) {
      nextState = nextEntry.prevState;
      took = nextEntry.started - started;
    }

    // Message
    var formattedAction = actionTransformer(action);
    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
      return nextState;
    }, action) : collapsed;

    var formattedTime = (0, _helpers.formatTime)(startedTime);
    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
    var title = titleFormatter(formattedAction, formattedTime, took);

    // Render
    try {
      if (isCollapsed) {
        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
      } else {
        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
      }
    } catch (e) {
      logger.log(title);
    }

    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

    if (prevStateLevel) {
      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
    }

    if (actionLevel) {
      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
    }

    if (error && errorLevel) {
      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
    }

    if (nextStateLevel) {
      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
    }

    if (diff$$1) {
      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
    }

    try {
      logger.groupEnd();
    } catch (e) {
      logger.log('—— log end ——');
    }
  });
}
});

var defaults = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  level: "log",
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: function stateTransformer(state) {
    return state;
  },
  actionTransformer: function actionTransformer(action) {
    return action;
  },
  errorTransformer: function errorTransformer(error) {
    return error;
  },
  colors: {
    title: function title() {
      return "inherit";
    },
    prevState: function prevState() {
      return "#9E9E9E";
    },
    action: function action() {
      return "#03A9F4";
    },
    nextState: function nextState() {
      return "#4CAF50";
    },
    error: function error() {
      return "#F20404";
    }
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined
};
module.exports = exports['default'];
});

var index = createCommonjsModule(function (module, exports) {
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = core;

var _helpers = helpers;

var _defaults = defaults;

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates logger with following options
 *
 * @namespace
 * @param {object} options - options for logger
 * @param {string | function | object} options.level - console[level]
 * @param {boolean} options.duration - print duration of each action?
 * @param {boolean} options.timestamp - print timestamp with each action?
 * @param {object} options.colors - custom colors
 * @param {object} options.logger - implementation of the `console` API
 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
 * @param {boolean} options.collapsed - is group collapsed?
 * @param {boolean} options.predicate - condition which resolves logger behavior
 * @param {function} options.stateTransformer - transform state before print
 * @param {function} options.actionTransformer - transform action before print
 * @param {function} options.errorTransformer - transform error before print
 *
 * @returns {function} logger middleware
 */
function createLogger() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var loggerOptions = _extends({}, _defaults2.default, options);

  var logger = loggerOptions.logger;
  var transformer = loggerOptions.transformer;
  var stateTransformer = loggerOptions.stateTransformer;
  var errorTransformer = loggerOptions.errorTransformer;
  var predicate = loggerOptions.predicate;
  var logErrors = loggerOptions.logErrors;
  var diffPredicate = loggerOptions.diffPredicate;

  // Return if 'console' object is not defined

  if (typeof logger === 'undefined') {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  if (transformer) {
    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
  }

  var logBuffer = [];

  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        // Exit early if predicate function returns 'false'
        if (typeof predicate === 'function' && !predicate(getState, action)) {
          return next(action);
        }

        var logEntry = {};
        logBuffer.push(logEntry);

        logEntry.started = _helpers.timer.now();
        logEntry.startedTime = new Date();
        logEntry.prevState = stateTransformer(getState());
        logEntry.action = action;

        var returnedValue = undefined;
        if (logErrors) {
          try {
            returnedValue = next(action);
          } catch (e) {
            logEntry.error = errorTransformer(e);
          }
        } else {
          returnedValue = next(action);
        }

        logEntry.took = _helpers.timer.now() - logEntry.started;
        logEntry.nextState = stateTransformer(getState());

        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
        logBuffer.length = 0;

        if (logEntry.error) throw logEntry.error;
        return returnedValue;
      };
    };
  };
}

exports.default = createLogger;
module.exports = exports['default'];
});

var createLogger = unwrapExports(index);

var logger = createLogger();

var store = createStore(reducer, [logger]);

function initialize(depthList) {
    return {
        type: LOAD_DEPTH_LIST,
        payload: depthList
    };
}

function next() {
    return {
        type: NEXT
    };
}

function prev() {
    return {
        type: PREV
    };
}

function setSlide(slide) {
    return {
        type: SET_SLIDE,
        payload: slide
    };
}

var fragment = function fragment(state) {
  return state.fragment;
};
var slide = function slide(state) {
  return state.slide;
};
var slidesCount = function slidesCount(state) {
  return state.depthList.length;
};
var completion = function completion(state) {
  return slide(state) / (slidesCount(state) - 1) * 100;
};
var slideDepth = function slideDepth(state, slide) {
  return state.depthList[slide];
};
var hasNext = function hasNext(state) {
  return slide(state) < slidesCount(state) - 1 || fragment(state) < slideDepth(state, slide(state)) - 1;
};
var hasPrev = function hasPrev(state) {
  return slide(state) > 0 || fragment(state) >= 0;
};

function reduceState(state) {
    return {
        fragment: fragment(state),
        slide: slide(state)
    };
}

function showSlide(slide$$1, prev$$1) {
    slide$$1.classList.add('active');
    prev$$1 && prev$$1.classList.remove('active');
}

function showFragment(slide$$1, fragment$$1) {
    var fragments = slide$$1.querySelectorAll('.fragment'),
        i = 0;

    while (i <= fragment$$1) {
        fragments[i].classList.add('visible');
        i++;
    }
}

function hideFragment(slide$$1, fragment$$1) {
    var fragments = slide$$1.querySelectorAll('.fragment'),
        i = fragments.length - 1;

    while (i > fragment$$1) {
        fragments[i].classList.remove('visible');
        i--;
    }
}

var slidesComponent = (function (slides, _ref) {
    var dispatch = _ref.dispatch;
    var subscribe = _ref.subscribe;

    var state = {};

    subscribe(reduceState, function (nextState) {
        if (state.slide !== nextState.slide) {
            showSlide(slides[nextState.slide], slides[state.slide]);
        }

        if (state.fragment !== nextState.fragment) {
            if (state.fragment < nextState.fragment) {
                showFragment(slides[nextState.slide], nextState.fragment);
            } else {
                hideFragment(slides[nextState.slide], nextState.fragment);
            }
        }

        state = nextState;
    });
});

var keyDispatcher = (function (element, _ref) {
    var dispatch = _ref.dispatch;

    element.addEventListener('keydown', function (evt) {
        switch (evt.which) {
            case 37:
                //LEFT
                evt.preventDefault();
                dispatch(prev());
                break;
            case 39: //RIGHT
            case 32:
                //SPACE
                evt.preventDefault();
                dispatch(next());
                break;
        }
    });
});

var progress = (function (element, _ref) {
    var subscribe = _ref.subscribe;

    var state = void 0;

    subscribe(completion, function (nextState) {
        if (state !== nextState) {
            element.style.width = nextState + '%';
        }

        state = nextState;
    });
});

function reduceState$1(state) {
    return {
        hasPrev: hasPrev(state),
        hasNext: hasNext(state)
    };
}

var controls = (function (element, _ref) {
    var subscribe = _ref.subscribe;
    var dispatch = _ref.dispatch;

    var state = {};

    subscribe(reduceState$1, function (nextState) {
        if (state.hasPrev !== nextState.hasPrev) {
            if (nextState.hasPrev) {
                element.querySelector('.prev').classList.remove('disabled');
            } else {
                element.querySelector('.prev').classList.add('disabled');
            }
        }
        if (state.hasNext !== nextState.hasNext) {
            if (nextState.hasNext) {
                element.querySelector('.next').classList.remove('disabled');
            } else {
                element.querySelector('.next').classList.add('disabled');
            }
        }

        state = nextState;
    });

    element.querySelector('.prev').addEventListener('click', function () {
        return dispatch(prev());
    });
    element.querySelector('.next').addEventListener('click', function () {
        return dispatch(next());
    });
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};















var get$3 = function get$3(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$3(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set$3 = function set$3(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set$3(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var highlight = createCommonjsModule(function (module, exports) {
    /*
     Syntax highlighting with language autodetection.
     https://highlightjs.org/
     */

    (function (factory) {

        // Find the global object for export to both the browser and web workers.
        var globalObject = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window || (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self;

        // Setup highlight.js for different environments. First is Node.js or
        // CommonJS.
        if (typeof exports !== 'undefined') {
            factory(exports);
        } else if (globalObject) {
            // Export hljs globally even when using AMD for cases when this script
            // is loaded with others that may still expect a global hljs.
            globalObject.hljs = factory({});

            // Finally register the global hljs with AMD.
            if (typeof define === 'function' && define.amd) {
                define([], function () {
                    return globalObject.hljs;
                });
            }
        }
    })(function (hljs) {
        // Convenience variables for build-in objects
        var ArrayProto = [],
            objectKeys = Object.keys;

        // Global internal variables used within the highlight.js library.
        var languages = {},
            aliases = {};

        // Regular expressions used throughout the highlight.js library.
        var noHighlightRe = /^(no-?highlight|plain|text)$/i,
            languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i,
            fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;

        var spanEndTag = '</span>';

        // Global options used when within external APIs. This is modified when
        // calling the `hljs.configure` function.
        var options = {
            classPrefix: 'hljs-',
            tabReplace: null,
            useBR: false,
            languages: undefined
        };

        // Object map that is used to escape some common HTML characters.
        var escapeRegexMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };

        /* Utility functions */

        function escape(value) {
            return value.replace(/[&<>]/gm, function (character) {
                return escapeRegexMap[character];
            });
        }

        function tag(node) {
            return node.nodeName.toLowerCase();
        }

        function testRe(re, lexeme) {
            var match = re && re.exec(lexeme);
            return match && match.index === 0;
        }

        function isNotHighlighted(language) {
            return noHighlightRe.test(language);
        }

        function blockLanguage(block) {
            var i, match, length, _class;
            var classes = block.className + ' ';

            classes += block.parentNode ? block.parentNode.className : '';

            // language-* takes precedence over non-prefixed class names.
            match = languagePrefixRe.exec(classes);
            if (match) {
                return getLanguage(match[1]) ? match[1] : 'no-highlight';
            }

            classes = classes.split(/\s+/);

            for (i = 0, length = classes.length; i < length; i++) {
                _class = classes[i];

                if (isNotHighlighted(_class) || getLanguage(_class)) {
                    return _class;
                }
            }
        }

        function inherit(parent, obj) {
            var key;
            var result = {};

            for (key in parent) {
                result[key] = parent[key];
            }if (obj) for (key in obj) {
                result[key] = obj[key];
            }return result;
        }

        /* Stream merging */

        function nodeStream(node) {
            var result = [];
            (function _nodeStream(node, offset) {
                for (var child = node.firstChild; child; child = child.nextSibling) {
                    if (child.nodeType === 3) offset += child.nodeValue.length;else if (child.nodeType === 1) {
                        result.push({
                            event: 'start',
                            offset: offset,
                            node: child
                        });
                        offset = _nodeStream(child, offset);
                        // Prevent void elements from having an end tag that would actually
                        // double them in the output. There are more void elements in HTML
                        // but we list only those realistically expected in code display.
                        if (!tag(child).match(/br|hr|img|input/)) {
                            result.push({
                                event: 'stop',
                                offset: offset,
                                node: child
                            });
                        }
                    }
                }
                return offset;
            })(node, 0);
            return result;
        }

        function mergeStreams(original, highlighted, value) {
            var processed = 0;
            var result = '';
            var nodeStack = [];

            function selectStream() {
                if (!original.length || !highlighted.length) {
                    return original.length ? original : highlighted;
                }
                if (original[0].offset !== highlighted[0].offset) {
                    return original[0].offset < highlighted[0].offset ? original : highlighted;
                }

                /*
                 To avoid starting the stream just before it should stop the order is
                 ensured that original always starts first and closes last:
                  if (event1 == 'start' && event2 == 'start')
                 return original;
                 if (event1 == 'start' && event2 == 'stop')
                 return highlighted;
                 if (event1 == 'stop' && event2 == 'start')
                 return original;
                 if (event1 == 'stop' && event2 == 'stop')
                 return highlighted;
                  ... which is collapsed to:
                 */
                return highlighted[0].event === 'start' ? original : highlighted;
            }

            function open(node) {
                function attr_str(a) {
                    return ' ' + a.nodeName + '="' + escape(a.value) + '"';
                }
                result += '<' + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join('') + '>';
            }

            function close(node) {
                result += '</' + tag(node) + '>';
            }

            function render(event) {
                (event.event === 'start' ? open : close)(event.node);
            }

            while (original.length || highlighted.length) {
                var stream = selectStream();
                result += escape(value.substr(processed, stream[0].offset - processed));
                processed = stream[0].offset;
                if (stream === original) {
                    /*
                     On any opening or closing tag of the original markup we first close
                     the entire highlighted node stack, then render the original tag along
                     with all the following original tags at the same offset and then
                     reopen all the tags on the highlighted stack.
                     */
                    nodeStack.reverse().forEach(close);
                    do {
                        render(stream.splice(0, 1)[0]);
                        stream = selectStream();
                    } while (stream === original && stream.length && stream[0].offset === processed);
                    nodeStack.reverse().forEach(open);
                } else {
                    if (stream[0].event === 'start') {
                        nodeStack.push(stream[0].node);
                    } else {
                        nodeStack.pop();
                    }
                    render(stream.splice(0, 1)[0]);
                }
            }
            return result + escape(value.substr(processed));
        }

        /* Initialization */

        function compileLanguage(language) {

            function reStr(re) {
                return re && re.source || re;
            }

            function langRe(value, global) {
                return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
            }

            function compileMode(mode, parent) {
                if (mode.compiled) return;
                mode.compiled = true;

                mode.keywords = mode.keywords || mode.beginKeywords;
                if (mode.keywords) {
                    var compiled_keywords = {};

                    var flatten = function flatten(className, str) {
                        if (language.case_insensitive) {
                            str = str.toLowerCase();
                        }
                        str.split(' ').forEach(function (kw) {
                            var pair = kw.split('|');
                            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
                        });
                    };

                    if (typeof mode.keywords === 'string') {
                        // string
                        flatten('keyword', mode.keywords);
                    } else {
                        objectKeys(mode.keywords).forEach(function (className) {
                            flatten(className, mode.keywords[className]);
                        });
                    }
                    mode.keywords = compiled_keywords;
                }
                mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);

                if (parent) {
                    if (mode.beginKeywords) {
                        mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
                    }
                    if (!mode.begin) mode.begin = /\B|\b/;
                    mode.beginRe = langRe(mode.begin);
                    if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
                    if (mode.end) mode.endRe = langRe(mode.end);
                    mode.terminator_end = reStr(mode.end) || '';
                    if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
                }
                if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
                if (mode.relevance == null) mode.relevance = 1;
                if (!mode.contains) {
                    mode.contains = [];
                }
                var expanded_contains = [];
                mode.contains.forEach(function (c) {
                    if (c.variants) {
                        c.variants.forEach(function (v) {
                            expanded_contains.push(inherit(c, v));
                        });
                    } else {
                        expanded_contains.push(c === 'self' ? mode : c);
                    }
                });
                mode.contains = expanded_contains;
                mode.contains.forEach(function (c) {
                    compileMode(c, mode);
                });

                if (mode.starts) {
                    compileMode(mode.starts, parent);
                }

                var terminators = mode.contains.map(function (c) {
                    return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
                }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
                mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : { exec: function exec() /*s*/{
                        return null;
                    } };
            }

            compileMode(language);
        }

        /*
         Core highlighting function. Accepts a language name, or an alias, and a
         string with the code to highlight. Returns an object with the following
         properties:
          - relevance (int)
         - value (an HTML string with highlighting markup)
          */
        function highlight(name, value, ignore_illegals, continuation) {

            function subMode(lexeme, mode) {
                var i, length;

                for (i = 0, length = mode.contains.length; i < length; i++) {
                    if (testRe(mode.contains[i].beginRe, lexeme)) {
                        return mode.contains[i];
                    }
                }
            }

            function endOfMode(mode, lexeme) {
                if (testRe(mode.endRe, lexeme)) {
                    while (mode.endsParent && mode.parent) {
                        mode = mode.parent;
                    }
                    return mode;
                }
                if (mode.endsWithParent) {
                    return endOfMode(mode.parent, lexeme);
                }
            }

            function isIllegal(lexeme, mode) {
                return !ignore_illegals && testRe(mode.illegalRe, lexeme);
            }

            function keywordMatch(mode, match) {
                var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
                return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
            }

            function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
                var classPrefix = noPrefix ? '' : options.classPrefix,
                    openSpan = '<span class="' + classPrefix,
                    closeSpan = leaveOpen ? '' : spanEndTag;

                openSpan += classname + '">';

                return openSpan + insideSpan + closeSpan;
            }

            function processKeywords() {
                var keyword_match, last_index, match, result;

                if (!top.keywords) return escape(mode_buffer);

                result = '';
                last_index = 0;
                top.lexemesRe.lastIndex = 0;
                match = top.lexemesRe.exec(mode_buffer);

                while (match) {
                    result += escape(mode_buffer.substr(last_index, match.index - last_index));
                    keyword_match = keywordMatch(top, match);
                    if (keyword_match) {
                        relevance += keyword_match[1];
                        result += buildSpan(keyword_match[0], escape(match[0]));
                    } else {
                        result += escape(match[0]);
                    }
                    last_index = top.lexemesRe.lastIndex;
                    match = top.lexemesRe.exec(mode_buffer);
                }
                return result + escape(mode_buffer.substr(last_index));
            }

            function processSubLanguage() {
                var explicit = typeof top.subLanguage === 'string';
                if (explicit && !languages[top.subLanguage]) {
                    return escape(mode_buffer);
                }

                var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);

                // Counting embedded language score towards the host language may be disabled
                // with zeroing the containing mode relevance. Usecase in point is Markdown that
                // allows XML everywhere and makes every XML snippet to have a much larger Markdown
                // score.
                if (top.relevance > 0) {
                    relevance += result.relevance;
                }
                if (explicit) {
                    continuations[top.subLanguage] = result.top;
                }
                return buildSpan(result.language, result.value, false, true);
            }

            function processBuffer() {
                result += top.subLanguage != null ? processSubLanguage() : processKeywords();
                mode_buffer = '';
            }

            function startNewMode(mode) {
                result += mode.className ? buildSpan(mode.className, '', true) : '';
                top = Object.create(mode, { parent: { value: top } });
            }

            function processLexeme(buffer, lexeme) {

                mode_buffer += buffer;

                if (lexeme == null) {
                    processBuffer();
                    return 0;
                }

                var new_mode = subMode(lexeme, top);
                if (new_mode) {
                    if (new_mode.skip) {
                        mode_buffer += lexeme;
                    } else {
                        if (new_mode.excludeBegin) {
                            mode_buffer += lexeme;
                        }
                        processBuffer();
                        if (!new_mode.returnBegin && !new_mode.excludeBegin) {
                            mode_buffer = lexeme;
                        }
                    }
                    startNewMode(new_mode, lexeme);
                    return new_mode.returnBegin ? 0 : lexeme.length;
                }

                var end_mode = endOfMode(top, lexeme);
                if (end_mode) {
                    var origin = top;
                    if (origin.skip) {
                        mode_buffer += lexeme;
                    } else {
                        if (!(origin.returnEnd || origin.excludeEnd)) {
                            mode_buffer += lexeme;
                        }
                        processBuffer();
                        if (origin.excludeEnd) {
                            mode_buffer = lexeme;
                        }
                    }
                    do {
                        if (top.className) {
                            result += spanEndTag;
                        }
                        if (!top.skip) {
                            relevance += top.relevance;
                        }
                        top = top.parent;
                    } while (top !== end_mode.parent);
                    if (end_mode.starts) {
                        startNewMode(end_mode.starts, '');
                    }
                    return origin.returnEnd ? 0 : lexeme.length;
                }

                if (isIllegal(lexeme, top)) throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');

                /*
                 Parser should not reach this point as all types of lexemes should be caught
                 earlier, but if it does due to some bug make sure it advances at least one
                 character forward to prevent infinite looping.
                 */
                mode_buffer += lexeme;
                return lexeme.length || 1;
            }

            var language = getLanguage(name);
            if (!language) {
                throw new Error('Unknown language: "' + name + '"');
            }

            compileLanguage(language);
            var top = continuation || language;
            var continuations = {}; // keep continuations for sub-languages
            var result = '',
                current;
            for (current = top; current !== language; current = current.parent) {
                if (current.className) {
                    result = buildSpan(current.className, '', true) + result;
                }
            }
            var mode_buffer = '';
            var relevance = 0;
            try {
                var match,
                    count,
                    index = 0;
                while (true) {
                    top.terminators.lastIndex = index;
                    match = top.terminators.exec(value);
                    if (!match) break;
                    count = processLexeme(value.substr(index, match.index - index), match[0]);
                    index = match.index + count;
                }
                processLexeme(value.substr(index));
                for (current = top; current.parent; current = current.parent) {
                    // close dangling modes
                    if (current.className) {
                        result += spanEndTag;
                    }
                }
                return {
                    relevance: relevance,
                    value: result,
                    language: name,
                    top: top
                };
            } catch (e) {
                if (e.message && e.message.indexOf('Illegal') !== -1) {
                    return {
                        relevance: 0,
                        value: escape(value)
                    };
                } else {
                    throw e;
                }
            }
        }

        /*
         Highlighting with language detection. Accepts a string with the code to
         highlight. Returns an object with the following properties:
          - language (detected language)
         - relevance (int)
         - value (an HTML string with highlighting markup)
         - second_best (object with the same structure for second-best heuristically
         detected language, may be absent)
          */
        function highlightAuto(text, languageSubset) {
            languageSubset = languageSubset || options.languages || objectKeys(languages);
            var result = {
                relevance: 0,
                value: escape(text)
            };
            var second_best = result;
            languageSubset.filter(getLanguage).forEach(function (name) {
                var current = highlight(name, text, false);
                current.language = name;
                if (current.relevance > second_best.relevance) {
                    second_best = current;
                }
                if (current.relevance > result.relevance) {
                    second_best = result;
                    result = current;
                }
            });
            if (second_best.language) {
                result.second_best = second_best;
            }
            return result;
        }

        /*
         Post-processing of the highlighted markup:
          - replace TABs with something more useful
         - replace real line-breaks with '<br>' for non-pre containers
          */
        function fixMarkup(value) {
            return !(options.tabReplace || options.useBR) ? value : value.replace(fixMarkupRe, function (match, p1) {
                if (options.useBR && match === '\n') {
                    return '<br>';
                } else if (options.tabReplace) {
                    return p1.replace(/\t/g, options.tabReplace);
                }
            });
        }

        function buildClassName(prevClassName, currentLang, resultLang) {
            var language = currentLang ? aliases[currentLang] : resultLang,
                result = [prevClassName.trim()];

            if (!prevClassName.match(/\bhljs\b/)) {
                result.push('hljs');
            }

            if (prevClassName.indexOf(language) === -1) {
                result.push(language);
            }

            return result.join(' ').trim();
        }

        /*
         Applies highlighting to a DOM node containing code. Accepts a DOM node and
         two optional parameters for fixMarkup.
         */
        function highlightBlock(block) {
            var node, originalStream, result, resultNode, text;
            var language = blockLanguage(block);

            if (isNotHighlighted(language)) return;

            if (options.useBR) {
                node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
            } else {
                node = block;
            }
            text = node.textContent;
            result = language ? highlight(language, text, true) : highlightAuto(text);

            originalStream = nodeStream(node);
            if (originalStream.length) {
                resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
                resultNode.innerHTML = result.value;
                result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
            }
            result.value = fixMarkup(result.value);

            block.innerHTML = result.value;
            block.className = buildClassName(block.className, language, result.language);
            block.result = {
                language: result.language,
                re: result.relevance
            };
            if (result.second_best) {
                block.second_best = {
                    language: result.second_best.language,
                    re: result.second_best.relevance
                };
            }
        }

        /*
         Updates highlight.js global options with values passed in the form of an object.
         */
        function configure(user_options) {
            options = inherit(options, user_options);
        }

        /*
         Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
         */
        function initHighlighting() {
            if (initHighlighting.called) return;
            initHighlighting.called = true;

            var blocks = document.querySelectorAll('pre code');
            ArrayProto.forEach.call(blocks, highlightBlock);
        }

        /*
         Attaches highlighting to the page load event.
         */
        function initHighlightingOnLoad() {
            addEventListener('DOMContentLoaded', initHighlighting, false);
            addEventListener('load', initHighlighting, false);
        }

        function registerLanguage(name, language) {
            var lang = languages[name] = language(hljs);
            if (lang.aliases) {
                lang.aliases.forEach(function (alias) {
                    aliases[alias] = name;
                });
            }
        }

        function listLanguages() {
            return objectKeys(languages);
        }

        function getLanguage(name) {
            name = (name || '').toLowerCase();
            return languages[name] || languages[aliases[name]];
        }

        /* Interface definition */

        hljs.highlight = highlight;
        hljs.highlightAuto = highlightAuto;
        hljs.fixMarkup = fixMarkup;
        hljs.highlightBlock = highlightBlock;
        hljs.configure = configure;
        hljs.initHighlighting = initHighlighting;
        hljs.initHighlightingOnLoad = initHighlightingOnLoad;
        hljs.registerLanguage = registerLanguage;
        hljs.listLanguages = listLanguages;
        hljs.getLanguage = getLanguage;
        hljs.inherit = inherit;

        // Common regexps
        hljs.IDENT_RE = '[a-zA-Z]\\w*';
        hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
        hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
        hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
        hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
        hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

        // Common modes
        hljs.BACKSLASH_ESCAPE = {
            begin: '\\\\[\\s\\S]', relevance: 0
        };
        hljs.APOS_STRING_MODE = {
            className: 'string',
            begin: '\'', end: '\'',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
        };
        hljs.QUOTE_STRING_MODE = {
            className: 'string',
            begin: '"', end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
        };
        hljs.PHRASAL_WORDS_MODE = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
        };
        hljs.COMMENT = function (begin, end, inherits$$1) {
            var mode = hljs.inherit({
                className: 'comment',
                begin: begin, end: end,
                contains: []
            }, inherits$$1 || {});
            mode.contains.push(hljs.PHRASAL_WORDS_MODE);
            mode.contains.push({
                className: 'doctag',
                begin: '(?:TODO|FIXME|NOTE|BUG|XXX):',
                relevance: 0
            });
            return mode;
        };
        hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
        hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
        hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
        hljs.NUMBER_MODE = {
            className: 'number',
            begin: hljs.NUMBER_RE,
            relevance: 0
        };
        hljs.C_NUMBER_MODE = {
            className: 'number',
            begin: hljs.C_NUMBER_RE,
            relevance: 0
        };
        hljs.BINARY_NUMBER_MODE = {
            className: 'number',
            begin: hljs.BINARY_NUMBER_RE,
            relevance: 0
        };
        hljs.CSS_NUMBER_MODE = {
            className: 'number',
            begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
            relevance: 0
        };
        hljs.REGEXP_MODE = {
            className: 'regexp',
            begin: /\//, end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [hljs.BACKSLASH_ESCAPE, {
                begin: /\[/, end: /\]/,
                relevance: 0,
                contains: [hljs.BACKSLASH_ESCAPE]
            }]
        };
        hljs.TITLE_MODE = {
            className: 'title',
            begin: hljs.IDENT_RE,
            relevance: 0
        };
        hljs.UNDERSCORE_TITLE_MODE = {
            className: 'title',
            begin: hljs.UNDERSCORE_IDENT_RE,
            relevance: 0
        };
        hljs.METHOD_GUARD = {
            // excludes method names from keyword processing
            begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
            relevance: 0
        };

        /*
         Language: JavaScript
         Category: common, scripting
         */

        hljs.registerLanguage("javascript", function (hljs) {
            var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
            var KEYWORDS = {
                keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' +
                // ECMAScript 6 modules import
                'import from as',

                literal: 'true false null undefined NaN Infinity',
                built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise'
            };
            var EXPRESSIONS;
            var NUMBER = {
                className: 'number',
                variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
                relevance: 0
            };
            var SUBST = {
                className: 'subst',
                begin: '\\$\\{', end: '\\}',
                keywords: KEYWORDS,
                contains: [] // defined later
            };
            var TEMPLATE_STRING = {
                className: 'string',
                begin: '`', end: '`',
                contains: [hljs.BACKSLASH_ESCAPE, SUBST]
            };
            SUBST.contains = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, NUMBER, hljs.REGEXP_MODE];
            var PARAMS_CONTAINS = SUBST.contains.concat([hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]);

            return {
                aliases: ['js', 'jsx'],
                keywords: KEYWORDS,
                contains: [{
                    className: 'meta',
                    relevance: 10,
                    begin: /^\s*['"]use (strict|asm)['"]/
                }, {
                    className: 'meta',
                    begin: /^#!/, end: /$/
                }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, TEMPLATE_STRING, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, NUMBER, { // object attr container
                    begin: /[{,]\s*/, relevance: 0,
                    contains: [{
                        begin: IDENT_RE + '\\s*:', returnBegin: true,
                        relevance: 0,
                        contains: [{ className: 'attr', begin: IDENT_RE, relevance: 0 }]
                    }]
                }, { // "value" container
                    begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
                    keywords: 'return throw case',
                    contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, {
                        className: 'function',
                        begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
                        end: '\\s*=>',
                        contains: [{
                            className: 'params',
                            variants: [{
                                begin: IDENT_RE
                            }, {
                                begin: /\(\s*\)/
                            }, {
                                begin: /\(/, end: /\)/,
                                excludeBegin: true, excludeEnd: true,
                                keywords: KEYWORDS,
                                contains: PARAMS_CONTAINS
                            }]
                        }]
                    }, { // E4X / JSX
                        begin: /</, end: /(\/\w+|\w+\/)>/,
                        subLanguage: 'xml',
                        contains: [{ begin: /<\w+\s*\/>/, skip: true }, {
                            begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true,
                            contains: [{ begin: /<\w+\s*\/>/, skip: true }, 'self']
                        }]
                    }],
                    relevance: 0
                }, {
                    className: 'function',
                    beginKeywords: 'function', end: /\{/, excludeEnd: true,
                    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE }), {
                        className: 'params',
                        begin: /\(/, end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        contains: PARAMS_CONTAINS
                    }],
                    illegal: /\[|%/
                }, {
                    begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
                }, hljs.METHOD_GUARD, { // ES6 class
                    className: 'class',
                    beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
                    illegal: /[:"\[\]]/,
                    contains: [{ beginKeywords: 'extends' }, hljs.UNDERSCORE_TITLE_MODE]
                }, {
                    beginKeywords: 'constructor', end: /\{/, excludeEnd: true
                }],
                illegal: /#(?!!)/
            };
        });

        return hljs;
    });
});

var codeHighlight = (function (elements) {
    var i = 0;

    while (i < elements.length) {
        highlight.highlightBlock(elements[i]);
        i++;
    }
});

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;



var _createBaseFor$2 = Object.freeze({
	default: _createBaseFor,
	__moduleExports: _createBaseFor
});

var require$$0$66 = ( _createBaseFor$2 && _createBaseFor$2['default'] ) || _createBaseFor$2;

var createBaseFor = require$$0$66;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;



var _baseFor$2 = Object.freeze({
	default: _baseFor,
	__moduleExports: _baseFor
});

var require$$1$47 = ( _baseFor$2 && _baseFor$2['default'] ) || _baseFor$2;

var baseFor = require$$1$47;
var keys$8 = require$$0$30;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$8);
}

var _baseForOwn = baseForOwn$1;



var _baseForOwn$2 = Object.freeze({
	default: _baseForOwn,
	__moduleExports: _baseForOwn
});

var isArrayLike$7 = require$$0$26;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$7(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;



var _createBaseEach$2 = Object.freeze({
	default: _createBaseEach,
	__moduleExports: _createBaseEach
});

var require$$1$48 = ( _baseForOwn$2 && _baseForOwn$2['default'] ) || _baseForOwn$2;

var require$$0$67 = ( _createBaseEach$2 && _createBaseEach$2['default'] ) || _createBaseEach$2;

var baseForOwn = require$$1$48;
var createBaseEach = require$$0$67;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;



var _baseEach$2 = Object.freeze({
	default: _baseEach,
	__moduleExports: _baseEach
});

var require$$1$49 = ( _baseEach$2 && _baseEach$2['default'] ) || _baseEach$2;

var baseEach = require$$1$49;
var isArrayLike$6 = require$$0$26;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$1(collection, iteratee) {
  var index = -1,
      result = isArrayLike$6(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$1;



var _baseMap$2 = Object.freeze({
	default: _baseMap,
	__moduleExports: _baseMap
});

var require$$1$50 = ( _baseMap$2 && _baseMap$2['default'] ) || _baseMap$2;

var arrayMap$2 = require$$3$16;
var baseIteratee$2 = require$$2$33;
var baseMap = require$$1$50;
var isArray$13 = require$$1$7;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map$2(collection, iteratee) {
  var func = isArray$13(collection) ? arrayMap$2 : baseMap;
  return func(collection, baseIteratee$2(iteratee, 3));
}

var map_1 = map$2;



var map$3 = Object.freeze({
	default: map_1,
	__moduleExports: map_1
});

var require$$1$51 = ( map$3 && map$3['default'] ) || map$3;

var convert$4 = require$$2$36;
var func$3 = convert$4('map', require$$1$51);

func$3.placeholder = require$$0$1;
var map = func$3;

var getSlidesDepthList = map(function (slide) {
    return slide.querySelectorAll('.fragment').length;
});

var getHashValue = (function () {
  return window.location.hash.slice(1);
});

var LodashWrapper$3 = require$$5;
var flatRest$2 = require$$4$17;
var getData$3 = require$$3;
var getFuncName$2 = require$$2$5;
var isArray$14 = require$$1$7;
var isLaziable$2 = require$$0$20;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$3 = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var CURRY_FLAG$6 = 8;
var PARTIAL_FLAG$3 = 32;
var ARY_FLAG$4 = 128;
var REARG_FLAG$3 = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow$1(fromRight) {
  return flatRest$2(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper$3.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT$3);
      }
      if (prereq && !wrapper && getFuncName$2(func) == 'wrapper') {
        var wrapper = new LodashWrapper$3([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName$2(func),
          data = funcName == 'wrapper' ? getData$3(func) : undefined;

      if (data && isLaziable$2(data[0]) &&
            data[1] == (ARY_FLAG$4 | CURRY_FLAG$6 | PARTIAL_FLAG$3 | REARG_FLAG$3) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName$2(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable$2(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 &&
          isArray$14(value) && value.length >= LARGE_ARRAY_SIZE$1) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

var _createFlow = createFlow$1;

var createFlow = _createFlow;

/**
 * This method is like `_.flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @static
 * @since 3.0.0
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flow
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flowRight([square, _.add]);
 * addSquare(1, 2);
 * // => 9
 */
var flowRight$2 = createFlow(true);

var flowRight_1 = flowRight$2;

var convert$5 = require$$2$36;
var func$4 = convert$5('flowRight', flowRight_1);

func$4.placeholder = require$$0$1;
var flowRight = func$4;

var compose = flowRight;

var getHashAsNumber = compose(parseInt, getHashValue);

var hydrate = (function (slides, _ref) {
    var dispatch = _ref.dispatch;

    var activeSlide = getHashAsNumber();

    dispatch(initialize(getSlidesDepthList(slides)));

    if (activeSlide && !isNaN(activeSlide)) {
        dispatch(setSlide(activeSlide));
    }
});

function reduceState$2(state) {
  return slide(state);
}

var url = (function (_ref) {
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;
  var subscribe = _ref.subscribe;

  var slide$$1 = reduceState$2(getState());

  window.onhashchange = function () {
    var nextSlide = getHashAsNumber();

    if (!isNaN(nextSlide) && nextSlide !== slide$$1) {
      dispatch(setSlide(nextSlide));
    }
  };

  subscribe(reduceState$2, function (nextSlide) {
    if (slide$$1 !== nextSlide) {
      window.location.hash = nextSlide;
    }

    slide$$1 = nextSlide;
  });
});

var initComponents = (function () {
    var slides = document.querySelectorAll('body > section');
    controls(document.querySelector('.controls'), store);
    slidesComponent(slides, store);
    progress(document.querySelector('.progress'), store);
    keyDispatcher(document, store);
    codeHighlight(document.querySelectorAll('.code'), store);
    hydrate(slides, store);
    url(store);
});

initComponents();
