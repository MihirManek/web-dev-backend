import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    topic: {
      type: "String",
    },
    postedBy: {
      username: {
        type: "String",
      },
    },
    liked: {
      type: "Boolean",
    },
    verified: {
      type: "Boolean",
    },
    handle: {
      type: "String",
    },
    title: {
      type: "String",
    },
    tuit: {
      type: "String",
    },
    time: {
      type: "String",
    },
    logoImage: {
      type: "String",
    },
    avatarImage: {
      type: "String",
    },
    tuits: {
      type: "String",
    },
    stats: {
      comments: {
        type: "Number",
      },
      retuits: {
        type: "Number",
      },
      likes: {
        type: "Number",
      },
      dislikes: {
        type: "Number",
      },
    },
  },
  { collection: "tuits" }
);
export default schema;
