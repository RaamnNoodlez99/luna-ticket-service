"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));
var _ticket = require("../models/ticket.model");
var _data = require("../utils/data");
var _multer = _interopRequireDefault(require("multer"));
var _cloudinary = require("../configs/cloudinary");
var _jwtVerify = require("../middleware/jwtVerify");
var _axios = _interopRequireDefault(require("axios"));
var _openai = _interopRequireDefault(require("openai"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
_dotenv["default"].config();
var router = (0, _express.Router)();
var storage = _multer["default"].diskStorage({});
var upload = (0, _multer["default"])({
  storage: storage
});
var transporter = _nodemailer["default"].createTransport({
  service: "gmail",
  auth: {
    user: "hyperiontech.capstone@gmail.com",
    pass: "zycjmbveivhamcgt"
  }
});
router.post('/generateTodoFromDescription', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var openai, description, chatCompletion, todos;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          openai = new _openai["default"]({
            apiKey: process.env.OPENAI_API_KEY
          });
          description = req.body.description;
          _context.next = 4;
          return openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
              "role": "system",
              "content": "You are a helpful assistant."
            }, {
              "role": "user",
              "content": "Based on the description \"".concat(description, "\", generate three todos. The todos must be a maximum of 50 words each.:")
            }]
          });
        case 4:
          chatCompletion = _context.sent;
          if (chatCompletion.choices) {
            todos = chatCompletion.choices[0].message.content.split("\n").filter(function (todo) {
              return todo.trim() !== '';
            }).map(function (todo) {
              return todo.trim();
            });
            res.status(200).json(todos);
            // console.log(todos);
          } else {
            res.status(500).json({
              message: 'Failed to generate todos from OpenAI.'
            });
          }
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/upload', upload.single('file'), /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (req.file) {
            _context2.next = 4;
            break;
          }
          res.status(400).json({
            message: 'No file uploaded'
          });
          return _context2.abrupt("return");
        case 4:
          _context2.next = 6;
          return _cloudinary.cloudinary.uploader.upload(req.file.path);
        case 6:
          result = _context2.sent;
          res.status(200).json({
            url: result.secure_url
          });
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: 'File upload error'
          });
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/seed', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var ticketsCount;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _ticket.TicketModel.countDocuments();
        case 2:
          ticketsCount = _context3.sent;
          if (!(ticketsCount > 0)) {
            _context3.next = 6;
            break;
          }
          res.status(400).send("Seed is already done");
          return _context3.abrupt("return");
        case 6:
          _ticket.TicketModel.create(_data.sample_tickets).then(function (data) {
            res.status(201).send(data);
          })["catch"](function (err) {
            res.status(500).send({
              message: err.message
            });
          });
          // res.status(200).send("Seed is done!");
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}()));
router.get('/', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var tickets;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _ticket.TicketModel.find();
        case 2:
          tickets = _context4.sent;
          res.status(200).send(tickets);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}()));

// router.get('/', jwtVerify(['Manager', 'Technical', 'Functional', 'Admin']), expressAsyncHandler(
//   async (req, res) => {
//       const tickets = await TicketModel.find();
//       res.status(200).send(tickets);
//   }
// ));

