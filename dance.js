/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { dance: peg$parsedance },
      peg$startRuleFunction  = peg$parsedance,

      peg$c0 = function(folder, nums, comp) { display(folder, nums, comp) },
      peg$c1 = "palindrome",
      peg$c2 = peg$literalExpectation("palindrome", false),
      peg$c3 = "walk",
      peg$c4 = peg$literalExpectation("walk", false),
      peg$c5 = "duck",
      peg$c6 = peg$literalExpectation("duck", false),
      peg$c7 = "angle",
      peg$c8 = peg$literalExpectation("angle", false),
      peg$c9 = "crawl",
      peg$c10 = peg$literalExpectation("crawl", false),
      peg$c11 = "crouch",
      peg$c12 = peg$literalExpectation("crouch", false),
      peg$c13 = "downdog",
      peg$c14 = peg$literalExpectation("downdog", false),
      peg$c15 = "fall",
      peg$c16 = peg$literalExpectation("fall", false),
      peg$c17 = "flatten",
      peg$c18 = peg$literalExpectation("flatten", false),
      peg$c19 = "flick",
      peg$c20 = peg$literalExpectation("flick", false),
      peg$c21 = "fold",
      peg$c22 = peg$literalExpectation("fold", false),
      peg$c23 = "forward",
      peg$c24 = peg$literalExpectation("forward", false),
      peg$c25 = "hunch",
      peg$c26 = peg$literalExpectation("hunch", false),
      peg$c27 = "kneel",
      peg$c28 = peg$literalExpectation("kneel", false),
      peg$c29 = "lengthen",
      peg$c30 = peg$literalExpectation("lengthen", false),
      peg$c31 = "lie_spiral",
      peg$c32 = peg$literalExpectation("lie_spiral", false),
      peg$c33 = "lift",
      peg$c34 = peg$literalExpectation("lift", false),
      peg$c35 = "lunge",
      peg$c36 = peg$literalExpectation("lunge", false),
      peg$c37 = "lying_down",
      peg$c38 = peg$literalExpectation("lying_down", false),
      peg$c39 = "plank",
      peg$c40 = peg$literalExpectation("plank", false),
      peg$c41 = "plie",
      peg$c42 = peg$literalExpectation("plie", false),
      peg$c43 = "reach",
      peg$c44 = peg$literalExpectation("reach", false),
      peg$c45 = "relax",
      peg$c46 = peg$literalExpectation("relax", false),
      peg$c47 = "rise",
      peg$c48 = peg$literalExpectation("rise", false),
      peg$c49 = "roll",
      peg$c50 = peg$literalExpectation("roll", false),
      peg$c51 = "run",
      peg$c52 = peg$literalExpectation("run", false),
      peg$c53 = "sit_cross",
      peg$c54 = peg$literalExpectation("sit_cross", false),
      peg$c55 = "slide",
      peg$c56 = peg$literalExpectation("slide", false),
      peg$c57 = "spiral",
      peg$c58 = peg$literalExpectation("spiral", false),
      peg$c59 = "stomachspiral",
      peg$c60 = peg$literalExpectation("stomachspiral", false),
      peg$c61 = "throw_back",
      peg$c62 = peg$literalExpectation("throw_back", false),
      peg$c63 = "updog",
      peg$c64 = peg$literalExpectation("updog", false),
      peg$c65 = /^[0-9]/,
      peg$c66 = peg$classExpectation([["0", "9"]], false, false),
      peg$c67 = function() { return parseInt(text(), 10); },
      peg$c68 = peg$otherExpectation("whitespace"),
      peg$c69 = /^[\t n r]/,
      peg$c70 = peg$classExpectation(["\t", " ", "n", " ", "r"], false, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsedance() {
    var s0, s1;

    s0 = [];
    s1 = peg$parsecall();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parsecall();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecall() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsemove();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemove();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse_();
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsenum();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsenum();
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parsechoreo();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsechoreo();
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c0(s1, s3, s5);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsechoreo() {
    var s0;

    if (input.substr(peg$currPos, 10) === peg$c1) {
      s0 = peg$c1;
      peg$currPos += 10;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }

    return s0;
  }

  function peg$parsemove() {
    var s0;

    if (input.substr(peg$currPos, 4) === peg$c3) {
      s0 = peg$c3;
      peg$currPos += 4;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c5) {
        s0 = peg$c5;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 5) === peg$c7) {
          s0 = peg$c7;
          peg$currPos += 5;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 5) === peg$c9) {
            s0 = peg$c9;
            peg$currPos += 5;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c10); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 6) === peg$c11) {
              s0 = peg$c11;
              peg$currPos += 6;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c12); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 7) === peg$c13) {
                s0 = peg$c13;
                peg$currPos += 7;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c14); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 4) === peg$c5) {
                  s0 = peg$c5;
                  peg$currPos += 4;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c6); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 4) === peg$c15) {
                    s0 = peg$c15;
                    peg$currPos += 4;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c16); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 7) === peg$c17) {
                      s0 = peg$c17;
                      peg$currPos += 7;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c18); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 5) === peg$c19) {
                        s0 = peg$c19;
                        peg$currPos += 5;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c20); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.substr(peg$currPos, 4) === peg$c21) {
                          s0 = peg$c21;
                          peg$currPos += 4;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c22); }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.substr(peg$currPos, 7) === peg$c23) {
                            s0 = peg$c23;
                            peg$currPos += 7;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c24); }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.substr(peg$currPos, 5) === peg$c25) {
                              s0 = peg$c25;
                              peg$currPos += 5;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c26); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.substr(peg$currPos, 5) === peg$c27) {
                                s0 = peg$c27;
                                peg$currPos += 5;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c28); }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.substr(peg$currPos, 8) === peg$c29) {
                                  s0 = peg$c29;
                                  peg$currPos += 8;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c30); }
                                }
                                if (s0 === peg$FAILED) {
                                  if (input.substr(peg$currPos, 10) === peg$c31) {
                                    s0 = peg$c31;
                                    peg$currPos += 10;
                                  } else {
                                    s0 = peg$FAILED;
                                    if (peg$silentFails === 0) { peg$fail(peg$c32); }
                                  }
                                  if (s0 === peg$FAILED) {
                                    if (input.substr(peg$currPos, 4) === peg$c33) {
                                      s0 = peg$c33;
                                      peg$currPos += 4;
                                    } else {
                                      s0 = peg$FAILED;
                                      if (peg$silentFails === 0) { peg$fail(peg$c34); }
                                    }
                                    if (s0 === peg$FAILED) {
                                      if (input.substr(peg$currPos, 5) === peg$c35) {
                                        s0 = peg$c35;
                                        peg$currPos += 5;
                                      } else {
                                        s0 = peg$FAILED;
                                        if (peg$silentFails === 0) { peg$fail(peg$c36); }
                                      }
                                      if (s0 === peg$FAILED) {
                                        if (input.substr(peg$currPos, 10) === peg$c37) {
                                          s0 = peg$c37;
                                          peg$currPos += 10;
                                        } else {
                                          s0 = peg$FAILED;
                                          if (peg$silentFails === 0) { peg$fail(peg$c38); }
                                        }
                                        if (s0 === peg$FAILED) {
                                          if (input.substr(peg$currPos, 5) === peg$c39) {
                                            s0 = peg$c39;
                                            peg$currPos += 5;
                                          } else {
                                            s0 = peg$FAILED;
                                            if (peg$silentFails === 0) { peg$fail(peg$c40); }
                                          }
                                          if (s0 === peg$FAILED) {
                                            if (input.substr(peg$currPos, 4) === peg$c41) {
                                              s0 = peg$c41;
                                              peg$currPos += 4;
                                            } else {
                                              s0 = peg$FAILED;
                                              if (peg$silentFails === 0) { peg$fail(peg$c42); }
                                            }
                                            if (s0 === peg$FAILED) {
                                              if (input.substr(peg$currPos, 5) === peg$c43) {
                                                s0 = peg$c43;
                                                peg$currPos += 5;
                                              } else {
                                                s0 = peg$FAILED;
                                                if (peg$silentFails === 0) { peg$fail(peg$c44); }
                                              }
                                              if (s0 === peg$FAILED) {
                                                if (input.substr(peg$currPos, 5) === peg$c45) {
                                                  s0 = peg$c45;
                                                  peg$currPos += 5;
                                                } else {
                                                  s0 = peg$FAILED;
                                                  if (peg$silentFails === 0) { peg$fail(peg$c46); }
                                                }
                                                if (s0 === peg$FAILED) {
                                                  if (input.substr(peg$currPos, 4) === peg$c47) {
                                                    s0 = peg$c47;
                                                    peg$currPos += 4;
                                                  } else {
                                                    s0 = peg$FAILED;
                                                    if (peg$silentFails === 0) { peg$fail(peg$c48); }
                                                  }
                                                  if (s0 === peg$FAILED) {
                                                    if (input.substr(peg$currPos, 4) === peg$c49) {
                                                      s0 = peg$c49;
                                                      peg$currPos += 4;
                                                    } else {
                                                      s0 = peg$FAILED;
                                                      if (peg$silentFails === 0) { peg$fail(peg$c50); }
                                                    }
                                                    if (s0 === peg$FAILED) {
                                                      if (input.substr(peg$currPos, 3) === peg$c51) {
                                                        s0 = peg$c51;
                                                        peg$currPos += 3;
                                                      } else {
                                                        s0 = peg$FAILED;
                                                        if (peg$silentFails === 0) { peg$fail(peg$c52); }
                                                      }
                                                      if (s0 === peg$FAILED) {
                                                        if (input.substr(peg$currPos, 9) === peg$c53) {
                                                          s0 = peg$c53;
                                                          peg$currPos += 9;
                                                        } else {
                                                          s0 = peg$FAILED;
                                                          if (peg$silentFails === 0) { peg$fail(peg$c54); }
                                                        }
                                                        if (s0 === peg$FAILED) {
                                                          if (input.substr(peg$currPos, 5) === peg$c55) {
                                                            s0 = peg$c55;
                                                            peg$currPos += 5;
                                                          } else {
                                                            s0 = peg$FAILED;
                                                            if (peg$silentFails === 0) { peg$fail(peg$c56); }
                                                          }
                                                          if (s0 === peg$FAILED) {
                                                            if (input.substr(peg$currPos, 6) === peg$c57) {
                                                              s0 = peg$c57;
                                                              peg$currPos += 6;
                                                            } else {
                                                              s0 = peg$FAILED;
                                                              if (peg$silentFails === 0) { peg$fail(peg$c58); }
                                                            }
                                                            if (s0 === peg$FAILED) {
                                                              if (input.substr(peg$currPos, 13) === peg$c59) {
                                                                s0 = peg$c59;
                                                                peg$currPos += 13;
                                                              } else {
                                                                s0 = peg$FAILED;
                                                                if (peg$silentFails === 0) { peg$fail(peg$c60); }
                                                              }
                                                              if (s0 === peg$FAILED) {
                                                                if (input.substr(peg$currPos, 10) === peg$c61) {
                                                                  s0 = peg$c61;
                                                                  peg$currPos += 10;
                                                                } else {
                                                                  s0 = peg$FAILED;
                                                                  if (peg$silentFails === 0) { peg$fail(peg$c62); }
                                                                }
                                                                if (s0 === peg$FAILED) {
                                                                  if (input.substr(peg$currPos, 5) === peg$c63) {
                                                                    s0 = peg$c63;
                                                                    peg$currPos += 5;
                                                                  } else {
                                                                    s0 = peg$FAILED;
                                                                    if (peg$silentFails === 0) { peg$fail(peg$c64); }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsenum() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$c65.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c66); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c67();
    }
    s0 = s1;

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$c69.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c70); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$c69.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c70); }
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c68); }
    }

    return s0;
  }


    var move = document.createElement('img')

    var index = 0;
    var nums = 0;
    var folder = null;

    function display(folder, nums, comp) {

      if (nums == 0 || nums == null) nums = 2000;
      else nums = nums * 1000;

      // console.log("number is : " + nums)
      // console.log("folder is : " + String(folder))
      // console.log("comp is : " + String(comp))
      // move.src = 'tagged/' + folder + '/1.jpg';

      setInterval(function(){displayImage(move, folder)}, nums);

    }

    function displayImage(img, folder) {
      console.log("displaying");
      var image = document.querySelector('img')
      // if (image == null) {
      //   document.getElementById('picture').appendChild(img)
      // } else {
      //   document.getElementById('picture').replaceChild(img, image)
      // }

      document.getElementById('picture').appendChild(img);
      index++;
      console.log("index : " + index);
      move.src = 'tagged/' + folder + '/' + index + '.jpg';
      move.onerror = function(){
        console.log("no more files in directory");
        index = 1;
        move.src = 'tagged/' + folder + '/' + index + '.jpg';
      }
    }


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}
