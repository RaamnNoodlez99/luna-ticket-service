"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ticketSchema = exports.TicketModel = void 0;
var _mongoose = require("mongoose");
// const ticketDb = dbConnection(); <- this breaks it

// export interface WorklogResponse {
//     summary: string[];
//     worklogs: worklog[];
// }
var attachmentSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }
});
var commentSchema = new _mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  authorPhoto: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  attachment: {
    type: attachmentSchema
  }
}, {
  _id: false
});
var historySchema = new _mongoose.Schema({
  personWhoChangedAssigned: {
    type: String,
    required: true
  },
  personWhoChangedPhoto: {
    type: String,
    required: true
  },
  prevAssignedName: {
    type: String,
    required: true
  },
  prevAssignedPhoto: {
    type: String,
    required: true
  },
  newAssignedName: {
    type: String,
    required: true
  },
  newAssignedPhoto: {
    type: String,
    required: true
  }
}, {
  _id: false
});
var worklogSchema = new _mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  authorPhoto: {
    type: String,
    required: true
  },
  timeSpent: {
    type: String,
    required: true
  },
  timeRemaining: {
    type: String,
    required: true
  },
  dateStarted: {
    type: Date,
    required: true
  },
  timeStarted: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
var ticketSchema = new _mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  assignee: {
    type: String,
    required: true
  },
  assigned: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  comments: {
    type: [commentSchema]
  },
  history: {
    type: [historySchema]
  },
  workLogs: [worklogSchema],
  description: {
    type: String,
    required: true
  },
  timeToFirstResponse: {
    type: Date
  },
  timeToTicketResolution: {
    type: Date
  },
  project: {
    type: String,
    required: true
  },
  todo: {
    type: [String]
  },
  todoChecked: {
    type: [Boolean]
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  },
  timestamps: true
});
exports.ticketSchema = ticketSchema;
var ticketDb = _mongoose.connection.useDb("TicketDB");
var TicketModel = ticketDb.model("ticket", ticketSchema);
exports.TicketModel = TicketModel;