router.get('/assigned', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var tickets;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _ticket.TicketModel.find({
            assigned: req.query.id
          });
        case 2:
          tickets = _context5.sent;
          if (tickets) {
            res.status(200).send(tickets);
          } else {
            res.status(404).send("No tickets found");
          }
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}()));
router.get('/projects', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var groupName, projects, tickets;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          groupName = req.query.groupName;
          projects = [];
          _context6.prev = 2;
          _context6.next = 5;
          return _ticket.TicketModel.find({
            group: groupName
          });
        case 5:
          tickets = _context6.sent;
          if (tickets) {
            tickets.forEach(function (ticket) {
              if (ticket.project && !projects.includes(ticket.project)) projects.push(ticket.project);
            });
            res.status(200).send(projects);
          }
          _context6.next = 12;
          break;
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](2);
          res.status(500).send("Internal Server Error fetching projects");
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 9]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}()));
router.get('/project', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var projectName, tickets;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          projectName = req.query.name;
          _context7.prev = 1;
          _context7.next = 4;
          return _ticket.TicketModel.find({
            project: projectName
          });
        case 4:
          tickets = _context7.sent;
          if (tickets) {
            // console.log('tickets found', tickets);
            res.status(200).send(tickets);
          } else {
            // console.log('no tickets found');
            res.status(404).send("No tickets for this project");
          }
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
          console.log(_context7.t0);
          res.status(500).send("Internal Server Error fetching projects");
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 8]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}()));
router.get('/group', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var groupName, tickets;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          groupName = req.query.name;
          _context8.prev = 1;
          _context8.next = 4;
          return _ticket.TicketModel.find({
            group: groupName
          });
        case 4:
          tickets = _context8.sent;
          if (tickets) {
            res.status(200).send(tickets);
          } else {
            res.status(404).send("No tickets found for that group");
          }
          _context8.next = 11;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](1);
          res.status(500).send("Internal error fetching tickets by group name");
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[1, 8]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}()));
router.get('/delete', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return _ticket.TicketModel.deleteMany({});
        case 2:
          res.status(200).send("Delete is done!");
        case 3:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}()));

// Edwin's add ticket function

// Add ticket
router.post('/addticket', (0, _jwtVerify.jwtVerify)(['Admin', 'Manager']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var ticketCount, newTicket, mailOptions;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _ticket.TicketModel.countDocuments();
        case 3:
          ticketCount = _context10.sent;
          newTicket = new _ticket.TicketModel({
            id: String(ticketCount + 1),
            // Assign the auto-incremented ID
            description: req.body.description,
            summary: req.body.summary,
            assignee: req.body.assignee,
            assigned: req.body.assigned,
            group: req.body.group,
            priority: req.body.priority,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            status: req.body.status,
            createdTime: new Date(),
            project: req.body.project,
            todo: req.body.todo,
            todoChecked: req.body.todoChecked
          }); // console.log("new ticket: ", newTicket);
          _context10.next = 7;
          return newTicket.save();
        case 7:
          mailOptions = {
            from: 'hyperiontech.capstone@gmail.com',
            to: req.body.assigned,
            subject: 'New Ticket Created',
            html: "\n              <div style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; max-width: 600px; margin: 20px auto; border: 1px solid #dfe2e5; border-radius: 6px; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n                \n                  \n                  <h1 style=\"color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 15px; margin-bottom: 25px; font-size: 24px;\">Ticket Notification</h1>\n                  \n                  <table style=\"width: 100%; border-collapse: collapse;\">\n                      <tr style=\"background-color: #f5f8fa; border-bottom: 1px solid #e9e9e9;\">\n                          <td style=\"padding: 10px 0; width: 150px; text-align: right; font-weight: bold; color: #7f8c8d;\">Ticket ID:</td>\n                          <td style=\"padding: 10px 15px;\">".concat(newTicket.id, "</td>\n                      </tr>\n                      <tr style=\"border-bottom: 1px solid #e9e9e9;\">\n                          <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Description:</td>\n                          <td style=\"padding: 10px 15px;\">").concat(newTicket.description, "</td>\n                      </tr>\n                      <tr style=\"background-color: #f5f8fa; border-bottom: 1px solid #e9e9e9;\">\n                          <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Summary:</td>\n                          <td style=\"padding: 10px 15px;\">").concat(newTicket.summary, "</td>\n                      </tr>\n                      <tr style=\"border-bottom: 1px solid #e9e9e9;\">\n                          <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Assignee:</td>\n                          <td style=\"padding: 10px 15px;\">").concat(newTicket.assignee, "</td>\n                      </tr>\n                      <tr style=\"background-color: #f5f8fa; border-bottom: 1px solid #e9e9e9;\">\n                          <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Priority:</td>\n                          <td style=\"padding: 10px 15px;\">").concat(newTicket.priority, "</td>\n                      </tr>\n                      <tr style=\"border-bottom: 1px solid #e9e9e9;\">\n                          <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Start Date:</td>\n                          <td style=\"padding: 10px 15px;\">").concat(newTicket.startDate, "</td>\n                      </tr>\n                      <tr style=\"background-color: #f5f8fa;\">\n                          <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">End Date:</td>\n                          <td style=\"padding: 10px 15px;\">").concat(newTicket.endDate, "</td>\n                      </tr>\n                  </table>\n                  \n                  <div style=\"margin-top: 30px; padding: 15px; background-color: #3498db; color: #ffffff; text-align: center; border-radius: 4px;\">\n                      Thank you for using our ticket system!\n                  </div>\n              </div>\n          ")
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log("Error sending email:", error);
            } else {
              console.log('Email sent:', info.response);
            }
          });

          // console.log("New ticket created succesfully");
          res.status(201).send({
            message: "Ticket created succesfully",
            newTicketID: newTicket.id
          });
          _context10.next = 15;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          // console.error("Ticket creation error:", error);
          res.status(500).send("An error occurred during ticket creation.");
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}()));
router.get('/id', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var ticket;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return _ticket.TicketModel.findOne({
            id: req.query.id
          });
        case 2:
          ticket = _context11.sent;
          if (ticket) {
            res.status(200).send(ticket);
          } else {
            res.status(404).send("Id not found");
          }
        case 4:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}()));
