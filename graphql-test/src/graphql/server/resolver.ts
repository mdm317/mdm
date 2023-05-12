const listData = new Array(30).fill(1).map((_, i) => ({
  id: i,
  title: "title" + i,
  color: "#" + Math.floor(Math.random() * 0xffffff).toString(16),
}));

export const resolvers = {
  Query: {
    hello: () => "world",
    boxList(parent: any, args: any, contextValue: any, info: any) {
      if (args.nxt === null) {
        return {
          nxt: null,
          data: [],
        };
      }
      const cursor = args.nxt ? args.nxt * 10 : 0;
      return {
        nxt: args.nxt ? (args.nxt === 2 ? null : args.nxt + 1) : 1,
        data: listData.slice(cursor, cursor + 10),
      };
    },
  },
  Mutation: {
    changeBoxTitle(parent: any, args: any, contextValue: any, info: any) {
      listData[args.id].title += "1";
      return listData[args.id];
    },
    changeBoxTitleStrangeOutput(
      parent: any,
      args: any,
      contextValue: any,
      info: any
    ) {
      listData[args.id].title += "1";
      return listData[args.id].title;
    },
  },
};
