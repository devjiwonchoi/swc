//// [usingDeclarationsWithLegacyClassDecorators.2.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "C", {
    enumerable: true,
    get: function() {
        return C;
    }
});
var _class_call_check = require("@swc/helpers/_/_class_call_check");
var _ts_decorate = require("@swc/helpers/_/_ts_decorate");
var _dispose = require("@swc/helpers/_/_dispose");
var _using = require("@swc/helpers/_/_using");
var C = function C() {
    "use strict";
    _class_call_check._(this, C);
};
try {
    var _stack = [];
    var before = _using._(_stack, null);
    C = _ts_decorate._([
        dec
    ], C);
} catch (_) {
    var _error = _;
    var _hasError = true;
} finally{
    _dispose._(_stack, _error, _hasError);
}