router.put('/comment', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var ticketId, comment, author, type, attachment, authorPhoto, newComment, ticket;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          ticketId = req.body.ticketId;
          comment = req.body.comment;
          author = req.body.author;
          type = req.body.type;
          attachment = req.body.attachment;
          authorPhoto = req.body.authorPhoto;
          newComment = {
            author: author,
            content: comment,
            createdAt: new Date(),
            type: type,
            attachment: attachment,
            authorPhoto: authorPhoto
          };
          _context12.prev = 7;
          _context12.next = 10;
          return _ticket.TicketModel.findOneAndUpdate({
            id: ticketId
          }, {
            $push: {
              comments: newComment
            }
          }, {
            "new": true
          });
        case 10:
          ticket = _context12.sent;
          if (ticket) {
            res.status(200).json({
              message: 'Comment added successfully'
            });
          } else {
            res.status(404).json({
              message: 'Ticket not found'
            });
          }
          _context12.next = 17;
          break;
        case 14:
          _context12.prev = 14;
          _context12.t0 = _context12["catch"](7);
          res.status(500).json({
            message: 'Internal server error'
          });
        case 17:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[7, 14]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}()));
router.put('/updateStatus', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var ticketId, status, ticket;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          ticketId = req.body.ticketId;
          status = req.body.status; // console.log('status is ' +  status);
          // console.log('ticket id is ' + ticketId);
          _context13.next = 5;
          return _ticket.TicketModel.findOneAndUpdate({
            id: ticketId
          }, {
            status: status
          }, {
            "new": true
          });
        case 5:
          ticket = _context13.sent;
          if (!ticket) {
            _context13.next = 14;
            break;
          }
          if (!(status === 'Done' && !ticket.timeToTicketResolution)) {
            _context13.next = 11;
            break;
          }
          // Set timeToTicketResolution if the status is changed to 'Done' and it hasn't been set before
          ticket.timeToTicketResolution = new Date();
          _context13.next = 11;
          return ticket.save();
        case 11:
          res.status(200).json({
            message: 'Ticket status updated successfully'
          });
          _context13.next = 15;
          break;
        case 14:
          res.status(404).json({
            message: 'Ticket not found'
          });
        case 15:
          _context13.next = 20;
          break;
        case 17:
          _context13.prev = 17;
          _context13.t0 = _context13["catch"](0);
          res.status(500).json({
            message: 'Internal server error'
          });
        case 20:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 17]]);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}()));
router.post('/addTimeToFirstResponse', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var ticketId, commentTime, ticket;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          ticketId = req.body.ticketId;
          commentTime = new Date(req.body.commentTime); // Ensure commentTime is Date type
          _context14.prev = 2;
          _context14.next = 5;
          return _ticket.TicketModel.findOne({
            id: ticketId
          });
        case 5:
          ticket = _context14.sent;
          if (!ticket) {
            _context14.next = 15;
            break;
          }
          if (ticket.timeToFirstResponse) {
            _context14.next = 14;
            break;
          }
          // save the commentTime as the first response time
          ticket.timeToFirstResponse = commentTime;
          _context14.next = 11;
          return ticket.save();
        case 11:
          res.status(200).send("Time to first response added");
          _context14.next = 15;
          break;
        case 14:
          res.status(200).send("First response time already recorded");
        case 15:
          _context14.next = 20;
          break;
        case 17:
          _context14.prev = 17;
          _context14.t0 = _context14["catch"](2);
          res.status(500).send("Internal server error");
        case 20:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 17]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}()));

// Edwin's Router Functions
router.put('/updateTodoChecked/:id', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var ticketId, updatedTodoChecked, ticket;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          ticketId = req.params.id;
          updatedTodoChecked = req.body.todoChecked;
          _context15.prev = 2;
          _context15.next = 5;
          return _ticket.TicketModel.findOne({
            id: ticketId
          });
        case 5:
          ticket = _context15.sent;
          if (!ticket) {
            _context15.next = 13;
            break;
          }
          ticket.todoChecked = updatedTodoChecked;
          _context15.next = 10;
          return ticket.save();
        case 10:
          res.status(200).send({
            message: "Ticket todo checked updated"
          });
          _context15.next = 14;
          break;
        case 13:
          res.status(404).send("Ticket not found");
        case 14:
          _context15.next = 19;
          break;
        case 16:
          _context15.prev = 16;
          _context15.t0 = _context15["catch"](2);
          // console.log(ticketId, updatedTodoChecked, req, res);
          res.status(500).send("Internal server error");
        case 19:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[2, 16]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}()));
router.post('/:id/worklogs', (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var ticketId, ticket, newWorkLog;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          ticketId = req.params.id;
          _context16.prev = 1;
          _context16.next = 4;
          return _ticket.TicketModel.findOne({
            id: ticketId
          });
        case 4:
          ticket = _context16.sent;
          if (!ticket) {
            _context16.next = 14;
            break;
          }
          // Check if workLogs exists, if not initialize it as an empty array
          if (!ticket.workLogs) {
            ticket.workLogs = [];
          }
          newWorkLog = req.body;
          ticket.workLogs.push(newWorkLog);
          _context16.next = 11;
          return ticket.updateOne({
            workLogs: ticket.workLogs
          });
        case 11:
          res.status(201).send(ticket);
          _context16.next = 15;
          break;
        case 14:
          res.status(404).send("Ticket not found");
        case 15:
          _context16.next = 21;
          break;
        case 17:
          _context16.prev = 17;
          _context16.t0 = _context16["catch"](1);
          console.error("Error adding worklog:", _context16.t0);
          res.status(500).send("Internal server error");
        case 21:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[1, 17]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}()));
router.get('/latestworklogs/:author', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var author, tickets, results;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          author = req.params.author;
          _context17.prev = 1;
          _context17.next = 4;
          return _ticket.TicketModel.find({
            "workLogs.author": author
          }).populate({
            path: "workLogs",
            match: {
              author: author
            }
          }).select("summary workLogs").exec();
        case 4:
          tickets = _context17.sent;
          results = [];
          tickets.forEach(function (ticket) {
            if (ticket.workLogs) {
              ticket.workLogs.forEach(function (worklog) {
                if (worklog.author === author) {
                  results.push({
                    ticketSummary: ticket.summary,
                    worklog: worklog
                  });
                }
              });
            }
          });

          // Sort the results by date and then time
          results.sort(function (a, b) {
            var dateA = new Date(a.worklog.dateStarted);
            var dateB = new Date(b.worklog.dateStarted);

            // If dates are the same, compare timeStarted
            if (dateA.getTime() === dateB.getTime()) {
              var timeA = a.worklog.timeStarted.split(':').map(Number);
              var timeB = b.worklog.timeStarted.split(':').map(Number);
              return timeB[0] * 60 + timeB[1] - (timeA[0] * 60 + timeA[1]);
            }
            return dateB.getTime() - dateA.getTime(); // latest first
          });

          // Take the top 5
          results = results.slice(0, 5);
          res.json(results);
          _context17.next = 15;
          break;
        case 12:
          _context17.prev = 12;
          _context17.t0 = _context17["catch"](1);
          res.status(500).send({
            message: 'Server error',
            error: _context17.t0
          });
        case 15:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[1, 12]]);
  }));
  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());
router.get('/latestworklogsbygroup/:author/:group', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var author, group, tickets, results;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          author = req.params.author;
          group = req.params.group;
          _context18.prev = 2;
          _context18.next = 5;
          return _ticket.TicketModel.find({
            group: group,
            "workLogs.author": author
          }).populate({
            path: "workLogs",
            match: {
              author: author
            }
          }).select("summary workLogs").exec();
        case 5:
          tickets = _context18.sent;
          results = [];
          tickets.forEach(function (ticket) {
            if (ticket.workLogs) {
              ticket.workLogs.forEach(function (worklog) {
                if (worklog.author === author) {
                  results.push({
                    ticketSummary: ticket.summary,
                    worklog: worklog
                  });
                }
              });
            }
          });

          // Sort the results by date and then time
          results.sort(function (a, b) {
            var dateA = new Date(a.worklog.dateStarted);
            var dateB = new Date(b.worklog.dateStarted);
            if (dateA.getTime() === dateB.getTime()) {
              var timeA = a.worklog.timeStarted.split(':').map(Number);
              var timeB = b.worklog.timeStarted.split(':').map(Number);
              return timeB[0] * 60 + timeB[1] - (timeA[0] * 60 + timeA[1]); // latest first
            }

            return dateB.getTime() - dateA.getTime(); // latest first
          });

          // Take the top 5
          results = results.slice(0, 5);
          res.json(results);
          _context18.next = 17;
          break;
        case 13:
          _context18.prev = 13;
          _context18.t0 = _context18["catch"](2);
          console.error("Server error:", _context18.t0); // Log the error for debugging
          res.status(500).send({
            message: 'Server error',
            error: _context18.t0
          });
        case 17:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[2, 13]]);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());
router.get('/test', function (req, res) {
  res.send('Test route works!');
});
router.post('/generateTodoFromDescription', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var description, OPENAI_API_KEY, OPENAI_ENDPOINT, headers, payload, response, todos;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          description = req.body.description;
          OPENAI_API_KEY = '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';
          OPENAI_ENDPOINT = 'https://api.openai.com/v2/chat/completions';
          headers = {
            'Authorization': "Bearer ".concat(OPENAI_API_KEY),
            'Content-Type': 'application/json'
          };
          payload = {
            model: "gpt-3.5-turbo",
            messages: [{
              "role": "system",
              "content": "You are a helpful assistant."
            }, {
              "role": "user",
              "content": "Based on the description \"".concat(description, "\", generate three todos:")
            }]
          };
          _context19.prev = 5;
          _context19.next = 8;
          return _axios["default"].post(OPENAI_ENDPOINT, payload, {
            headers: headers
          });
        case 8:
          response = _context19.sent;
          if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message) {
            todos = response.data.choices[0].message.content.split("\n").filter(function (todo) {
              return todo.trim() !== '';
            }).map(function (todo) {
              return todo.trim();
            });
            res.status(200).json({
              todos: todos
            });
          } else {
            res.status(500).json({
              message: 'Failed to generate todos from OpenAI.'
            });
          }
          _context19.next = 16;
          break;
        case 12:
          _context19.prev = 12;
          _context19.t0 = _context19["catch"](5);
          console.error('Error details:', _context19.t0);
          res.status(500).json({
            message: 'Error calling OpenAI API.'
          });
        case 16:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[5, 12]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());
router.put('/:id/updateAssigned', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var ticketId, newAssignedEmail, ticket;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          ticketId = req.params.id;
          newAssignedEmail = req.body.newAssignedEmail;
          console.log('in ticket.router');
          console.log(ticketId);
          console.log(newAssignedEmail);
          _context20.prev = 5;
          _context20.next = 8;
          return _ticket.TicketModel.findOne({
            id: ticketId
          });
        case 8:
          ticket = _context20.sent;
          if (!ticket) {
            _context20.next = 17;
            break;
          }
          console.log(ticket);
          ticket.assigned = newAssignedEmail;
          _context20.next = 14;
          return ticket.save();
        case 14:
          res.status(200).send({
            message: "Ticket assigned member updated"
          });
          _context20.next = 18;
          break;
        case 17:
          res.status(404).send("Ticket not found");
        case 18:
          _context20.next = 24;
          break;
        case 20:
          _context20.prev = 20;
          _context20.t0 = _context20["catch"](5);
          console.log(_context20.t0);
          res.status(500).send("Internal server error");
        case 24:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[5, 20]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}()));
router.post('/:id/addHistory', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var ticketId, personWhoChangedAssigned, personWhoChangedPhoto, prevAssignedName, prevAssignedPhoto, newAssignedName, newAssignedPhoto, newHistory, ticket;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          ticketId = req.params.id;
          personWhoChangedAssigned = req.body.personWhoChangedAssigned;
          personWhoChangedPhoto = req.body.personWhoChangedPhoto;
          prevAssignedName = req.body.prevAssignedName;
          prevAssignedPhoto = req.body.prevAssignedPhoto;
          newAssignedName = req.body.newAssignedName;
          newAssignedPhoto = req.body.newAssignedPhoto;
          newHistory = {
            personWhoChangedAssigned: personWhoChangedAssigned,
            personWhoChangedPhoto: personWhoChangedPhoto,
            prevAssignedName: prevAssignedName,
            prevAssignedPhoto: prevAssignedPhoto,
            newAssignedName: newAssignedName,
            newAssignedPhoto: newAssignedPhoto
          };
          console.log(newHistory);
          _context21.prev = 9;
          _context21.next = 12;
          return _ticket.TicketModel.findOneAndUpdate({
            id: ticketId
          }, {
            $push: {
              history: newHistory
            }
          }, {
            "new": true
          });
        case 12:
          ticket = _context21.sent;
          if (ticket) {
            res.status(200).json({
              message: 'History added successfully'
            });
          } else {
            res.status(404).json({
              message: 'Ticket not found'
            });
          }
          _context21.next = 19;
          break;
        case 16:
          _context21.prev = 16;
          _context21.t0 = _context21["catch"](9);
          res.status(500).json({
            message: 'Internal server error'
          });
        case 19:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[9, 16]]);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}()));
router.get('/getTicketUserEmail', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functinal', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var userEmail, tickets;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          userEmail = req.query.emailAddress;
          _context22.next = 3;
          return _ticket.TicketModel.find({
            assigned: userEmail
          });
        case 3:
          tickets = _context22.sent;
          if (tickets) {
            res.status(200).send(tickets);
          } else {
            res.status(200).send({
              message: "No tickets found"
            });
          }
        case 5:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function (_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}()));
router.post('/sendEmailNotification', (0, _jwtVerify.jwtVerify)(['Manager', 'Technical', 'Functional', 'Admin']), (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var userEmails, ticketSummary, id, endDate, priority, assigneeEmail, assignedEmail, transporter, recipients, mailOptions;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          userEmails = req.body.emailAddresses;
          ticketSummary = req.body.ticketSummary;
          id = req.body.ticketId;
          endDate = req.body.endDate;
          priority = req.body.priority;
          assigneeEmail = req.body.assigneeEmail;
          assignedEmail = req.body.assignedEmail;
          transporter = _nodemailer["default"].createTransport({
            service: "gmail",
            auth: {
              user: "hyperiontech.capstone@gmail.com",
              pass: "zycjmbveivhamcgt"
            }
          });
          recipients = userEmails.join(', ');
          mailOptions = {
            from: "hyperiontech.capstone@gmail.com",
            to: recipients,
            subject: "New Ticket Created",
            headers: {
              "In-Reply-To": id,
              // Set In-Reply-To header to the ticketId
              References: id // Set References header to the ticketId
            },

            html: "\n              <div\n    style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; max-width: 600px; margin: 20px auto; border: 1px solid #dfe2e5; border-radius: 6px; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);\">\n\n\n    <h1\n        style=\"color: #2c3e50; border-bottom: 2px solid #04538E; padding-bottom: 15px; margin-bottom: 25px; font-size: 24px;\">\n        Ticket Notification</h1>\n\n    <table style=\"width: 100%; border-collapse: collapse;\">\n        <tr style=\"background-color: #f5f8fa; border-bottom: 1px solid #e9e9e9;\">\n            <td style=\"padding: 10px 0; width: 150px; text-align: right; font-weight: bold; color: #7f8c8d;\">Ticket ID:\n            </td>\n            <td style=\"padding: 10px 15px;\">".concat(id, "</td>\n        </tr>\n        <tr style=\"border-bottom: 1px solid #e9e9e9;\">\n            <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Summary:</td>\n            <td style=\"padding: 10px 15px;\">").concat(ticketSummary, "</td>\n        </tr>\n        <tr style=\"background-color: #f5f8fa; border-bottom: 1px solid #e9e9e9;\">\n            <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Assignee:</td>\n            <td style=\"padding: 10px 15px;\">").concat(assigneeEmail, "</td>\n        </tr>\n        <tr style=\"border-bottom: 1px solid #e9e9e9;\">\n            <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Assigned:</td>\n            <td style=\"padding: 10px 15px;\">").concat(assignedEmail, "</td>\n        </tr>\n        <tr style=\"background-color: #f5f8fa; border-bottom: 1px solid #e9e9e9;\">\n            <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">Priority:</td>\n            <td style=\"padding: 10px 15px;\">").concat(priority, "</td>\n        </tr>\n        <tr style=\"border-bottom: 1px solid #e9e9e9\">\n            <td style=\"padding: 10px 0; text-align: right; font-weight: bold; color: #7f8c8d;\">End Date:</td>\n            <td style=\"padding: 10px 15px;\">").concat(endDate, "</td>\n        </tr>\n    </table>\n\n    <div\n        style=\"margin-top: 30px; padding: 15px; background-color: #04538E; color: #ffffff; text-align: center; border-radius: 4px;\">\n        You will be able to communicate between the team members by replying to this email\n    </div>\n</div>\n          ")
          };
          _context23.prev = 10;
          _context23.next = 13;
          return transporter.sendMail(mailOptions);
        case 13:
          // Assuming you have a configured transporter
          res.status(200).send({
            message: "Emails sent!",
            recipients: recipients
          });
          _context23.next = 19;
          break;
        case 16:
          _context23.prev = 16;
          _context23.t0 = _context23["catch"](10);
          res.status(404).send({
            message: "Email not found!"
          });
        case 19:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[10, 16]]);
  }));
  return function (_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}()));
router.put("/commentEmail", (0, _expressAsyncHandler["default"])( /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var ticketId, comment, author, authorPhoto, newComment, ticket;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          ticketId = req.body.ticketId;
          comment = req.body.reply;
          author = req.body.author;
          authorPhoto = req.body.emailPhoto;
          newComment = {
            author: author,
            content: comment,
            createdAt: new Date(),
            type: "Comment",
            attachment: undefined,
            authorPhoto: authorPhoto
          };
          _context24.prev = 5;
          _context24.next = 8;
          return _ticket.TicketModel.findOneAndUpdate({
            id: ticketId
          }, {
            $push: {
              comments: newComment
            }
          }, {
            "new": true
          });
        case 8:
          ticket = _context24.sent;
          if (ticket) {
            res.status(200).json({
              message: "Comment added successfully"
            });
          } else {
            res.status(404).json({
              message: "Ticket not found"
            });
          }
          _context24.next = 15;
          break;
        case 12:
          _context24.prev = 12;
          _context24.t0 = _context24["catch"](5);
          res.status(500).json({
            message: "Internal server error"
          });
        case 15:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[5, 12]]);
  }));
  return function (_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}()));
var _default = router;
exports["default"] = _default;